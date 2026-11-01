import { z } from 'zod'

// Server-side Zod validation schema
const serverSchema = z.object({
  renovationType: z.enum([
    'kitchen-remodeling',
    'bathroom-renovation',
    'complete-home-renovation',
    'flooring-interior',
    'interior-transformation',
    'other',
  ]),
  zipCode: z.string().regex(/^\d{5}$/),
  budget: z.enum([
    'under-5k',
    '5k-10k',
    '10k-25k',
    '25k-50k',
    '50k-100k',
    '100k-plus',
    'not-sure',
  ]),
  timeline: z.enum([
    'immediately',
    '1-3-months',
    '3-6-months',
    'more-than-6-months',
    'just-exploring',
  ]),
  description: z.string().max(500).optional(),
  fullName: z.string().min(2).max(80),
  email: z.string().email(),
  phone: z.string().min(7).max(25),
  communicationConsent: z.literal(true),
  websiteUrl: z.string().max(0).optional(),
})

// Helper to escape HTML characters in untrusted user strings
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

/**
 * Vercel Serverless / Node.js API Handler for /api/contact
 */
export default async function handler(req: any, res: any) {
  // Enforce POST method only
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({
      error: 'Method Not Allowed',
      message: 'Only POST requests are accepted.',
    })
  }

  try {
    let body = req.body
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body)
      } catch {
        return res.status(400).json({ error: 'Invalid JSON payload' })
      }
    }

    // Validate body with server-side Zod schema
    const parseResult = serverSchema.safeParse(body)
    if (!parseResult.success) {
      return res.status(422).json({
        error: 'Validation Error',
        details: parseResult.error.flatten().fieldErrors,
      })
    }

    const validData = parseResult.data

    // Anti-bot honeypot check
    if (validData.websiteUrl && validData.websiteUrl.length > 0) {
      return res.status(400).json({ error: 'Spam detected' })
    }

    const apiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CONTACT_TO_EMAIL
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev'

    // If no Resend API credentials are provided, return verified simulation mode
    if (!apiKey || !toEmail) {
      return res.status(200).json({
        success: true,
        mode: 'simulation',
        message:
          'Consultation inquiry validated safely. (Demo mode: configure RESEND_API_KEY to send real emails).',
      })
    }

    // Deliver via Resend if credentials are present
    const emailHtml = `
      <h2>New Renovation Consultation Request</h2>
      <p><strong>Name:</strong> ${escapeHtml(validData.fullName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(validData.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(validData.phone)}</p>
      <p><strong>Project Type:</strong> ${escapeHtml(validData.renovationType)}</p>
      <p><strong>ZIP Code:</strong> ${escapeHtml(validData.zipCode)}</p>
      <p><strong>Budget Tier:</strong> ${escapeHtml(validData.budget)}</p>
      <p><strong>Timeline:</strong> ${escapeHtml(validData.timeline)}</p>
      <p><strong>Description:</strong></p>
      <p>${escapeHtml(validData.description || 'None provided')}</p>
    `

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject: `[Hearth & Haven] New Inquiry from ${validData.fullName}`,
        html: emailHtml,
      }),
    })

    if (!resendRes.ok) {
      const errText = await resendRes.text()
      console.error('Resend delivery failed:', errText)
      return res.status(502).json({
        error: 'Email Delivery Failure',
        message: 'Could not deliver notification email.',
      })
    }

    return res.status(200).json({
      success: true,
      mode: 'production',
      message: 'Consultation request delivered successfully.',
    })
  } catch (err: any) {
    console.error('Contact endpoint error:', err)
    return res.status(500).json({
      error: 'Internal Server Error',
      message: 'An unexpected error occurred while processing your request.',
    })
  }
}

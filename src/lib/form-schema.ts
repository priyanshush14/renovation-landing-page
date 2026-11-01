import { z } from 'zod'

// Greater Austin ZIP code format (5 digits)
const zipRegex = /^\d{5}$/
// US Phone format validation (lenient to accept formats like (512) 555-0148 or 512-555-0148)
const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/

export const step1Schema = z.object({
  renovationType: z.enum(
    [
      'kitchen-remodeling',
      'bathroom-renovation',
      'complete-home-renovation',
      'flooring-interior',
      'interior-transformation',
      'other',
    ],
    { message: 'Please select a renovation project type.' }
  ),
  zipCode: z
    .string()
    .min(1, 'Please enter your property ZIP code.')
    .regex(zipRegex, 'Please enter a valid 5-digit ZIP code (e.g. 78701).'),
  budget: z.enum(
    [
      'under-5k',
      '5k-10k',
      '10k-25k',
      '25k-50k',
      '50k-100k',
      '100k-plus',
      'not-sure',
    ],
    { message: 'Please select an approximate planning budget.' }
  ),
  timeline: z.enum(
    [
      'immediately',
      '1-3-months',
      '3-6-months',
      'more-than-6-months',
      'just-exploring',
    ],
    { message: 'Please select your target timeline.' }
  ),
  description: z
    .string()
    .max(500, 'Project description must be under 500 characters.')
    .optional(),
})

export const step2Schema = z.object({
  fullName: z
    .string()
    .min(2, 'Please enter your full name (at least 2 characters).')
    .max(80, 'Full name cannot exceed 80 characters.'),
  email: z
    .string()
    .min(1, 'Please enter your email address.')
    .email('Please enter a valid email address (e.g. name@domain.com).'),
  phone: z
    .string()
    .min(1, 'Please enter your phone number.')
    .regex(phoneRegex, 'Please enter a valid phone number (e.g. 512-555-0148).'),
  communicationConsent: z
    .boolean()
    .refine((val) => val === true, {
      message: 'Please acknowledge consent to receive a consultation response.',
    }),
  websiteUrl: z.string().max(0, 'Spam detected.').optional(),
})

export const fullConsultationSchema = step1Schema.merge(step2Schema)

export type Step1FormData = z.infer<typeof step1Schema>
export type Step2FormData = z.infer<typeof step2Schema>
export type FullFormData = z.infer<typeof fullConsultationSchema>

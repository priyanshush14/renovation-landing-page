/**
 * Privacy-conscious analytics tracker for Hearth & Haven
 * Strictly avoids transmitting PII (names, emails, phone numbers, freeform text).
 */

export type AnalyticsEventType =
  | 'primary_cta_click'
  | 'secondary_cta_click'
  | 'phone_click'
  | 'email_click'
  | 'form_started'
  | 'form_step_completed'
  | 'form_validation_error'
  | 'form_submitted'
  | 'form_submission_failed'
  | 'project_gallery_opened'
  | 'service_anchor_clicked'
  | 'sidebar_nav_click'
  | 'portfolio_card_clicked'
  | 'portfolio_filter_changed'

interface EventPayload {
  location?: string
  target?: string
  step?: number
  service?: string
  projectId?: string
  label?: string
  filter?: string
  slug?: string
  imageIndex?: number
}

export function trackEvent(name: AnalyticsEventType, payload?: EventPayload): void {
  // Safe console log in development environment
  if (import.meta.env.DEV) {
    console.debug(`[Analytics] ${name}`, payload || {})
  }

  // If a provider like GA4, Plausible, or Vercel Analytics is mounted in window
  if (typeof window !== 'undefined') {
    const win = window as unknown as {
      plausible?: (event: string, options?: { props: Record<string, unknown> }) => void
      gtag?: (command: string, action: string, params: Record<string, unknown>) => void
    }

    if (typeof win.plausible === 'function') {
      win.plausible(name, { props: (payload as Record<string, unknown>) || {} })
    } else if (typeof win.gtag === 'function') {
      win.gtag('event', name, (payload as Record<string, unknown>) || {})
    }
  }
}

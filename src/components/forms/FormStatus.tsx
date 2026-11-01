import { CheckCircle2, AlertCircle, Phone, Mail, RotateCcw } from 'lucide-react'

interface FormStatusProps {
  status: 'success' | 'error'
  errorMessage?: string
  isDemoMode?: boolean
  onReset?: () => void
}

export function FormStatus({
  status,
  errorMessage,
  isDemoMode = false,
  onReset,
}: FormStatusProps) {
  if (status === 'success') {
    return (
      <div
        role="alert"
        aria-live="polite"
        className="p-8 sm:p-10 bg-ivory border border-success/40 rounded-xs text-center flex flex-col items-center animate-fade-in"
      >
        <div className="w-14 h-14 rounded-full bg-success/15 border border-success/30 flex items-center justify-center text-success mb-5">
          <CheckCircle2 size={30} strokeWidth={1.75} />
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl text-ink">
          Consultation Request Received
        </h3>

        <p className="mt-3 font-sans text-sm sm:text-base text-muted font-light max-w-lg leading-relaxed">
          Thank you for sharing your project goals with Hearth &amp; Haven. A dedicated
          renovation coordinator will review your property details and reach out within
          one business day.
        </p>

        {isDemoMode && (
          <div className="mt-4 px-3.5 py-1.5 bg-stone/20 border border-stone/40 text-[11px] font-mono text-muted rounded-xs">
            Simulation Note: Form processed safely in portfolio demo mode.
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-stone/30 w-full max-w-md text-left font-sans text-xs text-muted space-y-2">
          <span className="font-semibold text-ink uppercase tracking-wider text-[10px] block">
            What Happens Next:
          </span>
          <p>
            1. We review your Austin ZIP code and project scope against current trade schedules.
          </p>
          <p>
            2. We schedule a convenient 30-minute discovery call to align on vision and initial feasibility.
          </p>
          <p>
            3. If our collaboration fits, we book your comprehensive on-site property walkthrough.
          </p>
        </div>

        {onReset && (
          <button
            type="button"
            onClick={onReset}
            className="mt-8 inline-flex items-center gap-1.5 text-xs font-sans font-medium text-ink hover:text-olive-dark underline underline-offset-4 focus-ring cursor-pointer"
          >
            <RotateCcw size={13} />
            <span>Submit another inquiry</span>
          </button>
        )}
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div
        role="alert"
        aria-live="assertive"
        className="p-4 sm:p-5 bg-error/10 border border-error/30 rounded-xs text-left flex items-start gap-3.5 text-xs font-sans text-ink mb-6"
      >
        <AlertCircle size={18} className="text-error flex-shrink-0 mt-0.5" />
        <div className="flex-1 space-y-1">
          <p className="font-semibold text-error">
            {errorMessage || 'Unable to submit your request at this time.'}
          </p>
          <p className="text-muted leading-relaxed">
            Your entered details have been preserved. You can try submitting again, or
            reach out directly to our Austin studio team:
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-4 text-ink font-medium">
            <span className="inline-flex items-center gap-1.5">
              <Phone size={13} className="text-olive" />
              +1 (512) 555-0148 (Demo)
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Mail size={13} className="text-olive" />
              hello@hearthandhaven.example
            </span>
          </div>
        </div>
      </div>
    )
  }

  return null
}

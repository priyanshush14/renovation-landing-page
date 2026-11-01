import type { UseFormRegister, FieldErrors } from 'react-hook-form'
import type { FullFormData } from '../../lib/form-schema'

interface ContactDetailsStepProps {
  register: UseFormRegister<FullFormData>
  errors: FieldErrors<FullFormData>
}

export function ContactDetailsStep({ register, errors }: ContactDetailsStepProps) {
  return (
    <div className="space-y-6">
      {/* Invisible Honeypot Field for Bot Mitigation */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="websiteUrl">Leave this field empty</label>
        <input
          id="websiteUrl"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register('websiteUrl')}
        />
      </div>

      {/* Full Name */}
      <div>
        <label
          htmlFor="fullName"
          className="block font-sans text-xs font-semibold uppercase tracking-wider text-ink mb-2"
        >
          Full Name <span className="text-olive">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          autoComplete="name"
          placeholder="e.g. Eleanor Vance"
          {...register('fullName')}
          aria-invalid={!!errors.fullName}
          aria-describedby={errors.fullName ? 'fullName-error' : undefined}
          className="w-full bg-paper border border-stone/70 rounded-xs px-3.5 py-3 text-sm text-ink focus-ring font-sans"
        />
        {errors.fullName && (
          <p id="fullName-error" className="mt-1.5 text-xs text-error font-sans">
            {errors.fullName.message}
          </p>
        )}
      </div>

      {/* Email Address */}
      <div>
        <label
          htmlFor="email"
          className="block font-sans text-xs font-semibold uppercase tracking-wider text-ink mb-2"
        >
          Email Address <span className="text-olive">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="e.g. eleanor@example.com"
          {...register('email')}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className="w-full bg-paper border border-stone/70 rounded-xs px-3.5 py-3 text-sm text-ink focus-ring font-sans"
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 text-xs text-error font-sans">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone Number */}
      <div>
        <label
          htmlFor="phone"
          className="block font-sans text-xs font-semibold uppercase tracking-wider text-ink mb-2"
        >
          Phone Number <span className="text-olive">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          placeholder="e.g. (512) 555-0148"
          {...register('phone')}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
          className="w-full bg-paper border border-stone/70 rounded-xs px-3.5 py-3 text-sm text-ink focus-ring font-sans"
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1.5 text-xs text-error font-sans">
            {errors.phone.message}
          </p>
        )}
        <span className="block mt-1 text-[11px] text-muted font-sans">
          Used solely to coordinate consultation timing and questions.
        </span>
      </div>

      {/* Consent Checkbox */}
      <div className="pt-2">
        <label className="flex items-start gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            id="communicationConsent"
            {...register('communicationConsent')}
            className="mt-1 w-4 h-4 rounded-xs border-stone/80 text-olive focus-ring cursor-pointer"
          />
          <span className="font-sans text-xs text-muted leading-relaxed">
            I consent to Hearth &amp; Haven Renovations contacting me via email or phone
            regarding this renovation inquiry. (We never share your information or send
            unsolicited spam.) <span className="text-olive">*</span>
          </span>
        </label>
        {errors.communicationConsent && (
          <p className="mt-1.5 text-xs text-error font-sans">
            {errors.communicationConsent.message}
          </p>
        )}
      </div>
    </div>
  )
}

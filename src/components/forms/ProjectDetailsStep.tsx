import type { UseFormRegister, FieldErrors } from 'react-hook-form'
import type { FullFormData } from '../../lib/form-schema'

interface ProjectDetailsStepProps {
  register: UseFormRegister<FullFormData>
  errors: FieldErrors<FullFormData>
}

const RENOVATION_TYPES = [
  { value: 'kitchen-remodeling', label: 'Kitchen Remodeling' },
  { value: 'bathroom-renovation', label: 'Bathroom Renovation' },
  { value: 'complete-home-renovation', label: 'Complete Home Renovation' },
  { value: 'flooring-interior', label: 'Flooring & Interior Upgrades' },
  { value: 'interior-transformation', label: 'Interior Space Transformation' },
  { value: 'other', label: 'Other Renovation Scope' },
]

const BUDGET_OPTIONS = [
  { value: 'under-5k', label: 'Under $5,000' },
  { value: '5k-10k', label: '$5,000 – $10,000' },
  { value: '10k-25k', label: '$10,000 – $25,000' },
  { value: '25k-50k', label: '$25,000 – $50,000' },
  { value: '50k-100k', label: '$50,000 – $100,000' },
  { value: '100k-plus', label: '$100,000+' },
  { value: 'not-sure', label: 'Not sure yet / Seeking advice' },
]

const TIMELINE_OPTIONS = [
  { value: 'immediately', label: 'Immediately / ASAP' },
  { value: '1-3-months', label: 'Within 1–3 months' },
  { value: '3-6-months', label: 'Within 3–6 months' },
  { value: 'more-than-6-months', label: 'More than 6 months' },
  { value: 'just-exploring', label: 'Just exploring possibilities' },
]

export function ProjectDetailsStep({ register, errors }: ProjectDetailsStepProps) {
  return (
    <div className="space-y-6">
      {/* Renovation Type Selection */}
      <div>
        <label
          htmlFor="renovationType"
          className="block font-sans text-xs font-semibold uppercase tracking-wider text-ink mb-2"
        >
          1. Renovation Type <span className="text-olive">*</span>
        </label>
        <select
          id="renovationType"
          {...register('renovationType')}
          aria-invalid={!!errors.renovationType}
          aria-describedby={errors.renovationType ? 'renovationType-error' : undefined}
          className="w-full bg-paper border border-stone/70 rounded-xs px-3.5 py-3 text-sm text-ink focus-ring font-sans"
        >
          <option value="">Select project focus...</option>
          {RENOVATION_TYPES.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
        {errors.renovationType && (
          <p id="renovationType-error" className="mt-1.5 text-xs text-error font-sans">
            {errors.renovationType.message}
          </p>
        )}
      </div>

      {/* Property ZIP Code */}
      <div>
        <label
          htmlFor="zipCode"
          className="block font-sans text-xs font-semibold uppercase tracking-wider text-ink mb-2"
        >
          2. Property ZIP Code (Austin Area) <span className="text-olive">*</span>
        </label>
        <input
          id="zipCode"
          type="text"
          inputMode="numeric"
          autoComplete="postal-code"
          placeholder="e.g. 78701, 78704, 78746..."
          maxLength={5}
          {...register('zipCode')}
          aria-invalid={!!errors.zipCode}
          aria-describedby={errors.zipCode ? 'zipCode-error' : undefined}
          className="w-full bg-paper border border-stone/70 rounded-xs px-3.5 py-3 text-sm text-ink focus-ring font-sans"
        />
        {errors.zipCode && (
          <p id="zipCode-error" className="mt-1.5 text-xs text-error font-sans">
            {errors.zipCode.message}
          </p>
        )}
        <span className="block mt-1 text-[11px] text-muted font-sans">
          Helps us verify proximity to our Austin craftsman teams.
        </span>
      </div>

      {/* Approximate Budget */}
      <div>
        <label
          htmlFor="budget"
          className="block font-sans text-xs font-semibold uppercase tracking-wider text-ink mb-2"
        >
          3. Approximate Planning Budget <span className="text-olive">*</span>
        </label>
        <select
          id="budget"
          {...register('budget')}
          aria-invalid={!!errors.budget}
          aria-describedby={errors.budget ? 'budget-error' : undefined}
          className="w-full bg-paper border border-stone/70 rounded-xs px-3.5 py-3 text-sm text-ink focus-ring font-sans"
        >
          <option value="">Select estimated budget tier...</option>
          {BUDGET_OPTIONS.map((b) => (
            <option key={b.value} value={b.value}>
              {b.label}
            </option>
          ))}
        </select>
        {errors.budget && (
          <p id="budget-error" className="mt-1.5 text-xs text-error font-sans">
            {errors.budget.message}
          </p>
        )}
      </div>

      {/* Target Timeline */}
      <div>
        <label
          htmlFor="timeline"
          className="block font-sans text-xs font-semibold uppercase tracking-wider text-ink mb-2"
        >
          4. Desired Project Start <span className="text-olive">*</span>
        </label>
        <select
          id="timeline"
          {...register('timeline')}
          aria-invalid={!!errors.timeline}
          aria-describedby={errors.timeline ? 'timeline-error' : undefined}
          className="w-full bg-paper border border-stone/70 rounded-xs px-3.5 py-3 text-sm text-ink focus-ring font-sans"
        >
          <option value="">When would you like to start?</option>
          {TIMELINE_OPTIONS.map((tl) => (
            <option key={tl.value} value={tl.value}>
              {tl.label}
            </option>
          ))}
        </select>
        {errors.timeline && (
          <p id="timeline-error" className="mt-1.5 text-xs text-error font-sans">
            {errors.timeline.message}
          </p>
        )}
      </div>

      {/* Optional Short Description */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label
            htmlFor="description"
            className="block font-sans text-xs font-semibold uppercase tracking-wider text-ink"
          >
            5. Project Overview (Optional)
          </label>
          <span className="text-[11px] text-muted font-sans">Up to 500 characters</span>
        </div>
        <textarea
          id="description"
          rows={3}
          maxLength={500}
          placeholder="Tell us briefly about your current space, architectural pain points, or key inspirations..."
          {...register('description')}
          aria-invalid={!!errors.description}
          aria-describedby={errors.description ? 'description-error' : undefined}
          className="w-full bg-paper border border-stone/70 rounded-xs px-3.5 py-3 text-sm text-ink focus-ring font-sans resize-none"
        />
        {errors.description && (
          <p id="description-error" className="mt-1.5 text-xs text-error font-sans">
            {errors.description.message}
          </p>
        )}
      </div>
    </div>
  )
}

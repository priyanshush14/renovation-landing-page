import { Star, CheckCircle } from 'lucide-react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../motion/Reveal'
import { Button } from '../ui/Button'
import { TESTIMONIALS_DATA } from '../../data/testimonials'
import { trackEvent } from '../../lib/analytics'

// Official Google G Icon component
function GoogleGIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  )
}

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          size={15}
          className="fill-amber-500 text-amber-500"
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  const [featured, ...supporting] = TESTIMONIALS_DATA

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-20 sm:py-28 lg:py-32 bg-paper border-t border-stone/50"
    >
      <Container>
        {/* Section Header */}
        <Reveal delay={0.05}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
            <div>
              <SectionHeading
                id="testimonials-heading"
                eyebrow="Homeowner Experiences"
                title="Trusted by Austin homeowners."
                description="Read verified client feedback from homeowners across Greater Austin who trusted Hearth & Haven to reimagine their most personal spaces."
              />
            </div>

            {/* Google Reviews Trust Strip */}
            <div className="flex items-center gap-3.5 p-3.5 px-4 rounded-xs bg-ivory border border-stone/60 shadow-xs flex-shrink-0">
              <GoogleGIcon className="w-6 h-6 flex-shrink-0" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-sans text-xs font-bold text-ink">5.0 Rating</span>
                  <StarRating count={5} />
                </div>
                <div className="flex items-center gap-1 text-[11px] font-sans text-muted">
                  <CheckCircle size={11} className="text-emerald-600" />
                  <span>28 Verified Google Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Featured Review */}
        {featured && (
          <Reveal delay={0.12} yOffset={20}>
            <div className="mt-10 sm:mt-12 p-8 sm:p-12 lg:p-14 bg-ivory border border-stone/60 rounded-xs shadow-xs relative">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-stone/40">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-olive/15 text-olive-dark font-sans font-bold flex items-center justify-center text-sm">
                    {featured.reviewerInitials || 'HH'}
                  </div>
                  <div>
                    <h4 className="font-serif text-lg sm:text-xl text-ink font-semibold">
                      {featured.reviewerName}
                    </h4>
                    <span className="text-xs font-sans text-muted">
                      {featured.location} · {featured.projectType}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <StarRating count={featured.rating} />
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/70 text-[11px] font-sans font-medium">
                    <CheckCircle size={12} className="text-emerald-600" />
                    <span>Verified Google Review</span>
                  </span>
                </div>
              </div>

              {featured.headline && (
                <h5 className="font-serif text-xl sm:text-2xl text-ink font-medium mb-3">
                  &ldquo;{featured.headline}&rdquo;
                </h5>
              )}

              <blockquote className="font-sans text-sm sm:text-base lg:text-lg text-ink/85 font-light leading-relaxed">
                {featured.quote}
              </blockquote>

              <div className="mt-6 pt-4 text-[11px] font-sans text-muted flex items-center justify-between">
                <span>Completed project · Austin, Texas</span>
                <span>Reviewed {featured.reviewDate}</span>
              </div>
            </div>
          </Reveal>
        )}

        {/* Supporting Verified Reviews Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {supporting.map((item, idx) => (
            <Reveal key={item.id} delay={0.15 + idx * 0.08} yOffset={16}>
              <div className="p-6 sm:p-8 bg-ivory border border-stone/50 rounded-xs h-full flex flex-col justify-between shadow-xs">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <StarRating count={item.rating} />
                    <span className="inline-flex items-center gap-1 text-[10px] font-sans font-medium text-emerald-800 bg-emerald-50/80 px-2 py-0.5 rounded-full border border-emerald-200/60">
                      <CheckCircle size={10} className="text-emerald-600" />
                      <span>Verified Google Review</span>
                    </span>
                  </div>

                  {item.headline && (
                    <h5 className="font-serif text-lg text-ink font-medium mb-2 leading-snug">
                      &ldquo;{item.headline}&rdquo;
                    </h5>
                  )}

                  <p className="font-sans text-xs sm:text-sm text-ink/80 font-light leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone/30 flex items-center justify-between">
                  <div>
                    <span className="font-sans text-xs font-semibold text-ink block">
                      {item.reviewerName}
                    </span>
                    <span className="text-[11px] font-sans text-muted block">
                      {item.location}
                    </span>
                  </div>
                  <span className="text-[10px] font-sans text-muted/80">
                    {item.reviewDate}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Callout & Action */}
        <Reveal delay={0.25}>
          <div className="mt-14 sm:mt-16 p-8 bg-paper border border-stone/60 rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-olive font-semibold font-sans">
                Experience the Difference
              </span>
              <h4 className="font-serif text-2xl text-ink mt-1">
                Begin your renovation with clear expectations.
              </h4>
              <p className="font-sans text-xs sm:text-sm text-muted font-light mt-1">
                Schedule a consultation to discuss your vision, timeline, and material direction.
              </p>
            </div>
            <Button
              href="#contact"
              variant="primary"
              size="sm"
              showArrow
              onClick={() =>
                trackEvent('primary_cta_click', { location: 'testimonials_cta' })
              }
            >
              Request a Consultation
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

import { CheckCircle2 } from 'lucide-react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { Reveal } from '../motion/Reveal'
import { PROCESS_DATA } from '../../data/process'
import { trackEvent } from '../../lib/analytics'

export function Process() {
  return (
    <section id="process" className="py-20 sm:py-28 lg:py-32 bg-ivory border-t border-stone/50">
      <Container>
        <Reveal delay={0.05}>
          <SectionHeading
            eyebrow="Our Renovation Journey"
            title="A five-step roadmap built for predictability."
            description="From our first discussion to the day we hand over your keys, here is exactly how our studio guides and manages your renovation."
          />
        </Reveal>

        {/* Process Timeline Steps */}
        <div className="mt-14 sm:mt-18 space-y-8 sm:space-y-10">
          {PROCESS_DATA.map((stage, idx) => (
            <Reveal key={stage.step} delay={0.1 + idx * 0.06} yOffset={18}>
              <div className="relative p-6 sm:p-8 lg:p-10 bg-paper border border-stone/50 rounded-xs transition-all duration-300 hover:border-stone">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                  {/* Step Num & Title */}
                  <div className="lg:col-span-4 flex items-start gap-4">
                    <span className="font-serif text-3xl sm:text-4xl lg:text-5xl text-olive font-light tracking-tight">
                      {stage.step}
                    </span>
                    <div className="pt-1">
                      <span className="inline-block text-[11px] font-sans uppercase tracking-wider text-muted font-medium mb-1">
                        Phase {stage.step} · {stage.durationEstimate}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl text-ink">
                        {stage.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description & Deliverables */}
                  <div className="lg:col-span-8 flex flex-col justify-between">
                    <p className="font-sans text-sm sm:text-base text-muted font-light leading-relaxed">
                      {stage.description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-stone/30">
                      <span className="text-[11px] font-sans uppercase tracking-wider text-ink font-semibold block mb-2">
                        Key Milestones &amp; Deliverables:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-ink/80">
                        {stage.deliverables.map((deliv) => (
                          <li key={deliv} className="flex items-center gap-2">
                            <CheckCircle2 size={13} className="text-olive flex-shrink-0" />
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Post-Process Call to Action */}
        <Reveal delay={0.25}>
          <div className="mt-14 text-center flex flex-col items-center">
            <p className="font-serif text-xl sm:text-2xl text-ink">
              Ready to begin Step 01 with our team?
            </p>
            <p className="font-sans text-sm text-muted mt-2 max-w-md font-light">
              We begin with a focused conversation to discuss your goals and answer your initial questions.
            </p>
            <div className="mt-6">
              <Button
                href="#contact"
                variant="primary"
                size="lg"
                showArrow
                onClick={() =>
                  trackEvent('primary_cta_click', { location: 'process_footer_cta' })
                }
              >
                Request a Free Consultation
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

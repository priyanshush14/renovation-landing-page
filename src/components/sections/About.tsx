import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { Reveal } from '../motion/Reveal'
import { trackEvent } from '../../lib/analytics'

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 lg:py-32 bg-ivory">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with architectural border */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Reveal delay={0.1} yOffset={24}>
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden rounded-xs bg-stone/20 border border-stone/50 shadow-xs">
                  <img
                    src="/images/about-detail.jpg"
                    alt="Close detail of handcrafted interior finishes, natural wood cabinetry and textured plaster"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                    loading="lazy"
                    width={700}
                    height={875}
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 sm:-bottom-6 sm:-right-6 bg-paper border border-stone/60 p-4 sm:p-5 max-w-[220px] rounded-xs shadow-xs hidden sm:block">
                  <p className="font-serif text-sm text-ink italic leading-snug">
                    &ldquo;Renovation should feel transparent, disciplined, and deeply rewarding.&rdquo;
                  </p>
                  <span className="block mt-2 font-sans text-[10px] uppercase tracking-wider text-muted font-medium">
                    Austin, Texas · Est. 2018
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            <Reveal delay={0.15}>
              <SectionHeading
                eyebrow="Our Perspective"
                title="A more considered way to renovate."
                description="We founded Hearth & Haven around a straightforward belief: transforming your home should never feel like an unpredictable gamble."
              />
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-6 space-y-4 font-sans text-sm sm:text-base text-ink/80 leading-relaxed font-light">
                <p>
                  Too often, residential remodeling is accompanied by ambiguous quotes,
                  unreturned calls, and fragmented sub-trades. We set out to build an
                  Austin studio that joins architectural sensitivity with rigorous project
                  discipline.
                </p>
                <p>
                  From your first consultation to the final milestone walkthrough, you work
                  with a dedicated project manager who safeguards your timeline, coordinates
                  proven craftsmen, and maintains open, candid communication throughout.
                </p>
                <p>
                  We are not the cheapest contractor in town, nor do we claim to be. We are
                  a trusted residential partner for homeowners who value timeless design,
                  dependable coordination, and enduring craftsmanship.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
                <Button
                  href="#process"
                  variant="secondary"
                  showArrow
                  onClick={() =>
                    trackEvent('secondary_cta_click', { location: 'about_process' })
                  }
                >
                  Explore Our Process
                </Button>
                <Button
                  href="#contact"
                  variant="text"
                  onClick={() =>
                    trackEvent('primary_cta_click', { location: 'about_contact' })
                  }
                >
                  Schedule an initial conversation
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}

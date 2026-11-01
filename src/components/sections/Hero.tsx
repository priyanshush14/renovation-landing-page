import { Container } from '../ui/Container'
import { Eyebrow } from '../ui/Eyebrow'
import { Button } from '../ui/Button'
import { Reveal } from '../motion/Reveal'
import { trackEvent } from '../../lib/analytics'

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 sm:pt-40 lg:pt-44 pb-16 sm:pb-20 lg:pb-28 overflow-hidden bg-ivory"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            <Reveal delay={0.05} yOffset={12}>
              <div className="flex items-center gap-2 mb-4 sm:mb-5">
                <span className="w-6 h-[1.5px] bg-olive inline-block" />
                <Eyebrow>Austin, Texas · Residential Renovation</Eyebrow>
              </div>
            </Reveal>

            <Reveal delay={0.12} yOffset={16}>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-[4.25rem] text-ink leading-[1.05] tracking-tight text-balance">
                A better home begins with a better renovation experience.
              </h1>
            </Reveal>

            <Reveal delay={0.2} yOffset={16}>
              <p className="mt-5 sm:mt-6 font-sans text-base sm:text-lg md:text-xl text-muted font-light leading-relaxed max-w-xl text-pretty">
                Thoughtful design. Skilled craftsmanship. A renovation process built
                around your home and your priorities.
              </p>
            </Reveal>

            <Reveal delay={0.28} yOffset={14}>
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Button
                  href="#contact"
                  variant="primary"
                  size="lg"
                  showArrow
                  onClick={() =>
                    trackEvent('primary_cta_click', { location: 'hero_primary' })
                  }
                >
                  Request a Free Consultation
                </Button>

                <Button
                  href="#projects"
                  variant="secondary"
                  size="lg"
                  onClick={() =>
                    trackEvent('secondary_cta_click', { location: 'hero_secondary' })
                  }
                >
                  Explore Our Work
                </Button>
              </div>
            </Reveal>

            {/* Subtle location trust indicator */}
            <Reveal delay={0.34} yOffset={10}>
              <div className="mt-10 pt-6 border-t border-stone/50 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted font-sans">
                <span className="flex items-center gap-1.5 font-medium text-ink">
                  <span className="w-1.5 h-1.5 rounded-full bg-olive inline-block" />
                  Austin &amp; Surrounding Communities
                </span>
                <span>•</span>
                <span>Kitchens, Bathrooms &amp; Whole-Home</span>
                <span>•</span>
                <span>Dedicated Project Management</span>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Architectural Photography */}
          <div className="lg:col-span-5 relative">
            <Reveal delay={0.18} duration={0.85} yOffset={20}>
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Architectural frame with soft paper backdrop */}
                <div className="absolute -inset-2.5 sm:-inset-4 bg-stone/30 rounded-xs -rotate-1 hidden sm:block" />
                
                <div className="relative aspect-[4/5] sm:aspect-[4/4.8] lg:aspect-[4/5.2] overflow-hidden rounded-xs bg-stone/20 shadow-sm border border-stone/40">
                  <img
                    src="/images/hero-architectural.jpg"
                    alt="Warm modern residential kitchen featuring natural oak cabinetry, limestone countertops, and gentle daylight"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                    fetchPriority="high"
                    loading="eager"
                    width={800}
                    height={1040}
                  />
                  
                  {/* Subtle editorial photo caption badge */}
                  <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-ink/85 backdrop-blur-sm px-3 py-1.5 text-ivory rounded-xs text-[10px] tracking-wider uppercase font-sans font-light">
                    Illustrative Concept
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}

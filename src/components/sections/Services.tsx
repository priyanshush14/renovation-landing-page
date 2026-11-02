import { ArrowRight, Check } from 'lucide-react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../motion/Reveal'
import { SERVICES_DATA } from '../../data/services'
import { trackEvent } from '../../lib/analytics'

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 lg:py-32 bg-paper border-t border-stone/50">
      <Container>
        <Reveal delay={0.05}>
          <SectionHeading
            eyebrow="Specialized Capabilities"
            title="Considered renovation services, tailored to your home."
            description="Whether revitalizing an essential gathering space or undertaking a comprehensive whole-home transformation, each discipline is executed with meticulous care."
          />
        </Reveal>

        {/* Editorial List / Asymmetric Grid of Services */}
        <div className="mt-14 sm:mt-18 space-y-16 lg:space-y-24">
          {SERVICES_DATA.map((service, index) => {
            const isEven = index % 2 === 1
            return (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center pt-8 border-t border-stone/40 first:border-t-0 first:pt-0"
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <Reveal delay={0.1} yOffset={20}>
                    <div className="relative group overflow-hidden rounded-xs bg-stone/20 border border-stone/50 shadow-xs aspect-[16/11]">
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                        width={700}
                        height={480}
                      />
                      <div className="absolute top-3 left-3 bg-paper/90 backdrop-blur-sm px-2.5 py-1 text-[11px] font-sans font-medium uppercase tracking-wider text-ink border border-stone/40">
                        {service.subtitle}
                      </div>
                    </div>
                  </Reveal>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  } flex flex-col items-start`}
                >
                  <Reveal delay={0.15}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-xs text-olive font-medium">
                        0{index + 1}
                      </span>
                      <span className="w-4 h-[1px] bg-stone" />
                      <span className="font-sans text-xs uppercase tracking-wider text-muted">
                        Residential Service
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl text-ink">
                      {service.title}
                    </h3>

                    <p className="mt-3 font-sans text-sm sm:text-base text-muted font-light leading-relaxed">
                      {service.description}
                    </p>

                    {/* Service Feature Highlights */}
                    <ul className="mt-5 space-y-2 font-sans text-xs sm:text-sm text-ink/80">
                      {service.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2.5">
                          <Check size={14} className="text-olive flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Scope & planning guide */}
                    <div className="mt-6 pt-5 border-t border-stone/30 w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="text-xs font-sans text-muted">
                        <span className="block font-medium text-ink">
                          Planning Scope Guide:
                        </span>
                        <span>
                          {service.indicativeBudget} · {service.indicativeDuration} (Typical Scope)
                        </span>
                      </div>

                      <a
                        href="#contact"
                        onClick={() =>
                          trackEvent('service_anchor_clicked', {
                            service: service.id,
                          })
                        }
                        className="inline-flex items-center gap-2 text-xs font-sans font-medium uppercase tracking-wider text-ink hover:text-olive-dark transition-colors group focus-ring py-1"
                      >
                        <span>Discuss this project</span>
                        <ArrowRight
                          size={14}
                          className="transition-transform group-hover:translate-x-1 text-olive"
                        />
                      </a>
                    </div>
                  </Reveal>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

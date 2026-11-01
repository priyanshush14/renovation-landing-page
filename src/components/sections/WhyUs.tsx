import { FileText, UserCheck, CalendarCheck, Sparkles } from 'lucide-react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../motion/Reveal'

const PILLARS = [
  {
    icon: FileText,
    num: '01',
    title: 'Transparent Estimates',
    description:
      'We provide detailed, itemized proposals that outline explicit scope, verified trade allowances, and material selections before construction commences—eliminating hidden costs.',
  },
  {
    icon: UserCheck,
    num: '02',
    title: 'Dedicated Project Manager',
    description:
      'You are never left coordinating trades or wondering who is in your home. A single designated manager oversees site logistics, scheduling, quality control, and every daily detail.',
  },
  {
    icon: CalendarCheck,
    num: '03',
    title: 'A Structured Process',
    description:
      'From laser-measured feasibility to final handover, every project follows a clear five-step milestone roadmap so you always know what has been completed and what comes next.',
  },
  {
    icon: Sparkles,
    num: '04',
    title: 'Considered Craftsmanship',
    description:
      'We treat your home with profound respect: rigorous negative-air dust containment, continuous surface protection, vetted trade specialists, and a clean worksite every evening.',
  },
]

export function WhyUs() {
  return (
    <section id="why-us" className="py-20 sm:py-28 lg:py-32 bg-paper border-t border-stone/50">
      <Container>
        <Reveal delay={0.05}>
          <SectionHeading
            eyebrow="The Hearth & Haven Standard"
            title="Why homeowners choose us."
            description="Remodeling requires significant trust. We built our company practices around the very qualities homeowners tell us matter most: honesty, predictability, and genuine care."
          />
        </Reveal>

        <div className="mt-14 sm:mt-18 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <Reveal key={pillar.title} delay={0.1 + idx * 0.08} yOffset={20}>
                <div className="p-8 sm:p-10 bg-ivory/60 border border-stone/60 rounded-xs h-full flex flex-col justify-between transition-colors hover:border-stone hover:bg-ivory">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-11 h-11 rounded-xs bg-stone/20 border border-stone/40 flex items-center justify-center text-olive">
                        <Icon size={20} strokeWidth={1.6} />
                      </div>
                      <span className="font-mono text-xs text-muted font-medium">
                        {pillar.num}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl text-ink leading-snug">
                      {pillar.title}
                    </h3>

                    <p className="mt-3.5 font-sans text-sm sm:text-base text-muted font-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-stone/30 flex items-center gap-2 text-xs font-sans text-olive font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-olive" />
                    <span>Hearth &amp; Haven Project Guarantee</span>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

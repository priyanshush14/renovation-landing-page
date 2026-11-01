import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../motion/Reveal'
import { FAQ_DATA } from '../../data/faq'
import { cn } from '../../lib/cn'

export function FAQ() {
  const [openIds, setOpenIds] = useState<string[]>(['service-area', 'consultation-process'])

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  return (
    <section id="faq" className="py-20 sm:py-28 lg:py-32 bg-paper border-t border-stone/50">
      <Container size="narrow">
        <Reveal delay={0.05}>
          <SectionHeading
            eyebrow="Common Questions"
            title="Answers to questions before you begin."
            description="We want you to feel informed, comfortable, and confident at every step of your renovation planning."
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-12 sm:mt-16 divide-y divide-stone/40 border-y border-stone/50">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIds.includes(item.id)
            const buttonId = `faq-trigger-${item.id}`
            const regionId = `faq-content-${item.id}`

            return (
              <Reveal key={item.id} delay={0.05 + idx * 0.03} yOffset={12}>
                <div className="py-5 sm:py-6">
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={regionId}
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex items-center justify-between text-left gap-4 group focus-ring rounded-xs py-1 cursor-pointer"
                  >
                    <span className="font-serif text-lg sm:text-xl text-ink group-hover:text-olive-dark transition-colors font-medium">
                      {item.question}
                    </span>
                    <div
                      className={cn(
                        'w-7 h-7 rounded-xs flex items-center justify-center text-muted group-hover:text-ink transition-transform duration-200 flex-shrink-0',
                        isOpen ? 'rotate-180 text-ink' : ''
                      )}
                    >
                      <ChevronDown size={18} strokeWidth={1.75} />
                    </div>
                  </button>

                  <div
                    id={regionId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={cn(
                      'grid transition-all duration-200 ease-out font-sans text-sm sm:text-base text-muted font-light leading-relaxed',
                      isOpen ? 'grid-rows-[1fr] opacity-100 pt-3 pb-1' : 'grid-rows-[0fr] opacity-0 overflow-hidden'
                    )}
                  >
                    <div className="overflow-hidden">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Extra help notice */}
        <Reveal delay={0.2}>
          <div className="mt-12 text-center text-xs font-sans text-muted">
            <span>Have a specific question about your architectural layout? </span>
            <a
              href="#contact"
              className="text-ink font-medium underline underline-offset-4 hover:text-olive-dark transition-colors"
            >
              Ask our renovation team directly
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

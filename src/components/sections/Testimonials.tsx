import { MessageSquareQuote, Shield } from 'lucide-react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../motion/Reveal'

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-paper border-t border-stone/50">
      <Container>
        <Reveal delay={0.05}>
          <SectionHeading
            eyebrow="Client Stories & References"
            title="Real homeowners. Verified craftsmanship."
            description="We believe social proof should reflect authentic, verifiable homeowner experiences—never inflated ratings or marketing fiction."
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 max-w-2xl mx-auto p-8 sm:p-10 bg-ivory border border-stone/60 rounded-xs text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-xs bg-stone/20 border border-stone/40 flex items-center justify-center text-olive mb-4">
              <MessageSquareQuote size={22} strokeWidth={1.5} />
            </div>

            <h3 className="font-serif text-2xl text-ink">
              Verified Client Case Studies &amp; References
            </h3>

            <p className="mt-3 font-sans text-sm text-muted font-light leading-relaxed">
              In accordance with our strict transparency policy, full homeowner case
              studies and verified video testimonials are published following formal client
              handover and release approval.
            </p>

            <div className="mt-6 pt-5 border-t border-stone/40 w-full flex items-center justify-center gap-2 text-xs font-sans text-ink font-medium">
              <Shield size={14} className="text-olive" />
              <span>
                Austin client references available upon request during initial consultation.
              </span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

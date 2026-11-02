import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { ConsultationForm } from '../forms/ConsultationForm'
import { Reveal } from '../motion/Reveal'
import { trackEvent } from '../../lib/analytics'

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-32 bg-paper border-t border-stone/50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context, Hours & Studio Direct Contacts */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Reveal delay={0.05}>
              <SectionHeading
                eyebrow="Initial Consultation"
                title="Tell us a little about your project."
                description="Share a few details and our team can understand what you’re planning before getting in touch. Every engagement begins with an honest, thoughtful conversation."
              />
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-8 space-y-5 text-sm font-sans text-ink/85 font-light w-full">
                <div className="flex items-start gap-3.5 p-4 bg-ivory border border-stone/50 rounded-xs">
                  <ShieldCheck size={18} className="text-olive flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-muted leading-relaxed">
                    <strong className="text-ink font-medium">Privacy Reassurance:</strong> Your
                    details are used exclusively to evaluate and respond to your renovation
                    inquiry. We never sell contact information or request payment data.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-ink">
                    <MapPin size={16} className="text-olive flex-shrink-0" />
                    <span>Serving Austin, Lakeway, Round Rock &amp; Surrounding Communities</span>
                  </div>

                  <div className="flex items-center gap-3 text-xs sm:text-sm text-ink">
                    <Clock size={16} className="text-olive flex-shrink-0" />
                    <span>Monday–Friday 8am–6pm · Saturday 9am–2pm</span>
                  </div>

                  <div className="flex items-center gap-3 text-xs sm:text-sm text-ink">
                    <Phone size={16} className="text-olive flex-shrink-0" />
                    <span
                      onClick={() => trackEvent('phone_click', { location: 'contact_section' })}
                      className="cursor-pointer hover:text-olive-dark transition-colors font-medium"
                    >
                      +1 (512) 555-0148
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs sm:text-sm text-ink">
                    <Mail size={16} className="text-olive flex-shrink-0" />
                    <span
                      onClick={() => trackEvent('email_click', { location: 'contact_section' })}
                      className="cursor-pointer hover:text-olive-dark transition-colors font-medium"
                    >
                      hello@hearthandhaven.com
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Multi-step Consultation Form */}
          <div className="lg:col-span-7 w-full">
            <Reveal delay={0.15} yOffset={20}>
              <ConsultationForm />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}

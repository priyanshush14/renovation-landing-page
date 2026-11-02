import { ArrowUp, MapPin, Clock, Phone, Mail } from 'lucide-react'
import { Container } from '../ui/Container'
import { BrandLogo } from '../ui/BrandLogo'
import { Divider } from '../ui/Divider'
import { trackEvent } from '../../lib/analytics'

const CURRENT_YEAR = 2026

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-ink text-ivory pt-16 sm:pt-20 pb-12 border-t border-ink/40">
      <Container>
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16">
          {/* Column 1: Brand & Positioning */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-4">
            <BrandLogo inverted size="lg" />
            <p className="font-sans text-stone/85 text-sm sm:text-base leading-relaxed max-w-md pt-2">
              A residential renovation partner for Austin-area homeowners who value
              considered design, skilled workmanship and a more organized renovation
              experience.
            </p>
            <div className="pt-2 flex flex-col gap-2 text-xs text-stone/70 font-sans">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-olive flex-shrink-0" />
                <span>Headquartered in Austin, Texas</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-olive flex-shrink-0" />
                <span>Mon–Fri 8am–6pm · Sat 9am–2pm · Sun Closed</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2 flex flex-col space-y-3">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-stone">
              Navigation
            </span>
            <ul className="space-y-2.5 text-sm font-sans text-stone/80">
              <li>
                <a
                  href="#services"
                  className="hover:text-ivory transition-colors focus-ring rounded-xs"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-ivory transition-colors focus-ring rounded-xs"
                >
                  Selected Work
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  className="hover:text-ivory transition-colors focus-ring rounded-xs"
                >
                  Our Approach
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="hover:text-ivory transition-colors focus-ring rounded-xs"
                >
                  Renovation Process
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-ivory transition-colors focus-ring rounded-xs"
                >
                  Client Reviews
                </a>
              </li>
              <li>
                <a
                  href="#planning"
                  className="hover:text-ivory transition-colors focus-ring rounded-xs"
                >
                  Budget &amp; Planning
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-ivory transition-colors focus-ring rounded-xs"
                >
                  Common Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Renovation Services */}
          <div className="lg:col-span-2 flex flex-col space-y-3">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-stone">
              Services
            </span>
            <ul className="space-y-2.5 text-sm font-sans text-stone/80">
              <li>
                <a
                  href="#service-kitchen-remodeling"
                  className="hover:text-ivory transition-colors focus-ring rounded-xs"
                >
                  Kitchen Remodeling
                </a>
              </li>
              <li>
                <a
                  href="#service-bathroom-renovation"
                  className="hover:text-ivory transition-colors focus-ring rounded-xs"
                >
                  Bathroom Renovation
                </a>
              </li>
              <li>
                <a
                  href="#service-complete-home-renovation"
                  className="hover:text-ivory transition-colors focus-ring rounded-xs"
                >
                  Whole-Home Renovation
                </a>
              </li>
              <li>
                <a
                  href="#service-flooring-interior"
                  className="hover:text-ivory transition-colors focus-ring rounded-xs"
                >
                  Flooring &amp; Finishes
                </a>
              </li>
              <li>
                <a
                  href="#service-interior-transformation"
                  className="hover:text-ivory transition-colors focus-ring rounded-xs"
                >
                  Interior Transformations
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Service Communities & Studio Inquiries */}
          <div className="lg:col-span-3 flex flex-col space-y-3">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-stone">
              Greater Austin Service Area
            </span>
            <p className="text-xs text-stone/80 leading-relaxed font-sans">
              Austin, Round Rock, Cedar Park, Pflugerville, Georgetown, Lakeway, and Bee
              Cave.
            </p>

            <div className="pt-3 border-t border-stone/20 flex flex-col space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-stone/60">
                Studio Inquiries
              </span>
              <div className="flex items-center gap-2 text-xs text-stone/80">
                <Phone size={13} className="text-olive flex-shrink-0" />
                <span
                  onClick={() => trackEvent('phone_click', { location: 'footer' })}
                  className="cursor-pointer hover:text-ivory"
                >
                  +1 (512) 555-0148
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone/80">
                <Mail size={13} className="text-olive flex-shrink-0" />
                <span
                  onClick={() => trackEvent('email_click', { location: 'footer' })}
                  className="cursor-pointer hover:text-ivory"
                >
                  hello@hearthandhaven.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <Divider variant="ink" className="border-stone/20 mb-8" />

        {/* Footer Tagline & Copyright */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs font-sans text-stone/70">
          <div className="flex items-center gap-2 max-w-2xl">
            <p className="leading-relaxed">
              Architectural residential renovation, bespoke kitchen design, and interior transformations across Greater Austin, Texas.
            </p>
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <span>&copy; {CURRENT_YEAR} Hearth &amp; Haven Renovations LLC. All rights reserved.</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-stone/30 rounded-xs hover:border-ivory hover:text-ivory transition-colors focus-ring cursor-pointer"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  )
}

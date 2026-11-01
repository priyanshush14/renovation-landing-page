import { ShieldCheck, Compass, MapPin } from 'lucide-react'
import { Container } from '../ui/Container'

const TRUST_POINTS = [
  {
    icon: Compass,
    title: 'A considered approach to every home',
    description: 'Design-conscious planning that respects your daily lifestyle, architecture, and long-term comfort.',
  },
  {
    icon: ShieldCheck,
    title: 'A clear, guided renovation process',
    description: 'Transparent estimates, dedicated project coordination, and structured milestone communication.',
  },
  {
    icon: MapPin,
    title: 'Serving Austin and nearby communities',
    description: 'Rooted in Central Texas, delivering residential transformations across Greater Austin.',
  },
]

export function TrustStrip() {
  return (
    <section id="trust" className="bg-paper border-y border-stone/50 py-10 sm:py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 divide-y md:divide-y-0 md:divide-x divide-stone/40">
          {TRUST_POINTS.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className={`flex items-start gap-4 ${
                  idx > 0 ? 'pt-6 md:pt-0 md:pl-8 lg:pl-10' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-xs bg-stone/20 border border-stone/40 flex items-center justify-center text-olive flex-shrink-0 mt-0.5">
                  <Icon size={19} strokeWidth={1.6} />
                </div>
                <div>
                  <h3 className="font-serif text-lg sm:text-xl text-ink font-medium leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 font-sans text-xs sm:text-sm text-muted leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

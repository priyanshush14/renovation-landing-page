import { Sliders, CheckCircle2, ArrowRight } from 'lucide-react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../motion/Reveal'
import { trackEvent } from '../../lib/analytics'

const COST_FACTORS = [
  {
    title: 'Existing Structural & MEP Conditions',
    desc: 'The age of your property, subfloor integrity, and whether electrical panels or plumbing stacks require modernization to meet current Austin building codes.',
  },
  {
    title: 'Layout & Partition Reconfigurations',
    desc: 'Moving load-bearing walls, installing engineered structural headers, or relocating plumbing fixtures involves dedicated engineering and permitting.',
  },
  {
    title: 'Materials, Fixtures & Surface Finishes',
    desc: 'Bespoke rift-sawn oak cabinetry, book-matched marble or quartzite, and designer brass fixtures shape the tactile finish and long-term durability.',
  },
  {
    title: 'Municipal Permits & Inspections',
    desc: 'Navigating City of Austin permitting, HOA architectural reviews, and mandatory trade inspections ensures verified safety and preserved property value.',
  },
]

const INDICATIVE_RANGES = [
  { service: 'Kitchen Remodeling', range: '$18,000 – $45,000', timeline: '3–7 weeks' },
  { service: 'Bathroom Renovation', range: '$8,000 – $25,000', timeline: '2–5 weeks' },
  { service: 'Complete Home Renovation', range: '$60,000 – $150,000+', timeline: '2–6 months' },
  { service: 'Interior Transformations', range: '$12,000 – $40,000', timeline: 'Scope-dependent' },
]

export function Planning() {
  return (
    <section id="planning" className="py-20 sm:py-28 lg:py-32 bg-ivory border-t border-stone/50">
      <Container>
        <Reveal delay={0.05}>
          <SectionHeading
            eyebrow="Cost Guidance & Transparency"
            title="Every home is different. A clear plan comes first."
            description="We believe in discussing financial expectations candidly before projects begin. Here is how we analyze investment variables and build realistic scopes."
          />
        </Reveal>

        <div className="mt-14 sm:mt-18 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Key Cost Drivers */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl text-ink">
              Factors That Shape Renovation Scope
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {COST_FACTORS.map((factor, idx) => (
                <Reveal key={factor.title} delay={0.1 + idx * 0.05} yOffset={16}>
                  <div className="p-5 sm:p-6 bg-paper border border-stone/50 rounded-xs h-full">
                    <div className="flex items-center gap-2 text-olive mb-2">
                      <CheckCircle2 size={16} />
                      <h4 className="font-serif text-lg text-ink font-medium">
                        {factor.title}
                      </h4>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-muted font-light leading-relaxed">
                      {factor.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right Column: Indicative Planning Benchmarks */}
          <div className="lg:col-span-5">
            <Reveal delay={0.15} yOffset={20}>
              <div className="p-6 sm:p-8 bg-paper border border-stone/60 rounded-xs shadow-xs">
                <div className="flex items-center gap-2 text-olive mb-3">
                  <Sliders size={18} />
                  <span className="font-sans text-xs uppercase tracking-wider font-semibold text-ink">
                    Indicative Planning Ranges
                  </span>
                </div>

                <p className="font-sans text-xs text-muted font-light leading-relaxed mb-6">
                  Planning benchmark guidelines based on typical scope profiles in Greater
                  Austin. Exact pricing requires an on-site property assessment.
                </p>

                <div className="space-y-4 divide-y divide-stone/30">
                  {INDICATIVE_RANGES.map((item) => (
                    <div key={item.service} className="pt-3 first:pt-0 flex items-center justify-between text-sm">
                      <div>
                        <span className="font-serif text-ink font-medium block">
                          {item.service}
                        </span>
                        <span className="font-sans text-[11px] text-muted">
                          Typical duration: {item.timeline}
                        </span>
                      </div>
                      <span className="font-mono text-xs font-semibold text-ink bg-stone/20 px-2 py-1 rounded-xs">
                        {item.range}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-5 border-t border-stone/40">
                  <p className="font-sans text-[11px] text-muted leading-relaxed mb-4">
                    Planning ranges only. Final pricing depends on site assessment, engineering, selections and scope.
                  </p>

                  <a
                    href="#contact"
                    onClick={() =>
                      trackEvent('primary_cta_click', { location: 'planning_card' })
                    }
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-ink text-ivory font-sans text-xs font-medium uppercase tracking-wider hover:bg-olive-dark transition-colors rounded-xs focus-ring"
                  >
                    <span>Request an Estimate Consultation</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}

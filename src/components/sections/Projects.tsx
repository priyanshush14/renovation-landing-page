import { useState } from 'react'
import { Eye, X, ArrowRight, Sparkles } from 'lucide-react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { Reveal } from '../motion/Reveal'
import { PROJECTS_DATA } from '../../data/projects'
import type { ProjectConcept } from '../../types'
import { trackEvent } from '../../lib/analytics'

export function Projects() {
  const [activeProject, setActiveProject] = useState<ProjectConcept | null>(null)

  const handleOpenDetail = (project: ProjectConcept) => {
    setActiveProject(project)
    trackEvent('project_gallery_opened', { projectId: project.id })
  }

  const handleCloseDetail = () => {
    setActiveProject(null)
  }

  return (
    <section id="projects" className="py-20 sm:py-28 lg:py-32 bg-ivory">
      <Container>
        <Reveal delay={0.05}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Architectural Portfolios"
              title="Concept projects & spatial studies."
              description="Explore our vision for modern Central Texas residential living. Every study balances functional daily ergonomics with calm material honesty."
            />
            <div className="hidden md:flex flex-col items-end text-right">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-stone/20 border border-stone/40 text-[11px] font-sans uppercase tracking-wider text-muted rounded-xs">
                <Sparkles size={12} className="text-olive" />
                Portfolio Concept Studies
              </span>
            </div>
          </div>
        </Reveal>

        {/* Project Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {PROJECTS_DATA.map((project, idx) => (
            <Reveal key={project.id} delay={0.1 + idx * 0.08} yOffset={24}>
              <div
                onClick={() => handleOpenDetail(project)}
                className="group cursor-pointer flex flex-col bg-paper border border-stone/50 rounded-xs overflow-hidden transition-all duration-300 hover:shadow-sm hover:border-stone h-full"
              >
                {/* Main Image with Hover Effect */}
                <div className="relative aspect-[4/3] overflow-hidden bg-stone/20">
                  <img
                    src={project.mainImage}
                    alt={project.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
                    width={600}
                    height={450}
                  />
                  <div className="absolute top-3 left-3 bg-ink/80 backdrop-blur-sm text-ivory text-[10px] uppercase tracking-wider font-sans font-light px-2.5 py-1 rounded-xs">
                    {project.conceptTag}
                  </div>
                  <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-ivory/95 text-ink text-xs font-sans font-medium rounded-xs shadow-xs">
                      <Eye size={14} />
                      View Project Study
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-sans uppercase tracking-wider text-olive font-semibold block mb-1">
                      {project.category}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-ink leading-snug group-hover:text-olive-dark transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2.5 font-sans text-xs sm:text-sm text-muted font-light leading-relaxed line-clamp-2">
                      {project.tagline}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone/40 flex items-center justify-between text-xs font-sans text-ink">
                    <span className="text-muted text-[11px]">Illustrative concept</span>
                    <span className="inline-flex items-center gap-1 font-medium group-hover:text-olive-dark">
                      <span>Explore</span>
                      <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Mid-page Consultation Prompt */}
        <Reveal delay={0.25}>
          <div className="mt-16 sm:mt-20 p-8 sm:p-10 bg-paper border border-stone/60 rounded-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-wider text-olive font-semibold font-sans">
                Ready to transform your home?
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-ink mt-1">
                Let’s talk through your renovation vision.
              </h3>
              <p className="font-sans text-sm text-muted font-light mt-1">
                Our initial conversation helps clarify scope, budget expectations, and next steps for your property.
              </p>
            </div>
            <Button
              href="#contact"
              variant="primary"
              showArrow
              onClick={() =>
                trackEvent('primary_cta_click', { location: 'projects_cta' })
              }
            >
              Request a Free Consultation
            </Button>
          </div>
        </Reveal>
      </Container>

      {/* Accessible Project Detail Modal */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Project details for ${activeProject.title}`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-ink/70 backdrop-blur-xs animate-fade-in"
          onClick={handleCloseDetail}
        >
          <div
            className="relative bg-paper max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-xs border border-stone/80 shadow-lg p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleCloseDetail}
              aria-label="Close dialog"
              className="absolute top-5 right-5 p-2 text-ink hover:text-olive-dark focus-ring rounded-xs cursor-pointer"
            >
              <X size={22} />
            </button>

            <div className="pr-10">
              <span className="text-xs uppercase tracking-widest text-olive font-semibold font-sans">
                {activeProject.category} · {activeProject.conceptTag}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-ink mt-1">
                {activeProject.title}
              </h3>
              <p className="font-sans text-sm sm:text-base text-muted font-light mt-2 italic">
                &ldquo;{activeProject.tagline}&rdquo;
              </p>
            </div>

            {/* Side-by-side or stacked images */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-xs bg-stone/20 aspect-[4/3]">
                <img
                  src={activeProject.mainImage}
                  alt={activeProject.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-xs bg-stone/20 aspect-[4/3]">
                <img
                  src={activeProject.detailImage}
                  alt={`Detailed view of ${activeProject.title}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Narrative Description */}
            <div className="mt-6 font-sans text-sm text-ink/85 leading-relaxed font-light space-y-3">
              <h4 className="font-serif text-lg text-ink font-medium">Design &amp; Material Direction</h4>
              <p>{activeProject.narrative}</p>
            </div>

            {/* Scope Elements */}
            <div className="mt-6 pt-5 border-t border-stone/40">
              <h5 className="font-sans text-xs uppercase tracking-wider text-muted font-semibold mb-3">
                Key Architectural Elements
              </h5>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-ink">
                {activeProject.scope.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-olive flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-stone/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-[11px] font-sans text-muted">
                Note: Illustrative concept study created for portfolio demonstration.
              </span>
              <Button
                href="#contact"
                variant="primary"
                size="sm"
                showArrow
                onClick={() => {
                  handleCloseDetail()
                  trackEvent('primary_cta_click', {
                    location: `modal_${activeProject.id}`,
                  })
                }}
              >
                Inquire about this style
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

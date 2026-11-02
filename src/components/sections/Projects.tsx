import { useState, useId } from 'react'
import { ArrowRight, Compass, Eye, Sparkles } from 'lucide-react'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { Reveal } from '../motion/Reveal'
import { PROJECTS_DATA } from '../../data/projects'
import { ProjectDetailModal } from '../portfolio/ProjectDetailModal'
import type { ProjectConcept } from '../../types'
import { trackEvent } from '../../lib/analytics'

type FilterKey = 'all' | 'kitchens' | 'bathrooms' | 'whole-home' | 'interior'

const FILTER_OPTIONS: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'All Projects' },
  { key: 'kitchens', label: 'Kitchens' },
  { key: 'bathrooms', label: 'Bathrooms' },
  { key: 'whole-home', label: 'Whole Home' },
  { key: 'interior', label: 'Interior Upgrades' },
]

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all')
  const [selectedProject, setSelectedProject] = useState<ProjectConcept | null>(null)
  const filterListId = useId()

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.filterCategory === activeFilter)

  const handleOpenDetail = (project: ProjectConcept) => {
    setSelectedProject(project)
    trackEvent('portfolio_card_clicked', { projectId: project.id, slug: project.slug })
  }

  const handleCloseDetail = () => {
    setSelectedProject(null)
  }

  return (
    <section id="projects" aria-labelledby="portfolio-heading" className="py-20 sm:py-28 lg:py-32 bg-ivory">
      <Container>
        {/* Section Header */}
        <Reveal delay={0.05}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-stone/40">
            <div>
              <SectionHeading
                id="portfolio-heading"
                eyebrow="Curated Portfolio"
                title="Considered spaces. Thoughtfully transformed."
                description="Explore our residential portfolio across Greater Austin. Each study balances architectural balance, natural material integrity, and unhurried craftsmanship."
              />
            </div>

            <div className="hidden lg:flex flex-col items-end text-right">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-stone/20 border border-stone/40 text-[11px] font-sans uppercase tracking-wider text-muted rounded-xs">
                <Sparkles size={12} className="text-olive" />
                <span>6 Curated Case Studies</span>
              </span>
            </div>
          </div>
        </Reveal>

        {/* Category Filters */}
        <Reveal delay={0.1}>
          <div
            id={filterListId}
            role="toolbar"
            aria-label="Filter portfolio by project type"
            className="mt-8 flex flex-wrap items-center gap-2 sm:gap-3"
          >
            {FILTER_OPTIONS.map((filter) => {
              const isActive = activeFilter === filter.key
              return (
                <button
                  key={filter.key}
                  type="button"
                  onClick={() => {
                    setActiveFilter(filter.key)
                    trackEvent('portfolio_filter_changed', { filter: filter.key })
                  }}
                  aria-pressed={isActive}
                  className={`px-3.5 py-1.5 rounded-xs text-xs font-sans font-medium transition-all focus-ring cursor-pointer ${
                    isActive
                      ? 'bg-ink text-ivory shadow-xs'
                      : 'bg-paper text-ink/80 hover:text-ink hover:bg-stone/30 border border-stone/40'
                  }`}
                >
                  {filter.label}
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* Editorial Asymmetric Grid */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => {
            // Asymmetric editorial spans for desktop composition
            const isWide = index % 3 === 0
            const colSpanClass = isWide ? 'lg:col-span-8' : 'lg:col-span-4'

            return (
              <Reveal
                key={project.id}
                delay={0.08 * (index % 3)}
                yOffset={20}
                className={`flex flex-col ${colSpanClass}`}
              >
                <article
                  tabIndex={0}
                  role="button"
                  aria-label={`Open detailed study for ${project.title}`}
                  onClick={() => handleOpenDetail(project)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      handleOpenDetail(project)
                    }
                  }}
                  className="group cursor-pointer flex flex-col h-full bg-paper border border-stone/50 hover:border-stone rounded-xs overflow-hidden transition-all duration-300 hover:shadow-md focus-ring"
                >
                  {/* Image Container with Restrained Scale Hover */}
                  <div className={`relative overflow-hidden bg-stone/20 ${isWide ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
                    <img
                      src={project.mainImage}
                      alt={project.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                    />

                    {/* Architectural Concept Tag */}
                    <div className="absolute top-3 left-3 bg-ink/85 backdrop-blur-xs text-ivory text-[10px] uppercase tracking-widest font-sans font-medium px-2.5 py-1 rounded-xs">
                      {project.conceptTag}
                    </div>

                    {/* Subtle Area Label */}
                    <div className="absolute bottom-3 left-3 bg-paper/90 backdrop-blur-xs text-ink text-[11px] font-sans px-2.5 py-1 rounded-xs flex items-center gap-1.5 border border-stone/40">
                      <Compass size={12} className="text-olive" />
                      <span>{project.locationLabel}</span>
                    </div>

                    {/* Hover Overlay Hint */}
                    <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-ivory/95 text-ink text-xs font-sans font-medium rounded-xs shadow-sm">
                        <Eye size={14} />
                        <span>Explore Case Study</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-sans uppercase tracking-wider text-olive font-semibold block mb-1.5">
                        {project.category}
                      </span>
                      <h3 className="font-serif text-2xl text-ink leading-snug group-hover:text-olive-dark transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-2.5 font-sans text-xs sm:text-sm text-muted font-light leading-relaxed line-clamp-2">
                        {project.summary}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-stone/40 flex items-center justify-between text-xs font-sans">
                      <span className="text-muted text-[11px]">
                        {project.architecturalElements.length} Architectural Details
                      </span>
                      <span className="inline-flex items-center gap-1 text-ink font-medium group-hover:text-olive-dark transition-colors">
                        <span>View Details</span>
                        <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>

        {/* Mid-Portfolio Consultation Anchor */}
        <Reveal delay={0.2}>
          <div className="mt-16 sm:mt-20 p-8 sm:p-10 bg-paper border border-stone/60 rounded-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-wider text-olive font-semibold font-sans">
                Planning your own renovation?
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-ink mt-1">
                Let’s discuss what’s possible for your home.
              </h3>
              <p className="font-sans text-sm text-muted font-light mt-1.5 leading-relaxed">
                Whether you’re in the early dreaming stage or ready to begin structural planning,
                our introductory consultation helps clarify scope, budget expectations, and design direction.
              </p>
            </div>
            <Button
              href="#contact"
              variant="primary"
              showArrow
              onClick={() =>
                trackEvent('primary_cta_click', { location: 'portfolio_bottom_cta' })
              }
            >
              Request a Consultation
            </Button>
          </div>
        </Reveal>
      </Container>

      {/* Expanded Case-Study Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={handleCloseDetail}
      />
    </section>
  )
}

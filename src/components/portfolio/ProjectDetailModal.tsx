import { useEffect, useRef, useState } from 'react'
import { X, Compass, Sparkles, Layers, Sliders, Maximize2 } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import type { ProjectConcept } from '../../types'
import { Lightbox } from './Lightbox'
import { Button } from '../ui/Button'
import { trackEvent } from '../../lib/analytics'

interface ProjectDetailModalProps {
  project: ProjectConcept | null
  onClose: () => void
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const shouldReduceMotion = useReducedMotion()
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0)

  // Manage Escape key and body scroll lock
  useEffect(() => {
    if (!project) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !lightboxOpen) {
        onClose()
      }
    }

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    setTimeout(() => {
      closeButtonRef.current?.focus()
    }, 50)

    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose, lightboxOpen])

  if (!project) return null

  const handleOpenLightbox = (index: number) => {
    setActiveGalleryIndex(index)
    setLightboxOpen(true)
    trackEvent('project_gallery_opened', {
      projectId: project.id,
      imageIndex: index,
    })
  }

  const handlePrevLightbox = () => {
    setActiveGalleryIndex((prev) => (prev > 0 ? prev - 1 : project.gallery.length - 1))
  }

  const handleNextLightbox = () => {
    setActiveGalleryIndex((prev) => (prev < project.gallery.length - 1 ? prev + 1 : 0))
  }

  return (
    <>
      <AnimatePresence>
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Detailed case study for ${project.title}`}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-ink/75 backdrop-blur-sm overflow-y-auto"
          onClick={onClose}
        >
          {/* Main Modal Container */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-paper text-ink max-w-4xl w-full my-auto rounded-xs border border-stone/80 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
          >
            {/* Modal Header Bar */}
            <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-8 py-4 sm:py-5 bg-paper/95 backdrop-blur-md border-b border-stone/50">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] uppercase tracking-widest text-olive font-semibold">
                  {project.conceptTag}
                </span>
                <span className="text-stone">·</span>
                <span className="font-sans text-xs text-muted font-medium uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="p-2 -mr-2 text-ink hover:text-olive-dark hover:bg-stone/20 rounded-full transition-colors focus-ring cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Case-Study Body */}
            <div className="flex-1 overflow-y-auto px-6 sm:px-10 py-8 space-y-10 sm:space-y-12">
              {/* Project Hero Title & Tagline */}
              <div>
                <div className="flex items-center gap-2 text-xs font-sans text-muted mb-2">
                  <Compass size={14} className="text-olive" />
                  <span>{project.locationLabel}</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
                  {project.title}
                </h2>
                <p className="mt-3 font-sans text-base sm:text-lg text-muted font-light leading-relaxed italic">
                  &ldquo;{project.tagline}&rdquo;
                </p>
              </div>

              {/* Architectural Imagery Pairing */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
                <div className="md:col-span-7 group relative aspect-[4/3] rounded-xs overflow-hidden bg-stone/20 border border-stone/50 shadow-xs cursor-pointer"
                  onClick={() => handleOpenLightbox(0)}
                >
                  <img
                    src={project.mainImage}
                    alt={project.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                  />
                  <div className="absolute bottom-3 right-3 bg-ink/80 backdrop-blur-xs text-ivory text-[11px] px-2.5 py-1 rounded-xs flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                    <Maximize2 size={12} />
                    <span>Enlarge</span>
                  </div>
                </div>

                <div className="md:col-span-5 group relative aspect-[4/3] md:aspect-auto rounded-xs overflow-hidden bg-stone/20 border border-stone/50 shadow-xs cursor-pointer"
                  onClick={() => handleOpenLightbox(1)}
                >
                  <img
                    src={project.detailImage}
                    alt={`Detail view of ${project.title}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                  />
                  <div className="absolute bottom-3 right-3 bg-ink/80 backdrop-blur-xs text-ivory text-[11px] px-2.5 py-1 rounded-xs flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                    <Maximize2 size={12} />
                    <span>Enlarge</span>
                  </div>
                </div>
              </div>

              {/* Narrative & Design Brief */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
                <div className="md:col-span-8">
                  <h3 className="font-serif text-xl sm:text-2xl text-ink mb-3">
                    Project Overview
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-ink/85 font-light leading-relaxed">
                    {project.narrative}
                  </p>
                </div>

                {project.clientBrief && (
                  <div className="md:col-span-4 p-5 bg-stone/20 border border-stone/40 rounded-xs space-y-3">
                    <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-olive font-sans">
                      <Sparkles size={14} />
                      <span>Design Intent</span>
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono uppercase text-muted">Brief Focus</span>
                      <p className="font-sans text-xs text-ink/80 mt-0.5 leading-relaxed">
                        {project.clientBrief.goals}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Dedicated Design & Material Direction */}
              <div className="pt-8 border-t border-stone/50 space-y-6">
                <div className="flex items-center gap-2">
                  <Layers size={18} className="text-olive" />
                  <h3 className="font-serif text-2xl sm:text-3xl text-ink">
                    Design &amp; Material Direction
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-ivory/60 p-6 sm:p-8 rounded-xs border border-stone/40">
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-olive font-semibold block">
                      01. Primary Design Intent
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-ink/85 font-light leading-relaxed">
                      {project.designDirection.intent}
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-olive font-semibold block">
                      02. Palette &amp; Materials
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-ink/85 font-light leading-relaxed">
                      {project.designDirection.paletteAndMaterials}
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-olive font-semibold block">
                      03. Surfaces &amp; Fixtures
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-ink/85 font-light leading-relaxed">
                      {project.designDirection.surfacesAndFixtures}
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-olive font-semibold block">
                      04. Lighting Approach
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-ink/85 font-light leading-relaxed">
                      {project.designDirection.lightingApproach}
                    </p>
                  </div>

                  <div className="md:col-span-2 space-y-1.5 pt-2 border-t border-stone/30">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-olive font-semibold block">
                      05. Usability &amp; Layout Strategy
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-ink/85 font-light leading-relaxed">
                      {project.designDirection.storageAndLayout}
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Architectural Elements & Scope of Work */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-stone/50">
                {/* Architectural Elements */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Sliders size={16} className="text-olive" />
                    <h4 className="font-sans text-xs uppercase tracking-wider text-ink font-semibold">
                      Key Architectural Elements
                    </h4>
                  </div>
                  <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-ink/85">
                    {project.architecturalElements.map((el) => (
                      <li key={el} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-olive mt-1.5 flex-shrink-0" />
                        <span className="font-light">{el}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Scope of Work */}
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-wider text-ink font-semibold mb-4">
                    Scope of Work
                  </h4>
                  <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-ink/85">
                    {project.scope.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone mt-1.5 flex-shrink-0" />
                        <span className="font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* The Thinking Behind The Design */}
              <div className="p-6 bg-stone/15 rounded-xs border border-stone/30">
                <span className="text-[11px] font-sans uppercase tracking-wider text-olive font-semibold block mb-1">
                  Design Rationale
                </span>
                <h4 className="font-serif text-lg sm:text-xl text-ink mb-2">
                  The Thinking Behind the Design
                </h4>
                <p className="font-sans text-xs sm:text-sm text-ink/80 font-light leading-relaxed">
                  {project.thinkingBehindDesign}
                </p>
              </div>

              {/* Project Gallery Preview */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="pt-8 border-t border-stone/50">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-sans text-xs uppercase tracking-wider text-ink font-semibold">
                      Project Gallery ({project.gallery.length} Perspectives)
                    </h4>
                    <span className="text-xs text-muted font-sans font-light">
                      Click to expand in lightbox
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {project.gallery.map((item, idx) => (
                      <div
                        key={item.url}
                        onClick={() => handleOpenLightbox(idx)}
                        className="group relative aspect-[4/3] rounded-xs overflow-hidden bg-stone/20 border border-stone/40 cursor-pointer"
                      >
                        <img
                          src={item.url}
                          alt={item.alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                        />
                        <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="p-2 rounded-full bg-ivory/90 text-ink shadow-sm">
                            <Maximize2 size={14} />
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Services & Consultation CTA */}
              <div className="pt-8 border-t border-stone/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-ivory/50 p-6 rounded-xs">
                <div>
                  <span className="text-[11px] font-sans uppercase tracking-wider text-muted font-semibold block">
                    Related Disciplines
                  </span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.relatedServices.map((service) => (
                      <a
                        key={service.title}
                        href={service.href}
                        onClick={() => onClose()}
                        className="text-xs font-sans px-2.5 py-1 bg-paper border border-stone/40 hover:border-olive text-ink rounded-xs transition-colors"
                      >
                        {service.title}
                      </a>
                    ))}
                  </div>
                </div>

                <Button
                  href="#contact"
                  variant="primary"
                  size="sm"
                  showArrow
                  onClick={() => {
                    onClose()
                    trackEvent('primary_cta_click', {
                      location: `case_study_${project.id}`,
                    })
                  }}
                >
                  Discuss a Similar Project
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>

      {/* Lightbox Component */}
      <Lightbox
        isOpen={lightboxOpen}
        items={project.gallery}
        currentIndex={activeGalleryIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrevLightbox}
        onNext={handleNextLightbox}
      />
    </>
  )
}

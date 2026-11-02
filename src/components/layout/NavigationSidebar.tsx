import { useState, useEffect, useRef } from 'react'
import { X, ChevronDown, ArrowRight, Phone, Mail } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { BrandLogo } from '../ui/BrandLogo'
import { trackEvent } from '../../lib/analytics'

interface NavigationSidebarProps {
  isOpen: boolean
  onClose: () => void
}

const SERVICE_SUBITEMS = [
  { label: 'Kitchen Remodeling', href: '#service-kitchen-remodeling' },
  { label: 'Bathroom Renovation', href: '#service-bathroom-renovation' },
  { label: 'Whole-Home Renovation', href: '#service-complete-home-renovation' },
  { label: 'Flooring & Finishes', href: '#service-flooring-interior' },
  { label: 'Interior Transformations', href: '#service-interior-transformation' },
]

export function NavigationSidebar({ isOpen, onClose }: NavigationSidebarProps) {
  const [isServicesExpanded, setIsServicesExpanded] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  // Manage Escape key and body scroll lock
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    // Focus close control on open
    setTimeout(() => {
      closeButtonRef.current?.focus()
    }, 60)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  const handleLinkClick = (href: string, label: string) => {
    trackEvent('sidebar_nav_click', { target: href, label })
    onClose()
  }

  // Animation settings matching the 450-650ms spec
  const panelVariants = {
    closed: {
      x: '100%',
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.4,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
    open: {
      x: '0%',
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  }

  const scrimVariants = {
    closed: { opacity: 0 },
    open: {
      opacity: 1,
      transition: { duration: shouldReduceMotion ? 0.01 : 0.3 },
    },
  }

  const navListVariants = {
    open: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.05,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.02,
        staggerDirection: -1,
      },
    },
  }

  const navItemVariants = {
    closed: { opacity: 0, x: shouldReduceMotion ? 0 : 16 },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation menu"
          className="fixed inset-0 z-50 flex justify-end overflow-hidden"
        >
          {/* Translucent Dark Scrim (Leaving underlying page subtly visible on left) */}
          <motion.div
            variants={scrimVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={onClose}
            className="fixed inset-0 bg-ink/75 backdrop-blur-xs cursor-pointer"
            aria-hidden="true"
          />

          {/* Sliding Navigation Panel — Occupies ~85% on mobile, up to 55-65vw on desktop */}
          <motion.aside
            ref={panelRef}
            variants={panelVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="relative z-10 w-[88vw] sm:w-[75vw] md:w-[60vw] lg:w-[48vw] xl:w-[42vw] max-w-2xl h-full bg-paper border-l border-stone/60 shadow-2xl flex flex-col justify-between overflow-y-auto"
          >
            {/* Top Bar with Brand & Prominent Circular Close Button */}
            <div className="flex items-center justify-between px-6 sm:px-10 pt-6 sm:pt-8 pb-4 border-b border-stone/40">
              <BrandLogo onClick={onClose} />

              {/* Prominent Circular Close Button matching sidebar reference pattern */}
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close navigation menu"
                className="w-12 h-12 rounded-full bg-ink text-ivory hover:bg-olive-dark transition-transform hover:scale-105 active:scale-95 flex items-center justify-center focus-ring shadow-sm cursor-pointer"
              >
                <X size={22} strokeWidth={2} />
              </button>
            </div>

            {/* Navigation Body */}
            <div className="px-6 sm:px-10 py-6 sm:py-8 flex-1 flex flex-col justify-center">
              <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.2em] text-muted mb-4 block">
                Menu Directory
              </span>

              <motion.nav
                variants={navListVariants}
                initial="closed"
                animate="open"
                exit="closed"
                aria-label="Sidebar main navigation"
                className="space-y-3 sm:space-y-4"
              >
                {/* 01. Home */}
                <motion.div variants={navItemVariants}>
                  <a
                    href="#top"
                    onClick={() => handleLinkClick('#top', 'Home')}
                    className="group flex items-center justify-between font-serif text-2xl sm:text-3xl lg:text-4xl text-ink hover:text-olive-dark transition-colors py-1 focus-ring"
                  >
                    <span>Home</span>
                    <ArrowRight
                      size={20}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-olive"
                    />
                  </a>
                </motion.div>

                {/* 02. Our Approach */}
                <motion.div variants={navItemVariants}>
                  <a
                    href="#why-us"
                    onClick={() => handleLinkClick('#why-us', 'Our Approach')}
                    className="group flex items-center justify-between font-serif text-2xl sm:text-3xl lg:text-4xl text-ink hover:text-olive-dark transition-colors py-1 focus-ring"
                  >
                    <span>Our Approach</span>
                    <ArrowRight
                      size={20}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-olive"
                    />
                  </a>
                </motion.div>

                {/* 03. Services (Expandable Accordion) */}
                <motion.div variants={navItemVariants} className="pt-1 pb-1">
                  <button
                    type="button"
                    onClick={() => setIsServicesExpanded((prev) => !prev)}
                    aria-expanded={isServicesExpanded}
                    aria-controls="sidebar-services-submenu"
                    className="w-full flex items-center justify-between font-serif text-2xl sm:text-3xl lg:text-4xl text-ink hover:text-olive-dark transition-colors py-1 focus-ring text-left cursor-pointer group"
                  >
                    <span className="flex items-center gap-3">
                      <span>Services</span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-stone/30 text-olive-dark font-normal">
                        5
                      </span>
                    </span>
                    <ChevronDown
                      size={22}
                      className={`text-olive transition-transform duration-300 ${
                        isServicesExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Accordion Submenu Panel */}
                  <AnimatePresence>
                    {isServicesExpanded && (
                      <motion.div
                        id="sidebar-services-submenu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden pl-4 sm:pl-6 pt-2 pb-2 border-l-2 border-stone/50 ml-2 mt-2 space-y-2"
                      >
                        {SERVICE_SUBITEMS.map((sub) => (
                          <a
                            key={sub.href}
                            href={sub.href}
                            onClick={() => handleLinkClick(sub.href, sub.label)}
                            className="block font-sans text-sm sm:text-base text-ink/80 hover:text-olive-dark py-1 transition-colors"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* 04. Selected Projects */}
                <motion.div variants={navItemVariants}>
                  <a
                    href="#projects"
                    onClick={() => handleLinkClick('#projects', 'Selected Projects')}
                    className="group flex items-center justify-between font-serif text-2xl sm:text-3xl lg:text-4xl text-ink hover:text-olive-dark transition-colors py-1 focus-ring"
                  >
                    <span>Selected Projects</span>
                    <ArrowRight
                      size={20}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-olive"
                    />
                  </a>
                </motion.div>

                {/* 05. Renovation Process */}
                <motion.div variants={navItemVariants}>
                  <a
                    href="#process"
                    onClick={() => handleLinkClick('#process', 'Renovation Process')}
                    className="group flex items-center justify-between font-serif text-2xl sm:text-3xl lg:text-4xl text-ink hover:text-olive-dark transition-colors py-1 focus-ring"
                  >
                    <span>Renovation Process</span>
                    <ArrowRight
                      size={20}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-olive"
                    />
                  </a>
                </motion.div>

                {/* 06. What Homeowners Can Expect */}
                <motion.div variants={navItemVariants}>
                  <a
                    href="#testimonials"
                    onClick={() => handleLinkClick('#testimonials', 'Homeowner Standard')}
                    className="group flex items-center justify-between font-serif text-2xl sm:text-3xl lg:text-4xl text-ink hover:text-olive-dark transition-colors py-1 focus-ring"
                  >
                    <span>What Homeowners Can Expect</span>
                    <ArrowRight
                      size={20}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-olive"
                    />
                  </a>
                </motion.div>

                {/* 07. About */}
                <motion.div variants={navItemVariants}>
                  <a
                    href="#about"
                    onClick={() => handleLinkClick('#about', 'About Studio')}
                    className="group flex items-center justify-between font-serif text-2xl sm:text-3xl lg:text-4xl text-ink hover:text-olive-dark transition-colors py-1 focus-ring"
                  >
                    <span>About the Studio</span>
                    <ArrowRight
                      size={20}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-olive"
                    />
                  </a>
                </motion.div>

                {/* 08. Contact */}
                <motion.div variants={navItemVariants}>
                  <a
                    href="#contact"
                    onClick={() => handleLinkClick('#contact', 'Contact')}
                    className="group flex items-center justify-between font-serif text-2xl sm:text-3xl lg:text-4xl text-ink hover:text-olive-dark transition-colors py-1 focus-ring"
                  >
                    <span>Contact</span>
                    <ArrowRight
                      size={20}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-olive"
                    />
                  </a>
                </motion.div>
              </motion.nav>
            </div>

            {/* Bottom Panel Footnote & Social Links */}
            <div className="px-6 sm:px-10 py-6 border-t border-stone/50 bg-ivory/50 space-y-4">
              {/* Primary Consultation Action */}
              <a
                href="#contact"
                onClick={() => handleLinkClick('#contact', 'Primary Consultation Button')}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-ink text-ivory font-sans font-medium hover:bg-olive-dark transition-colors rounded-xs focus-ring text-sm"
              >
                <span>Request a Free Consultation</span>
                <ArrowRight size={15} />
              </a>

              {/* Service Details & Channels */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-muted font-sans pt-2">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5">
                    <Phone size={13} className="text-olive" />
                    (512) 555-0148
                  </span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Mail size={13} className="text-olive" />
                    hello@hearthandhaven.example
                  </span>
                </div>
                <span className="text-[11px] font-sans text-stone/80">Greater Austin, Texas</span>
              </div>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  )
}

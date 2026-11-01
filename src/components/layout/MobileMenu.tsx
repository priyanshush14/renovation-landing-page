import { useEffect, useRef } from 'react'
import { X, ArrowRight, Phone, Mail } from 'lucide-react'
import { BrandLogo } from '../ui/BrandLogo'
import { trackEvent } from '../../lib/analytics'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navItems: { label: string; href: string }[]
}

export function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

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

    // Focus close button on open
    setTimeout(() => {
      closeButtonRef.current?.focus()
    }, 50)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
      className="fixed inset-0 z-50 flex flex-col bg-ivory/98 backdrop-blur-md transition-all duration-200"
    >
      {/* Header Bar within Menu */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-stone/50">
        <BrandLogo onClick={onClose} />
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="p-2 -mr-2 text-ink hover:text-olive focus-ring rounded-xs cursor-pointer"
        >
          <X size={26} strokeWidth={1.5} />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 flex flex-col justify-center px-8 py-6 space-y-6 overflow-y-auto">
        <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.16em] text-muted">
          Navigation
        </span>
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => {
                  trackEvent('service_anchor_clicked', { target: item.href })
                  onClose()
                }}
                className="group flex items-center justify-between text-2xl sm:text-3xl font-serif text-ink hover:text-olive-dark transition-colors py-1 focus-ring"
              >
                <span>{item.label}</span>
                <ArrowRight
                  size={20}
                  className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-olive"
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="pt-8 border-t border-stone/60 space-y-4">
          <a
            href="#contact"
            onClick={() => {
              trackEvent('primary_cta_click', { location: 'mobile_menu' })
              onClose()
            }}
            className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-ink text-ivory font-sans font-medium hover:bg-olive-dark transition-colors rounded-xs focus-ring text-base"
          >
            <span>Request a Free Consultation</span>
            <ArrowRight size={16} />
          </a>

          <div className="pt-4 flex flex-col gap-2.5 text-xs text-muted font-sans">
            <span className="font-semibold uppercase tracking-wider text-[10px] text-ink">
              Greater Austin Service Area
            </span>
            <p>Austin, Round Rock, Lakeway, Bee Cave, Georgetown</p>
            <div className="flex items-center gap-4 pt-2 text-ink">
              <span className="inline-flex items-center gap-1.5">
                <Phone size={13} className="text-olive" />
                (512) 555-0148 (Demo)
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Mail size={13} className="text-olive" />
                hello@hearthandhaven.example
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

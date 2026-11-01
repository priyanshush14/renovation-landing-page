import { useState, useEffect, useRef } from 'react'
import { Menu } from 'lucide-react'
import { Container } from '../ui/Container'
import { BrandLogo } from '../ui/BrandLogo'
import { Button } from '../ui/Button'
import { MobileMenu } from './MobileMenu'
import { cn } from '../../lib/cn'
import { trackEvent } from '../../lib/analytics'

const NAV_ITEMS = [
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#projects' },
  { label: 'Our Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Planning & FAQ', href: '#planning' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false)
    menuButtonRef.current?.focus()
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          isScrolled
            ? 'bg-ivory/95 backdrop-blur-md border-b border-stone/60 py-3.5 shadow-xs'
            : 'bg-transparent py-5 sm:py-6'
        )}
      >
        <Container className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <BrandLogo />

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-8 xl:gap-10"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() =>
                  trackEvent('service_anchor_clicked', { target: item.href })
                }
                className="relative font-sans text-sm font-medium text-ink hover:text-olive-dark transition-colors py-1 focus-ring rounded-xs group"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-olive transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Header CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <Button
              href="#contact"
              variant="primary"
              size="sm"
              showArrow
              onClick={() => trackEvent('primary_cta_click', { location: 'header' })}
            >
              Request a Free Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="#contact"
              onClick={() =>
                trackEvent('primary_cta_click', { location: 'header_mobile_compact' })
              }
              className="text-xs font-sans font-medium px-3 py-1.5 bg-ink text-ivory rounded-xs"
            >
              Consultation
            </a>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Open mobile menu"
              className="p-2 -mr-2 text-ink hover:text-olive focus-ring rounded-xs cursor-pointer"
            >
              <Menu size={24} strokeWidth={1.75} />
            </button>
          </div>
        </Container>
      </header>

      {/* Accessible Mobile Menu Overlay */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={handleCloseMenu}
        navItems={NAV_ITEMS}
      />
    </>
  )
}

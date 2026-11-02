import { useState, useEffect, useRef } from 'react'
import { Container } from '../ui/Container'
import { BrandLogo } from '../ui/BrandLogo'
import { Button } from '../ui/Button'
import { NavigationSidebar } from './NavigationSidebar'
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCloseMenu = () => {
    setIsSidebarOpen(false)
    menuButtonRef.current?.focus()
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          isScrolled
            ? 'bg-ivory/95 backdrop-blur-md border-b border-stone/60 py-3.5 shadow-xs'
            : 'bg-gradient-to-b from-ink/70 via-ink/30 to-transparent py-5 sm:py-6'
        )}
      >
        <Container className="flex items-center justify-between">
          {/* Brand Wordmark (adapts to background brightness) */}
          <BrandLogo inverted={!isScrolled} />

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
                className={cn(
                  'relative font-sans text-sm font-medium transition-colors py-1 focus-ring rounded-xs group',
                  isScrolled
                    ? 'text-ink hover:text-olive-dark'
                    : 'text-stone/90 hover:text-ivory'
                )}
              >
                <span>{item.label}</span>
                <span
                  className={cn(
                    'absolute bottom-0 left-0 w-0 h-[1.5px] transition-all duration-200 group-hover:w-full',
                    isScrolled ? 'bg-olive' : 'bg-stone'
                  )}
                />
              </a>
            ))}
          </nav>

          {/* Desktop CTA & Menu Toggle */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              href="#contact"
              variant="primary"
              size="sm"
              showArrow
              onClick={() => trackEvent('primary_cta_click', { location: 'header' })}
            >
              Request a Consultation
            </Button>

            {/* Architectural Desktop Menu Button */}
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsSidebarOpen(true)}
              aria-expanded={isSidebarOpen}
              aria-label="Open full navigation directory"
              className={cn(
                'group flex items-center gap-2.5 px-3.5 py-2 rounded-xs border transition-all duration-300 focus-ring cursor-pointer shadow-xs',
                isScrolled
                  ? 'border-stone/70 bg-paper/80 hover:bg-stone/30 hover:border-olive text-ink backdrop-blur-sm'
                  : 'border-white/25 bg-black/25 hover:bg-black/40 hover:border-white/50 text-ivory backdrop-blur-md'
              )}
            >
              <span className="font-sans text-[11px] uppercase tracking-[0.2em] font-semibold">
                Menu
              </span>
              <div className="flex flex-col gap-1 w-4.5 justify-center items-end" aria-hidden="true">
                <span
                  className={cn(
                    'h-[1.5px] w-full transition-all duration-300 group-hover:w-3',
                    isScrolled ? 'bg-ink group-hover:bg-olive' : 'bg-ivory group-hover:bg-white'
                  )}
                />
                <span
                  className={cn(
                    'h-[1.5px] w-3 transition-all duration-300 group-hover:w-full',
                    isScrolled ? 'bg-olive' : 'bg-stone'
                  )}
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu Button & Compact CTA */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="#contact"
              onClick={() =>
                trackEvent('primary_cta_click', { location: 'header_mobile_compact' })
              }
              className="text-xs font-sans font-medium px-3 py-1.5 bg-ivory text-ink rounded-xs font-semibold"
            >
              Consultation
            </a>
            <button
              type="button"
              onClick={() => setIsSidebarOpen(true)}
              aria-expanded={isSidebarOpen}
              aria-label="Open mobile menu"
              className={cn(
                'group flex items-center gap-2 px-2.5 py-1.5 rounded-xs border transition-all duration-300 focus-ring cursor-pointer',
                isScrolled
                  ? 'border-stone/70 bg-paper text-ink hover:border-olive'
                  : 'border-white/25 bg-black/30 text-ivory hover:border-white/50 backdrop-blur-sm'
              )}
            >
              <span className="font-sans text-[10px] uppercase tracking-[0.16em] font-semibold">
                Menu
              </span>
              <div className="flex flex-col gap-1 w-3.5 justify-center items-end" aria-hidden="true">
                <span className={cn('h-[1.5px] w-full', isScrolled ? 'bg-ink' : 'bg-ivory')} />
                <span className={cn('h-[1.5px] w-2', isScrolled ? 'bg-olive' : 'bg-stone')} />
              </div>
            </button>
          </div>
        </Container>
      </header>

      {/* Accessible Full-Screen Animated Navigation Sidebar */}
      <NavigationSidebar
        isOpen={isSidebarOpen}
        onClose={handleCloseMenu}
      />
    </>
  )
}

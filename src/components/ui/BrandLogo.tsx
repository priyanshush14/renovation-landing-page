import type { AnchorHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

interface BrandLogoProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  inverted?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function BrandLogo({
  inverted = false,
  size = 'md',
  className,
  ...props
}: BrandLogoProps) {
  return (
    <a
      href="#top"
      className={cn(
        'group inline-flex items-center gap-3 select-none focus-ring rounded-xs',
        className
      )}
      aria-label="Hearth & Haven Renovations - Return to top"
      {...props}
    >
      {/* Refined architectural portal icon */}
      <div
        className={cn(
          'relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105',
          size === 'sm' ? 'w-7 h-7' : size === 'lg' ? 'w-10 h-10' : 'w-8 h-8',
          inverted ? 'bg-ivory text-ink' : 'bg-ink text-ivory'
        )}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
          aria-hidden="true"
        >
          {/* Architectural portal / hearth arch */}
          <path d="M6 20V8a6 6 0 0 1 12 0v12" />
          <line x1="6" y1="14" x2="18" y2="14" strokeWidth="1.25" stroke="#85866D" />
          <circle cx="12" cy="10" r="1.2" fill="currentColor" />
        </svg>
      </div>

      {/* Typographic wordmark */}
      <div className="flex flex-col text-left">
        <span
          className={cn(
            'font-serif tracking-[0.08em] leading-tight font-medium',
            size === 'sm' ? 'text-base' : size === 'lg' ? 'text-xl' : 'text-lg',
            inverted ? 'text-ivory' : 'text-ink'
          )}
        >
          HEARTH &amp; HAVEN
        </span>
        <span
          className={cn(
            'font-sans text-[9px] tracking-[0.26em] uppercase leading-none font-semibold',
            inverted ? 'text-stone' : 'text-muted'
          )}
        >
          RENOVATIONS
        </span>
      </div>
    </a>
  )
}

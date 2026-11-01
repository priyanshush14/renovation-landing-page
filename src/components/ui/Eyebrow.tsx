import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface EyebrowProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
  variant?: 'olive' | 'muted' | 'ink'
}

export function Eyebrow({
  children,
  className,
  variant = 'olive',
  ...props
}: EyebrowProps) {
  const variantStyles = {
    olive: 'text-olive',
    muted: 'text-muted',
    ink: 'text-ink',
  }

  return (
    <span
      className={cn(
        'inline-block font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em]',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

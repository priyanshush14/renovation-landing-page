import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  variant?: 'stone' | 'ink' | 'subtle'
}

export function Divider({
  variant = 'stone',
  className,
  ...props
}: DividerProps) {
  const variantStyles = {
    stone: 'border-stone/60',
    ink: 'border-ink/20',
    subtle: 'border-stone/30',
  }

  return (
    <hr
      className={cn('w-full border-t my-0', variantStyles[variant], className)}
      {...props}
    />
  )
}

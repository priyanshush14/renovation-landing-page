import type { HTMLAttributes } from 'react'
import { Eyebrow } from './Eyebrow'
import { cn } from '../../lib/cn'

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  inverted?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  inverted = false,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
      {...props}
    >
      {eyebrow && (
        <Eyebrow
          variant={inverted ? 'muted' : 'olive'}
          className="mb-3 sm:mb-4"
        >
          {eyebrow}
        </Eyebrow>
      )}

      <h2
        className={cn(
          'font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.12]',
          inverted ? 'text-ivory' : 'text-ink'
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            'mt-4 sm:mt-5 font-sans text-base sm:text-lg leading-relaxed max-w-2xl font-light',
            inverted ? 'text-stone' : 'text-muted'
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}

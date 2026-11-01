import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  size?: 'default' | 'narrow' | 'wide'
}

export function Container({
  children,
  className,
  size = 'default',
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-16',
        size === 'default' && 'max-w-[1280px]',
        size === 'narrow' && 'max-w-[840px]',
        size === 'wide' && 'max-w-[1400px]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

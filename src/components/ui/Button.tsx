import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '../../lib/cn'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'text'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  showArrow?: boolean
  children: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      href,
      showArrow = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'group inline-flex items-center justify-center font-sans font-medium transition-all duration-200 cursor-pointer disabled:pointer-events-none disabled:opacity-50 select-none focus-ring rounded-[2px]'

    const variantStyles = {
      primary:
        'bg-ink text-ivory hover:bg-olive-dark active:scale-[0.985] shadow-xs',
      secondary:
        'border border-ink text-ink bg-transparent hover:bg-ink hover:text-ivory active:scale-[0.985]',
      ghost:
        'bg-transparent text-ink hover:bg-stone/20 active:scale-[0.985]',
      text:
        'bg-transparent text-ink hover:text-olive-dark underline underline-offset-4 decoration-stone hover:decoration-olive-dark p-0 h-auto',
    }

    const sizeStyles = {
      sm: 'text-xs px-3.5 py-2 gap-1.5',
      md: 'text-sm px-5 py-3 gap-2',
      lg: 'text-base px-7 py-3.5 gap-2.5',
    }

    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      variant !== 'text' && sizeStyles[size],
      className
    )

    const content = (
      <>
        <span>{children}</span>
        {showArrow && (
          <ArrowRight
            size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16}
            strokeWidth={1.75}
            className="transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        )}
      </>
    )

    if (href) {
      return (
        <a href={href} className={combinedClassName}>
          {content}
        </a>
      )
    }

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={combinedClassName}
        {...props}
      >
        {content}
      </button>
    )
  }
)

Button.displayName = 'Button'

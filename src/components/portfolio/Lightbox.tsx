import { useEffect, useRef } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import type { GalleryItem } from '../../types'

interface LightboxProps {
  isOpen: boolean
  items: GalleryItem[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export function Lightbox({
  isOpen,
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const shouldReduceMotion = useReducedMotion()
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const activeItem = items[currentIndex]

  // Keyboard navigation: Escape to close, Left/Right arrow keys
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft') {
        onPrev()
      } else if (e.key === 'ArrowRight') {
        onNext()
      }
    }

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    // Focus close button on mount
    setTimeout(() => {
      closeButtonRef.current?.focus()
    }, 50)

    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose, onPrev, onNext])

  if (!isOpen || !activeItem) return null

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Image gallery lightbox"
        className="fixed inset-0 z-60 flex items-center justify-center bg-ink/95 backdrop-blur-md p-4 sm:p-8"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close image lightbox (Escape)"
          className="absolute top-5 right-5 sm:top-7 sm:right-7 z-20 p-2.5 rounded-full bg-ivory/10 hover:bg-ivory/20 text-ivory transition-colors focus-ring cursor-pointer"
        >
          <X size={24} />
        </button>

        {/* Counter */}
        <div className="absolute top-6 left-6 z-20 text-xs font-mono uppercase tracking-widest text-stone/75">
          {currentIndex + 1} / {items.length}
        </div>

        {/* Previous Button */}
        {items.length > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onPrev()
            }}
            aria-label="Previous image (Left arrow)"
            className="absolute left-3 sm:left-6 z-20 p-3 rounded-full bg-ivory/10 hover:bg-ivory/25 text-ivory transition-colors focus-ring cursor-pointer"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {/* Next Button */}
        {items.length > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onNext()
            }}
            aria-label="Next image (Right arrow)"
            className="absolute right-3 sm:right-6 z-20 p-3 rounded-full bg-ivory/10 hover:bg-ivory/25 text-ivory transition-colors focus-ring cursor-pointer"
          >
            <ChevronRight size={24} />
          </button>
        )}

        {/* Image Display */}
        <motion.div
          key={activeItem.url}
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-5xl max-h-[85vh] flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={activeItem.url}
            alt={activeItem.alt}
            className="max-h-[75vh] w-auto max-w-full object-contain rounded-xs shadow-2xl"
          />
          {activeItem.caption && (
            <p className="mt-4 text-center font-sans text-xs sm:text-sm text-stone/85 max-w-xl font-light">
              {activeItem.caption}
            </p>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

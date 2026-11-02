import { useState, useRef, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { getAssetUrl } from '../../lib/assets'
import { trackEvent } from '../../lib/analytics'

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  const videoSrc = getAssetUrl('videos/hearth-haven-hero.mp4')
  const posterSrc = getAssetUrl('images/hero-architectural.jpg')

  // Safely initiate continuous looped video playback
  useEffect(() => {
    const video = videoRef.current
    if (!video || shouldReduceMotion) return

    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay policy prevented playback; poster remains visible
      })
    }
  }, [shouldReduceMotion])

  // Animation variants adhering to the 550-800ms architectural motion spec
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  }

  return (
    <section
      id="top"
      aria-label="Hero Section"
      className="relative min-h-[75svh] sm:min-h-[85svh] lg:min-h-[92svh] xl:min-h-[96svh] flex items-center justify-center overflow-hidden bg-ink"
    >
      {/* Background Video / Architectural Fallback Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Subtle initial scale settle: 1.04 to 1.0 */}
        <motion.div
          initial={shouldReduceMotion ? { scale: 1 } : { scale: 1.04 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] as const }}
          className="w-full h-full relative"
        >
          {/* Fallback poster image underneath */}
          <img
            src={posterSrc}
            alt="Warm modern residential architecture at twilight"
            className="absolute inset-0 w-full h-full object-cover object-center"
            fetchPriority="high"
            loading="eager"
            width={1920}
            height={1080}
          />

          {!shouldReduceMotion && !hasError && (
            <video
              ref={videoRef}
              src={videoSrc}
              poster={posterSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
              onLoadedData={() => setVideoLoaded(true)}
              onError={() => setHasError(true)}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
                videoLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}

          {/* Restrained Architectural Overlay to guarantee text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/65 to-ink/40" />
          <div className="absolute inset-0 bg-ink/25" />
        </motion.div>
      </div>

      {/* Hero Foreground Content */}
      <Container className="relative z-10 pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28">
        <div className="max-w-3xl">
          <motion.div
            variants={shouldReduceMotion ? undefined : containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4 sm:mb-5">
              <span className="w-6 h-[1.5px] bg-stone/80 inline-block" />
              <span className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-stone">
                Thoughtful Residential Renovation · Austin, TX
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] text-ivory leading-[1.08] tracking-tight text-balance"
            >
              A more considered way to live.
            </motion.h1>

            {/* Supporting Statement */}
            <motion.p
              variants={itemVariants}
              className="mt-5 sm:mt-6 font-sans text-base sm:text-lg md:text-xl text-stone/90 font-light leading-relaxed max-w-2xl text-pretty"
            >
              Thoughtful design, skilled craftsmanship and a renovation experience
              shaped around your home and your priorities.
            </motion.p>

            {/* Conversion CTA Group */}
            <motion.div
              variants={itemVariants}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <Button
                href="#contact"
                variant="primary"
                size="lg"
                showArrow
                onClick={() =>
                  trackEvent('primary_cta_click', { location: 'hero_video_primary' })
                }
              >
                Request a Consultation
              </Button>

              <Button
                href="#projects"
                variant="secondary"
                size="lg"
                onClick={() =>
                  trackEvent('secondary_cta_click', { location: 'hero_video_secondary' })
                }
                className="bg-ivory/10 hover:bg-ivory/20 text-ivory border-stone/30 backdrop-blur-xs"
              >
                Explore Our Work
              </Button>
            </motion.div>

            {/* Subtle editorial trust footnote */}
            <motion.div
              variants={itemVariants}
              className="mt-10 pt-6 border-t border-stone/25 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-stone/80 font-sans"
            >
              <span className="flex items-center gap-1.5 font-medium text-stone">
                <span className="w-1.5 h-1.5 rounded-full bg-olive inline-block" />
                Greater Austin &amp; Hill Country
              </span>
              <span>•</span>
              <span>Kitchens, Bathrooms &amp; Whole-Home</span>
              <span>•</span>
              <span>Dedicated Project Management</span>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const textContainerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current || !heroRef.current || !bgRef.current || !textContainerRef.current) return

    const ctx = gsap.context(() => {
      // Pin the hero section for 50vh of additional scroll
      const pinTrigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: '+=50vh',
        pin: heroRef.current,
        scrub: 0.5,
      })

      // Background scale and blur on scroll
      gsap.to(bgRef.current, {
        scale: 1.08,
        filter: 'blur(4px)',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=50vh',
          scrub: 0.5,
        },
      })

      // Text fade and move up on scroll
      const textElements = textContainerRef.current!.children
      gsap.to(textElements, {
        opacity: 0,
        y: -40,
        stagger: 0.05,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=40vh',
          scrub: 0.5,
        },
      })

      return () => {
        pinTrigger.kill()
      }
    }, containerRef)

    return () => ctx.revert()
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="relative">
      <section
        ref={heroRef}
        className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div ref={bgRef} className="absolute inset-0 will-change-transform">
          <img
            src="/hero-bg.jpg"
            alt="NOVA Festival"
            className="w-full h-full object-cover"
          />
          {/* Hero overlay gradient */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(10,10,15,0.3) 0%, rgba(10,10,15,0.85) 100%)' }}
          />
        </div>

        {/* Content */}
        <div
          ref={textContainerRef}
          className="relative z-10 text-center px-[clamp(1rem,4vw,3rem)] max-w-[800px] mx-auto pt-20"
        >
          {/* Overline */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.2em' }}
            animate={{ opacity: 1, letterSpacing: '0.12em' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] as [number, number, number, number] }}
            className="font-grotesk text-xs uppercase text-nova-gold mb-6"
            style={{ letterSpacing: '0.12em' }}
          >
            5 — 9 JUILLET 2025 &middot; LYON, FRANCE
          </motion.p>

          {/* Main Headline */}
          <h1
            className="font-playfair font-bold text-nova-white text-center leading-none"
            style={{
              fontSize: 'clamp(3.5rem, 8vw, 7rem)',
              letterSpacing: '-0.03em',
              textShadow: '0 0 80px rgba(212,168,83,0.15)',
            }}
          >
            <span className="block">
              {'L\'ART'.split('').map((char, i) => (
                <motion.span
                  key={`l1-${i}`}
                  initial={{ opacity: 0, y: 60, rotateX: 15 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 1.2,
                    delay: 0.4 + i * 0.05,
                    ease: [0.19, 1, 0.22, 1] as [number, number, number, number],
                  }}
                  className="inline-block"
                  style={{ transformOrigin: 'center bottom' }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </span>
            <span className="block mt-2">
              {'S\'EVEILLE'.split('').map((char, i) => (
                <motion.span
                  key={`l2-${i}`}
                  initial={{ opacity: 0, y: 60, rotateX: 15 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 1.2,
                    delay: 0.7 + i * 0.05,
                    ease: [0.19, 1, 0.22, 1] as [number, number, number, number],
                  }}
                  className="inline-block"
                  style={{ transformOrigin: 'center bottom' }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 2.2,
              ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
            }}
            className="font-inter text-lg text-nova-cream max-w-[560px] mx-auto mt-10 leading-relaxed"
          >
            Un festival pluridisciplinaire ou la musique, les arts numeriques, le theatre et la danse se rencontrent pour cinq jours d'immersion totale.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 2.8,
              ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 2.8,
                ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
              }}
            >
              <Link
                to="/programmation"
                className="inline-flex items-center font-inter font-medium bg-nova-gold text-nova-black rounded-full transition-all duration-300 hover:scale-[1.03] hover:brightness-110"
                style={{ borderRadius: '9999px', padding: '14px 32px' }}
              >
                Decouvrir la Programmation
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 2.9,
                ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
              }}
            >
              <Link
                to="/billetterie"
                className="inline-flex items-center font-inter font-medium text-nova-gold border border-nova-gold rounded-full transition-all duration-300 hover:bg-nova-gold hover:text-nova-black"
                style={{ borderRadius: '9999px', padding: '14px 32px' }}
              >
                Acheter vos Billets
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 3.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-nova-muted"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="4,6 8,10 12,6" />
            </svg>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

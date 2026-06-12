import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  {
    number: 120000,
    suffix: '+',
    label: 'Visiteurs en 2024',
    description: 'Un record historique pour notre 7e edition',
  },
  {
    number: 200,
    suffix: '+',
    label: 'Artistes & Createurs',
    description: 'Musique, danse, theatre, arts numeriques',
  },
  {
    number: 5,
    suffix: '',
    label: "Jours d'Immersion",
    description: 'Du 5 au 9 juillet 2025',
  },
  {
    number: 30,
    suffix: '+',
    label: 'Lieux & Espaces',
    description: 'Scenes, galeries, espaces publics',
  },
]

function AnimatedCounter({ target, suffix, isInView }: { target: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    const duration = 2000
    const start = performance.now()

    const animate = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - (1 - progress) * (1 - progress) // power2.out
      const current = Math.floor(eased * target)
      setCount(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, target])

  return (
    <span>
      {target >= 1000 ? count.toLocaleString('fr-FR') : count}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      ref={ref}
      className="py-[clamp(4rem,8vh,8rem)] border-t border-[rgba(212,168,83,0.08)] bg-nova-black"
    >
      <div className="max-w-[1280px] mx-auto px-[clamp(1rem,4vw,3rem)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.19, 1, 0.22, 1] as [number, number, number, number],
              }}
              className="text-center"
            >
              <span
                className="font-grotesk font-bold text-nova-gold tabular-nums"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
              >
                <AnimatedCounter target={stat.number} suffix={stat.suffix} isInView={isInView} />
              </span>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="font-inter text-base text-nova-cream mt-2"
              >
                {stat.label}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="font-inter text-sm text-nova-muted mt-1"
              >
                {stat.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const events = [
  {
    image: '/performance-1.jpg',
    category: 'ART NUMERIQUE',
    date: '5 JUILLET',
    title: 'Lumieres Synthetiques',
    venue: 'Halle Tony Garnier',
  },
  {
    image: '/performance-2.jpg',
    category: 'THEATRE',
    date: '6 JUILLET',
    title: 'Le Jardin des Ombres',
    venue: 'Theatre de la Croix-Rousse',
  },
  {
    image: '/performance-3.jpg',
    category: 'DANSE',
    date: '7 JUILLET',
    title: 'Corps et Resonance',
    venue: 'Maison de la Danse',
  },
  {
    image: '/hero-bg.jpg',
    category: 'MUSIQUE',
    date: '8 JUILLET',
    title: 'Symphonie Nova',
    venue: 'Auditorium de Lyon',
  },
]

export default function ProgrammationSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-[clamp(4rem,8vh,8rem)] bg-nova-navy">
      <div className="max-w-[1280px] mx-auto px-[clamp(1rem,4vw,3rem)]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] as [number, number, number, number] }}
              className="flex items-center gap-3 mb-3"
            >
              <div className="w-5 h-[1px] bg-nova-gold" />
              <span className="font-grotesk text-xs font-medium uppercase tracking-[0.12em] text-nova-gold">
                Programme
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.19, 1, 0.22, 1] as [number, number, number, number] }}
              className="font-playfair font-bold text-nova-white"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.05 }}
            >
              Cette Annee
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              to="/programmation"
              className="inline-flex items-center gap-2 text-nova-cream hover:text-nova-gold transition-colors duration-300 font-inter text-sm"
            >
              Voir tout le programme
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Cards Row */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(212,168,83,0.3) transparent',
          }}
        >
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: i * 0.12,
                ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
              }}
              className="group flex-shrink-0 snap-start"
              style={{ width: '340px', maxWidth: '85vw' }}
            >
              <div
                className="relative overflow-hidden rounded-2xl transition-all duration-350 border-subtle hover:border-accent-gold"
                style={{
                  background: 'linear-gradient(135deg, rgba(26,26,46,0.9) 0%, rgba(18,18,30,0.95) 100%)',
                  transition: 'transform 350ms cubic-bezier(0.215, 0.61, 0.355, 1), box-shadow 350ms cubic-bezier(0.215, 0.61, 0.355, 1)',
                }}
              >
                {/* Image */}
                <div className="relative h-[200px] overflow-hidden rounded-t-2xl">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-350 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Category badge */}
                  <span
                    className="absolute top-3 left-3 font-grotesk text-[11px] font-medium uppercase tracking-wide bg-nova-gold text-nova-black rounded-full"
                    style={{ padding: '4px 12px' }}
                  >
                    {event.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="font-grotesk text-xs uppercase tracking-[0.1em] text-nova-gold mb-2">
                    {event.date}
                  </p>
                  <h3 className="font-playfair text-xl font-semibold text-nova-white mb-1">
                    {event.title}
                  </h3>
                  <p className="font-inter text-sm text-nova-muted">
                    {event.venue}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll hint - visible on mobile/tablet */}
        <p className="mt-4 font-inter text-xs text-nova-muted lg:hidden text-center">
          Faites defiler &rarr;
        </p>
      </div>
    </section>
  )
}

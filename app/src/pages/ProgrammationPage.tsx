import { useState, useMemo, useEffect } from 'react'
import { motion } from 'framer-motion'

const events = [
  { image: '/performance-1.jpg', category: 'ART NUMERIQUE', date: '5 JUILLET', time: '19h00', title: 'Lumieres Synthetiques', venue: 'Halle Tony Garnier' },
  { image: '/performance-2.jpg', category: 'THEATRE', date: '6 JUILLET', time: '20h30', title: 'Le Jardin des Ombres', venue: 'Theatre de la Croix-Rousse' },
  { image: '/performance-3.jpg', category: 'DANSE', date: '7 JUILLET', time: '18h00', title: 'Corps et Resonance', venue: 'Maison de la Danse' },
  { image: '/hero-bg.jpg', category: 'MUSIQUE', date: '8 JUILLET', time: '21h00', title: 'Symphonie Nova', venue: 'Auditorium de Lyon' },
  { image: '/hero-portrait-1.jpg', category: 'MUSIQUE', date: '5 JUILLET', time: '21h30', title: 'Recital Sophia Moreau', venue: 'Auditorium de Lyon' },
  { image: '/hero-portrait-2.jpg', category: 'DANSE', date: '6 JUILLET', time: '19h00', title: 'Flux — Maya Chen', venue: 'Maison de la Danse' },
  { image: '/hero-portrait-3.jpg', category: 'ART NUMERIQUE', date: '7 JUILLET', time: '20h00', title: 'Installation Luka Novak', venue: 'Halle Tony Garnier' },
  { image: '/artist-4.jpg', category: 'JAZZ', date: '8 JUILLET', time: '19h30', title: 'Elena Rossi Trio', venue: 'Theatre de la Croix-Rousse' },
]

const dates = ['Tous', '5 JUILLET', '6 JUILLET', '7 JUILLET', '8 JUILLET']

export default function ProgrammationPage() {
  const [activeDate, setActiveDate] = useState('Tous')

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const filtered = useMemo(() => {
    if (activeDate === 'Tous') return events
    return events.filter((e) => e.date === activeDate)
  }, [activeDate])

  return (
    <div className="pt-24 pb-[clamp(4rem,8vh,8rem)] min-h-[100dvh] bg-nova-navy">
      <div className="max-w-[1280px] mx-auto px-[clamp(1rem,4vw,3rem)]">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-5 h-[1px] bg-nova-gold" />
            <span className="font-grotesk text-xs font-medium uppercase tracking-[0.12em] text-nova-gold">
              Programmation
            </span>
          </div>
          <h1
            className="font-playfair font-bold text-nova-white mb-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.05 }}
          >
            Le Programme Complet
          </h1>
          <p className="font-inter text-nova-cream max-w-[560px]">
            Quatre jours de musique, arts numeriques, theatre et danse. Retrouvez ici l'ensemble
            de la programmation du NOVA Festival.
          </p>
        </div>

        {/* Date filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          {dates.map((d) => (
            <button
              key={d}
              onClick={() => setActiveDate(d)}
              className={`px-5 py-2 rounded-full text-sm font-grotesk uppercase tracking-wide transition-all duration-200 ${
                activeDate === d
                  ? 'bg-nova-gold text-nova-black'
                  : 'border border-white/15 text-nova-cream hover:border-nova-gold'
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group overflow-hidden rounded-2xl border-subtle hover:border-accent-gold transition-all duration-350"
              style={{ background: 'linear-gradient(135deg, rgba(26,26,46,0.9) 0%, rgba(18,18,30,0.95) 100%)' }}
            >
              <div className="relative h-[200px] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-350 group-hover:scale-105"
                  loading="lazy"
                />
                <span
                  className="absolute top-3 left-3 font-grotesk text-[11px] font-medium uppercase tracking-wide bg-nova-gold text-nova-black rounded-full"
                  style={{ padding: '4px 12px' }}
                >
                  {event.category}
                </span>
              </div>
              <div className="p-6">
                <p className="font-grotesk text-xs uppercase tracking-[0.1em] text-nova-gold mb-2">
                  {event.date} &middot; {event.time}
                </p>
                <h3 className="font-playfair text-xl font-semibold text-nova-white mb-1">
                  {event.title}
                </h3>
                <p className="font-inter text-sm text-nova-muted">{event.venue}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

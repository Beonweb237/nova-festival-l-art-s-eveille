import { useState, useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const events = [
  { image: '/performance-1.jpg', category: 'ART NUMERIQUE', date: '5 JUILLET', time: '19h00', title: 'Lumieres Synthetiques', venue: 'Halle Tony Garnier', artistSlug: 'luka-novak', featured: true, desc: 'Une installation immersive ou lumiere et son fusionnent pour creer un paysage sensoriel inedit.' },
  { image: '/performance-2.jpg', category: 'THEATRE', date: '6 JUILLET', time: '20h30', title: 'Le Jardin des Ombres', venue: 'Theatre de la Croix-Rousse', artistSlug: null, featured: true, desc: 'Une piece intimiste explorant la memoire et la perte, portee par une scenographie minimaliste.' },
  { image: '/performance-3.jpg', category: 'DANSE', date: '7 JUILLET', time: '18h00', title: 'Corps et Resonance', venue: 'Maison de la Danse', artistSlug: 'maya-chen', featured: true, desc: 'Une chorégraphie contemporaine qui interroge le rapport du corps a l\'espace sonore.' },
  { image: '/hero-bg.jpg', category: 'MUSIQUE', date: '8 JUILLET', time: '21h00', title: 'Symphonie Nova', venue: 'Auditorium de Lyon', artistSlug: null, featured: false, desc: '' },
  { image: '/hero-portrait-1.jpg', category: 'MUSIQUE', date: '5 JUILLET', time: '21h30', title: 'Recital Sophia Moreau', venue: 'Auditorium de Lyon', artistSlug: 'sophia-moreau', featured: false, desc: '' },
  { image: '/hero-portrait-2.jpg', category: 'DANSE', date: '6 JUILLET', time: '19h00', title: 'Flux — Maya Chen', venue: 'Maison de la Danse', artistSlug: 'maya-chen', featured: false, desc: '' },
  { image: '/hero-portrait-3.jpg', category: 'ART NUMERIQUE', date: '7 JUILLET', time: '20h00', title: 'Installation Luka Novak', venue: 'Halle Tony Garnier', artistSlug: 'luka-novak', featured: false, desc: '' },
  { image: '/artist-4.jpg', category: 'JAZZ', date: '8 JUILLET', time: '19h30', title: 'Elena Rossi Trio', venue: 'Theatre de la Croix-Rousse', artistSlug: 'elena-rossi', featured: false, desc: '' },
]

const dates = ['Tous', '5 JUILLET', '6 JUILLET', '7 JUILLET', '8 JUILLET']
const genres = ['Tous', 'ART NUMERIQUE', 'THEATRE', 'DANSE', 'MUSIQUE', 'JAZZ']

export default function ProgrammationPage() {
  const [activeDate, setActiveDate] = useState('Tous')
  const [activeGenre, setActiveGenre] = useState('Tous')

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const featured = events.filter((e) => e.featured)

  const filtered = useMemo(() => {
    return events.filter((e) => {
      const matchesDate = activeDate === 'Tous' || e.date === activeDate
      const matchesGenre = activeGenre === 'Tous' || e.category === activeGenre
      return matchesDate && matchesGenre
    })
  }, [activeDate, activeGenre])

  return (
    <div className="pt-24 pb-[clamp(4rem,8vh,8rem)] min-h-[100dvh] bg-nova-navy">
      <div className="max-w-[1280px] mx-auto px-[clamp(1rem,4vw,3rem)]">
        {/* Header */}
        <div className="mb-14 max-w-[720px]">
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

        {/* Featured events */}
        <div className="mb-16">
          <h2 className="font-playfair text-2xl font-semibold text-nova-white mb-8">Temps forts</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featured.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group overflow-hidden rounded-2xl border-subtle hover:border-accent-gold transition-all duration-350"
                style={{ background: 'linear-gradient(135deg, rgba(26,26,46,0.9) 0%, rgba(18,18,30,0.95) 100%)' }}
              >
                <div className="relative h-[260px] overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
                  <h3 className="font-playfair text-xl font-semibold text-nova-white mb-2">
                    {event.title}
                  </h3>
                  <p className="font-inter text-sm text-nova-muted mb-3">{event.desc}</p>
                  <p className="font-inter text-sm text-nova-cream">{event.venue}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="mb-4">
          <p className="font-grotesk text-xs uppercase tracking-[0.1em] text-nova-muted mb-2">Filtrer par date</p>
          <div className="flex flex-wrap gap-3">
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
        </div>
        <div className="mb-10">
          <p className="font-grotesk text-xs uppercase tracking-[0.1em] text-nova-muted mb-2">Filtrer par genre</p>
          <div className="flex flex-wrap gap-3">
            {genres.map((g) => (
              <button
                key={g}
                onClick={() => setActiveGenre(g)}
                className={`px-5 py-2 rounded-full text-sm font-grotesk uppercase tracking-wide transition-all duration-200 ${
                  activeGenre === g
                    ? 'bg-nova-gold text-nova-black'
                    : 'border border-white/15 text-nova-cream hover:border-nova-gold'
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
                <p className="font-inter text-sm text-nova-muted mb-2">{event.venue}</p>
                {event.artistSlug && (
                  <Link
                    to="/artistes"
                    className="inline-flex items-center gap-1 text-xs font-grotesk uppercase tracking-wide text-nova-gold hover:text-nova-white transition-colors duration-200"
                  >
                    Voir l'artiste <ArrowRight size={12} />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div
          className="rounded-2xl p-10 text-center border-subtle"
          style={{ background: 'linear-gradient(135deg, rgba(26,26,46,0.9) 0%, rgba(18,18,30,0.95) 100%)' }}
        >
          <h2 className="font-playfair text-2xl font-semibold text-nova-white mb-3">
            Ne manquez aucune annonce
          </h2>
          <p className="font-inter text-nova-muted mb-6 max-w-[480px] mx-auto">
            Inscrivez-vous pour recevoir la programmation complete et les annonces exclusives du festival.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-[440px] mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              required
              className="flex-1 h-12 px-4 rounded-full bg-nova-charcoal border border-[rgba(212,168,83,0.12)] text-sm text-nova-white placeholder:text-nova-muted outline-none focus:border-nova-gold"
            />
            <button
              type="submit"
              className="h-12 px-6 bg-nova-gold text-nova-black font-grotesk text-sm font-medium rounded-full hover:brightness-110 transition-all duration-200 shrink-0"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

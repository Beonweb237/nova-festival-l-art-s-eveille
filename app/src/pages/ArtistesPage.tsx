import { useState, useMemo, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Search, Instagram, Twitter, Music } from 'lucide-react'

const artists = [
  { image: '/hero-portrait-1.jpg', name: 'Sophia Moreau', genre: 'MUSIQUE CLASSIQUE', bio: 'Pianiste virtuose formee au Conservatoire de Lyon, Sophia Moreau explore les repertoires classiques avec une sensibilite contemporaine qui a conquis les scenes europeennes.', schedule: '5 juillet, 21h30 — Auditorium de Lyon' },
  { image: '/hero-portrait-2.jpg', name: 'Maya Chen', genre: 'DANSE CONTEMPORAINE', bio: 'Chorégraphe sino-francaise, Maya Chen questionne le rapport du corps a l\'espace sonore a travers des pieces immersives saluees par la critique internationale.', schedule: '6 juillet, 19h00 — Maison de la Danse' },
  { image: '/hero-portrait-3.jpg', name: 'Luka Novak', genre: 'ART NUMERIQUE', bio: 'Artiste slovaque specialise dans les installations audiovisuelles interactives, Luka Novak transforme la lumiere et le son en experiences sensorielles totales.', schedule: '7 juillet, 20h00 — Halle Tony Garnier' },
  { image: '/artist-4.jpg', name: 'Elena Rossi', genre: 'JAZZ', bio: 'Trompettiste et compositrice italienne, Elena Rossi puise dans le jazz modal pour creer un univers musical a la fois exigeant et accessible.', schedule: '8 juillet, 19h30 — Theatre de la Croix-Rousse' },
  { image: '/performance-1.jpg', name: 'Collectif Synthetik', genre: 'ART NUMERIQUE', bio: 'Collectif pluridisciplinaire fonde en 2019, Synthetik explore les frontieres entre arts visuels, musique electronique et intelligence artificielle generative.', schedule: '5 juillet, 19h00 — Halle Tony Garnier' },
  { image: '/performance-2.jpg', name: 'Compagnie des Ombres', genre: 'THEATRE', bio: 'Compagnie theatrale reconnue pour ses mises en scene sombres et poetiques, portees par une direction d\'acteurs exigeante.', schedule: '6 juillet, 20h30 — Theatre de la Croix-Rousse' },
  { image: '/performance-3.jpg', name: 'Ensemble Resonance', genre: 'DANSE', bio: 'Compagnie de danse contemporaine reunissant huit interpretes autour d\'un travail sur la resonance corporelle et sonore.', schedule: '7 juillet, 18h00 — Maison de la Danse' },
  { image: '/hero-bg.jpg', name: 'Orchestre Nova', genre: 'MUSIQUE', bio: 'Orchestre symphonique resident du festival, l\'Orchestre Nova interprete chaque annee une creation originale composee pour l\'evenement.', schedule: '8 juillet, 21h00 — Auditorium de Lyon' },
]

const genres = ['Tous', 'MUSIQUE CLASSIQUE', 'DANSE CONTEMPORAINE', 'ART NUMERIQUE', 'JAZZ', 'THEATRE', 'DANSE', 'MUSIQUE']

export default function ArtistesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeGenre, setActiveGenre] = useState('Tous')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filtered = useMemo(() => {
    return artists.filter((a) => {
      const matchesSearch = a.name.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesGenre = activeGenre === 'Tous' || a.genre === activeGenre
      return matchesSearch && matchesGenre
    })
  }, [searchQuery, activeGenre])

  return (
    <div className="pt-24 pb-[clamp(4rem,8vh,8rem)] min-h-[100dvh] bg-nova-black">
      <div className="max-w-[1280px] mx-auto px-[clamp(1rem,4vw,3rem)]">
        {/* Header */}
        <div className="mb-10 max-w-[720px]">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-5 h-[1px] bg-nova-gold" />
            <span className="font-grotesk text-xs font-medium uppercase tracking-[0.12em] text-nova-gold">
              Artistes
            </span>
          </div>
          <h1
            className="font-playfair font-bold text-nova-white mb-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.05 }}
          >
            Les Tetes d'Affiche
          </h1>
          <p className="font-inter text-nova-cream max-w-[560px]">
            Rencontrez les artistes qui font vivre le NOVA Festival cette annee, de la musique
            classique a l'art numerique.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-[400px] mb-6">
          <div className="flex items-center rounded-full border border-white/15 focus-within:border-nova-gold transition-colors duration-200 overflow-hidden">
            <Search size={16} className="text-nova-muted ml-4 shrink-0" />
            <input
              type="text"
              placeholder="Rechercher un artiste..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 h-11 px-3 text-sm bg-transparent text-nova-white placeholder:text-nova-muted outline-none"
            />
          </div>
        </div>

        {/* Genre filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          {genres.map((g) => (
            <button
              key={g}
              onClick={() => setActiveGenre(g)}
              className={`px-4 py-1.5 rounded-full text-xs font-grotesk uppercase tracking-wide transition-all duration-200 ${
                activeGenre === g
                  ? 'bg-nova-gold text-nova-black'
                  : 'border border-white/15 text-nova-cream hover:border-nova-gold'
              }`}
            >
              {g}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((artist, i) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group flex flex-col"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer mb-4">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(transparent 50%, rgba(10,10,15,0.9) 100%)' }}
                />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="font-grotesk text-[11px] uppercase tracking-wide text-nova-gold">
                    {artist.genre}
                  </span>
                  <h3 className="font-playfair text-xl font-semibold text-nova-white mt-1">
                    {artist.name}
                  </h3>
                </div>
                <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight size={20} className="text-nova-gold" />
                </div>
              </div>
              <p className="font-inter text-sm text-nova-muted leading-relaxed mb-3">{artist.bio}</p>
              <p className="font-grotesk text-xs uppercase tracking-wide text-nova-gold mb-3 flex items-center gap-1.5">
                <Music size={12} />
                {artist.schedule}
              </p>
              <div className="flex items-center gap-2 mt-auto">
                <a href="#" className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-nova-muted hover:text-nova-gold hover:border-nova-gold transition-colors duration-200">
                  <Instagram size={14} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-nova-muted hover:text-nova-gold hover:border-nova-gold transition-colors duration-200">
                  <Twitter size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

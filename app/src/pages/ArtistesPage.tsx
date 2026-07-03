import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const artists = [
  { image: '/hero-portrait-1.jpg', name: 'Sophia Moreau', genre: 'MUSIQUE CLASSIQUE' },
  { image: '/hero-portrait-2.jpg', name: 'Maya Chen', genre: 'DANSE CONTEMPORAINE' },
  { image: '/hero-portrait-3.jpg', name: 'Luka Novak', genre: 'ART NUMERIQUE' },
  { image: '/artist-4.jpg', name: 'Elena Rossi', genre: 'JAZZ' },
  { image: '/performance-1.jpg', name: 'Collectif Synthetik', genre: 'ART NUMERIQUE' },
  { image: '/performance-2.jpg', name: 'Compagnie des Ombres', genre: 'THEATRE' },
  { image: '/performance-3.jpg', name: 'Ensemble Resonance', genre: 'DANSE' },
  { image: '/hero-bg.jpg', name: 'Orchestre Nova', genre: 'MUSIQUE' },
]

export default function ArtistesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-24 pb-[clamp(4rem,8vh,8rem)] min-h-[100dvh] bg-nova-black">
      <div className="max-w-[1280px] mx-auto px-[clamp(1rem,4vw,3rem)]">
        {/* Header */}
        <div className="mb-12">
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {artists.map((artist, i) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer"
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

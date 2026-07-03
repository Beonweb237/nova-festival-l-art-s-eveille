import { useEffect } from 'react'
import { motion } from 'framer-motion'

const stats = [
  { value: '5', label: 'Editions depuis 2021' },
  { value: '45 000', label: 'Festivaliers en 2025' },
  { value: '80+', label: 'Artistes programmes' },
  { value: '4', label: 'Scenes emblematiques' },
]

const team = [
  { name: 'Isabelle Marchand', role: 'Directrice Artistique' },
  { name: 'Thomas Laurent', role: 'Directeur General' },
  { name: 'Camille Rousseau', role: 'Programmatrice' },
]

const partners = ['Ville de Lyon', 'Region Auvergne-Rhone-Alpes', 'Fondation des Arts', 'Radio Nova']

export default function AProposPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-24 pb-[clamp(4rem,8vh,8rem)] min-h-[100dvh] bg-nova-navy">
      <div className="max-w-[1280px] mx-auto px-[clamp(1rem,4vw,3rem)]">
        {/* Header */}
        <div className="mb-14 max-w-[720px]">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-5 h-[1px] bg-nova-gold" />
            <span className="font-grotesk text-xs font-medium uppercase tracking-[0.12em] text-nova-gold">
              A Propos
            </span>
          </div>
          <h1
            className="font-playfair font-bold text-nova-white mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.05 }}
          >
            L'Art S'Eveille
          </h1>
          <p className="font-inter text-nova-cream leading-relaxed mb-4">
            Ne en 2021 a Lyon, le NOVA Festival est un rendez-vous pluridisciplinaire qui reunit
            musique, arts numeriques, theatre et danse dans une experience immersive et
            audacieuse. Notre mission : reveler des artistes emergents aux cotes de grands noms
            de la creation contemporaine.
          </p>
          <p className="font-inter text-nova-muted leading-relaxed">
            Chaque edition explore de nouvelles formes d'expression et invite le public a
            redecouvrir l'art sous un jour differe.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 py-10 border-y border-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-playfair text-3xl sm:text-4xl font-bold text-nova-gold mb-1">{stat.value}</p>
              <p className="font-inter text-xs text-nova-muted uppercase tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="font-playfair text-2xl font-semibold text-nova-white mb-8">L'Equipe Organisatrice</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl p-6 border-subtle text-center"
                style={{ background: 'linear-gradient(135deg, rgba(26,26,46,0.9) 0%, rgba(18,18,30,0.95) 100%)' }}
              >
                <h3 className="font-playfair text-lg font-semibold text-nova-white mb-1">{member.name}</h3>
                <p className="font-inter text-sm text-nova-gold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div>
          <h2 className="font-playfair text-2xl font-semibold text-nova-white mb-8">Nos Partenaires</h2>
          <div className="flex flex-wrap gap-4">
            {partners.map((partner) => (
              <span
                key={partner}
                className="px-5 py-3 rounded-full border border-white/15 font-inter text-sm text-nova-cream"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

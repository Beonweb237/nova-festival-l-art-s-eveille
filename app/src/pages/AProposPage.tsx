import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Award, Download, Heart } from 'lucide-react'

const stats = [
  { value: '5', label: 'Editions depuis 2021' },
  { value: '45 000', label: 'Festivaliers en 2025' },
  { value: '80+', label: 'Artistes programmes' },
  { value: '4', label: 'Scenes emblematiques' },
]

const timeline = [
  { year: '2021', event: 'Premiere edition du NOVA Festival, 8 000 festivaliers sur 2 jours et une seule scene.' },
  { year: '2022', event: 'Ouverture de la scene Arts Numeriques, partenariat avec la Ville de Lyon.' },
  { year: '2023', event: 'Passage a 3 jours de programmation, 20 000 festivaliers.' },
  { year: '2024', event: 'Lancement du Pass VIP et de l\'espace lounge, 32 000 festivaliers.' },
  { year: '2025', event: 'Edition record avec 45 000 festivaliers et 80+ artistes sur 4 scenes.' },
]

const team = [
  { name: 'Isabelle Marchand', role: 'Directrice Artistique' },
  { name: 'Thomas Laurent', role: 'Directeur General' },
  { name: 'Camille Rousseau', role: 'Programmatrice' },
]

const awards = [
  { title: 'Prix du Meilleur Festival Emergent', org: 'Les Victoires de la Musique, 2023' },
  { title: 'Trophee de l\'Innovation Culturelle', org: 'Region Auvergne-Rhone-Alpes, 2024' },
  { title: 'Coup de coeur du public', org: 'France Festivals, 2025' },
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
          <p className="font-inter text-nova-muted leading-relaxed mb-4">
            Chaque edition explore de nouvelles formes d'expression et invite le public a
            redecouvrir l'art sous un jour differe.
          </p>
          <p className="font-inter text-nova-muted leading-relaxed">
            Ne d'une idee simple portee par Isabelle Marchand, alors jeune programmatrice
            culturelle, le festival est parti d'un constat : Lyon manquait d'un evenement
            reunissant vraiment toutes les disciplines artistiques contemporaines. Cinq ans plus
            tard, cette conviction a fait du NOVA Festival un rendez-vous incontournable.
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

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="font-playfair text-2xl font-semibold text-nova-white mb-8">Notre Histoire</h2>
          <div className="space-y-6">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-6 items-start"
              >
                <span className="font-playfair text-2xl font-bold text-nova-gold shrink-0 w-20">{item.year}</span>
                <p className="font-inter text-sm text-nova-cream pt-1 border-l border-white/10 pl-6">{item.event}</p>
              </motion.div>
            ))}
          </div>
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

        {/* Awards */}
        <div className="mb-16">
          <h2 className="font-playfair text-2xl font-semibold text-nova-white mb-8 flex items-center gap-2">
            <Award size={22} className="text-nova-gold" />
            Recompenses & Reconnaissances
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {awards.map((award) => (
              <div key={award.title} className="rounded-xl p-6 border-subtle" style={{ background: 'rgba(26,26,46,0.6)' }}>
                <p className="font-playfair text-lg font-semibold text-nova-white mb-2">{award.title}</p>
                <p className="font-inter text-xs text-nova-muted uppercase tracking-wide">{award.org}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Community impact */}
        <div className="mb-16 rounded-2xl p-8 border-subtle" style={{ background: 'linear-gradient(135deg, rgba(26,26,46,0.9) 0%, rgba(18,18,30,0.95) 100%)' }}>
          <div className="flex items-center gap-2 mb-4">
            <Heart size={22} className="text-nova-gold" />
            <h2 className="font-playfair text-2xl font-semibold text-nova-white">Impact Local</h2>
          </div>
          <p className="font-inter text-sm text-nova-cream leading-relaxed max-w-[720px] mb-4">
            Le NOVA Festival genere chaque annee plus de 2,3 millions d'euros de retombees
            economiques locales et collabore avec plus de 40 commercants et artisans lyonnais.
            15% des places sont reservees a des tarifs solidaires pour les publics eloignes de
            la culture.
          </p>
          <button className="inline-flex items-center gap-2 font-grotesk text-sm uppercase tracking-wide text-nova-gold hover:text-nova-white transition-colors duration-200">
            <Download size={16} />
            Telecharger le kit presse
          </button>
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

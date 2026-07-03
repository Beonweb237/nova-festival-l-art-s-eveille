import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Clock, ShieldCheck, HelpCircle, Phone } from 'lucide-react'

const practicalInfo = [
  {
    icon: MapPin,
    title: 'Acces & Plan du Site',
    text: 'Le festival se deroule sur plusieurs lieux emblematiques de Lyon : Halle Tony Garnier, Theatre de la Croix-Rousse, Maison de la Danse et Auditorium de Lyon. Navettes gratuites entre les sites.',
  },
  {
    icon: Clock,
    title: 'Horaires',
    text: 'Ouverture des portes a 17h chaque jour du festival. Les spectacles commencent generalement entre 18h et 21h30. Consultez la programmation pour les horaires precis.',
  },
  {
    icon: ShieldCheck,
    title: 'Reglement',
    text: 'Sacs a dos non autorises sur les scenes principales (consigne disponible). Bouteilles en verre interdites. Controle de securite a l\'entree de chaque site.',
  },
]

const faqs = [
  { q: 'Que puis-je apporter ?', a: 'Une petite bouteille d\'eau vide, votre billet (papier ou telephone), une piece d\'identite.' },
  { q: 'Y a-t-il un parking ?', a: 'Des parkings partenaires sont disponibles a proximite de chaque site, tarif preferentiel avec votre billet.' },
  { q: 'Le festival est-il accessible PMR ?', a: 'Oui, tous les sites disposent d\'acces et de places reservees aux personnes a mobilite reduite.' },
]

export default function InfosPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-24 pb-[clamp(4rem,8vh,8rem)] min-h-[100dvh] bg-nova-black">
      <div className="max-w-[1280px] mx-auto px-[clamp(1rem,4vw,3rem)]">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-5 h-[1px] bg-nova-gold" />
            <span className="font-grotesk text-xs font-medium uppercase tracking-[0.12em] text-nova-gold">
              Infos Pratiques
            </span>
          </div>
          <h1
            className="font-playfair font-bold text-nova-white mb-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.05 }}
          >
            Preparez Votre Visite
          </h1>
          <p className="font-inter text-nova-cream max-w-[560px]">
            Tout ce qu'il faut savoir avant de rejoindre le NOVA Festival.
          </p>
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {practicalInfo.map((info, i) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-8 border-subtle"
              style={{ background: 'linear-gradient(135deg, rgba(26,26,46,0.9) 0%, rgba(18,18,30,0.95) 100%)' }}
            >
              <div className="w-12 h-12 rounded-full bg-nova-gold/10 flex items-center justify-center mb-5">
                <info.icon size={22} className="text-nova-gold" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-nova-white mb-3">{info.title}</h3>
              <p className="font-inter text-sm text-nova-muted leading-relaxed">{info.text}</p>
            </motion.div>
          ))}
        </div>

        {/* FAQ + Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="font-playfair text-2xl font-semibold text-nova-white mb-6 flex items-center gap-2">
              <HelpCircle size={22} className="text-nova-gold" />
              Questions frequentes
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-xl border-subtle p-5" style={{ background: 'rgba(26,26,46,0.6)' }}>
                  <p className="font-inter font-semibold text-nova-white mb-2">{faq.q}</p>
                  <p className="font-inter text-sm text-nova-muted">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl p-8 border-subtle h-fit" style={{ background: 'linear-gradient(135deg, rgba(26,26,46,0.9) 0%, rgba(18,18,30,0.95) 100%)' }}>
            <div className="flex items-center gap-2 mb-4">
              <Phone size={18} className="text-nova-gold" />
              <h3 className="font-playfair text-lg font-semibold text-nova-white">Contact Urgence</h3>
            </div>
            <p className="font-inter text-sm text-nova-muted mb-2">Poste de secours sur chaque site</p>
            <p className="font-grotesk text-nova-gold">+33 4 78 00 00 00</p>
          </div>
        </div>
      </div>
    </div>
  )
}

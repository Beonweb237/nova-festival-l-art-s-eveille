import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Clock, ShieldCheck, HelpCircle, Phone, Accessibility, ParkingCircle, Tent, PackageSearch, Stethoscope } from 'lucide-react'

const practicalInfo = [
  {
    icon: MapPin,
    title: 'Acces & Plan du Site',
    text: 'Le festival se deroule sur plusieurs lieux emblematiques de Lyon : Halle Tony Garnier, Theatre de la Croix-Rousse, Maison de la Danse et Auditorium de Lyon. Navettes gratuites entre les sites toutes les 20 minutes de 17h a minuit.',
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

const accessibilityInfo = [
  'Accès et places reservees PMR sur les 4 sites du festival',
  'Boucles magnetiques disponibles pour les malentendants sur demande',
  'Accompagnateur admis gratuitement sur presentation de la carte mobilite inclusion',
  'Parcours accessible signale depuis chaque parking partenaire',
  'Equipe d\'accueil dediee, joignable au +33 4 78 00 00 01',
]

const additionalInfo = [
  { icon: ParkingCircle, title: 'Parking', text: '4 parkings partenaires a moins de 10 minutes a pied de chaque site, tarif préférentiel de 8€/jour avec votre billet.' },
  { icon: PackageSearch, title: 'Objets trouves', text: 'Point objets trouves centralise a l\'accueil de la Halle Tony Garnier, ouvert de 16h a 1h chaque jour du festival.' },
  { icon: Stethoscope, title: 'Postes de secours', text: 'Un poste de secours est present sur chaque site, signale par une croix blanche, avec personnel medical 24h/24 pendant le festival.' },
  { icon: Tent, title: 'Hebergement & Camping', text: 'Un espace camping partenaire est disponible a 15 minutes du site principal, navette gratuite incluse avec le Pass 3 Jours et VIP.' },
]

const faqs = [
  { q: 'Que puis-je apporter ?', a: 'Une petite bouteille d\'eau vide, votre billet (papier ou telephone), une piece d\'identite.' },
  { q: 'Y a-t-il un parking ?', a: 'Des parkings partenaires sont disponibles a proximite de chaque site, tarif preferentiel avec votre billet.' },
  { q: 'Le festival est-il accessible PMR ?', a: 'Oui, tous les sites disposent d\'acces et de places reservees aux personnes a mobilite reduite.' },
  { q: 'Puis-je camper sur place ?', a: 'Un espace camping partenaire est disponible a proximite, avec navette gratuite incluse selon votre pass.' },
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

        {/* Accessibility */}
        <div className="mb-16 rounded-2xl p-8 border-subtle" style={{ background: 'linear-gradient(135deg, rgba(26,26,46,0.9) 0%, rgba(18,18,30,0.95) 100%)' }}>
          <div className="flex items-center gap-2 mb-6">
            <Accessibility size={22} className="text-nova-gold" />
            <h2 className="font-playfair text-2xl font-semibold text-nova-white">Accessibilite PMR</h2>
          </div>
          <ul className="space-y-3 max-w-[720px]">
            {accessibilityInfo.map((item) => (
              <li key={item} className="font-inter text-sm text-nova-cream flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-nova-gold mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Additional practical info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {additionalInfo.map((info, i) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl p-6 border-subtle flex items-start gap-4"
              style={{ background: 'linear-gradient(135deg, rgba(26,26,46,0.9) 0%, rgba(18,18,30,0.95) 100%)' }}
            >
              <div className="w-11 h-11 rounded-full bg-nova-gold/10 flex items-center justify-center shrink-0">
                <info.icon size={20} className="text-nova-gold" />
              </div>
              <div>
                <h3 className="font-playfair text-lg font-semibold text-nova-white mb-2">{info.title}</h3>
                <p className="font-inter text-sm text-nova-muted leading-relaxed">{info.text}</p>
              </div>
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

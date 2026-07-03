import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Check, X, ShieldCheck, CreditCard, Users, Star } from 'lucide-react'

const passes = [
  {
    name: 'Pass Journee',
    price: '89€',
    features: ['Acces 1 jour au choix', 'Toutes les scenes', 'Restauration sur place'],
    featured: false,
  },
  {
    name: 'Pass 3 Jours',
    price: '219€',
    features: ['Acces 3 jours consecutifs', 'Toutes les scenes', 'Fast-lane entree', 'Restauration sur place'],
    featured: true,
  },
  {
    name: 'Pass VIP',
    price: '449€',
    features: ['Acces 4 jours complets', 'Espace VIP & lounge', 'Meet & greet artistes', 'Vestiaire prive', 'Boissons incluses'],
    featured: false,
  },
]

const comparisonRows = [
  { label: 'Nombre de jours', journee: '1', trois: '3', vip: '4' },
  { label: 'Toutes les scenes', journee: true, trois: true, vip: true },
  { label: 'Fast-lane entree', journee: false, trois: true, vip: true },
  { label: 'Espace VIP & lounge', journee: false, trois: false, vip: true },
  { label: 'Meet & greet artistes', journee: false, trois: false, vip: true },
  { label: 'Boissons incluses', journee: false, trois: false, vip: true },
]

const reducedRates = [
  { label: 'Tarif etudiant', discount: '-20%', condition: 'Sur presentation de la carte etudiante' },
  { label: 'Tarif groupe (8+ personnes)', discount: '-15%', condition: 'Reservation groupee via le formulaire de contact' },
  { label: 'Tarif -18 ans', discount: '-30%', condition: 'Accompagne d\'un adulte' },
]

const testimonials = [
  { name: 'Camille D.', text: 'Le Pass 3 Jours vaut vraiment le coup, on profite de tout sans se presser.', rating: 5 },
  { name: 'Thibault R.', text: 'L\'espace VIP est incroyable, rencontrer les artistes restera un souvenir marquant.', rating: 5 },
  { name: 'Nadia B.', text: 'Achat simple et rapide, aucun souci a l\'entree avec mon billet mobile.', rating: 4 },
]

const paymentMethods = ['Carte bancaire', 'PayPal', 'Apple Pay', 'Virement (groupes)']

const faqs = [
  { q: 'Puis-je annuler mon billet ?', a: 'Les billets sont remboursables jusqu\'a 30 jours avant le festival, sous conditions.' },
  { q: 'Le billet est-il nominatif ?', a: 'Oui, chaque billet est associe a un nom pour l\'entree sur site.' },
  { q: 'Y a-t-il des tarifs reduits ?', a: 'Un tarif etudiant, un tarif groupe et un tarif -18 ans sont disponibles, voir ci-dessus.' },
  { q: 'Comment recevoir mon billet ?', a: 'Le billet est envoye par email au format PDF et accessible via l\'application mobile du festival.' },
  { q: 'Puis-je transferer mon billet a un proche ?', a: 'Oui, un transfert nominatif est possible jusqu\'a 48h avant l\'evenement depuis votre espace client.' },
  { q: 'Le paiement est-il securise ?', a: 'Oui, tous les paiements sont chiffres et traites par un prestataire certifie PCI-DSS.' },
]

export default function BilletteriePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-24 pb-[clamp(4rem,8vh,8rem)] min-h-[100dvh] bg-nova-navy">
      <div className="max-w-[1280px] mx-auto px-[clamp(1rem,4vw,3rem)]">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-5 h-[1px] bg-nova-gold" />
            <span className="font-grotesk text-xs font-medium uppercase tracking-[0.12em] text-nova-gold">
              Billetterie
            </span>
            <div className="w-5 h-[1px] bg-nova-gold" />
          </div>
          <h1
            className="font-playfair font-bold text-nova-white mb-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.05 }}
          >
            Reservez Votre Place
          </h1>
          <p className="font-inter text-nova-cream max-w-[560px] mx-auto">
            Choisissez le pass qui correspond a votre experience du festival.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {passes.map((pass, i) => (
            <motion.div
              key={pass.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-8 border-subtle"
              style={{
                background: 'linear-gradient(135deg, rgba(26,26,46,0.9) 0%, rgba(18,18,30,0.95) 100%)',
                border: pass.featured ? '2px solid #D4A853' : undefined,
              }}
            >
              {pass.featured && (
                <span className="inline-block font-grotesk text-[11px] uppercase tracking-wide bg-nova-gold text-nova-black rounded-full px-3 py-1 mb-4">
                  Populaire
                </span>
              )}
              <h3 className="font-playfair text-2xl font-semibold text-nova-white mb-2">{pass.name}</h3>
              <p className="font-playfair text-4xl font-bold text-nova-gold mb-6">{pass.price}</p>
              <ul className="space-y-3 mb-8">
                {pass.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 font-inter text-sm text-nova-cream">
                    <Check size={16} className="text-nova-gold mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full h-12 rounded-full font-grotesk text-sm uppercase tracking-wide transition-colors duration-200 ${
                  pass.featured
                    ? 'bg-nova-gold text-nova-black hover:brightness-110'
                    : 'border border-nova-gold text-nova-gold hover:bg-nova-gold hover:text-nova-black'
                }`}
              >
                Choisir ce pass
              </button>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-8 mb-16 py-6">
          <div className="flex items-center gap-2 text-nova-muted text-sm font-inter">
            <ShieldCheck size={18} className="text-nova-gold" />
            Paiement 100% securise
          </div>
          <div className="flex items-center gap-2 text-nova-muted text-sm font-inter">
            <CreditCard size={18} className="text-nova-gold" />
            {paymentMethods.join(' · ')}
          </div>
        </div>

        {/* Comparison table */}
        <div className="mb-16 overflow-x-auto">
          <h2 className="font-playfair text-2xl font-semibold text-nova-white mb-8 text-center">
            Comparatif des avantages
          </h2>
          <table className="w-full text-sm border-collapse min-w-[560px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 font-inter text-nova-muted font-normal">Avantage</th>
                <th className="py-3 font-grotesk text-nova-gold uppercase text-xs">Journee</th>
                <th className="py-3 font-grotesk text-nova-gold uppercase text-xs">3 Jours</th>
                <th className="py-3 font-grotesk text-nova-gold uppercase text-xs">VIP</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label} className="border-b border-white/5">
                  <td className="py-3 font-inter text-nova-cream">{row.label}</td>
                  <td className="py-3 text-center">
                    {typeof row.journee === 'boolean' ? (
                      row.journee ? <Check size={16} className="text-nova-gold mx-auto" /> : <X size={16} className="text-nova-muted mx-auto" />
                    ) : <span className="text-nova-white">{row.journee}</span>}
                  </td>
                  <td className="py-3 text-center">
                    {typeof row.trois === 'boolean' ? (
                      row.trois ? <Check size={16} className="text-nova-gold mx-auto" /> : <X size={16} className="text-nova-muted mx-auto" />
                    ) : <span className="text-nova-white">{row.trois}</span>}
                  </td>
                  <td className="py-3 text-center">
                    {typeof row.vip === 'boolean' ? (
                      row.vip ? <Check size={16} className="text-nova-gold mx-auto" /> : <X size={16} className="text-nova-muted mx-auto" />
                    ) : <span className="text-nova-white">{row.vip}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Reduced rates */}
        <div className="mb-16">
          <h2 className="font-playfair text-2xl font-semibold text-nova-white mb-8 text-center flex items-center justify-center gap-2">
            <Users size={20} className="text-nova-gold" />
            Tarifs reduits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {reducedRates.map((rate) => (
              <div key={rate.label} className="rounded-xl p-6 border-subtle text-center" style={{ background: 'rgba(26,26,46,0.6)' }}>
                <p className="font-playfair text-3xl font-bold text-nova-gold mb-2">{rate.discount}</p>
                <p className="font-inter font-semibold text-nova-white mb-1">{rate.label}</p>
                <p className="font-inter text-xs text-nova-muted">{rate.condition}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="font-playfair text-2xl font-semibold text-nova-white mb-8 text-center">
            Ce qu'en disent les festivaliers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-xl p-6 border-subtle" style={{ background: 'rgba(26,26,46,0.6)' }}>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className={i < t.rating ? 'text-nova-gold fill-nova-gold' : 'text-nova-muted'} />
                  ))}
                </div>
                <p className="font-inter text-sm text-nova-cream italic mb-3">"{t.text}"</p>
                <p className="font-grotesk text-xs uppercase tracking-wide text-nova-gold">{t.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-[720px] mx-auto">
          <h2 className="font-playfair text-2xl font-semibold text-nova-white mb-8 text-center">
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
      </div>
    </div>
  )
}

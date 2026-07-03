import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

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

const faqs = [
  { q: 'Puis-je annuler mon billet ?', a: 'Les billets sont remboursables jusqu\'a 30 jours avant le festival, sous conditions.' },
  { q: 'Le billet est-il nominatif ?', a: 'Oui, chaque billet est associe a un nom pour l\'entree sur site.' },
  { q: 'Y a-t-il des tarifs reduits ?', a: 'Un tarif etudiant et un tarif groupe sont disponibles, nous contacter.' },
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
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

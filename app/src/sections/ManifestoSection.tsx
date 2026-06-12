import { motion } from 'framer-motion'

const words = [
  { text: "La", highlight: false },
  { text: "ou", highlight: false },
  { text: "l'", highlight: false },
  { text: "artisanat", highlight: true },
  { text: "rencontre", highlight: false },
  { text: "l'", highlight: false },
  { text: "audace,", highlight: true },
]

const words2 = [
  { text: "la", highlight: false },
  { text: "ou", highlight: false },
  { text: "le", highlight: false },
  { text: "passe", highlight: true },
  { text: "embrasse", highlight: false },
  { text: "le", highlight: false },
  { text: "futur.", highlight: true },
]

export default function ManifestoSection() {


  return (
    <section
      className="relative py-[clamp(4rem,8vh,8rem)]"
      style={{
        backgroundColor: '#0A0A0F',
        background: 'radial-gradient(ellipse at 30% 50%, rgba(212,168,83,0.15) 0%, transparent 70%), #0A0A0F',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-[clamp(1rem,4vw,3rem)]">
        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] as [number, number, number, number] }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-5 h-[1px] bg-nova-gold" />
          <span className="font-grotesk text-xs font-medium uppercase tracking-[0.12em] text-nova-gold">
            Notre Vision
          </span>
        </motion.div>

        {/* Manifesto Text */}
        <div className="text-center">
          <p className="font-playfair italic leading-[1.15]" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            {[words, words2].map((line, lineIdx) => (
              <span key={lineIdx} className="block">
                {line.map((word, wordIdx) => {
                  const globalIdx = lineIdx * words.length + wordIdx
                  return (
                    <motion.span
                      key={globalIdx}
                      initial={{ opacity: 0, y: 30, rotateX: 8 }}
                      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{
                        duration: 0.5,
                        delay: globalIdx * 0.08,
                        ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
                      }}
                      className={word.highlight ? 'text-nova-gold' : 'text-nova-white'}
                      style={{ display: 'inline-block', marginRight: '0.3em' }}
                    >
                      {word.text}
                    </motion.span>
                  )
                })}
              </span>
            ))}
          </p>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] as [number, number, number, number], delay: 0.8 }}
          className="w-[60px] h-[1px] bg-nova-gold mx-auto mt-10"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number], delay: 1.0 }}
          className="text-center text-nova-cream max-w-[640px] mx-auto mt-10 leading-relaxed"
          style={{ fontSize: '1.125rem' }}
        >
          Depuis 2018, NOVA reunit plus de 120 000 visiteurs chaque annee autour d'une programmation exigeante et audacieuse. Musique classique, art numerique, danse contemporaine, theatre experimental et debats intellectuels — notre festival est un laboratoire de creation ou chaque discipline dialogue avec les autres.
        </motion.p>
      </div>
    </section>
  )
}

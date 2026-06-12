import { useState } from 'react'
import { motion } from 'framer-motion'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')

  return (
    <section
      className="py-[clamp(4rem,8vh,8rem)] bg-nova-charcoal relative overflow-hidden"
    >
      {/* Subtle diagonal lines pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 40px,
            rgba(212,168,83,0.5) 40px,
            rgba(212,168,83,0.5) 41px
          )`,
        }}
      />

      <div className="max-w-[640px] mx-auto px-[clamp(1rem,4vw,3rem)] relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] as [number, number, number, number] }}
          className="font-playfair font-bold text-nova-white"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.05 }}
        >
          Restez au Coeur de l'Action
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="font-inter text-base text-nova-cream mt-6"
        >
          Inscrivez-vous a notre newsletter pour recevoir en avant-premiere la programmation complete, les annonces d'artistes et les offres exclusives.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-0 mt-10"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre adresse email"
            className="flex-1 bg-nova-navy border border-[rgba(212,168,83,0.12)] border-r-0 sm:rounded-r-none rounded-md sm:rounded-l-md px-5 py-3.5 font-inter text-base text-nova-white placeholder:text-nova-muted focus:outline-none focus:border-nova-gold transition-colors"
          />
          <button
            type="submit"
            className="bg-nova-gold text-nova-black font-playfair text-base font-semibold sm:rounded-l-none rounded-md sm:rounded-r-md px-7 py-3.5 hover:brightness-110 transition-all duration-300 shrink-0 mt-2 sm:mt-0"
          >
            S'inscrire
          </button>
        </motion.form>
      </div>
    </section>
  )
}

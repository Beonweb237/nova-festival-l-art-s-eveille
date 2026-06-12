import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ArtistesSection() {
  return (
    <section className="py-[clamp(4rem,8vh,8rem)] bg-nova-black">
      <div className="max-w-[1280px] mx-auto px-[clamp(1rem,4vw,3rem)]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] as [number, number, number, number] }}
              className="flex items-center gap-3 mb-3"
            >
              <div className="w-5 h-[1px] bg-nova-gold" />
              <span className="font-grotesk text-xs font-medium uppercase tracking-[0.12em] text-nova-gold">
                Artistes
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.19, 1, 0.22, 1] as [number, number, number, number] }}
              className="font-playfair font-bold text-nova-white"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.05 }}
            >
              Les Tetes d'Affiche
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              to="/artistes"
              className="inline-flex items-center gap-2 text-nova-cream hover:text-nova-gold transition-colors duration-300 font-inter text-sm"
            >
              Decouvrir tous les artistes
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Column 1: Large portrait */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] as [number, number, number, number] }}
            className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer"
          >
            <img
              src="/hero-portrait-1.jpg"
              alt="Sophia Moreau"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(transparent 50%, rgba(10,10,15,0.9) 100%)' }}
            />
            <div className="absolute bottom-5 left-5 right-5">
              <span className="font-grotesk text-[11px] uppercase tracking-wide text-nova-gold">
                MUSIQUE CLASSIQUE
              </span>
              <h3 className="font-playfair text-2xl font-semibold text-nova-white mt-1">
                Sophia Moreau
              </h3>
            </div>
            <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowRight size={20} className="text-nova-gold" />
            </div>
          </motion.div>

          {/* Column 2: Two stacked portraits */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.19, 1, 0.22, 1] as [number, number, number, number] }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
            >
              <img
                src="/hero-portrait-2.jpg"
                alt="Maya Chen"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(transparent 50%, rgba(10,10,15,0.9) 100%)' }}
              />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="font-grotesk text-[11px] uppercase tracking-wide text-nova-gold">
                  DANSE CONTEMPORAINE
                </span>
                <h3 className="font-playfair text-xl font-semibold text-nova-white mt-1">
                  Maya Chen
                </h3>
              </div>
              <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight size={20} className="text-nova-gold" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.19, 1, 0.22, 1] as [number, number, number, number] }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
            >
              <img
                src="/hero-portrait-3.jpg"
                alt="Luka Novak"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(transparent 50%, rgba(10,10,15,0.9) 100%)' }}
              />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="font-grotesk text-[11px] uppercase tracking-wide text-nova-gold">
                  ART NUMERIQUE
                </span>
                <h3 className="font-playfair text-xl font-semibold text-nova-white mt-1">
                  Luka Novak
                </h3>
              </div>
              <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight size={20} className="text-nova-gold" />
              </div>
            </motion.div>
          </div>

          {/* Column 3: Medium portrait + Quote card */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.19, 1, 0.22, 1] as [number, number, number, number] }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
            >
              <img
                src="/artist-4.jpg"
                alt="Elena Rossi"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(transparent 50%, rgba(10,10,15,0.9) 100%)' }}
              />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="font-grotesk text-[11px] uppercase tracking-wide text-nova-gold">
                  JAZZ
                </span>
                <h3 className="font-playfair text-xl font-semibold text-nova-white mt-1">
                  Elena Rossi
                </h3>
              </div>
              <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight size={20} className="text-nova-gold" />
              </div>
            </motion.div>

            {/* Quote card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.19, 1, 0.22, 1] as [number, number, number, number] }}
              className="flex items-center justify-center rounded-2xl p-8 border-subtle"
              style={{ background: 'linear-gradient(135deg, rgba(26,26,46,0.9) 0%, rgba(18,18,30,0.95) 100%)' }}
            >
              <div>
                <p className="font-playfair italic text-xl text-nova-cream leading-relaxed">
                  "NOVA est devenu le rendez-vous incontournable de la creation contemporaine en Europe."
                </p>
                <p className="font-grotesk text-xs uppercase tracking-[0.12em] text-nova-muted mt-4">
                  — Le Monde
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export default function VideoSection() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height: '70vh', minHeight: '500px' }}
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero-reel.mp4"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(10,10,15,0.3) 0%, rgba(10,10,15,0.85) 100%)' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Play Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] as [number, number, number, number] }}
          className="mb-10 flex justify-center"
        >
          <button
            type="button"
            aria-label="Lire la video"
            className="group relative flex items-center justify-center transition-transform duration-300 hover:scale-105"
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              border: '2px solid rgba(212,168,83,0.4)',
              backgroundColor: 'rgba(10,10,15,0.4)',
              backdropFilter: 'blur(8px)',
              animation: 'pulse-play 3s ease-in-out infinite',
            }}
          >
            <Play size={24} className="text-nova-gold ml-1" fill="#D4A853" />
            <style>{`
              @keyframes pulse-play {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.03); }
              }
              .group:hover {
                border-color: rgba(212,168,83,0.8) !important;
                background-color: rgba(10,10,15,0.5) !important;
              }
            `}</style>
          </button>
        </motion.div>

        {/* Text Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] as [number, number, number, number] }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-5 h-[1px] bg-nova-gold" />
            <span className="font-grotesk text-xs font-medium uppercase tracking-[0.12em] text-nova-gold">
              En Images
            </span>
            <div className="w-5 h-[1px] bg-nova-gold" />
          </div>
          <h2
            className="font-playfair font-bold text-nova-white"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.05 }}
          >
            Vivez l'Experience
          </h2>
        </motion.div>
      </div>
    </section>
  )
}

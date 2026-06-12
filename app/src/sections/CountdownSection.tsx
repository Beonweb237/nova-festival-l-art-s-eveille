import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calculate = () => {
      const now = new Date().getTime()
      const diff = targetDate.getTime() - now
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }

    calculate()
    const interval = setInterval(calculate, 1000)
    return () => clearInterval(interval)
  }, [targetDate])

  return timeLeft
}

export default function CountdownSection() {
  const targetDate = useRef(new Date('2025-07-05T18:00:00+02:00')).current
  const { days, hours, minutes, seconds } = useCountdown(targetDate)

  const units = [
    { value: days, label: 'JOURS' },
    { value: hours, label: 'HEURES' },
    { value: minutes, label: 'MINUTES' },
    { value: seconds, label: 'SECONDES' },
  ]

  return (
    <section
      className="py-[clamp(4rem,8vh,8rem)]"
      style={{
        backgroundColor: '#12121E',
        background: 'radial-gradient(ellipse at 30% 50%, rgba(212,168,83,0.25) 0%, transparent 70%), #12121E',
      }}
    >
      <div className="max-w-[800px] mx-auto px-[clamp(1rem,4vw,3rem)] text-center">
        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] as [number, number, number, number] }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <div className="w-5 h-[1px] bg-nova-gold" />
          <span className="font-grotesk text-xs font-medium uppercase tracking-[0.12em] text-nova-gold">
            Le Festival Commence Dans
          </span>
          <div className="w-5 h-[1px] bg-nova-gold" />
        </motion.div>

        {/* Countdown */}
        <div className="flex justify-center items-start gap-4 sm:gap-8">
          {units.map((unit, i) => (
            <div key={unit.label} className="flex items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.19, 1, 0.22, 1] as [number, number, number, number],
                }}
                className="text-center"
              >
                <span
                  className="font-grotesk font-bold text-nova-gold tabular-nums"
                  style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
                >
                  {String(unit.value).padStart(2, '0')}
                </span>
                <p className="font-grotesk text-xs uppercase tracking-[0.12em] text-nova-muted mt-2">
                  {unit.label}
                </p>
              </motion.div>
              {i < units.length - 1 && (
                <span
                  className="font-grotesk font-bold text-nova-gold mx-2 sm:mx-4 self-start mt-2"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
                >
                  :
                </span>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="mt-10"
        >
          <Link
            to="/billetterie"
            className="inline-flex items-center font-inter font-medium bg-nova-gold text-nova-black rounded-full transition-all duration-300 hover:scale-[1.03] hover:brightness-110"
            style={{ borderRadius: '9999px', padding: '14px 32px' }}
          >
            Rejoignez l'Aventure — Billetterie
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

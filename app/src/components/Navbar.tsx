import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/programmation', label: 'Programmation' },
  { to: '/artistes', label: 'Artistes' },
  { to: '/billetterie', label: 'Billetterie' },
  { to: '/infos', label: 'Infos' },
  { to: '/a-propos', label: 'A Propos' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4, ease: [0.19, 1, 0.22, 1] as [number, number, number, number] }}
        className="fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-shadow duration-300"
        style={{
          backgroundColor: 'rgba(10,10,15,0.8)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(212,168,83,0.08)',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <div className="w-full max-w-[1280px] mx-auto px-[clamp(1rem,4vw,3rem)] flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-playfair text-2xl font-bold text-nova-gold tracking-tight">
            NOVA
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative font-inter text-sm font-medium uppercase tracking-[0.05em] transition-colors duration-300"
                style={{
                  color: isActive(link.to) ? '#D4A853' : '#E8DDD0',
                }}
              >
                {link.label}
                {isActive(link.to) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-[1px] bg-nova-gold"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            to="/billetterie"
            className="hidden lg:inline-flex items-center font-inter text-sm font-medium bg-nova-gold text-nova-black rounded-full px-6 py-2.5 transition-all duration-300 hover:scale-103 hover:brightness-110"
            style={{ borderRadius: '9999px', padding: '10px 24px' }}
          >
            Billetterie
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className="block w-5 h-[2px] bg-nova-gold transition-transform duration-300"
              style={{
                transform: mobileOpen ? 'rotate(45deg) translateY(5px)' : 'none',
              }}
            />
            <span
              className="block w-5 h-[2px] bg-nova-gold transition-opacity duration-300"
              style={{ opacity: mobileOpen ? 0 : 1 }}
            />
            <span
              className="block w-5 h-[2px] bg-nova-gold transition-transform duration-300"
              style={{
                transform: mobileOpen ? 'rotate(-45deg) translateY(-5px)' : 'none',
              }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
            style={{
              backgroundColor: 'rgba(10,10,15,0.97)',
              backdropFilter: 'blur(20px)',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
              >
                <Link
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="font-playfair text-3xl font-semibold transition-colors duration-300"
                  style={{ color: isActive(link.to) ? '#D4A853' : '#F5F0EB' }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
            >
              <Link
                to="/billetterie"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center font-inter text-base font-medium bg-nova-gold text-nova-black rounded-full px-8 py-3 mt-4"
              >
                Billetterie
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

import { useEffect } from 'react'

export default function ProgrammationPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-[100dvh] flex items-center justify-center pt-20">
      <div className="text-center">
        <p className="font-grotesk text-xs uppercase tracking-[0.12em] text-nova-gold mb-4">Programmation</p>
        <h1 className="font-playfair text-4xl md:text-6xl text-nova-white mb-4">Programmation Complete</h1>
        <p className="text-nova-cream max-w-md mx-auto">Decouvrez toute la programmation du festival.</p>
      </div>
    </div>
  )
}

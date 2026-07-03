import { useEffect, useState } from 'react'
import { ArrowDownRight } from 'lucide-react'

export function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-32 pb-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-[#e85d2c]/20 animate-blob blur-3xl" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-[#6b7d5f]/15 animate-blob blur-3xl" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#e85d2c] animate-pulse" />
          <span className="text-xs uppercase tracking-[0.3em] text-[#8a847c]">Available for projects · 2025</span>
        </div>

        <h1
          className={`font-display font-bold leading-[0.95] tracking-tight transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ fontSize: 'clamp(3rem, 11vw, 11rem)' }}
        >
          Designing
          <br />
          <span className="inline-flex items-center gap-4">
            visual
            <span className="inline-block w-16 md:w-32 h-1 bg-[#e85d2c] align-middle" />
          </span>
          <br />
          identities.
        </h1>

        <div className="mt-12 grid md:grid-cols-2 gap-8 items-end">
          <p
            className={`text-[#a8a298] text-lg md:text-xl leading-relaxed max-w-md transition-all duration-1000 delay-300 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            I'm <span className="text-[#f5f1ea] font-medium">Rivaldo</span>, an independent graphic designer crafting brands, editorial systems, and visual stories from Jakarta.
          </p>

          <div
            className={`flex flex-col md:items-end gap-6 transition-all duration-1000 delay-500 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <a
              href="#work"
              className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-[#f5f1ea] group"
              data-hover
            >
              View selected work
              <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#e85d2c] group-hover:border-[#e85d2c] transition-all duration-400">
                <ArrowDownRight size={18} className="group-hover:rotate-0 transition-transform duration-400" />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#8a847c]" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#8a847c]">Scroll</span>
      </div>
    </section>
  )
}

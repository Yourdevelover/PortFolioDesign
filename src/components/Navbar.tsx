import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-4 bg-[#0f0e0d]/80 backdrop-blur-xl border-b border-white/5' : 'py-6 bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group" data-hover>
          <div className="w-9 h-9 rounded-full bg-[#e85d2c] flex items-center justify-center transition-transform duration-500 group-hover:rotate-180">
            <span className="font-display font-bold text-white text-lg">R</span>
          </div>
          <span className="font-display text-lg font-semibold tracking-tight">Studio Rivaldo</span>
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-[#8a847c] hover:text-[#f5f1ea] transition-colors duration-300 relative group"
                data-hover
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#e85d2c] transition-all duration-400 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-white text-[#0f0e0d] text-sm font-medium hover:bg-[#e85d2c] hover:text-white transition-all duration-400"
          data-hover
        >
          Let's talk
        </a>

        <button
          className="md:hidden text-[#f5f1ea]"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="px-6 py-6 space-y-4 bg-[#0f0e0d] border-t border-white/5">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block text-lg text-[#8a847c] hover:text-[#f5f1ea]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

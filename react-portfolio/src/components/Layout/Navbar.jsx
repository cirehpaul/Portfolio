import React, { useState, useEffect } from 'react'
import content from '../../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('Home')
  const { nav } = content

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Determine active section
      const sections = nav.map((n) => n.toLowerCase())
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) {
            setActive(nav[i])
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [nav])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/90 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_20px_rgba(0,0,0,0.3)]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 border border-accent/20 text-accent font-bold text-sm transition-all duration-300 group-hover:bg-accent/20 group-hover:shadow-[0_0_12px_rgba(34,197,94,0.2)]">
            CP
          </span>
          <span className="text-sm font-semibold tracking-wide text-white/90">Cire Paul</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`relative px-3 py-2 text-[0.8rem] font-medium rounded-lg transition-all duration-300 ${
                    active === item
                      ? 'text-accent bg-accent/[0.06]'
                      : 'text-white/60 hover:text-white/90 hover:bg-white/[0.04]'
                  }`}
                >
                  {item}
                  {active === item && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-accent rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-accent/10 border border-accent/20 text-accent transition-all duration-300 hover:bg-accent/20 hover:shadow-[0_0_16px_rgba(34,197,94,0.15)]"
        >
          <span className="pulse-dot" />
          Let's Connect
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-white transition hover:bg-white/[0.06] md:hidden"
          aria-label="Toggle navigation"
        >
          <div className="flex flex-col gap-1.5 items-center justify-center w-5">
            <span className={`block h-[1.5px] w-5 bg-current transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[4.5px]' : ''}`} />
            <span className={`block h-[1.5px] w-5 bg-current transition-all duration-300 ${open ? 'opacity-0 scale-0' : ''}`} />
            <span className={`block h-[1.5px] w-5 bg-current transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[4.5px]' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-white/[0.06] bg-surface/95 backdrop-blur-xl px-5 py-4">
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    active === item
                      ? 'text-accent bg-accent/[0.06]'
                      : 'text-white/70 hover:text-white hover:bg-white/[0.04]'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-white/[0.06]">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold rounded-xl bg-accent/10 border border-accent/20 text-accent"
              onClick={() => setOpen(false)}
            >
              <span className="pulse-dot" />
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

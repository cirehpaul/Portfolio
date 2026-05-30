import React, { useState } from 'react'
import content from '../../data/content'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const { nav } = content

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#05060a]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-extrabold tracking-[0.1em] text-cyan">CPBC</a>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium text-white/80">
            {nav.map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="transition hover:text-cyan">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
        <button type="button" onClick={() => setOpen((prev) => !prev)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden">
          <span className="sr-only">Toggle navigation</span>
          <div className={`h-0.5 w-6 bg-current transition ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`h-0.5 w-6 bg-current transition ${open ? 'opacity-0' : 'mt-2'}`} />
          <div className={`h-0.5 w-6 bg-current transition ${open ? '-rotate-45 -translate-y-1.5' : 'mt-2'}`} />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#05060a]/95 px-6 py-4">
          <ul className="space-y-3 text-sm font-medium text-white/90">
            {nav.map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="block rounded-2xl px-4 py-3 transition hover:bg-white/10" onClick={() => setOpen(false)}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

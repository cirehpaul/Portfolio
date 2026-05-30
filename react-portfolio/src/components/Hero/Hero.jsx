import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import Avatar from './Avatar'
import content from '../../data/content'

export default function Hero(){
  const heroRef = useRef(null)
  const { hero } = content

  const handlePointerMove = (event) => {
    const rect = heroRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    heroRef.current.style.setProperty('--mouse-x', `${x}px`)
    heroRef.current.style.setProperty('--mouse-y', `${y}px`)
  }

  return (
    <section id="home" className="relative py-20 overflow-hidden" ref={heroRef} onPointerMove={handlePointerMove}>
      <div className="hero-mouse-glow absolute inset-0 pointer-events-none opacity-70 transition-all duration-200" />
      <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr] items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="space-y-6">
          <span className="inline-flex items-center gap-3 rounded-full bg-cyan/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan">Application Support & Mobile Delivery</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">Hi, I’m <span className="text-emerald">{hero.name.split(' ')[1]}</span></h1>
          <p className="text-lg text-gray-300 max-w-2xl">{hero.title}</p>
          <p className="max-w-3xl text-gray-300 leading-relaxed">{hero.intro}</p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">View Projects</a>
            <a href={hero.resume} className="rounded-full bg-cyan px-5 py-3 text-sm font-semibold text-[#071026] transition hover:bg-cyan/90">Download Resume</a>
            <a href="#contact" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white transition hover:bg-white/10">Contact Me</a>
            <a href={hero.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white transition hover:bg-white/10">GitHub</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="relative mx-auto w-full max-w-md">
          <div className="absolute -left-10 top-12 h-16 w-16 rounded-full bg-cyan/15 blur-3xl" />
          <div className="absolute right-0 top-28 h-24 w-24 rounded-full bg-purple/20 blur-3xl" />
          <Avatar />
          <div className="floating-icon left-10 top-8">K</div>
          <div className="floating-icon right-10 top-20">AI</div>
          <div className="floating-icon left-4 bottom-6">DB</div>
        </motion.div>
      </div>
    </section>
  )
}

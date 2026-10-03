import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import content from '../../data/content'

const roles = [
  'Application Support Analyst',
  'Android Developer',
  'Data Management Professional',
  'SQL & API Integration Specialist',
]

function TypingText() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 60)
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 35)
    } else if (deleting && text.length === 0) {
      setDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, roleIndex])

  return (
    <span className="text-accent">
      {text}
      <span className="typing-cursor" />
    </span>
  )
}

const stats = [
  { value: '1+', label: 'Year Experience', icon: '📊' },
  { value: '6', label: 'Projects Built', icon: '🚀' },
  { value: '28+', label: 'Certifications', icon: '🏆' },
  { value: '15+', label: 'Technologies', icon: '⚡' },
]

export default function Hero() {
  const { hero } = content

  return (
    <section id="home" className="relative min-h-screen flex flex-col pt-20 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 hero-grid opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(34,197,94,0.08),transparent_60%)]" />

      {/* Animated floating shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large ambient circles */}
        <div className="absolute top-[10%] right-[15%] w-72 h-72 rounded-full bg-accent/[0.03] blur-[100px] animate-pulse" />
        <div className="absolute bottom-[15%] left-[10%] w-60 h-60 rounded-full bg-accent/[0.02] blur-[80px]" style={{ animationDelay: '3s' }} />

        {/* Geometric shapes */}
        <motion.div
          animate={{ y: [-8, 8, -8], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[12%] left-[6%] w-24 h-24 rounded-2xl border border-accent/[0.08] bg-accent/[0.02] rotate-12 hidden lg:block"
        />
        <motion.div
          animate={{ y: [6, -6, 6], rotate: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-[28%] right-[8%] w-16 h-16 rounded-xl border border-white/[0.05] bg-white/[0.01] -rotate-12 hidden lg:block"
        />
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-[25%] left-[12%] w-12 h-12 rounded-lg border border-accent/[0.06] bg-accent/[0.01] rotate-45 hidden lg:block"
        />

        {/* Code snippets - right side */}
        <div className="absolute top-[20%] right-[2%] text-[0.55rem] font-mono text-accent/[0.12] leading-relaxed hidden xl:block">
          <div className="flex gap-1"><span className="text-white/[0.08]">1</span> SELECT status, COUNT(*)</div>
          <div className="flex gap-1"><span className="text-white/[0.08]">2</span> FROM incidents</div>
          <div className="flex gap-1"><span className="text-white/[0.08]">3</span> WHERE priority = 'HIGH'</div>
          <div className="flex gap-1"><span className="text-white/[0.08]">4</span> GROUP BY status;</div>
        </div>

        {/* Network nodes - left side */}
        <div className="absolute bottom-[35%] right-[4%] hidden xl:block">
          <svg width="80" height="80" viewBox="0 0 80 80" className="text-white/[0.06]">
            <circle cx="10" cy="40" r="3" fill="currentColor" />
            <circle cx="40" cy="10" r="3" fill="currentColor" />
            <circle cx="70" cy="40" r="3" fill="currentColor" />
            <circle cx="40" cy="70" r="3" fill="currentColor" />
            <circle cx="40" cy="40" r="4" fill="rgba(34,197,94,0.15)" />
            <line x1="10" y1="40" x2="40" y2="40" stroke="currentColor" strokeWidth="0.5" />
            <line x1="40" y1="10" x2="40" y2="40" stroke="currentColor" strokeWidth="0.5" />
            <line x1="70" y1="40" x2="40" y2="40" stroke="currentColor" strokeWidth="0.5" />
            <line x1="40" y1="70" x2="40" y2="40" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
      </div>

      {/* Main content */}
      <div className="relative flex-1 flex items-center max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-[1.3fr_0.7fr] items-center w-full">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-5"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 rounded-full bg-accent/[0.06] border border-accent/15 px-4 py-2"
            >
              <span className="pulse-dot" />
              <span className="text-xs font-medium tracking-wide text-accent">Available for Opportunities</span>
            </motion.div>

            {/* Name */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold leading-[1.08] tracking-tight">
              <span className="text-white">Hi, I'm </span>
              <span className="relative">
                <span className="bg-gradient-to-r from-accent via-emerald-400 to-green-300 bg-clip-text text-transparent">
                  {hero.name}
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-accent/50 to-transparent rounded-full" />
              </span>
            </h1>

            {/* Animated role text */}
            <div className="h-8 sm:h-9">
              <p className="text-lg sm:text-xl font-medium text-white/60">
                <TypingText />
              </p>
            </div>

            {/* Intro */}
            <p className="max-w-lg text-[0.9rem] leading-[1.75] text-white/40">
              {hero.intro}
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-white/35">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent/50">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {hero.location}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-3">
              <a href="#projects" className="btn-primary group">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-12 transition-transform duration-300">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                </svg>
                View My Work
              </a>
              <a href={hero.resume} target="_blank" rel="noreferrer" className="btn-secondary group">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-0.5 transition-transform duration-300">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-2 pt-1">
              {[
                { href: hero.linkedin, label: 'LinkedIn', icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                { href: hero.github, label: 'GitHub', icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg> },
                { href: hero.email, label: 'Email', icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg> },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== 'Email' ? '_blank' : undefined}
                  rel={link.label !== 'Email' ? 'noreferrer' : undefined}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-white/40 transition-all duration-300 hover:text-accent hover:border-accent/20 hover:bg-accent/[0.04] hover:shadow-[0_0_12px_rgba(34,197,94,0.1)]"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Avatar + floating cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative mx-auto w-full max-w-sm hidden lg:block"
          >
            {/* Glow behind avatar */}
            <div className="absolute inset-0 m-auto w-72 h-72 rounded-full bg-accent/[0.06] blur-[90px]" />

            {/* Avatar card */}
            <div className="relative rounded-3xl border border-white/[0.08] bg-surface-200/80 p-1.5 shadow-[0_24px_80px_rgba(0,0,0,0.5)] glow-green-sm">
              <div className="relative overflow-hidden rounded-[1.25rem] bg-surface-300">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-emerald-500/5 opacity-70" />
                <img src="/Portfolio/img/2X2.png" alt="Cire Paul Cruz" className="relative h-full w-full object-cover aspect-[3/4]" />

                {/* Overlay gradient at bottom */}
                <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-surface-200/90 to-transparent" />

                {/* Name overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2">
                    <span className="pulse-dot" />
                    <span className="text-xs font-medium text-accent/80">Available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating tech cards */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-8 top-10 glass-card px-3 py-2.5 flex items-center gap-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 border border-accent/15 text-accent text-[0.65rem] font-bold">SQL</span>
              <div>
                <span className="block text-[0.7rem] font-medium text-white/70">Database</span>
                <span className="block text-[0.55rem] text-white/30">Oracle • MSSQL</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              className="absolute -right-6 top-1/4 glass-card px-3 py-2.5 flex items-center gap-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/15 text-blue-400 text-sm">🤖</span>
              <div>
                <span className="block text-[0.7rem] font-medium text-white/70">AI</span>
                <span className="block text-[0.55rem] text-white/30">OpenAI • Gemini</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute -left-4 bottom-20 glass-card px-3 py-2.5 flex items-center gap-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10 border border-purple-500/15 text-purple-400 text-[0.65rem] font-bold">{ }</span>
              <div>
                <span className="block text-[0.7rem] font-medium text-white/70">Code</span>
                <span className="block text-[0.55rem] text-white/30">Kotlin • React</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [3, -3, 3] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -right-2 bottom-28 glass-card px-3 py-2.5 flex items-center gap-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 border border-amber-500/15 text-amber-400 text-[0.65rem] font-bold">API</span>
              <div>
                <span className="block text-[0.7rem] font-medium text-white/70">Integration</span>
                <span className="block text-[0.55rem] text-white/30">REST • Postman</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        className="relative border-t border-white/[0.04] bg-surface-100/50 backdrop-blur-md"
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/[0.04]">
            {stats.map((stat, i) => (
              <div key={stat.label} className="py-6 sm:py-8 px-4 sm:px-6 group cursor-default">
                <div className="flex items-center gap-3">
                  <span className="text-lg sm:text-xl">{stat.icon}</span>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="text-[0.7rem] text-white/30 font-medium tracking-wide uppercase">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/15 hidden lg:flex"
      >
        <span className="text-[0.6rem] tracking-[0.3em] uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-8 bg-gradient-to-b from-accent/30 to-transparent"
        />
      </motion.div>
    </section>
  )
}

import React, { useEffect, useState } from 'react'

export default function Preloader() {
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setFadeOut(true), 800)
    const t2 = setTimeout(() => setVisible(false), 1200)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center bg-surface transition-opacity duration-400 ${fadeOut ? 'opacity-0' : 'opacity-100'
        }`}
    >
      <div className="text-center">
        {/* Logo */}
        <div className="relative mx-auto w-16 h-16">
          <div className="absolute inset-0 rounded-2xl bg-accent/10 animate-ping" />
          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-200 border border-accent/20">
            <span className="text-2xl font-bold text-accent">CP</span>
          </div>
        </div>
        <div className="mt-4 text-sm font-medium text-white/50 tracking-wide">Cire Paul Cruz</div>
        <div className="mt-1 text-[0.65rem] text-white/20 tracking-widest uppercase">Portfolio</div>
      </div>
    </div>
  )
}

import React from 'react'
import content from '../../data/content'
import { motion } from 'framer-motion'

export default function HeroStats(){
  const { heroStats } = content
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {heroStats.map((stat) => (
        <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_15px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl">
          <div className="text-sm uppercase tracking-[0.2em] text-gray-400">{stat.label}</div>
          <div className="mt-3 text-3xl font-semibold text-white">{stat.value}</div>
        </div>
      ))}
    </motion.div>
  )
}

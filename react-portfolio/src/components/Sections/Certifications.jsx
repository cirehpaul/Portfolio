import React from 'react'
import content from '../../data/content'
import { motion } from 'framer-motion'

export default function Certifications(){
  const { certifications } = content
  return (
    <section id="certifications" className="mt-16 py-16">
      <div className="space-y-6">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-3 text-cyan font-semibold uppercase tracking-[0.25em]">Certifications</div>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold">Verified achievements</h2>
          <p className="max-w-2xl text-gray-300">A polished certification gallery preserving exact dates and program names for recruiter review.</p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert, idx) => (
            <motion.div key={`${cert.date}-${idx}`} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.04 * idx }} className="glass-card border border-white/10 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
              <div className="flex items-center justify-between gap-4">
                <span className="text-cyan font-semibold">{cert.date}</span>
                <span className="h-2 w-2 rounded-full bg-cyan" />
              </div>
              <div className="mt-4 text-lg font-semibold text-white">{cert.title}</div>
              {cert.detail && <p className="mt-3 text-gray-300">{cert.detail}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

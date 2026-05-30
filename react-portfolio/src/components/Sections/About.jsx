import React from 'react'
import content from '../../data/content'
import { motion } from 'framer-motion'

export default function About(){
  const { about, education } = content
  return (
    <section id="about" className="mt-16 py-16 relative">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan/10 to-transparent pointer-events-none" />
      <div className="flex flex-col gap-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-3 text-cyan font-semibold uppercase tracking-[0.25em]">About</div>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold">About Me</h2>
          <div className="mt-4 prose prose-invert max-w-none text-sm md:text-base">
            <p><strong>Name:</strong> {about.name}</p>
            <p><strong>Degree:</strong> {about.degree}</p>
            <p><strong>Address:</strong> {about.address}</p>
            <p>{about.objective}</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }} className="grid gap-6 lg:grid-cols-2">
          {education.map((item) => (
            <div key={item.institution} className="glass-card p-6 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
              <div className="text-cyan font-semibold text-sm uppercase tracking-[0.2em]">Education</div>
              <h3 className="mt-3 text-xl font-semibold">{item.institution}</h3>
              <p className="text-sm text-gray-400 mt-2">{item.period}</p>
              {item.achievement && <p className="mt-2 text-gray-100 italic">{item.achievement}</p>}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

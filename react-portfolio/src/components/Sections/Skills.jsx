import React from 'react'
import content from '../../data/content'
import { motion } from 'framer-motion'

export default function Skills(){
  const { skills } = content
  return (
    <section id="skills" className="mt-16 py-16">
      <div className="flex flex-col gap-4">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-3 text-cyan font-semibold uppercase tracking-[0.25em]">Skills</div>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold">Core technical capabilities</h2>
          <p className="max-w-2xl text-gray-300">A modern collection of relevant soft and technical skills that mirror your experience and support recruiter-friendly readability.</p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }} className="glass-card p-6 border border-white/10">
            <h3 className="text-xl font-semibold mb-4">Relevant Skills</h3>
            <ul className="space-y-3 text-gray-100">
              {skills.relevant.map((item) => (
                <li key={item} className="rounded-2xl bg-white/5 p-4 border border-white/10 hover:border-cyan/30 transition">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="glass-card p-6 border border-white/10">
            <h3 className="text-xl font-semibold mb-4">Core Technical Skills</h3>
            <div className="space-y-3">
              {skills.technical.map((item) => (
                <div key={item} className="rounded-2xl bg-white/5 p-4 border border-white/10 hover:border-purple/30 transition">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

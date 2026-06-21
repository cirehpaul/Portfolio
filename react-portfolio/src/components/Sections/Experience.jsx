import React from 'react'
import content from '../../data/content'
import { motion } from 'framer-motion'

export default function Experience(){
  const { experience } = content
  return (
    <section id="experience" className="mt-16 py-16">
      <div className="space-y-6">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-3 text-cyan font-semibold uppercase tracking-[0.25em]">Experience</div>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold">Professional timeline</h2>
          <p className="max-w-2xl text-gray-300">A vertical timeline of internship and work experience with highlights, tools, and project contributions.</p>
        </motion.div>

        <div className="relative border-l border-white/10 pl-8">
          {experience.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.05 * index }} className="mb-12 relative">
              <span className="absolute -left-4 top-2 h-8 w-8 rounded-full bg-cyan text-black flex items-center justify-center font-semibold shadow-lg shadow-cyan/20">{index + 1}</span>
              <div className="glass-card p-6 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.company} · {item.location}</p>
                  </div>
                  <span className="text-sm text-cyan">{item.period}</span>
                </div>
                <div className="mt-3 text-sm text-gray-200">
                  <p className="font-semibold">Project:</p>
                  <p className="italic">{item.project}</p>
                </div>
                <div className="mt-4 space-y-3 text-gray-100">
                  {item.contributions.map((line) => (
                    <p key={line}>• {line}</p>
                  ))}
                </div>
                <div className="mt-4">
                  <p className="font-semibold text-gray-200">Tools & Technologies:</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {item.tools.map((tool) => (
                      <span key={tool} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-200">{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import content from '../../data/content'
import { motion } from 'framer-motion'

export default function Projects(){
  const { projects } = content
  return (
    <section id="projects" className="mt-16 py-16">
      <div className="space-y-6">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-3 text-cyan font-semibold uppercase tracking-[0.25em]">Projects</div>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold">Featured projects</h2>
          <p className="max-w-2xl text-gray-300">A premium showcase of capstone and supporting projects with exact titles, roles, and technical context preserved.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="glass-card border border-white/10 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.22)]">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            <div>
              <span className="inline-flex px-3 py-1 rounded-full bg-cyan/10 text-cyan text-xs uppercase tracking-[0.2em]">Capstone</span>
              <h3 className="mt-4 text-2xl font-semibold">{projects.capstone.title}</h3>
              <p className="mt-4 text-gray-300">Presented at the <strong>{projects.capstone.conference}</strong></p>
              <p className="text-sm italic mt-2">Theme: &quot;{projects.capstone.theme}&quot;</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {projects.capstone.images.slice(0, 4).map((src) => (
                <img key={src} src={src} alt="Capstone screenshot" className="h-32 w-32 rounded-3xl object-cover border border-white/10" />
              ))}
            </div>
          </div>
          <div className="mt-6 text-gray-100">
            <p>{projects.capstone.summary}</p>
            <p className="mt-4"><strong>Role:</strong> {projects.capstone.role}</p>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <div className="rounded-3xl bg-white/5 p-4 border border-white/10">
              <h4 className="font-semibold text-white">Tech Used</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {projects.capstone.tech.map((item) => (
                  <span key={item} className="rounded-full bg-cyan/10 px-3 py-1 text-sm text-cyan">{item}</span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-white/5 p-4 border border-white/10">
              <h4 className="font-semibold text-white">Hardware Used</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {projects.capstone.hardware.map((item) => (
                  <span key={item} className="rounded-full bg-purple/10 px-3 py-1 text-sm text-purple">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6">
          {projects.other.map((project, index) => (
            <motion.div key={project.title} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 * index }} className="glass-card border border-white/10 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.18)]">
              <span className="inline-flex px-3 py-1 rounded-full bg-white/10 text-gray-100 text-xs uppercase tracking-[0.2em]">Project</span>
              <h3 className="mt-4 text-2xl font-semibold text-cyan">{project.title}</h3>
              <p className="mt-3 italic text-gray-300">{project.description}</p>
              <p className="mt-3 text-gray-100"><strong>Role:</strong> {project.role}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="rounded-full bg-white/5 px-3 py-1 text-sm text-gray-100">{tool}</span>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.images.map((src) => (
                  <img key={src} src={src} alt={`${project.title} screenshot`} className="w-full rounded-3xl border border-white/10 object-cover h-44" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

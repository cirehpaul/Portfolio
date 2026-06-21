import React from 'react'
import content from '../../data/content'
import { motion } from 'framer-motion'

export default function Contact(){
  const { contact } = content
  return (
    <section id="contact" className="mt-16 py-16">
      <div className="glass-card border border-white/10 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.22)]">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-3 text-cyan font-semibold uppercase tracking-[0.25em]">Contact</div>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold">Ready to collaborate?</h2>
          <p className="mt-3 max-w-2xl text-gray-300">Reach out for product support, Android development work, or to discuss how I can help your next application project.</p>
        </motion.div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <a href={contact.email} className="rounded-3xl bg-cyan/10 border border-cyan/20 px-6 py-5 text-white hover:bg-cyan/20 transition">Email me</a>
          <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="rounded-3xl bg-white/5 border border-white/10 px-6 py-5 text-white hover:border-cyan/30 transition">Chat on WhatsApp</a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="rounded-3xl bg-white/5 border border-white/10 px-6 py-5 text-white hover:border-purple/30 transition">LinkedIn</a>
          <a href={contact.github} target="_blank" rel="noreferrer" className="rounded-3xl bg-white/5 border border-white/10 px-6 py-5 text-white hover:border-cyan/30 transition">GitHub</a>
        </div>
      </div>
    </section>
  )
}

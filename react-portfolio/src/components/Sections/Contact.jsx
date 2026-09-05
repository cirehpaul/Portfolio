import React from 'react'
import content from '../../data/content'
import { motion } from 'framer-motion'

export default function Contact() {
  const { contact } = content
  return (
    <section id="contact" className="mt-16 py-16">
      <div className="glass-card border border-white/10 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.22)] transition-all duration-300 hover:border-cyan/30 hover:shadow-[0_20px_50px_rgba(0,212,255,0.1)] group">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-3 text-cyan font-semibold uppercase tracking-[0.25em]">Contact</div>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold transition-colors duration-300 group-hover:text-cyan active:text-cyan">Ready to collaborate?</h2>
          <p className="mt-3 max-w-2xl text-gray-300">Reach out for product support, Android development work, or to discuss how I can help your next application project.</p>
        </motion.div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl bg-white/5 border border-white/10 p-6 flex flex-col gap-2 transition-all duration-300 hover:border-cyan/30 hover:bg-white/10">
            <span className="text-sm font-semibold text-cyan uppercase tracking-widest">Email</span>
            <span className="text-gray-100 font-medium">{contact.email}</span>
          </div>
          <div className="rounded-3xl bg-white/5 border border-white/10 p-6 flex flex-col gap-2 transition-all duration-300 hover:border-green-400/30 hover:bg-white/10">
            <span className="text-sm font-semibold text-green-400 uppercase tracking-widest">WhatsApp</span>
            <span className="text-gray-100 font-medium">{contact.whatsapp}</span>
          </div>
          <div className="rounded-3xl bg-white/5 border border-white/10 p-6 flex flex-col gap-2 transition-all duration-300 hover:border-purple/30 hover:bg-white/10">
            <span className="text-sm font-semibold text-purple uppercase tracking-widest">Viber</span>
            <span className="text-gray-100 font-medium">{contact.Viber}</span>
          </div>
          <div className="rounded-3xl bg-white/5 border border-white/10 p-6 flex flex-col gap-2 transition-all duration-300 hover:border-gray-300/30 hover:bg-white/10">
            <span className="text-sm font-semibold text-gray-300 uppercase tracking-widest">Phone</span>
            <span className="text-gray-100 font-medium">{contact.Phone}</span>
          </div>
          <div className="rounded-3xl bg-white/5 border border-white/10 p-6 flex flex-col gap-2 transition-all duration-300 hover:border-blue-400/30 hover:bg-white/10">
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest">LinkedIn</span>
            <span className="text-gray-100 font-medium">{contact.linkedin}</span>
          </div>
          <div className="rounded-3xl bg-white/5 border border-white/10 p-6 flex flex-col gap-2 transition-all duration-300 hover:border-gray-300/30 hover:bg-white/10">
            <span className="text-sm font-semibold text-gray-300 uppercase tracking-widest">GitHub</span>
            <span className="text-gray-100 font-medium">{contact.github}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import content from '../../data/content'

export default function Footer(){
  const { footer, contact } = content
  return (
    <footer className="mt-16 border-t border-white/10 py-12 text-gray-300">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold text-white">{footer.title}</h3>
          <p className="mt-3 text-gray-400 max-w-xl">{footer.subtitle}</p>
          <a href={contact.email} className="inline-flex mt-4 items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-white border border-white/10 hover:bg-white/10 transition">Email Me</a>
        </div>
        <div className="grid gap-3">
          <p className="font-semibold text-white">Follow Me</p>
          <div className="flex flex-wrap gap-4">
            <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="text-white/80 hover:text-white transition">WhatsApp</a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="text-white/80 hover:text-white transition">LinkedIn</a>
            <a href={contact.github} target="_blank" rel="noreferrer" className="text-white/80 hover:text-white transition">GitHub</a>
            <a href={contact.facebook} target="_blank" rel="noreferrer" className="text-white/80 hover:text-white transition">Facebook</a>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-white/10 pt-6 text-sm text-gray-500">{footer.copyright}</div>
    </footer>
  )
}

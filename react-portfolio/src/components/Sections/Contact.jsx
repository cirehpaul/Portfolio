import React from 'react'
import content from '../../data/content'

export default function Contact() {
  const { contact } = content

  return (
    <section id="contact" className="py-24">
      <div className="fade-up">
        <div className="glass-card p-8 sm:p-12 relative overflow-hidden group hover:border-accent/15 transition-all duration-500">
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/[0.04] rounded-full blur-[100px] pointer-events-none group-hover:bg-accent/[0.07] transition-all duration-700" />

          <div className="relative">
            <span className="section-label">Contact</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Let's Build Something Meaningful
            </h2>
            <p className="mt-3 max-w-xl text-[0.95rem] text-white/45 leading-relaxed">
              Open to opportunities involving application support, data, software development, and technology-driven solutions.
            </p>

            {/* Contact grid */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {/* Email */}
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-4 rounded-xl bg-white/[0.02] border border-white/[0.06] p-4 transition-all duration-300 hover:border-accent/20 hover:bg-accent/[0.03] group/card"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/[0.06] border border-accent/10 text-accent shrink-0 group-hover/card:bg-accent/10 transition-colors duration-300">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <span className="block text-[0.7rem] font-medium text-white/30 uppercase tracking-wider">Email</span>
                  <span className="block text-sm text-white/70 mt-0.5">{contact.email}</span>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${contact.phone.replace(/-/g, '')}`}
                className="flex items-center gap-4 rounded-xl bg-white/[0.02] border border-white/[0.06] p-4 transition-all duration-300 hover:border-accent/20 hover:bg-accent/[0.03] group/card"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/[0.06] border border-accent/10 text-accent shrink-0 group-hover/card:bg-accent/10 transition-colors duration-300">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                </div>
                <div>
                  <span className="block text-[0.7rem] font-medium text-white/30 uppercase tracking-wider">Phone</span>
                  <span className="block text-sm text-white/70 mt-0.5">{contact.phone}</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl bg-white/[0.02] border border-white/[0.06] p-4 transition-all duration-300 hover:border-blue-400/20 hover:bg-blue-400/[0.03] group/card"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-400/[0.06] border border-blue-400/10 text-blue-400 shrink-0 group-hover/card:bg-blue-400/10 transition-colors duration-300">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </div>
                <div>
                  <span className="block text-[0.7rem] font-medium text-white/30 uppercase tracking-wider">LinkedIn</span>
                  <span className="block text-sm text-white/70 mt-0.5">{contact.linkedin}</span>
                </div>
              </a>

              {/* Portfolio */}
              <a
                href={contact.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl bg-white/[0.02] border border-white/[0.06] p-4 transition-all duration-300 hover:border-accent/20 hover:bg-accent/[0.03] group/card"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/[0.06] border border-accent/10 text-accent shrink-0 group-hover/card:bg-accent/10 transition-colors duration-300">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
                </div>
                <div>
                  <span className="block text-[0.7rem] font-medium text-white/30 uppercase tracking-wider">Portfolio</span>
                  <span className="block text-sm text-white/70 mt-0.5">{contact.portfolio}</span>
                </div>
              </a>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <a href={`mailto:${contact.email}`} className="btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

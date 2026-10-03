import React from 'react'
import content from '../../data/content'

export default function About() {
  const { about } = content

  return (
    <section id="about" className="py-24">
      <div className="fade-up">
        <span className="section-label">About</span>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight">
          Professional Summary
        </h2>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr] items-start">
        {/* Summary text */}
        <div className="fade-up">
          <div className="glass-card p-6 sm:p-8">
            <p className="text-[0.95rem] leading-[1.8] text-white/60">
              {about.summary}
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="fade-up">
          <div className="glass-card p-6 sm:p-8">
            <h3 className="text-sm font-semibold text-white/80 mb-4 uppercase tracking-wider">
              Core Expertise
            </h3>
            <div className="flex flex-wrap gap-2">
              {about.highlights.map((item) => (
                <span key={item} className="tech-badge">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

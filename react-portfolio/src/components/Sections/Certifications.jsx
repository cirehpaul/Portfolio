import React, { useState } from 'react'
import content from '../../data/content'

export default function Certifications() {
  const { certifications } = content
  const years = Object.keys(certifications).sort((a, b) => b - a)
  const [activeYear, setActiveYear] = useState(years[0])

  const activeCerts = certifications[activeYear] || []

  return (
    <section id="certifications" className="py-24">
      <div className="fade-up">
        <span className="section-label">Certifications</span>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight">
          Verified Achievements
        </h2>
        <p className="mt-3 max-w-xl text-[0.9rem] text-white/40">
          Continuous professional development through industry certifications and specialized training.
        </p>
      </div>

      {/* Year tabs */}
      <div className="mt-8 flex gap-2 fade-up">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setActiveYear(year)}
            className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-300 ${
              activeYear === year
                ? 'bg-accent/10 border border-accent/20 text-accent'
                : 'bg-white/[0.03] border border-white/[0.06] text-white/50 hover:text-white/70'
            }`}
          >
            {year}
            <span className="ml-1.5 text-[0.65rem] text-current opacity-60">
              ({certifications[year].length})
            </span>
          </button>
        ))}
      </div>

      {/* Certification list */}
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {activeCerts.map((cert, idx) => (
          <div
            key={`${activeYear}-${idx}`}
            className="fade-up glass-card p-4 sm:p-5 group hover:border-accent/15 transition-all duration-400"
            style={{ transitionDelay: `${idx * 40}ms` }}
          >
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/[0.06] border border-accent/10 text-accent text-[0.65rem] font-bold shrink-0 mt-0.5 group-hover:bg-accent/10 transition-colors duration-300">
                {String(idx + 1).padStart(2, '0')}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[0.85rem] font-medium text-white/75 leading-snug group-hover:text-white/90 transition-colors duration-300">
                  {cert}
                </h3>
                <span className="mt-1.5 inline-block text-[0.65rem] text-white/25">{activeYear}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Total count */}
      <div className="mt-6 text-center fade-up">
        <span className="text-xs text-white/25">
          Total: {Object.values(certifications).flat().length} certifications & training programs
        </span>
      </div>
    </section>
  )
}

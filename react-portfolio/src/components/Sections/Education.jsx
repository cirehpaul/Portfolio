import React from 'react'
import content from '../../data/content'

export default function Education() {
  const { education } = content

  return (
    <section className="py-24">
      <div className="fade-up">
        <span className="section-label">Education</span>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight">
          Academic Background
        </h2>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 fade-up">
        {education.map((edu, index) => (
          <div key={edu.institution} className="glass-card p-6 group hover:border-accent/15 transition-all duration-500">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                {edu.degree && (
                  <span className="tech-badge text-[0.7rem] mb-3">{edu.degree}</span>
                )}
                <h3 className="text-lg font-semibold text-white group-hover:text-accent/90 transition-colors duration-300">
                  {edu.institution}
                </h3>
                {edu.location && (
                  <p className="mt-1 text-xs text-white/30">{edu.location}</p>
                )}
                <p className="mt-2 text-sm text-white/40">{edu.period}</p>
                {edu.achievement && (
                  <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-accent/[0.06] border border-accent/15 px-3 py-1 text-xs font-medium text-accent">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    {edu.achievement}
                  </div>
                )}
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/[0.04] border border-accent/10 text-accent/60 text-lg shrink-0">
                🎓
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

import React, { useState } from 'react'
import content from '../../data/content'

export default function Experience() {
  const { experience } = content
  const [expandedId, setExpandedId] = useState(1) // Default expand current role

  const toggle = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="experience" className="py-24">
      <div className="fade-up">
        <span className="section-label">Experience</span>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight">
          Professional Timeline
        </h2>
        <p className="mt-3 max-w-xl text-[0.9rem] text-white/40">
          Work experience across application support, mobile development, and data management.
        </p>
      </div>

      <div className="mt-12 relative pl-10">
        {/* Timeline line */}
        <div className="timeline-line" />

        <div className="space-y-8">
          {experience.map((job, index) => {
            const isExpanded = expandedId === job.id
            return (
              <div key={job.id} className="fade-up relative">
                {/* Timeline dot */}
                <div className={`timeline-dot ${job.current ? 'active' : ''}`} />

                {/* Card */}
                <div
                  className={`glass-card overflow-hidden transition-all duration-500 ${
                    job.current ? 'border-accent/15 shadow-[0_0_40px_rgba(34,197,94,0.06)]' : ''
                  }`}
                >
                  {/* Header - always visible */}
                  <button
                    onClick={() => toggle(job.id)}
                    className="w-full text-left p-5 sm:p-6 flex flex-col sm:flex-row sm:items-start justify-between gap-3 group"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-semibold text-accent bg-accent/[0.08] border border-accent/15 rounded-full px-2.5 py-0.5">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        {job.current && (
                          <span className="flex items-center gap-1.5 text-xs font-medium text-accent bg-accent/[0.06] border border-accent/15 rounded-full px-2.5 py-0.5">
                            <span className="pulse-dot" />
                            Current
                          </span>
                        )}
                        <span className="text-xs text-white/30 uppercase tracking-wider font-medium">{job.type}</span>
                      </div>
                      <h3 className="mt-2.5 text-lg sm:text-xl font-semibold text-white group-hover:text-accent/90 transition-colors duration-300">
                        {job.title}
                      </h3>
                      <p className="mt-1 text-sm text-white/40">
                        {job.company} · {job.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs font-medium text-white/40 bg-white/[0.04] border border-white/[0.06] rounded-full px-3 py-1">
                        {job.period}
                      </span>
                      <svg
                        width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className={`text-white/30 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </button>

                  {/* Expandable content */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-0 border-t border-white/[0.04]">
                      {/* Project */}
                      <div className="mt-4 flex items-start gap-2">
                        <span className="text-xs font-semibold text-white/50 uppercase tracking-wider mt-0.5">Project:</span>
                        <span className="text-sm text-white/70">{job.project}</span>
                      </div>

                      {/* Key Responsibilities */}
                      <div className="mt-5">
                        <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">Key Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((item, i) => (
                            <li key={i} className="flex gap-2.5 text-[0.85rem] text-white/55 leading-relaxed">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/40 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Activities (only for current role) */}
                      {job.activities && (
                        <div className="mt-5">
                          <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">Incident Management Activities</h4>
                          <div className="flex flex-wrap gap-1.5">
                            {job.activities.map((act) => (
                              <span key={act} className="neutral-badge text-[0.7rem]">{act}</span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Tools */}
                      <div className="mt-5">
                        <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">Tools & Technologies</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {job.tools.map((tool) => (
                            <span key={tool} className="tech-badge text-[0.7rem]">{tool}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import React, { useState } from 'react'
import content from '../../data/content'

export default function Projects() {
  const { projects } = content
  const [filter, setFilter] = useState('all')

  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)
  const displayed = filter === 'featured' ? featured : filter === 'other' ? others : projects

  return (
    <section id="projects" className="py-24">
      <div className="fade-up">
        <span className="section-label">Projects</span>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight">
          Featured Work
        </h2>
        <p className="mt-3 max-w-xl text-[0.9rem] text-white/40">
          A showcase of professional and personal projects spanning mobile apps, web platforms, and AI integrations.
        </p>
      </div>

      {/* Filter pills */}
      <div className="mt-8 flex gap-2 fade-up">
        {['all', 'featured', 'other'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-300 capitalize ${
              filter === f
                ? 'bg-accent/10 border border-accent/20 text-accent'
                : 'bg-white/[0.03] border border-white/[0.06] text-white/50 hover:text-white/70 hover:bg-white/[0.05]'
            }`}
          >
            {f === 'all' ? 'All Projects' : f === 'featured' ? 'Featured' : 'More Projects'}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {displayed.map((project, index) => (
          <div key={project.id} className="fade-up" style={{ transitionDelay: `${index * 60}ms` }}>
            <div className="glass-card h-full flex flex-col group hover:border-accent/15 transition-all duration-500">
              {/* Project header */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-accent bg-accent/[0.08] border border-accent/15 rounded-full px-2.5 py-0.5">
                    {String(project.id).padStart(2, '0')}
                  </span>
                  {project.featured && (
                    <span className="text-[0.65rem] font-medium text-white/30 uppercase tracking-widest">Featured</span>
                  )}
                </div>

                <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-white/30 uppercase tracking-wider">
                  {project.subtitle}
                </p>

                <p className="mt-3 text-[0.85rem] text-white/45 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="mt-3">
                  <span className="text-xs text-white/30">Role: </span>
                  <span className="text-xs font-medium text-white/60">{project.role}</span>
                </div>

                {/* Tech stack */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-badge text-[0.65rem]">{t}</span>
                  ))}
                </div>

                {/* Project images */}
                {project.images && project.images.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {project.images.slice(0, 2).map((src) => (
                      <img
                        key={src}
                        src={src}
                        alt={`${project.title} screenshot`}
                        className="w-full h-20 object-cover rounded-lg border border-white/[0.06]"
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Footer actions */}
              <div className="border-t border-white/[0.04] p-4 flex gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-accent/[0.06] border border-accent/15 px-3 py-2.5 text-xs font-semibold text-accent transition-all duration-300 hover:bg-accent/15 hover:shadow-[0_0_16px_rgba(34,197,94,0.12)]"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    View Project
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.06] px-3 py-2.5 text-xs font-medium text-white/50 transition-all duration-300 hover:text-white/80 hover:bg-white/[0.06]"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                )}
                {!project.liveUrl && !project.githubUrl && (
                  <div className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-white/[0.02] border border-white/[0.04] px-3 py-2.5 text-xs text-white/25">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0110 0v4" />
                    </svg>
                    Private Project
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

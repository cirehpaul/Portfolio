import React, { useState } from 'react'
import content from '../../data/content'

export default function Skills() {
  const { skills } = content
  const [activeTab, setActiveTab] = useState('technical')

  return (
    <section id="skills" className="py-24">
      <div className="fade-up">
        <span className="section-label">Skills</span>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight">
          Technical Expertise
        </h2>
        <p className="mt-3 max-w-xl text-[0.9rem] text-white/40">
          A comprehensive overview of core technical and professional capabilities.
        </p>
      </div>

      {/* Tab toggle */}
      <div className="mt-8 flex gap-2 fade-up">
        <button
          onClick={() => setActiveTab('technical')}
          className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-300 ${
            activeTab === 'technical'
              ? 'bg-accent/10 border border-accent/20 text-accent'
              : 'bg-white/[0.03] border border-white/[0.06] text-white/50 hover:text-white/70'
          }`}
        >
          Technical Skills
        </button>
        <button
          onClick={() => setActiveTab('professional')}
          className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-300 ${
            activeTab === 'professional'
              ? 'bg-accent/10 border border-accent/20 text-accent'
              : 'bg-white/[0.03] border border-white/[0.06] text-white/50 hover:text-white/70'
          }`}
        >
          Professional Skills
        </button>
      </div>

      {/* Technical Skills Grid */}
      {activeTab === 'technical' && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.categories.map((cat, index) => (
            <div key={cat.name} className="fade-up" style={{ transitionDelay: `${index * 50}ms` }}>
              <div className="glass-card p-5 h-full group hover:border-accent/15 transition-all duration-500">
                {/* Category icon & name */}
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/[0.06] border border-accent/10 text-sm group-hover:bg-accent/10 transition-colors duration-300">
                    {cat.icon}
                  </span>
                  <h3 className="text-sm font-semibold text-white/80">{cat.name}</h3>
                </div>

                {/* Skill items */}
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item) => (
                    <span key={item} className="neutral-badge text-[0.7rem]">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Professional Skills */}
      {activeTab === 'professional' && (
        <div className="mt-8 fade-up">
          <div className="glass-card p-6 sm:p-8">
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {skills.professional.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] px-4 py-3 text-[0.8rem] text-white/55 transition-all duration-300 hover:border-accent/15 hover:text-white/75 hover:bg-accent/[0.03]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/30 shrink-0" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

import React from 'react'
import content from '../../data/content'

export default function Dashboard() {
  const { dashboard } = content
  const maxCount = Math.max(...dashboard.categories.map((c) => c.count))

  return (
    <section className="py-24">
      <div className="fade-up">
        <span className="section-label">Data & ITSM</span>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight">
          Service Desk Overview
        </h2>
        <p className="mt-3 max-w-xl text-[0.9rem] text-white/40">
          A conceptual dashboard demonstrating familiarity with incident monitoring, SLA management, ticket analysis, and service desk reporting.
        </p>
        <p className="mt-1 text-[0.75rem] text-white/25 italic">
          * Sample data for visualization purposes only
        </p>
      </div>

      {/* Metrics row */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 fade-up">
        {dashboard.metrics.map((metric) => (
          <div key={metric.label} className="dashboard-metric group">
            <div className="flex items-center justify-between">
              <span className="text-lg">{metric.icon}</span>
              <span className={`text-[0.7rem] font-semibold rounded-full px-2 py-0.5 ${
                metric.change.startsWith('+')
                  ? 'text-accent bg-accent/[0.08]'
                  : 'text-blue-400 bg-blue-400/[0.08]'
              }`}>
                {metric.change}
              </span>
            </div>
            <div className="mt-3 text-2xl font-bold text-white tracking-tight">{metric.value}</div>
            <div className="mt-1 text-[0.75rem] text-white/35">{metric.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {/* Incident Categories */}
        <div className="fade-up">
          <div className="glass-card p-5 sm:p-6 h-full">
            <h3 className="text-sm font-semibold text-white/70 mb-5">Incident Categories</h3>
            <div className="space-y-3">
              {dashboard.categories.map((cat) => (
                <div key={cat.name} className="group">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[0.8rem] text-white/55">{cat.name}</span>
                    <span className="text-[0.75rem] font-medium text-white/40">{cat.count}</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${(cat.count / maxCount) * 100}%`,
                        background: `linear-gradient(90deg, ${cat.color}, ${cat.color}88)`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-5">
          {/* Resolution Progress */}
          <div className="fade-up">
            <div className="glass-card p-5 sm:p-6">
              <h3 className="text-sm font-semibold text-white/70 mb-4">Resolution Progress</h3>
              <div className="flex gap-3">
                {dashboard.resolutionProgress.map((item) => (
                  <div key={item.label} className="flex-1 text-center">
                    <div className="relative mx-auto w-16 h-16">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="rgba(255,255,255,0.06)"
                          strokeWidth="3"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke={item.label === 'Resolved' ? '#22c55e' : item.label === 'In Progress' ? '#3b82f6' : '#f59e0b'}
                          strokeWidth="3"
                          strokeDasharray={`${item.pct}, 100`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white/80">
                        {item.pct}%
                      </span>
                    </div>
                    <span className="mt-2 block text-[0.7rem] text-white/40">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ticket Aging */}
          <div className="fade-up">
            <div className="glass-card p-5 sm:p-6">
              <h3 className="text-sm font-semibold text-white/70 mb-4">Ticket Aging</h3>
              <div className="flex items-end gap-3 h-24">
                {dashboard.ticketAging.map((bucket) => {
                  const maxBucket = Math.max(...dashboard.ticketAging.map((b) => b.count))
                  const height = (bucket.count / maxBucket) * 100
                  return (
                    <div key={bucket.range} className="flex-1 flex flex-col items-center gap-1.5">
                      <span className="text-[0.65rem] font-medium text-white/50">{bucket.count}</span>
                      <div
                        className="w-full rounded-t-md transition-all duration-500"
                        style={{
                          height: `${height}%`,
                          background: `linear-gradient(to top, rgba(34,197,94,0.3), rgba(34,197,94,0.08))`
                        }}
                      />
                      <span className="text-[0.6rem] text-white/30">{bucket.range}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

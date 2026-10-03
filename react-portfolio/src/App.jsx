import React, { useEffect, useState } from 'react'
import Navbar from './components/Layout/Navbar'
import Hero from './components/Hero/Hero'
import Preloader from './components/Preloader/Preloader'
import About from './components/Sections/About'
import Experience from './components/Sections/Experience'
import Projects from './components/Sections/Projects'
import Skills from './components/Sections/Skills'
import Education from './components/Sections/Education'
import Certifications from './components/Sections/Certifications'
import Contact from './components/Sections/Contact'
import Footer from './components/Layout/Footer'
import Chatbot from './components/Chatbot'

export default function App() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // IntersectionObserver for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-surface text-white overflow-x-hidden">
      <Preloader />
      <Navbar />

      <main className="relative">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(34,197,94,0.12),transparent_70%)]" />

        <div className="relative">
          <Hero />
          <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Certifications />
            <Contact />
          </div>
          <Footer />
        </div>

        <Chatbot />
      </main>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`back-to-top ${showTop ? 'show' : ''}`}
        aria-label="Back to top"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </div>
  )
}

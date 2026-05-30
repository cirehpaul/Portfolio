import React from 'react'
import Navbar from './components/Layout/Navbar'
import Hero from './components/Hero/Hero'
import Preloader from './components/Preloader/Preloader'
import HeroStats from './components/Hero/HeroStats'
import About from './components/Sections/About'
import Skills from './components/Sections/Skills'
import Experience from './components/Sections/Experience'
import Projects from './components/Sections/Projects'
import Certifications from './components/Sections/Certifications'
import Contact from './components/Sections/Contact'
import Footer from './components/Layout/Footer'

export default function App(){
  return (
    <div className="min-h-screen bg-[#05060a] text-white overflow-x-hidden">
      <Preloader />
      <Navbar />
      <main className="relative pt-24">
        <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top,_rgba(0,212,255,0.18),transparent_35%),radial-gradient(circle_at_15%_20%,_rgba(127,90,240,0.16),transparent_30%)] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6">
          <Hero />
          <HeroStats />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  )
}

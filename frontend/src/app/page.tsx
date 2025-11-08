'use client'
import { useState } from 'react'
import Navigation from './components/layout/Navigation'
import Hero from './components/sections/Hero'
import AboutSection from './components/sections/AboutSection'
import AgenticTimeline from './components/sections/AgenticTimeline'
import SolutionsGrid from './components/sections/SolutionsGrid'
import Benefits from './components/sections/Benefits'
import ContactSection from './components/sections/ContactSection'
import CTA from './components/sections/CTA'
import Footer from './components/layout/Footer'
import QuotationModal from './components/layout/QuotationModal'
import FloatingActions from './components/layout/FloatingActions'


export default function Home() {
  const [quotationModalOpen, setQuotationModalOpen] = useState(false)

  return (
    <>
      <Navigation onContactClick={() => setQuotationModalOpen(true)} />
      <Hero />
      <AboutSection />
      <AgenticTimeline />
      <SolutionsGrid />
      <Benefits />
      <ContactSection />
      <CTA />
      <FloatingActions onQuotationClick={() => setQuotationModalOpen(true)} />
      <QuotationModal 
        isOpen={quotationModalOpen} 
        onClose={() => setQuotationModalOpen(false)} 
      />
      <Footer />
    </>
  )
}

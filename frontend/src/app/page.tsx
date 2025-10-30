import Navigation from './components/layout/Navigation'
import Hero from './components/sections/Hero'
import AboutSection from './components/sections/AboutSection'
import AgenticTimeline from './components/sections/AgenticTimeline'
import SolutionsGrid from './components/sections/SolutionsGrid'
import Benefits from './components/sections/Benefits'
import ContactSection from './components/sections/ContactSection'
import CTA from './components/sections/CTA'
import Footer from './components/layout/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <AboutSection />
      <AgenticTimeline />
      <SolutionsGrid />
      <Benefits />
      <ContactSection />
      <CTA />
      <Footer />
    </>
  )
}

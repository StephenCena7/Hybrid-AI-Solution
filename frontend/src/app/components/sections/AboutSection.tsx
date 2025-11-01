'use client'

import { useEffect, useRef, useState } from 'react'

export default function AboutSection() {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const statsRef = useRef(null)
  const cardsRef = useRef(null)
  const missionRef = useRef(null)
  const valuesRef = useRef(null)

  const [stats, setStats] = useState({ years: 0, projects: 0, clients: 0 })
  const [hasAnimated, setHasAnimated] = useState(false)

  const statTargets = {
    years: 20,
    projects: 500,
    clients: 50
  }

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    if (headerRef.current) observer.observe(headerRef.current)
    if (cardsRef.current) observer.observe(cardsRef.current)
    if (missionRef.current) observer.observe(missionRef.current)
    if (valuesRef.current) observer.observe(valuesRef.current)

    return () => observer.disconnect()
  }, [])

  // Animated counter effect
  useEffect(() => {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          animateCounters()
          statsObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.4 })

    if (statsRef.current) {
      statsObserver.observe(statsRef.current)
    }

    return () => statsObserver.disconnect()
  }, [hasAnimated])

  const animateCounters = () => {
    const duration = 2000
    const startTime = Date.now()

    const updateCounters = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      const easeOutQuad = 1 - (1 - progress) * (1 - progress)

      setStats({
        years: Math.floor(statTargets.years * easeOutQuad),
        projects: Math.floor(statTargets.projects * easeOutQuad),
        clients: Math.floor(statTargets.clients * easeOutQuad)
      })

      if (progress < 1) {
        requestAnimationFrame(updateCounters)
      }
    }

    requestAnimationFrame(updateCounters)
  }

  return (
    <section className="about-section" ref={sectionRef} id="about">
      <div className="about-container">
        {/* Decorative Elements */}
        <div className="about-decoration about-decoration-top"></div>
        <div className="about-decoration about-decoration-bottom"></div>

        {/* Header */}
        <div className="about-header" ref={headerRef}>
          <h2 className="about-title">
            About{' '}
            <span className="about-gradient-text">
              Hybrid AI Solution
            </span>
          </h2>
          
          <p className="about-subtitle">
            With over two decades of ERP experience across diverse industries, Hybrid AI Solution stands as a trusted partner for organizations pursuing efficiency, innovation, and intelligence. Our teams have delivered transformative ERP, CRM, HRMS, Billing, and AI-driven systems that empower businesses to scale smarter and operate seamlessly.
          </p>

          {/* Enhanced Stats with Animation */}
          <div className="about-stats-wrapper" ref={statsRef}>
            <div className="about-stats-container">
              <div className="stat-item stat-item-enhanced">
                <div className="stat-value-animated">{stats.years}+</div>
                <div className="stat-label">Years Active</div>
                <div className="stat-bar">
                  <div className="stat-bar-fill" style={{ width: `${(stats.years / statTargets.years) * 100}%` }}></div>
                </div>
              </div>
              <div className="stat-item stat-item-enhanced">
                <div className="stat-value-animated">{stats.projects}+</div>
                <div className="stat-label">Projects Delivered</div>
                <div className="stat-bar">
                  <div className="stat-bar-fill" style={{ width: `${(stats.projects / statTargets.projects) * 100}%` }}></div>
                </div>
              </div>
              <div className="stat-item stat-item-enhanced">
                <div className="stat-value-animated">{stats.clients}+</div>
                <div className="stat-label">Global Clients</div>
                <div className="stat-bar">
                  <div className="stat-bar-fill" style={{ width: `${(stats.clients / statTargets.clients) * 100}%` }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="about-cards-grid" ref={cardsRef}>
          <div className="about-card">
            <div className="about-card-header">
              <div className="about-card-icon about-icon-cyan">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 8v4l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div className="about-card-accent"></div>
            </div>

            <div className="about-card-content">
              <h3 className="about-card-title">20+ Years Experience</h3>
              <p className="about-card-text">
                Deep domain expertise across manufacturing, retail, healthcare, and services industries with proven track records.
              </p>
              <div className="about-card-features">
                <span className="feature-tag">ERP Solutions</span>
                <span className="feature-tag">Enterprise Systems</span>
                <span className="feature-tag">AI Integration</span>
              </div>
            </div>
          </div>

          <div className="about-card">
            <div className="about-card-header">
              <div className="about-card-icon about-icon-purple">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0110.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div className="about-card-accent about-card-accent-purple"></div>
            </div>

            <div className="about-card-content">
              <h3 className="about-card-title">Global Delivery</h3>
              <p className="about-card-text">
                Our consultants and engineers have implemented ERP solutions for clients across continents and multiple time zones.
              </p>
              <div className="about-card-features">
                <span className="feature-tag">Multi-Continent</span>
                <span className="feature-tag">24/7 Support</span>
                <span className="feature-tag">Localized Solutions</span>
              </div>
            </div>
          </div>

          <div className="about-card">
            <div className="about-card-header">
              <div className="about-card-icon about-icon-pink">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <div className="about-card-accent about-card-accent-pink"></div>
            </div>

            <div className="about-card-content">
              <h3 className="about-card-title">Innovation DNA</h3>
              <p className="about-card-text">
                Blending AI, automation, and modern design thinking into every enterprise solution we deliver.
              </p>
              <div className="about-card-features">
                <span className="feature-tag">AI-Powered</span>
                <span className="feature-tag">Automation</span>
                <span className="feature-tag">Modern Tech Stack</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="about-mission-vision" ref={missionRef}>
          <div className="mission-vision-card mission-card">
            <div className="mission-vision-icon mission-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <h3 className="mission-vision-title">Our Mission</h3>
            <p className="mission-vision-text">
              To empower enterprises with intelligent, scalable solutions that transform operations and drive sustainable growth through cutting-edge technology and expertise.
            </p>
          </div>

          <div className="mission-vision-divider"></div>

          <div className="mission-vision-card vision-card">
            <div className="mission-vision-icon vision-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <h3 className="mission-vision-title">Our Vision</h3>
            <p className="mission-vision-text">
              To be the leading AI-enabled enterprise solution partner, recognized for delivering exceptional value and pioneering the future of intelligent business automation.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="core-values" ref={valuesRef}>
          <h3 className="core-values-title">Core Values That Drive Us</h3>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"/>
                  <polyline points="13 2 13 9 20 9"/>
                </svg>
              </div>
              <h4 className="value-name">Excellence</h4>
              <p className="value-desc">Commitment to highest quality standards</p>
            </div>

            <div className="value-item">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0-0-4-4H5a4 4 0 0-0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0-0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h4 className="value-name">Collaboration</h4>
              <p className="value-desc">Working together for greater impact</p>
            </div>

            <div className="value-item">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L15.09 8.26H21.77L16.84 12.74L18.93 19.01L12 14.53L5.07 19.01L7.16 12.74L2.23 8.26H8.91L12 2Z"/>
                </svg>
              </div>
              <h4 className="value-name">Innovation</h4>
              <p className="value-desc">Constantly pushing boundaries forward</p>
            </div>

            <div className="value-item">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                  <line x1="9" y1="9" x2="9.01" y2="9"/>
                  <line x1="15" y1="9" x2="15.01" y2="9"/>
                </svg>
              </div>
              <h4 className="value-name">Integrity</h4>
              <p className="value-desc">Honest and ethical in all dealings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { JSX, useEffect, useRef } from 'react'

interface Solution {
  id: number
  title: string
  description: string
  icon: JSX.Element
  color: string
  features?: string[]
}

const solutions: Solution[] = [
  {
    id: 1,
    title: 'ERP Systems',
    description: 'Streamlined finance, procurement, production, and supply chain processes for better decision-making.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <line x1="3" y1="9" x2="21" y2="9"/>
        <line x1="9" y1="21" x2="9" y2="9"/>
      </svg>
    ),
    color: 'cyan',
    features: ['Finance', 'Procurement', 'Supply Chain']
  },
  {
    id: 2,
    title: 'CRM Solutions',
    description: 'Drive customer engagement and retention through intelligent sales and marketing automation.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    color: 'purple',
    features: ['Sales', 'Marketing', 'Customer Engagement']
  },
  {
    id: 3,
    title: 'Retail Solutions',
    description: 'Omnichannel retail management with inventory sync, multi-store operations, and customer analytics.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="9" cy="21" r="1"/>
        <circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
        <path d="M6 10h17"/>
      </svg>
    ),
    color: 'green',
    features: ['Multi-Store', 'Inventory', 'Analytics']
  },
  {
    id: 4,
    title: 'HRMS Platform',
    description: 'From recruitment to retirement — a unified employee experience powered by intelligence.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    color: 'pink',
    features: ['Recruitment', 'Payroll', 'Performance']
  },
  {
    id: 5,
    title: 'Point of Sale',
    description: 'Next-gen retail POS with real-time inventory, multi-location support, and advanced analytics.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 01-8 0"/>
      </svg>
    ),
    color: 'orange',
    features: ['Real-time', 'Multi-location', 'Analytics']
  },
  {
    id: 6,
    title: 'Business Intelligence',
    description: 'Advanced analytics and AI-driven insights to empower data-driven decision making across enterprise.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        <line x1="9" y1="3" x2="9" y2="21"/>
        <line x1="15" y1="21" x2="15" y2="3"/>
      </svg>
    ),
    color: 'violet',
    features: ['Analytics', 'AI-Insights', 'Dashboards']
  }
]

export default function SolutionsGrid() {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
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
    if (gridRef.current) observer.observe(gridRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="solutions-section" ref={sectionRef} id="solutions">
      {/* Decorative Background Elements */}
      <div className="solutions-decoration solutions-decoration-top"></div>
      <div className="solutions-decoration solutions-decoration-bottom"></div>

      <div className="solutions-container">
        {/* Header */}
        <div className="solutions-header" ref={headerRef}>
          <h2 className="solutions-title">
            Our{' '}
            <span className="solutions-gradient-text">
              Solutions
            </span>
          </h2>
          <p className="solutions-subtitle">
            Comprehensive enterprise solutions designed to transform every aspect 
            of your business operations with intelligence and automation.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="solutions-grid" ref={gridRef}>
          {solutions.map((solution, index) => (
            <div 
              key={solution.id} 
              className="solution-card"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {/* Card Background Effects */}
              <div className="solution-card-bg"></div>
              <div className="solution-card-border"></div>

              {/* Icon Section */}
              <div className={`solution-icon solution-icon-${solution.color}`}>
                {solution.icon}
                <div className="solution-icon-glow"></div>
              </div>

              {/* Content Section */}
              <div className="solution-content">
                <h3 className="solution-title">{solution.title}</h3>
                <p className="solution-description">{solution.description}</p>

                {/* Features Tags */}
                {solution.features && (
                  <div className="solution-features">
                    {solution.features.map((feature, idx) => (
                      <span key={idx} className="feature-badge">{feature}</span>
                    ))}
                  </div>
                )}
              </div>

              {/* Hover Effects */}
              <div className="solution-hover-effect"></div>
              <div className="solution-shine"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

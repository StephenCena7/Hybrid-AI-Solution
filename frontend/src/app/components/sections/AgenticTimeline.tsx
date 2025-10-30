'use client'

import { useEffect, useRef, useState } from 'react'

const timelineData = [
  {
    id: 1,
    title: 'Finance & Accounting Evolution',
    problem: 'Complex reconciliations, lengthy closings, and delayed insights limit strategic visibility.',
    solution: 'Autonomous finance agents reconcile transactions, monitor anomalies, and generate real-time performance dashboards — reducing close cycles by 40%.',
    color: 'cyan',
    position: 'right',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M2 12h20M7 7h10v10H7z"/>
        <circle cx="12" cy="12" r="4"/>
      </svg>
    )
  },
  {
    id: 2,
    title: 'Procurement Intelligence',
    problem: 'Vendor performance and pricing data are often siloed, creating inefficiencies and delays in sourcing decisions.',
    solution: 'Procurement agents evaluate supplier health, negotiate dynamically, and auto-trigger purchase approvals — enabling real-time sourcing agility.',
    color: 'green',
    position: 'left',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 2L4 7M15 2l5 5M2 9h20M3 15h18v6H3z"/>
        <line x1="9" y1="15" x2="9" y2="21"/>
        <line x1="15" y1="15" x2="15" y2="21"/>
      </svg>
    )
  },
  {
    id: 3,
    title: 'Human Capital Empowerment',
    problem: 'HR processes are reactive, leaving gaps in workforce planning and engagement analytics.',
    solution: 'HR agents analyze talent data, predict attrition, and recommend skill realignment — making workforce management proactive and data-driven.',
    color: 'pink',
    position: 'right',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 11c1.105 0 2-1.119 2-2.5S13.105 6 12 6s-2 1.119-2 2.5S10.895 11 12 11z"/>
        <path d="M12 14c-3 0-5 1.5-5 3v3h10v-3c0-1.5-2-3-5-3z"/>
        <circle cx="18" cy="19" r="2"/>
        <path d="M18 17v4"/>
      </svg>
    )
  },
  {
    id: 4,
    title: 'Supply Chain Synchronization',
    problem: 'Disruptions across suppliers, inventory, and logistics lead to delayed deliveries and inflated costs.',
    solution: 'Agents forecast demand, reroute logistics, and optimize inventory — ensuring resilience and just-in-time fulfillment even during uncertainty.',
    color: 'yellow',
    position: 'left',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 7h20M4 7v10c0 1.105.895 2 2 2h12c1.105 0 2-.895 2-2V7"/>
        <path d="M3 10h18M7 17v3M12 17v3M17 17v3"/>
        <circle cx="8" cy="7" r="1"/>
        <circle cx="16" cy="7" r="1"/>
      </svg>
    )
  },
  {
    id: 5,
    title: 'Sales & Customer Engagement',
    problem: 'Inconsistent insights between sales forecasts and customer service hinder responsiveness.',
    solution: 'Customer agents unify CRM and ERP data, predict demand, and trigger personalized offers — improving conversion and retention simultaneously.',
    color: 'orange',
    position: 'right',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
        <circle cx="12" cy="6" r="1.5"/>
      </svg>
    )
  },
  {
    id: 6,
    title: 'Unified Intelligence & Analytics',
    problem: 'Traditional reporting is backward-looking, offering limited guidance for what\'s next.',
    solution: 'Central intelligence agents integrate cross-module insights, generate predictive dashboards, and drive continuous optimization across your ERP ecosystem.',
    color: 'violet',
    position: 'left',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3h18v18H3z"/>
        <path d="M3 9h18M9 3v18M15 3v18"/>
        <circle cx="6" cy="6" r="1"/>
        <circle cx="12" cy="6" r="1"/>
        <circle cx="18" cy="6" r="1"/>
      </svg>
    )
  }
]

export default function AgenticTimeline() {
  const timelineRef = useRef<HTMLDivElement | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [itemsVisible, setItemsVisible] = useState<boolean[]>(new Array(6).fill(false))

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return

      const element = timelineRef.current
      const elementTop = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      const totalHeight = element.offsetHeight
      const scrolled = windowHeight - elementTop
      const progress = Math.max(0, Math.min(1, scrolled / totalHeight))

      setScrollProgress(progress)

      const items = document.querySelectorAll('.timeline-item')
      const newVisibility = Array.from(items).map((item) => {
        const rect = item.getBoundingClientRect()
        return rect.top < windowHeight * 0.75
      })
      setItemsVisible(newVisibility)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="timeline-section" ref={timelineRef} id="solutions">
      {/* Background Effects */}
      <div className="timeline-bg-orb"></div>
      <div className="timeline-bg-orb-secondary"></div>
      
      {/* Header */}
      <div className="timeline-header">
        <div className="timeline-badge-header">
          <span className="badge-icon">⚡</span>
          <span className="badge-text">Advanced Agentic Solutions</span>
        </div>

        <h2 className="timeline-title">
          Reinventing ERP with{' '}
          <span className="timeline-gradient-text">
            Agentic Intelligence
          </span>
        </h2>
        <p className="timeline-subtitle">
          Turning every ERP module into a network of intelligent, self-learning agents — 
          enabling collaboration, insight, and agility across all business functions.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="timeline-container">
        {/* Desktop Timeline Line */}
        <div className="timeline-line">
          <div 
            className="timeline-line-progress"
            style={{ 
              height: `${scrollProgress * 100}%`
            }}
          ></div>
        </div>

        {/* Extended Flow Line */}
        <svg className="timeline-flow-line" viewBox="0 0 1000 800" preserveAspectRatio="none">
          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(34, 211, 238, 0.8)" stopOpacity={scrollProgress}/>
              <stop offset="100%" stopColor="rgba(168, 85, 247, 0.8)" stopOpacity={scrollProgress}/>
            </linearGradient>
          </defs>
          <line x1="500" y1="0" x2="500" y2="600" stroke="url(#flowGradient)" strokeWidth="3"/>
          <line x1="500" y1="600" x2="250" y2="700" stroke="url(#flowGradient)" strokeWidth="3"/>
          <line x1="500" y1="600" x2="750" y2="700" stroke="url(#flowGradient)" strokeWidth="3"/>
          <path d="M 250 700 Q 250 750, 300 750" stroke="url(#flowGradient)" strokeWidth="3" fill="none"/>
          <path d="M 750 700 Q 750 750, 700 750" stroke="url(#flowGradient)" strokeWidth="3" fill="none"/>
        </svg>

        {/* Mobile Timeline Line */}
        <div className="timeline-line-mobile">
          <div 
            className="timeline-line-mobile-progress"
            style={{ 
              height: `${scrollProgress * 100}%`
            }}
          ></div>
        </div>

        {/* Timeline Items */}
        <div className="timeline-items">
          {timelineData.map((item, index) => (
            <div 
              key={item.id}
              className={`timeline-item timeline-item-${item.position} ${
                itemsVisible[index] ? 'visible' : ''
              }`}
            >
              <div className={`timeline-badge timeline-badge-${item.color}`}>
                <div className="timeline-badge-inner">
                  <div className="timeline-badge-icon">
                    {item.icon}
                  </div>
                </div>
                <div className="timeline-badge-pulse"></div>
              </div>

              <div className="timeline-spacer"></div>

              <div className="timeline-content-wrapper">
                <div className={`timeline-card timeline-card-${item.color}`}>
                  <div className={`timeline-mobile-badge timeline-mobile-badge-${item.color}`}>
                    <div className="timeline-mobile-badge-icon">
                      {item.icon}
                    </div>
                  </div>

                  <div className="timeline-card-icon">
                    {item.icon}
                  </div>

                  <h3 className="timeline-card-title">
                    {item.title}
                  </h3>

                  <div className="timeline-problem-section">
                    <p className="timeline-problem-label">Challenge</p>
                    <p className="timeline-problem">
                      {item.problem}
                    </p>
                  </div>

                  <div className={`timeline-solution timeline-solution-${item.color}`}>
                    <div className="timeline-solution-header">
                      <span className="timeline-solution-icon">✨</span>
                      <span className="timeline-solution-label">
                        Agentic AI Impact
                      </span>
                    </div>
                    <p className="timeline-solution-text">
                      {item.solution}
                    </p>
                  </div>

                  <div className={`timeline-connector timeline-connector-${item.color}`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium CTA Section */}
      <div className="timeline-cta">
        <div className="timeline-cta-card">
          <div className="timeline-cta-bg"></div>
          
          <div className="timeline-cta-content">
            <h3 className="timeline-cta-title">Ready to Transform Your Enterprise?</h3>
            <p className="timeline-cta-text">
              Experience the power of autonomous ERP agents and unlock unprecedented operational intelligence across your entire organization.
            </p>
            
            <div className="timeline-cta-features">
              <div className="cta-feature">
                <div className="cta-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <span className="cta-feature-text">Fast Implementation</span>
              </div>
              <div className="cta-feature">
                <div className="cta-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <span className="cta-feature-text">Enterprise Security</span>
              </div>
              <div className="cta-feature">
                <div className="cta-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 3h18v18H3z"/>
                    <path d="M3 9h18M9 3v18M15 3v18"/>
                    <circle cx="6" cy="6" r="1"/>
                    <circle cx="12" cy="6" r="1"/>
                    <circle cx="18" cy="6" r="1"/>
                  </svg>
                </div>
                <span className="cta-feature-text">Real-time Analytics</span>
              </div>
            </div>
            
            <button className="timeline-cta-button">
              <span className="button-text">Schedule Your Demo</span>
              <span className="button-arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

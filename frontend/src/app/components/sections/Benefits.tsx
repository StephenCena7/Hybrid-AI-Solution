'use client'
import { useEffect, useRef, useState } from 'react'

type Benefit = {
  metric: string
  targetValue: number
  suffix: string
  label: string
  description: string
  color: string
}

export default function Benefits() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [counters, setCounters] = useState({
    manual: 0,
    deployment: 0,
    uptime: 0
  })

  const benefits: Benefit[] = [
    { 
      metric: "80%", 
      targetValue: 80,
      suffix: "%",
      label: "Reduction in Manual Tasks",
      description: "AI-powered automation eliminates repetitive work",
      color: "cyan"
    },
    { 
      metric: "10x", 
      targetValue: 10,
      suffix: "x",
      label: "Faster Deployment",
      description: "Rapid implementation with proven methodologies",
      color: "purple"
    },
    { 
      metric: "99.9%", 
      targetValue: 99.9,
      suffix: "%",
      label: "Uptime Guarantee",
      description: "Enterprise-grade reliability and performance",
      color: "pink"
    },
    { 
      metric: "24/7", 
      targetValue: 24,
      suffix: "/7",
      label: "AI Operations",
      description: "Round-the-clock intelligent monitoring",
      color: "green"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (!hasAnimated) {
            animateCounters()
            setHasAnimated(true)
          }
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [hasAnimated])

  const animateCounters = () => {
    const duration = 2000
    const startTime = Date.now()

    const updateCounters = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOutQuad = 1 - (1 - progress) * (1 - progress)

      setCounters({
        manual: Math.floor(80 * easeOutQuad),
        deployment: Math.floor(10 * easeOutQuad),
        uptime: Number((99.9 * easeOutQuad).toFixed(1))
      })

      if (progress < 1) {
        requestAnimationFrame(updateCounters)
      }
    }

    requestAnimationFrame(updateCounters)
  }

  const getCounterValue = (index: number): string => {
    switch(index) {
      case 0: return `${counters.manual}%`
      case 1: return `${counters.deployment}x`
      case 2: return `${counters.uptime}%`
      case 3: return '24/7'
      default: return ''
    }
  }

  return (
    <section
      ref={ref}
      className={`benefits-section section-reveal${visible ? ' visible' : ''}`}
      id="benefits"
    >
      {/* Decorative Background Elements */}
      <div className="benefits-decoration benefits-decoration-top"></div>
      <div className="benefits-decoration benefits-decoration-bottom"></div>

      <div className={`benefits-container stagger-children${visible ? ' visible' : ''}`}>
        <div className="benefits-card">
          {/* Header */}
          <div className="benefits-header">
            <h2 className="benefits-title">
              Transforms Businesses<br />
              <span className="benefits-gradient-text">Across the Globe</span>
            </h2>
            <p className="benefits-description">
              Our solutions deliver measurable results that drive business growth and operational excellence
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className={`benefit-item benefit-${benefit.color}`}>
                <div className="benefit-icon-wrapper">
                  <div className={`benefit-icon benefit-icon-${benefit.color}`}>
                    {index === 0 && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2L15.09 8.26H21.77L16.84 12.74L18.93 19.01L12 14.53L5.07 19.01L7.16 12.74L2.23 8.26H8.91L12 2Z"/>
                      </svg>
                    )}
                    {index === 1 && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                      </svg>
                    )}
                    {index === 2 && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                      </svg>
                    )}
                    {index === 3 && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                    )}
                  </div>
                  <div className="benefit-circle-bg"></div>
                </div>

                <div className="benefit-metric-wrapper">
                  <div className="benefit-metric">{getCounterValue(index)}</div>
                  <div className="benefit-progress">
                    <div className="benefit-progress-bar" style={{ 
                      width: index === 3 ? '100%' : `${(getCounterValue(index).match(/[\d.]+/)?.[0] || 0)}%` 
                    }}></div>
                  </div>
                </div>

                <div className="benefit-content">
                  <div className="benefit-label">{benefit.label}</div>
                  <p className="benefit-desc">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

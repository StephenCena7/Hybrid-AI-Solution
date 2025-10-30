'use client'
import { useEffect, useRef, useState } from 'react'

type Benefit = {
  metric: string
  label: string
}

export default function Benefits() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const benefits: Benefit[] = [
    { metric: "80%",  label: "Reduction in Manual Tasks" },
    { metric: "10x",  label: "Faster Deployment" },
    { metric: "99.9%", label: "Uptime Guarantee" },
    { metric: "24/7",  label: "AI Operations" }
  ]

  return (
    <section
      ref={ref}
      className={`benefits section-reveal${visible ? ' visible' : ''}`}
    >
      <div className={`container stagger-children${visible ? ' visible' : ''}`}>
        <div className="benefits-card">
          <h2 className="section-title">
            Transforming Businesses<br />
            <span className="gradient-text">Across the Globe</span>
          </h2>
          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <div key={i} className="benefit-item">
                <div className="benefit-metric">{b.metric}</div>
                <div className="benefit-label">{b.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

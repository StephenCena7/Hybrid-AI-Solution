'use client'
import { useEffect, useRef, useState } from 'react'

export default function CTA() {
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

  return (
    <section
      ref={ref}
      className={`cta-section section-reveal${visible ? ' visible' : ''}`}
    >
      <div className={`container stagger-children${visible ? ' visible' : ''}`}>
        <div className="cta-card">
          <h2>Ready to Transform Your Business?</h2>
          <p>
            Join thousands of enterprises already using SmartAI Foundry to
            automate workflows and drive innovation.
          </p>
          <div className="cta-buttons">
            <button className="btn-white btn-large">Start Free Trial</button>
            <button className="btn-outline btn-large">Schedule Demo</button>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'
import { useEffect, useRef, useState } from 'react'

export default function Footer() {
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
    <footer
      ref={ref}
      className={`footer section-reveal${visible ? ' visible' : ''}`}
    >
      <div className={`container stagger-children${visible ? ' visible' : ''}`}>
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-col">
            <div className="footer-logo">
              {/* Hybrid AI Logo - Water Drop + AI Circuit */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
                <circle cx="12" cy="12" r="3"/>
                <line x1="12" y1="9" x2="12" y2="15"/>
                <line x1="9" y1="12" x2="15" y2="12"/>
              </svg>
              <span>Hybrid AI Solution</span>
            </div>
            <p>Building the future of intelligent enterprise automation with agentic AI solutions.</p>
          </div>

          {/* Platform Column */}
          <div className="footer-col">
            <h4>Platform</h4>
            <div><a href="#features">Features</a></div>
            <div><a href="#solutions">Solutions</a></div>
            <div><a href="#integrations">Integrations</a></div>
            <div><a href="#pricing">Pricing</a></div>
          </div>

          {/* Resources Column */}
          <div className="footer-col">
            <h4>Resources</h4>
            <div><a href="#documentation">Documentation</a></div>
            <div><a href="#api">API Reference</a></div>
            <div><a href="#tutorials">Tutorials</a></div>
            <div><a href="#community">Community</a></div>
          </div>

          {/* Company Column */}
          <div className="footer-col">
            <h4>Company</h4>
            <div><a href="#about">About Us</a></div>
            <div><a href="#careers">Careers</a></div>
            <div><a href="#blog">Blog</a></div>
            <div><a href="#contact">Contact</a></div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>© 2025 Hybrid AI Solution. All rights reserved.</div>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

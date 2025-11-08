'use client'
import { useState, useEffect } from 'react'

interface NavigationProps {
  onContactClick: () => void
}

export default function Navigation({ onContactClick }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const handleMenuClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <div className="nav-content">
          {/* Brand Name - Logo Removed, Only Text */}
          <div className="brand-name">
            <span className="brand-text">Hybrid AI Solution</span>
          </div>

          {/* Navigation Menu */}
          <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`} id="navMenu">
            <a href="#home" onClick={handleMenuClick}>Home</a>
            <a href="#about" onClick={handleMenuClick}>About</a>
            <a href="#solutions" onClick={handleMenuClick}>Solutions</a>
            <a href="#benefits" onClick={handleMenuClick}>Benefits</a>
            <a href="#contact" onClick={handleMenuClick}>Contact</a>
          </div>

          {/* Desktop Actions */}
          <div className="nav-actions">
            <button className="btn-primary" onClick={onContactClick}>
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="hamburger"></span>
          </button>
        </div>
      </div>

      {/* Decorative Line Flow - Fixed Position */}
      <div className="nav-line-flow"></div>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div 
          className="mobile-overlay active"
          onClick={() => setMobileMenuOpen(false)}
          role="presentation"
        ></div>
      )}
    </nav>
  )
}

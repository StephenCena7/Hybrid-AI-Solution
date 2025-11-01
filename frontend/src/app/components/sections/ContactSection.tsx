'use client'
import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('sending')
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setFormStatus('success')
      setFormData({ name: '', email: '', company: '', message: '' })
      
      // Reset status after 3 seconds
      setTimeout(() => setFormStatus(''), 3000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="contact-section" id="contact">
      {/* Decorative Background Elements */}
      <div className="contact-decoration contact-decoration-top"></div>
      <div className="contact-decoration contact-decoration-bottom"></div>

      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <h2 className="contact-title">
            Let&apos;s{' '}
            <span className="contact-gradient-text">
              Connect
            </span>
          </h2>
          <p className="contact-subtitle">
            Let&apos;s build the future of your enterprise together. Connect with us 
            to explore how Hybrid AI Solution can transform your business.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project and requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  rows={6}
                  required
                />
              </div>

              <button 
                type="submit" 
                className={`form-submit-btn ${formStatus}`}
                disabled={formStatus === 'sending'}
              >
                {formStatus === 'sending' ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : formStatus === 'success' ? (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info-wrapper">
            <div className="contact-info-grid">
              <div className="contact-info-card">
                <div className="contact-info-icon-wrapper">
                  <div className="contact-info-icon contact-info-icon-cyan">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div className="contact-info-glow"></div>
                </div>
                <h4>Visit Us</h4>
                <p>2nd Main Rd, Tagore Nagar<br />Lawspet, Puducherry<br />605008</p>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon-wrapper">
                  <div className="contact-info-icon contact-info-icon-purple">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  </div>
                  <div className="contact-info-glow"></div>
                </div>
                <h4>Call Us</h4>
                <p><a href="tel:+918925403226">+91 8925 403 226</a><br /><a href="tel:+917845160166">+91 7845 160 166</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

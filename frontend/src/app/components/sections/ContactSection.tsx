'use client'
import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('sending')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send request')
      }

      setFormStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        timeline: '',
        message: ''
      })

      setTimeout(() => {
        setFormStatus('idle')
      }, 3000)
    } catch (error) {
      console.error('Error sending request:', error)
      setFormStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send request')
    }
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
            <form onSubmit={handleSubmit} className="contact-form quotation-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="c-name">Full Name *</label>
                  <input
                    type="text"
                    id="c-name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="c-email">Email Address *</label>
                  <input
                    type="email"
                    id="c-email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="c-phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="c-phone"
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="c-company">Company Name</label>
                  <input
                    type="text"
                    id="c-company"
                    name="company"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="c-service">Service Required *</label>
                  <select
                    id="c-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-select"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="ERP Systems">ERP Systems</option>
                    <option value="CRM Solutions">CRM Solutions</option>
                    <option value="Retail Solutions">Retail Solutions</option>
                    <option value="HRMS Platform">HRMS Platform</option>
                    <option value="Point of Sale">Point of Sale</option>
                    <option value="Business Intelligence">Business Intelligence</option>
                    <option value="Custom Solution">Custom Solution</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="c-budget">Budget Range</label>
                  <select
                    id="c-budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">Select budget range</option>
                    <option value="Under ₹5L">Under ₹5 Lakhs</option>
                    <option value="₹5L - ₹10L">₹5 - 10 Lakhs</option>
                    <option value="₹10L - ₹25L">₹10 - 25 Lakhs</option>
                    <option value="₹25L - ₹50L">₹25 - 50 Lakhs</option>
                    <option value="Above ₹50L">Above ₹50 Lakhs</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="c-timeline">Expected Timeline</label>
                <select
                  id="c-timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">Select timeline</option>
                  <option value="Immediate">Immediate (Within 1 month)</option>
                  <option value="1-3 months">1-3 months</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="6+ months">6+ months</option>
                  <option value="Not decided">Not decided yet</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="c-message">Project Requirements *</label>
                <textarea
                  id="c-message"
                  name="message"
                  placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  rows={4}
                  required
                />
              </div>

              {/* Error Message */}
              {formStatus === 'error' && (
                <div className="form-error">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <span>{errorMessage}</span>
                </div>
              )}

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

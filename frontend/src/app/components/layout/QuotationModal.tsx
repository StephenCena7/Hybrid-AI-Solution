'use client'
import { useState, useEffect } from 'react'

interface QuotationModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function QuotationModal({ isOpen, onClose }: QuotationModalProps) {
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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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
        throw new Error(data.error || 'Failed to send quotation request')
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
        onClose()
        setFormStatus('idle')
      }, 3000)
    } catch (error) {
      console.error('Error sending quotation:', error)
      setFormStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send request')
    }
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content quotation-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Header */}
        <div className="modal-header">
          <h2 className="modal-title">
            Request a{' '}
            <span className="modal-gradient-text">Quotation</span>
          </h2>
          <p className="modal-subtitle">
            Fill out the form below and our team will get back to you within 24 hours
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="quotation-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="q-name">Full Name *</label>
              <input
                type="text"
                id="q-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
                placeholder="John Doe"
              />
            </div>
            <div className="form-group">
              <label htmlFor="q-email">Email Address *</label>
              <input
                type="email"
                id="q-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
                placeholder="john@company.com"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="q-phone">Phone Number *</label>
              <input
                type="tel"
                id="q-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
                required
                placeholder="+91 98765 43210"
              />
            </div>
            <div className="form-group">
              <label htmlFor="q-company">Company Name</label>
              <input
                type="text"
                id="q-company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="form-input"
                placeholder="Your Company"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="q-service">Service Required *</label>
              <select
                id="q-service"
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
              <label htmlFor="q-budget">Budget Range</label>
              <select
                id="q-budget"
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
            <label htmlFor="q-timeline">Expected Timeline</label>
            <select
              id="q-timeline"
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
            <label htmlFor="q-message">Project Requirements *</label>
            <textarea
              id="q-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-textarea"
              required
              rows={4}
              placeholder="Tell us about your project requirements, goals, and any specific features you need..."
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

          {/* Submit Button */}
          <button
            type="submit"
            className={`form-submit-btn ${formStatus}`}
            disabled={formStatus === 'sending'}
          >
            {formStatus === 'sending' ? (
              <>
                <span className="spinner"></span>
                Sending Request...
              </>
            ) : formStatus === 'success' ? (
              <>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Request Sent Successfully!
              </>
            ) : (
              <>
                Submit Request
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

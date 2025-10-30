'use client'

const solutions = [
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
    color: 'cyan'
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
    color: 'purple'
  },
  {
    id: 3,
    title: 'Billing & Accounting',
    description: 'Automated billing, real-time reporting, and financial accuracy across all operations.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
        <line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
    color: 'green'
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
    color: 'pink'
  },
  {
    id: 5,
    title: 'Point of Sale',
    description: 'Next-gen retail POS with real-time inventory, multi-location support, and analytics.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 01-8 0"/>
      </svg>
    ),
    color: 'orange'
  },
  {
    id: 6,
    title: 'SAP Business One',
    description: 'Implementation and customization of SAP B1 to optimize core ERP functions for SMBs.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    color: 'violet'
  }
]

export default function SolutionsGrid() {
  return (
    <section className="solutions-section">
      <div className="solutions-container">
        {/* Header */}
        <div className="solutions-header">
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
        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div 
              key={solution.id} 
              className="solution-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`solution-icon solution-icon-${solution.color}`}>
                {solution.icon}
              </div>
              <h3 className="solution-title">{solution.title}</h3>
              <p className="solution-description">{solution.description}</p>
              
              {/* Hover effect overlay */}
              <div className="solution-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

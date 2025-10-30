'use client'

const timelineData = [
  {
    id: 1,
    title: 'Finance & Accounting Evolution',
    problem: 'Complex reconciliations, lengthy closings, and delayed insights limit strategic visibility.',
    solution: 'Autonomous finance agents reconcile transactions, monitor anomalies, and generate real-time performance dashboards — reducing close cycles by 40%.',
    color: 'cyan',
    position: 'right'
  },
  {
    id: 2,
    title: 'Procurement Intelligence',
    problem: 'Vendor performance and pricing data are often siloed, creating inefficiencies and delays in sourcing decisions.',
    solution: 'Procurement agents evaluate supplier health, negotiate dynamically, and auto-trigger purchase approvals — enabling real-time sourcing agility.',
    color: 'green',
    position: 'left'
  },
  {
    id: 3,
    title: 'Human Capital Empowerment',
    problem: 'HR processes are reactive, leaving gaps in workforce planning and engagement analytics.',
    solution: 'HR agents analyze talent data, predict attrition, and recommend skill realignment — making workforce management proactive and data-driven.',
    color: 'pink',
    position: 'right'
  },
  {
    id: 4,
    title: 'Supply Chain Synchronization',
    problem: 'Disruptions across suppliers, inventory, and logistics lead to delayed deliveries and inflated costs.',
    solution: 'Agents forecast demand, reroute logistics, and optimize inventory — ensuring resilience and just-in-time fulfillment even during uncertainty.',
    color: 'yellow',
    position: 'left'
  },
  {
    id: 5,
    title: 'Sales & Customer Engagement',
    problem: 'Inconsistent insights between sales forecasts and customer service hinder responsiveness.',
    solution: 'Customer agents unify CRM and ERP data, predict demand, and trigger personalized offers — improving conversion and retention simultaneously.',
    color: 'orange',
    position: 'right'
  },
  {
    id: 6,
    title: 'Unified Intelligence & Analytics',
    problem: 'Traditional reporting is backward-looking, offering limited guidance for what\'s next.',
    solution: 'Central intelligence agents integrate cross-module insights, generate predictive dashboards, and drive continuous optimization across your ERP ecosystem.',
    color: 'violet',
    position: 'left'
  }
]

export default function AgenticTimeline() {
  return (
    <section className="timeline-section">
      {/* Background Effects */}
      <div className="timeline-bg-orb"></div>
      
      {/* Header */}
      <div className="timeline-header">
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
        {/* Center Line */}
        <div className="timeline-line"></div>

        {/* Timeline Items */}
        <div className="timeline-items">
          {timelineData.map((item) => (
            <div 
              key={item.id}
              className={`timeline-item timeline-item-${item.position}`}
            >
              {/* Desktop Badge (center circle) */}
              <div className="timeline-badge">
                {item.id}
              </div>

              {/* Spacer for desktop layout */}
              <div className="timeline-spacer"></div>

              {/* Content */}
              <div className="timeline-content-wrapper">
                <div className="timeline-card">
                  {/* Mobile Badge */}
                  <div className="timeline-mobile-badge">
                    {item.id}
                  </div>

                  {/* Title */}
                  <h3 className="timeline-card-title">
                    {item.title}
                  </h3>

                  {/* Problem */}
                  <p className="timeline-problem">
                    {item.problem}
                  </p>

                  {/* Solution */}
                  <div className={`timeline-solution timeline-solution-${item.color}`}>
                    <p>
                      <span className="timeline-solution-label">
                        Agentic AI Impact:{' '}
                      </span>
                      <span className="timeline-solution-text">
                        {item.solution}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

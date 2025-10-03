export default function Features() {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
      title: "No-Code AI Builder",
      description: "Create powerful AI applications without writing a single line of code. Drag, drop, and deploy."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
        </svg>
      ),
      title: "Intelligent Agents",
      description: "Deploy autonomous AI agents that learn, adapt, and execute complex business processes."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M3 5V19A9 3 0 0 0 21 19V5"/>
        </svg>
      ),
      title: "Unified Knowledge Graph",
      description: "Connect all your enterprise data into a single, intelligent knowledge base."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect width="8" height="8" x="3" y="3" rx="2"/>
          <path d="M7 11v4a2 2 0 0 0 2 2h4"/>
          <rect width="8" height="8" x="13" y="13" rx="2"/>
        </svg>
      ),
      title: "Workflow Orchestration",
      description: "Automate end-to-end business processes with intelligent workflow management."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
        </svg>
      ),
      title: "Enterprise Security",
      description: "Bank-grade security with SOC2, GDPR compliance, and complete data sovereignty."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
        </svg>
      ),
      title: "Seamless Integration",
      description: "Connect with 500+ enterprise applications and data sources out of the box."
    }
  ]

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <div className="badge badge-purple">
            <svg className="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            </svg>
            <span>Powerful Capabilities</span>
          </div>
          <h2 className="section-title">
            Everything You Need to Build<br />
            <span className="gradient-text">Intelligent Applications</span>
          </h2>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
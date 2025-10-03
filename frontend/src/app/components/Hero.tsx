export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
        <div className="grid-pattern"></div>
      </div>

      <div className="hero-content">
        <div className="badge">
          <svg className="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
          </svg>
          <span>Next-Generation AI Platform</span>
        </div>

        <h1 className="hero-title">
          <span className="gradient-text">Intelligence at the Core</span>
          <br />
          <span>Redefining Work in the Age of Intelligence</span>
        </h1>

        <p className="hero-subtitle">
          Design, scale, and orchestrate powerful AI agents and workflows in a single platform. Empower your enterprise with always-on, autonomous intelligence.
        </p>

        <div className="hero-cta">
          <button className="btn-primary btn-large">
            Start Building Now
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
          <button className="btn-secondary btn-large">Watch Demo</button>
        </div>

        <div className="capability-pills">
          <span className="pill">Autonomous Decision Making</span>
          <span className="pill">Real-time Analytics</span>
          <span className="pill">Predictive Insights</span>
          <span className="pill">Workflow Automation</span>
          <span className="pill">Natural Language Processing</span>
          <span className="pill">Enterprise Integration</span>
        </div>
      </div>
    </section>
  )
}
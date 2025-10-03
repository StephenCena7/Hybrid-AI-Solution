export default function Benefits() {
  const benefits = [
    { metric: "80%", label: "Reduction in Manual Tasks" },
    { metric: "10x", label: "Faster Deployment" },
    { metric: "99.9%", label: "Uptime Guarantee" },
    { metric: "24/7", label: "AI Operations" }
  ]

  return (
    <section className="benefits">
      <div className="container">
        <div className="benefits-card">
          <h2 className="section-title">
            Transforming Businesses<br />
            <span className="gradient-text">Across the Globe</span>
          </h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <div className="benefit-metric">{benefit.metric}</div>
                <div className="benefit-label">{benefit.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
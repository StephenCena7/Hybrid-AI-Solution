export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
              </svg>
              <span>SmartAI Foundry</span>
            </div>
            <p>Building the future of intelligent enterprise automation.</p>
          </div>
          <div className="footer-col">
            <h4>Platform</h4>
            <div><a href="#">Features</a></div>
            <div><a href="#">Integrations</a></div>
            <div><a href="#">Security</a></div>
            <div><a href="#">Pricing</a></div>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <div><a href="#">Documentation</a></div>
            <div><a href="#">API Reference</a></div>
            <div><a href="#">Tutorials</a></div>
            <div><a href="#">Community</a></div>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <div><a href="#">About Us</a></div>
            <div><a href="#">Careers</a></div>
            <div><a href="#">Blog</a></div>
            <div><a href="#">Contact</a></div>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2025 SmartAI Foundry. All rights reserved.</div>
          <div className="footer-links">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
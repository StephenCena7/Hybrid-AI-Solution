'use client'
import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  
  // Separate transition states for each element
  const [badgeTransitioning, setBadgeTransitioning] = useState(false)
  const [titleTransitioning, setTitleTransitioning] = useState(false)
  const [subtitleTransitioning, setSubtitleTransitioning] = useState(false)
  const [descriptionTransitioning, setDescriptionTransitioning] = useState(false)

  const textVariations = [
    {
      badge: "Pioneering Agentic AI Solutions",
      title: "Intelligence at the Core",
      subtitle: "Redefining Work in the Age of AI",
      description: "Transform your enterprise with autonomous AI agents that learn, collaborate, and evolve. From ERP to customer engagement, unlock unprecedented agility and intelligence across every business function."
    },
    {
      badge: "Next-Generation Enterprise AI",
      title: "Empowering Digital Evolution",
      subtitle: "Building the Future of Enterprise",
      description: "Revolutionize operations with intelligent automation that adapts, learns, and scales. From seamless integration to predictive insights, experience unmatched efficiency and innovation at every level."
    }
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      color: string
    }> = []

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        color: Math.random() > 0.5 ? '#22d3ee' : '#c084fc'
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, i) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.opacity
        ctx.fill()

        particles.forEach((particle2, j) => {
          if (i === j) return
          const dx = particle.x - particle2.x
          const dy = particle.y - particle2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.strokeStyle = particle.color
            ctx.globalAlpha = (150 - distance) / 150 * 0.2
            ctx.lineWidth = 0.5
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(particle2.x, particle2.y)
            ctx.stroke()
          }
        })

        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1
      })

      ctx.globalAlpha = 1
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  // SEQUENTIAL TRANSITIONS with PRECISE TIMING
  useEffect(() => {
    const scanlineDuration = 6000
    const transitionDuration = 500
    
    // CALIBRATED TIMING (adjust these values to match your screen)
    const badgeTiming = 1500       // Badge transition
    const titleTiming = 2200       // Title transition  
    const subtitleTiming = 2700    // Subtitle transition
    const descriptionTiming = 3300 // Description transition
    
    let timers: NodeJS.Timeout[] = []

    // 1. Badge transition
    timers.push(setTimeout(() => {
      setBadgeTransitioning(true)
      setTimeout(() => setBadgeTransitioning(false), transitionDuration)
    }, badgeTiming))

    // 2. Title transition
    timers.push(setTimeout(() => {
      setTitleTransitioning(true)
      setTimeout(() => setTitleTransitioning(false), transitionDuration)
    }, titleTiming))

    // 3. Subtitle transition
    timers.push(setTimeout(() => {
      setSubtitleTransitioning(true)
      setTimeout(() => setSubtitleTransitioning(false), transitionDuration)
    }, subtitleTiming))

    // 4. Description transition + CHANGE TEXT
    timers.push(setTimeout(() => {
      setDescriptionTransitioning(true)
      setTimeout(() => {
        setDescriptionTransitioning(false)
        // Change all text AFTER last transition completes
        setCurrentTextIndex((prev) => (prev + 1) % textVariations.length)
      }, transitionDuration)
    }, descriptionTiming))

    return () => {
      timers.forEach(timer => clearTimeout(timer))
    }
  }, [currentTextIndex, textVariations.length])

  const currentText = textVariations[currentTextIndex]

  return (
    <section className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />

      <div className="hero-background">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
        <div className="glow-orb orb-3"></div>
        <div className="grid-pattern"></div>
        <div className="scanline"></div>
      </div>

      <div className="hero-content">
        {/* 1. BADGE - First to transition */}
        <div className={`badge badge-enhanced ${badgeTransitioning ? 'badge-glitch' : ''}`}>
          <svg className="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
          </svg>
          <span>{currentText.badge}</span>
          <div className="badge-shine"></div>
        </div>

        <div className="hero-title-container">
          <h1 className="hero-title">
            {/* 2. TITLE - Second to transition */}
            <span className={`gradient-text gradient-text-enhanced ${titleTransitioning ? 'text-glitch-flip' : ''}`}>
              {currentText.title}
            </span>
            {/* 3. SUBTITLE - Third to transition */}
            <span className={`hero-subtitle-text ${subtitleTransitioning ? 'text-glitch-flip' : ''}`}>
              {currentText.subtitle}
            </span>
          </h1>
        </div>

        {/* 4. DESCRIPTION - Last to transition */}
        <p className={`hero-subtitle ${descriptionTransitioning ? 'subtitle-glitch' : ''}`}>
          {currentText.description}
        </p>

        <div className="hero-cta">
          <button className="btn-primary btn-large btn-enhanced btn-glitch-hover">
            <span>Start Building Now</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
            <div className="btn-glow"></div>
          </button>
          <button className="btn-secondary btn-large btn-glass btn-glitch-hover">
            <span>Watch Demo</span>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
          </button>
        </div>

        <div className="capability-pills">
          {['Autonomous Decision Making', 'Real-time Analytics', 'Predictive Insights', 
            'Workflow Automation', 'Natural Language Processing', 'Enterprise Integration'].map((text, i) => (
            <span key={i} className="pill pill-enhanced" style={{ animationDelay: `${i * 0.1}s` }}>
              {text}
              <div className="pill-shine"></div>
            </span>
          ))}
        </div>

        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  )
}

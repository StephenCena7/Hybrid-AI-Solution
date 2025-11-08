'use client'
import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const heroContentRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [scanlinePosition, setScanlinePosition] = useState(0)
  
  // Transition states
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

  // Particle animation
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

  // Scanline-triggered transitions
  useEffect(() => {
    const scanlineDuration = 6000 // 6 seconds for full cycle
    const transitionDuration = 500
    let animationFrameId: number
    let startTime: number | null = null

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = (elapsed % scanlineDuration) / scanlineDuration

      setScanlinePosition(progress)

      // Get element positions
      const badge = badgeRef.current
      const title = titleRef.current
      const subtitle = subtitleRef.current
      const description = descriptionRef.current

      if (badge && title && subtitle && description) {
        const heroRect = heroContentRef.current?.getBoundingClientRect()
        if (!heroRect) return

        const badgeTop = badge.getBoundingClientRect().top - heroRect.top
        const titleTop = title.getBoundingClientRect().top - heroRect.top
        const subtitleTop = subtitle.getBoundingClientRect().top - heroRect.top
        const descriptionTop = description.getBoundingClientRect().top - heroRect.top

        const heroHeight = heroRect.height
        const scanlineY = progress * heroHeight * 1.1 - heroHeight * 0.05

        // Trigger transitions when scanline passes each element
        const threshold = 20

        

        
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [badgeTransitioning, titleTransitioning, subtitleTransitioning, descriptionTransitioning, textVariations.length])

  const currentText = textVariations[currentTextIndex]

  return (
    <section className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />

      <div className="hero-background">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
        <div className="glow-orb orb-3"></div>
        <div className="grid-pattern"></div>
        <div className="scanline" style={{ top: `${scanlinePosition * 110 - 5}%` }}></div>
      </div>

      <div className="hero-content" ref={heroContentRef}>
        {/* Badge */}
        <div 
          ref={badgeRef}
          className={`badge badge-enhanced ${badgeTransitioning ? 'badge-glitch' : ''}`}
        >
          <svg className="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
          </svg>
          <span>{currentText.badge}</span>
        </div>

        <div className="hero-title-container">
          <h1 className="hero-title">
            {/* Title */}
            <span 
              ref={titleRef}
              className={`gradient-text gradient-text-enhanced ${titleTransitioning ? 'text-glitch-flip' : ''}`}
            >
              {currentText.title}
            </span>
            {/* Subtitle */}
            <span 
              ref={subtitleRef}
              className={`hero-subtitle-text ${subtitleTransitioning ? 'text-glitch-flip' : ''}`}
            >
              {currentText.subtitle}
            </span>
          </h1>
        </div>

        {/* Description */}
        <p 
          ref={descriptionRef}
          className={`hero-subtitle ${descriptionTransitioning ? 'subtitle-glitch' : ''}`}
        >
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
            <span>Book a demo</span>
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

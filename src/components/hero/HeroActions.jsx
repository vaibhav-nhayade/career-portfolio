import { useEffect, useRef } from 'react'
import { personal } from '../../data/personal.js'
import './HeroSection.css'

function IdCard() {
  const cardRef = useRef(null)
  const reducedMotionRef = useRef(false)

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const handleMove = (e) => {
    if (reducedMotionRef.current) return
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rotateY = (px - 0.5) * 12
    const rotateX = (0.5 - py) * 12
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`
  }

  const handleLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)'
  }

  return (
    <div className="id-card" ref={cardRef} onMouseMove={handleMove} onMouseLeave={handleLeave}>
      <div className="id-card__top">
        <span className="id-card__eyebrow">Digital ID</span>
        <span className="id-card__chip" aria-hidden="true" />
      </div>

      <div className="id-card__profile">
        <div className="id-card__avatar" aria-hidden="true">VN</div>
        <div className="id-card__identity">
          <span className="id-card__name">{personal.name}</span>
          <span className="id-card__role">{personal.role}</span>
        </div>
      </div>

      <dl className="id-card__details">
        <div className="id-card__row">
          <dt>City</dt>
          <dd>{personal.city}</dd>
        </div>
      </dl>

      <div className="id-card__barcode" aria-hidden="true" />
    </div>
  )
}

function HeroSection() {
  const glowRef = useRef(null)

  const handlePointerMove = (e) => {
    const glow = glowRef.current
    if (!glow) return
    const { innerWidth, innerHeight } = window
    const x = (e.clientX / innerWidth - 0.5) * 40
    const y = (e.clientY / innerHeight - 0.5) * 40
    glow.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
  }

  return (
    <section className="hero" id="hero" onPointerMove={handlePointerMove}>
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__glow" ref={glowRef} aria-hidden="true" />

      <div className="hero__main">
        <div className="hero__content">
          <span className="eyebrow reveal" style={{ '--delay': '60ms' }}>
            {personal.role}
          </span>

          <h1 className="hero__name reveal" style={{ '--delay': '140ms' }}>
            Hi, I&apos;m <span className="hero__name-highlight">{personal.name}</span>
          </h1>

          <p className="hero__intro reveal" style={{ '--delay': '240ms' }}>
            {personal.heroSummary}
          </p>
        </div>

        <div className="hero__id-card-wrap reveal" style={{ '--delay': '260ms' }}>
          <IdCard />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
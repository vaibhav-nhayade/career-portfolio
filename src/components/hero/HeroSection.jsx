import { useRef } from 'react'
import HeroActions from './HeroActions.jsx'
import HeroIntro from './HeroIntro.jsx'
import IdCard from './IdCard.jsx'
import './HeroSection.css'

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
          <HeroIntro />
          <HeroActions />
        </div>

        <div className="hero__id-card-wrap reveal" style={{ '--delay': '260ms' }}>
          <IdCard />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
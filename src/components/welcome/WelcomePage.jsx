import { useRef } from 'react'
import { personal } from '../../data/personal.js'
import './WelcomePage.css'

function WelcomePage({ onLaunch }) {
  const glowRef = useRef(null)

  const handlePointerMove = (e) => {
    const glow = glowRef.current
    if (!glow) return
    const { innerWidth, innerHeight } = window
    const x = (e.clientX / innerWidth - 0.5) * 40
    const y = (e.clientY / innerHeight - 0.5) * 40
    glow.style.transform = `translate(${x}px, ${y}px)`
  }

  return (
    <div className="welcome" onPointerMove={handlePointerMove}>
      <div className="welcome__glow" ref={glowRef} aria-hidden="true" />
      <header className="welcome__header reveal">
        <span className="eyebrow">{personal.role}</span>
      </header>
      <main className="welcome__main">
        <h1 className="welcome__name reveal" style={{ '--delay': '80ms' }}>
          Hi, I&apos;m <span className="welcome__name-highlight">{personal.name}</span>
        </h1>
        <p className="welcome__intro reveal" style={{ '--delay': '180ms' }}>
          {personal.welcomeIntro}
        </p>
        <button type="button" className="welcome__cta reveal" style={{ '--delay': '280ms' }} onClick={onLaunch}>
          Launch Portfolio
          <span className="welcome__cta-arrow" aria-hidden="true">→</span>
        </button>
      </main>
      <footer className="welcome__footer reveal" style={{ '--delay': '380ms' }}>
        <p>{personal.footerTagline}</p>
      </footer>
    </div>
  )
}

export default WelcomePage
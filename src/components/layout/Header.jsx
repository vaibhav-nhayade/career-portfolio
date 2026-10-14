import { useEffect, useState } from 'react'
import { personal } from '../../data/personal.js'
import Navigation from './Navigation.jsx'
import SocialLinks from './SocialLinks.jsx'
import ThemeToggle from './ThemeToggle.jsx'
import './Header.css'

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 1.5v8.25m0 0L4.75 6.5M8 9.75l3.25-3.25M2.5 12.5v1a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-1"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ResumeButton() {
  if (!personal.resumeUrl) {
    return (
      <span className="btn-resume btn-resume--disabled" title="Resume coming soon" aria-disabled="true">
        Resume
        <span className="btn-resume__note">Coming soon</span>
      </span>
    )
  }

  return (
    <a className="btn-resume" href={personal.resumeUrl} download>
      Resume
      <DownloadIcon />
    </a>
  )
}

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleBrandClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
      <div className="site-header__inner">
        <button
          type="button"
          className="site-header__brand"
          onClick={handleBrandClick}
          aria-label="Back to top"
        >
          VN.
        </button>

        <Navigation />

        <div className="site-header__actions">
          <SocialLinks />
          <ThemeToggle />
          <ResumeButton />
        </div>
      </div>
    </header>
  )
}

export default Header
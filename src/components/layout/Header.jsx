import { useEffect, useState } from 'react'
import { SiGithub, SiLeetcode, SiCodeforces, SiCodechef } from 'react-icons/si'
import { personal } from '../../data/personal.js'
import { socialLinks } from '../../data/socialLinks.js'
import './Header.css'

const PLATFORMS = [
  { key: 'github', label: 'GitHub', Icon: SiGithub, url: socialLinks.github },
  { key: 'leetcode', label: 'LeetCode', Icon: SiLeetcode, url: socialLinks.leetcode },
  { key: 'codeforces', label: 'Codeforces', Icon: SiCodeforces, url: socialLinks.codeforces },
  { key: 'codechef', label: 'CodeChef', Icon: SiCodechef, url: socialLinks.codechef },
]

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

function PlatformLink({ label, Icon, url }) {
  const commonProps = {
    className: `icon-link${url ? '' : ' icon-link--disabled'}`,
    'aria-label': url ? label : `${label} — coming soon`,
    title: url ? label : `${label} — coming soon`,
  }
  const iconEl = <Icon size={16} aria-hidden="true" />

  if (!url) {
    return <span {...commonProps}>{iconEl}</span>
  }

  return (
    <a {...commonProps} href={url} target="_blank" rel="noreferrer noopener">
      {iconEl}
    </a>
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
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
      <div className="site-header__inner">
        <button type="button" className="site-header__brand" onClick={handleBrandClick}>
          VN.
        </button>

        <div className="site-header__actions">
          {PLATFORMS.map(({ key, label, Icon, url }) => (
            <PlatformLink key={key} label={label} Icon={Icon} url={url} />
          ))}
          <ResumeButton />
        </div>
      </div>
    </header>
  )
}

export default Header
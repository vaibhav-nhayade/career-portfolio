import { useEffect, useState } from 'react'
import { navigation } from '../../data/navigation.js'
import './Navigation.css'

function Navigation() {
  const [activeId, setActiveId] = useState(null)

  // Scroll-spy: highlight the link for the section crossing the middle of the viewport.
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined

    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setActiveId((current) => {
            if (entry.isIntersecting) return entry.target.id
            // Only clear the highlight if the section that was active just left the band.
            return current === entry.target.id ? null : current
          })
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="site-nav" aria-label="Primary">
      <ul className="site-nav__list">
        {navigation.map((item) => (
          <li key={item.id}>
            <a
              className="site-nav__link"
              href={`#${item.id}`}
              aria-current={activeId === item.id ? 'true' : undefined}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
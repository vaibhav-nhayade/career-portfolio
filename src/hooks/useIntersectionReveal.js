import { useEffect } from 'react'

/**
 * Adds `is-visible` to every element matching `selector` once it scrolls into view.
 * Elements are revealed immediately when IntersectionObserver is unavailable.
 */
export function useIntersectionReveal(selector = '[data-reveal]') {
  useEffect(() => {
    const elements = document.querySelectorAll(selector)

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [selector])
}
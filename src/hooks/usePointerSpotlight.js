import { useEffect } from 'react'

/**
 * Moves the page spotlight to the pointer. Writes --spot-x / --spot-y on <html>.
 * Skipped on touch screens and when the visitor prefers reduced motion.
 */
export function usePointerSpotlight() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches
    if (reduceMotion || coarsePointer) return undefined

    const root = document.documentElement
    let frame = 0

    const handleMove = (event) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        root.style.setProperty('--spot-x', `${event.clientX}px`)
        root.style.setProperty('--spot-y', `${event.clientY}px`)
      })
    }

    window.addEventListener('pointermove', handleMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', handleMove)
      cancelAnimationFrame(frame)
    }
  }, [])
}
import { useEffect, useState } from 'react'
import './ScrollProgress.css'

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0)
    }

    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)
    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  const percent = Math.round(progress * 100)
  const visible = percent >= 2

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <div className="scroll-progress__bar" style={{ transform: `scaleX(${progress})` }} />
      </div>

      <div className={`scroll-pill${visible ? ' scroll-pill--visible' : ''}`} aria-hidden="true">
        {percent >= 95 ? 'You made it to the end' : `${percent}% explored`}
      </div>
    </>
  )
}

export default ScrollProgress
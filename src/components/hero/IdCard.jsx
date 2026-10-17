import { useEffect, useRef } from 'react'
import { personal } from '../../data/personal.js'
import './IdCard.css'

const RESET_TRANSFORM = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)'

function IdCard() {
  const cardRef = useRef(null)
  const reducedMotionRef = useRef(false)

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const handleMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height

    // The light follows the pointer across the card.
    card.style.setProperty('--glare-x', `${px * 100}%`)
    card.style.setProperty('--glare-y', `${py * 100}%`)

    if (reducedMotionRef.current) return
    const rotateY = (px - 0.5) * 14
    const rotateX = (0.5 - py) * 14
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`
  }

  const handleLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = RESET_TRANSFORM
  }

  return (
    <div className="student-id" ref={cardRef} onMouseMove={handleMove} onMouseLeave={handleLeave}>
      <div className="student-id__glare" aria-hidden="true" />

      <header className="student-id__header">
        <span className="student-id__tag">AI · DS</span>
        <span className="student-id__title">Digital ID Card</span>
        <span className="student-id__tag">Student</span>
      </header>

      <div className="student-id__body">
        <div className="student-id__photo">
          {personal.profileImage ? (
            <img src={personal.profileImage} alt={personal.fullName} />
          ) : (
            <span className="student-id__initials">VN</span>
          )}
        </div>

        <div className="student-id__info">
          <p className="student-id__name">{personal.fullName}</p>
          <p className="student-id__role">{personal.role}</p>

          <dl className="student-id__fields">
            <div className="student-id__field">
              <dt>DOB</dt>
              <dd>{personal.dob}</dd>
            </div>
            <div className="student-id__field">
              <dt>City</dt>
              <dd>{personal.city}</dd>
            </div>
          </dl>

          <div className="student-id__lines" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="student-id__barcode" aria-hidden="true" />
      </div>

      <footer className="student-id__footer">
        <span className="student-id__tagline">{personal.footerTagline}</span>
        <span className="student-id__holo" aria-hidden="true" />
      </footer>
    </div>
  )
}

export default IdCard
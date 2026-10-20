import SocialLinks from './SocialLinks.jsx'
import './SocialBar.css'

function SocialBar() {
  return (
    <section className="social-bar" aria-label="Social profiles">
      <div className="container social-bar__inner">
        <SocialLinks className="social-links--labels" showLabels />
      </div>
    </section>
  )
}

export default SocialBar
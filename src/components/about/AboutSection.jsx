import { aboutShort } from '../../data/about.js'
import { personal } from '../../data/personal.js'
import './AboutSection.css'

function AboutSection() {
  const { eyebrow, headline, paragraph } = aboutShort

  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="container about__layout">
        <aside className="about__profile">
          <div className="about__avatar-ring">
            <div className="about__avatar">
              <img src={personal.profileImage} alt={personal.name} />
            </div>
          </div>
          <h3 className="about__name">{personal.name}</h3>
          <p className="about__role">{personal.role}</p>
          <p className="about__meta">{personal.city}</p>
          <p className="about__tagline">{personal.footerTagline}</p>
        </aside>

        <div className="about__content">
          <span className="eyebrow">{eyebrow}</span>
          <h2 id="about-title" className="about__headline">
            {headline}
          </h2>
          <p className="about__paragraph">{paragraph}</p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
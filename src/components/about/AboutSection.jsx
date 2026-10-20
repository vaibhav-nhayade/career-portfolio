import { FiBookOpen, FiTarget, FiArrowRight } from 'react-icons/fi'
import { aboutShort } from '../../data/about.js'
import { personal } from '../../data/personal.js'
import Button from '../ui/Button.jsx'
import './AboutSection.css'

const FACT_ICONS = { target: FiTarget, book: FiBookOpen }

function AboutSection() {
  const { eyebrow, headline, lede, facts, projects, closing, ctaLabel } = aboutShort

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
          <header>
            <span className="eyebrow">{eyebrow}</span>
            <h2 id="about-title" className="about__headline">
              {headline}
            </h2>
            <p className="about__lede">{lede}</p>
          </header>

          <dl className="about__facts">
            {facts.map((fact) => {
              const Icon = FACT_ICONS[fact.icon] ?? FiTarget
              return (
                <div key={fact.label} className="about__fact">
                  <span className="about__fact-icon" aria-hidden="true">
                    <Icon size={18} />
                  </span>
                  <div>
                    <dt className="about__fact-label">{fact.label}</dt>
                    <dd className="about__fact-value">{fact.value}</dd>
                  </div>
                </div>
              )
            })}
          </dl>

          <div className="about__projects">
            {projects.map((project) => (
              <article key={project.title} className="about__project">
                <h3 className="about__project-title">{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>

          <div className="about__footer">
            <p className="about__closing">{closing}</p>
            <Button href="#projects" variant="secondary">
              {ctaLabel}
              <FiArrowRight size={16} aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
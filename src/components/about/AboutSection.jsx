import { FiBookOpen, FiCode, FiCpu, FiLayers, FiSearch, FiTrendingUp } from 'react-icons/fi'
import { aboutStory } from '../../data/about.js'
import { personal } from '../../data/personal.js'
import './AboutSection.css'

const CHAPTER_ICONS = { code: FiCode, book: FiBookOpen, cpu: FiCpu }
const PROJECT_ICONS = { search: FiSearch, trend: FiTrendingUp }

function AboutSection() {
  const { eyebrow, titleStart, titleAccent, intro, chapters, projectsHeading, projects, reflection, closing, closingNote } =
    aboutStory

  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="about__glow" aria-hidden="true" />

      <div className="container about__inner">
        <header className="about__header" data-reveal>
          <span className="eyebrow">{eyebrow}</span>
          <h2 id="about-title" className="about__title">
            {titleStart} <span className="about__title-accent">{titleAccent}</span>
          </h2>
          <p className="about__lede">{intro}</p>
        </header>

        <div className="about__layout">
          <aside className="about__profile" data-reveal>
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

          <div className="about__story">
            <ol className="about__timeline">
              {chapters.map((chapter, index) => {
                const Icon = CHAPTER_ICONS[chapter.icon] ?? FiCode
                return (
                  <li
                    key={chapter.label}
                    className="about__chapter"
                    data-reveal
                    style={{ transitionDelay: `${index * 120}ms` }}
                  >
                    <span className="about__node" aria-hidden="true">
                      <Icon size={18} />
                    </span>
                    <div className="about__chapter-body">
                      <span className="about__chip">{chapter.label}</span>
                      <h4 className="about__chapter-title">{chapter.heading}</h4>
                      {chapter.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </li>
                )
              })}
            </ol>

            <div className="about__projects">
              <h4 className="about__subhead" data-reveal>
                {projectsHeading}
              </h4>
              <div className="about__project-grid">
                {projects.map((project, index) => {
                  const Icon = PROJECT_ICONS[project.icon] ?? FiLayers
                  return (
                    <article
                      key={project.title}
                      className="about__project"
                      data-reveal
                      style={{ transitionDelay: `${index * 120}ms` }}
                    >
                      <span className="about__project-icon" aria-hidden="true">
                        <Icon size={20} />
                      </span>
                      <h5 className="about__project-title">{project.title}</h5>
                      <p>{project.description}</p>
                    </article>
                  )
                })}
              </div>
            </div>

            <div className="about__reflection" data-reveal>
              {reflection.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        <blockquote className="about__closing" data-reveal>
          <p>{closing}</p>
          <span className="about__closing-note">{closingNote}</span>
        </blockquote>
      </div>
    </section>
  )
}

export default AboutSection
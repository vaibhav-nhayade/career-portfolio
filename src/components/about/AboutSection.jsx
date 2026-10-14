import { personal } from '../../data/personal.js'
import SectionHeading from '../ui/SectionHeading.jsx'
import './AboutSection.css'

function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <SectionHeading eyebrow="About" title="A bit about me" align="center" />

        <div className="about__content">
          <img
            src={personal.profileImage}
            alt={personal.name}
            className="about__avatar"
          />

          <div className="about__bio">
            {personal.aboutBio ? (
              <p>{personal.aboutBio}</p>
            ) : (
              <p className="about__bio-placeholder">
                Bio coming soon — add a few sentences about your journey into
                AI &amp; Data Science: what sparked your interest, what
                you&apos;re focused on now, and what you&apos;re working
                toward.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
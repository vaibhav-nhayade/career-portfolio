import { useState } from 'react'
import { experience } from '../../data/experience.js'
import SectionHeading from '../ui/SectionHeading.jsx'
import ExperienceDetails from './ExperienceDetails.jsx'
import ExperienceTimeline from './ExperienceTimeline.jsx'
import './ExperienceSection.css'

function ExperienceSection() {
  const [selectedId, setSelectedId] = useState(experience[0]?.id ?? null)
  const selectedExperience =
    experience.find((item) => item.id === selectedId) ?? experience[0]

  return (
    <section className="experience" id="experience" aria-labelledby="experience-title">
      <div className="container experience__inner">
        <SectionHeading
          id="experience-title"
          eyebrow="Experience"
          title="Where I have applied what I learn"
          subtitle="A growing record of the roles, collaborations, and practical work that have shaped my approach to AI and data."
        />

        <div className="experience__content">
          <ExperienceTimeline
            items={experience}
            selectedId={selectedExperience?.id}
            onSelect={setSelectedId}
          />
          <ExperienceDetails item={selectedExperience} />
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
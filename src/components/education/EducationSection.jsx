import { education } from '../../data/education.js'
import PlaceholderNotice from '../ui/PlaceholderNotice.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import EducationCard from './EducationCard.jsx'
import './EducationSection.css'

function EducationSection() {
  const hasPlaceholders = education.some((item) => item.isPlaceholder)

  return (
    <section className="education" id="education" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading
          id="education-title"
          eyebrow="Education"
          title="Where I'm learning"
          subtitle="The academic foundation behind my work in AI, machine learning, and data science."
        />

        {hasPlaceholders && <PlaceholderNotice source="src/data/education.js" />}

        <ol className="education__list">
          {education.map((item) => (
            <li key={item.id}>
              <EducationCard item={item} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default EducationSection
import { skillCategories } from '../../data/skills.js'
import PlaceholderNotice from '../ui/PlaceholderNotice.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import SkillCategory from './SkillCategory.jsx'
import './SkillsSection.css'

function SkillsSection() {
  const hasPlaceholders = skillCategories.some((category) => category.placeholder)

  return (
    <section className="skills" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          id="skills-title"
          eyebrow="Skills"
          title="Tools of the trade"
          subtitle="The languages, libraries, and platforms I work with, plus the ones I'm actively learning."
        />

        {hasPlaceholders && <PlaceholderNotice source="src/data/skills.js" />}

        <div className="skills__grid">
          {skillCategories.map((category) => (
            <SkillCategory key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
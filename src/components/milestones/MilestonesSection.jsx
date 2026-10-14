import { milestones } from '../../data/milestones.js'
import PlaceholderNotice from '../ui/PlaceholderNotice.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import MilestoneTimeline from './MilestoneTimeline.jsx'
import './MilestonesSection.css'

function MilestonesSection() {
  const hasPlaceholders = milestones.some((item) => item.isPlaceholder)

  return (
    <section className="milestones" id="milestones" aria-labelledby="milestones-title">
      <div className="container">
        <SectionHeading
          id="milestones-title"
          eyebrow="Journey"
          title="Milestones along the way"
          subtitle="A living record of the moments that shaped how I learn, build, and think about data."
        />

        {hasPlaceholders && <PlaceholderNotice source="src/data/milestones.js" />}

        <MilestoneTimeline items={milestones} />
      </div>
    </section>
  )
}

export default MilestonesSection
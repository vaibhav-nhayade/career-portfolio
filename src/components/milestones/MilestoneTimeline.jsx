import MilestoneCard from './MilestoneCard.jsx'

function MilestoneTimeline({ items }) {
  if (!items.length) {
    return <p className="milestone-timeline__empty">Milestones will appear here soon.</p>
  }

  return (
    <ol className="milestone-timeline" aria-label="Milestones">
      {items.map((item) => (
        <li key={item.id} className="milestone-timeline__item" data-reveal>
          <MilestoneCard item={item} />
        </li>
      ))}
    </ol>
  )
}

export default MilestoneTimeline
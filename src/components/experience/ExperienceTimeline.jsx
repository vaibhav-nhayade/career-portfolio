import ExperienceCard from './ExperienceCard.jsx'

function ExperienceTimeline({ items, selectedId, onSelect }) {
  if (!items.length) {
    return <p className="experience__empty">Experience entries will appear here soon.</p>
  }

  return (
    <ol className="experience-timeline" aria-label="Experience timeline">
      {items.map((item) => (
        <li key={item.id} className="experience-timeline__item">
          <ExperienceCard
            item={item}
            isSelected={item.id === selectedId}
            onSelect={() => onSelect(item.id)}
          />
        </li>
      ))}
    </ol>
  )
}

export default ExperienceTimeline

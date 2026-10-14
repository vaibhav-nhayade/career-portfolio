function ExperienceCard({ item, isSelected, onSelect }) {
  const dateRange = `${item.startDate} — ${item.endDate}`

  return (
    <button
      type="button"
      className={`experience-card${isSelected ? ' experience-card--selected' : ''}`}
      onClick={onSelect}
      aria-pressed={isSelected}
    >
      <span className="experience-card__marker" aria-hidden="true" />
      <span className="experience-card__dates">{dateRange}</span>
      <span className="experience-card__role">{item.role}</span>
      <span className="experience-card__company">{item.company}</span>
      <span className="experience-card__meta">{item.location}</span>
    </button>
  )
}

export default ExperienceCard

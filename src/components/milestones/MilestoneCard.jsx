import Badge from '../ui/Badge.jsx'

function MilestoneCard({ item }) {
  return (
    <article className="milestone-card">
      <span
        className={`milestone-card__dot${item.upcoming ? ' milestone-card__dot--upcoming' : ''}`}
        aria-hidden="true"
      />

      <div className="milestone-card__content">
        <div className="milestone-card__meta">
          <time className="milestone-card__date">{item.date}</time>
          <Badge tone={item.upcoming ? 'accent' : 'neutral'}>{item.kind}</Badge>
        </div>
        <h3 className="milestone-card__title">{item.title}</h3>
        <p className="milestone-card__description">{item.description}</p>
      </div>
    </article>
  )
}

export default MilestoneCard
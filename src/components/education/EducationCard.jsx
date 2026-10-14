import { FiBookOpen, FiMapPin } from 'react-icons/fi'
import Badge from '../ui/Badge.jsx'

function EducationCard({ item }) {
  return (
    <article className="education-card">
      <span className="education-card__icon" aria-hidden="true">
        <FiBookOpen size={20} />
      </span>

      <div className="education-card__content">
        <div className="education-card__header">
          <h3 className="education-card__degree">{item.degree}</h3>
          <Badge tone="accent">
            {item.startYear} — {item.endYear}
          </Badge>
        </div>

        <p className="education-card__institution">{item.institution}</p>
        <p className="education-card__location">
          <FiMapPin size={14} aria-hidden="true" />
          {item.location}
        </p>

        <p className="education-card__summary">{item.summary}</p>

        {item.highlights.length > 0 && (
          <ul className="education-card__highlights">
            {item.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}

export default EducationCard
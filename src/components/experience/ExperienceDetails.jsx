import { FiExternalLink, FiMapPin } from 'react-icons/fi'

function ExperienceDetails({ item }) {
  if (!item) {
    return null
  }

  return (
    <article className="experience-details" aria-live="polite">
      {item.isPlaceholder && (
        <p className="experience-details__notice">
          Placeholder entry — replace it with your verified experience details.
        </p>
      )}

      <div className="experience-details__header">
        <div>
          <p className="experience-details__type">{item.employmentType}</p>
          <h3>{item.role}</h3>
          <p className="experience-details__company">{item.company}</p>
        </div>
        <p className="experience-details__dates">
          {item.startDate} — {item.endDate}
        </p>
      </div>

      <p className="experience-details__location">
        <FiMapPin aria-hidden="true" />
        {item.location}
      </p>
      <p className="experience-details__summary">{item.summary}</p>

      <div className="experience-details__body">
        <div>
          <h4>Key contributions</h4>
          <ul>
            {item.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Tools &amp; focus</h4>
          <ul className="experience-details__tags" aria-label="Technologies used">
            {item.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>
      </div>

      {item.link && (
        <a
          className="experience-details__link"
          href={item.link}
          target="_blank"
          rel="noreferrer"
        >
          {item.linkLabel || 'View related work'}
          <FiExternalLink aria-hidden="true" />
        </a>
      )}
    </article>
  )
}

export default ExperienceDetails

import { FiAward, FiExternalLink } from 'react-icons/fi'
import Badge from '../ui/Badge.jsx'

function CertificationCard({ item }) {
  return (
    <article className="certification-card">
      <span className="certification-card__icon" aria-hidden="true">
        <FiAward size={20} />
      </span>

      <h3 className="certification-card__name">{item.name}</h3>
      <p className="certification-card__issuer">{item.issuer}</p>

      <div className="certification-card__footer">
        <Badge>{item.date}</Badge>
        {item.credentialUrl && (
          <a
            className="certification-card__verify"
            href={item.credentialUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            Verify <FiExternalLink size={13} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  )
}

export default CertificationCard
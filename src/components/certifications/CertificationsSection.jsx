import { certifications } from '../../data/certifications.js'
import PlaceholderNotice from '../ui/PlaceholderNotice.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import CertificationCard from './CertificationCard.jsx'
import './CertificationsSection.css'

function CertificationsSection() {
  const hasPlaceholders = certifications.some((item) => item.isPlaceholder)

  return (
    <section className="certifications" id="certifications" aria-labelledby="certifications-title">
      <div className="container">
        <SectionHeading
          id="certifications-title"
          eyebrow="Certifications"
          title="Verified learning"
          subtitle="Courses and certifications that formalised what I learned through practice."
        />

        {hasPlaceholders && <PlaceholderNotice source="src/data/certifications.js" />}

        {certifications.length ? (
          <ul className="certifications__grid">
            {certifications.map((item) => (
              <li key={item.id}>
                <CertificationCard item={item} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="certifications__empty">Certifications will appear here soon.</p>
        )}
      </div>
    </section>
  )
}

export default CertificationsSection
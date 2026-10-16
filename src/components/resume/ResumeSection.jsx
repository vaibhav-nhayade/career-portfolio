import { FiDownload, FiExternalLink } from 'react-icons/fi'
import { personal } from '../../data/personal.js'
import Button from '../ui/Button.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import './ResumeSection.css'

function ResumeSection() {
  const { resumeUrl } = personal

  return (
    <section className="resume" id="resume" aria-labelledby="resume-title">
      <div className="container">
        <SectionHeading
          id="resume-title"
          eyebrow="Resume"
          title="My resume"
          subtitle="Read it right here, or download a copy."
          align="center"
        />

        {resumeUrl ? (
          <>
            <div className="resume__viewer">
              <iframe
                className="resume__frame"
                src={`${resumeUrl}#view=FitH`}
                title="Resume PDF"
                loading="lazy"
              />
            </div>

            <div className="resume__actions">
              <Button href={resumeUrl} download variant="secondary">
                <FiDownload size={16} aria-hidden="true" />
                Download PDF
              </Button>
              <Button href={resumeUrl} target="_blank" rel="noreferrer noopener" variant="ghost">
                <FiExternalLink size={16} aria-hidden="true" />
                Open in new tab
              </Button>
            </div>
          </>
        ) : (
          <p className="resume__empty">Resume coming soon.</p>
        )}
      </div>
    </section>
  )
}

export default ResumeSection
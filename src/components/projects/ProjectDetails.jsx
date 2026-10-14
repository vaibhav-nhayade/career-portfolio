import { useEffect, useRef } from 'react'
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi'
import Badge from '../ui/Badge.jsx'
import Button from '../ui/Button.jsx'

const LINK_OPTIONS = [
  { key: 'github', label: 'View code', Icon: FiGithub },
  { key: 'demo', label: 'Live demo', Icon: FiExternalLink },
  { key: 'writeup', label: 'Read write-up', Icon: FiExternalLink },
]

function ProjectDetails({ project, onClose }) {
  const dialogRef = useRef(null)

  // Drive the native <dialog> from the selected project: open it when one is chosen, close otherwise.
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (project && !dialog.open) dialog.showModal()
    if (!project && dialog.open) dialog.close()
  }, [project])

  // A click that lands on the <dialog> itself (not its padded content) is a backdrop click.
  const handleBackdropClick = (event) => {
    if (event.target === dialogRef.current) dialogRef.current.close()
  }

  return (
    <dialog
      ref={dialogRef}
      className="project-dialog"
      onClose={onClose}
      onClick={handleBackdropClick}
      aria-labelledby="project-dialog-title"
    >
      {project && (
        <div className="project-dialog__body">
          <button
            type="button"
            className="project-dialog__close"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close project details"
          >
            <FiX aria-hidden="true" />
          </button>

          <div className="project-dialog__meta">
            <Badge tone="accent">{project.category}</Badge>
            <Badge>{project.status}</Badge>
            {project.placeholder && <Badge tone="muted">Sample</Badge>}
          </div>

          <h3 id="project-dialog-title" className="project-dialog__title">
            {project.title}
          </h3>
          <p className="project-dialog__summary">{project.summary}</p>

          {project.highlights?.length > 0 && (
            <ul className="project-dialog__highlights">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          )}

          <ul className="project-dialog__tech" aria-label="Technologies used">
            {project.tech.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>

          <div className="project-dialog__links">
            {LINK_OPTIONS.map(({ key, label, Icon }) =>
              project.links?.[key] ? (
                <Button
                  key={key}
                  href={project.links[key]}
                  variant="secondary"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {label}
                  <Icon size={14} aria-hidden="true" />
                </Button>
              ) : null,
            )}
          </div>

          {project.placeholder && (
            <p className="project-dialog__notice">
              Sample entry: edit <code>src/data/projects.js</code> to add your real project.
            </p>
          )}
        </div>
      )}
    </dialog>
  )
}

export default ProjectDetails
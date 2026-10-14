import { FiArrowUpRight, FiBarChart2, FiCpu, FiGlobe, FiLayers } from 'react-icons/fi'
import Badge from '../ui/Badge.jsx'

const CATEGORY_ICONS = {
  'Machine Learning': FiCpu,
  'Data Analysis': FiBarChart2,
  AI: FiLayers,
  Web: FiGlobe,
}

function ProjectCard({ project, onSelect }) {
  const Icon = CATEGORY_ICONS[project.category] ?? FiLayers
  const visibleTech = project.tech.slice(0, 4)

  return (
    <button type="button" className="project-card" onClick={onSelect} aria-haspopup="dialog">
      <span className="project-card__cover" aria-hidden="true">
        <Icon size={26} />
      </span>

      <span className="project-card__body">
        <span className="project-card__meta">
          <Badge tone="accent">{project.category}</Badge>
          {project.featured && <Badge>Featured</Badge>}
          {project.placeholder && <Badge tone="muted">Sample</Badge>}
        </span>

        <span className="project-card__title">{project.title}</span>
        <span className="project-card__summary">{project.summary}</span>

        <span className="project-card__tech">
          {visibleTech.map((tech) => (
            <span key={tech} className="project-card__tag">
              {tech}
            </span>
          ))}
        </span>
      </span>

      <span className="project-card__arrow" aria-hidden="true">
        <FiArrowUpRight size={18} />
      </span>
    </button>
  )
}

export default ProjectCard
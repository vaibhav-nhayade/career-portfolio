import ProjectCard from './ProjectCard.jsx'

function ProjectGrid({ projects, onSelect }) {
  if (!projects.length) {
    return <p className="project-grid__empty">No projects in this category yet.</p>
  }

  return (
    <ul className="project-grid">
      {projects.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} onSelect={() => onSelect(project)} />
        </li>
      ))}
    </ul>
  )
}

export default ProjectGrid
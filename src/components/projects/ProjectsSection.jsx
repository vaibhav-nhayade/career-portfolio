import { useMemo, useState } from 'react'
import { projects } from '../../data/projects.js'
import PlaceholderNotice from '../ui/PlaceholderNotice.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import ProjectDetails from './ProjectDetails.jsx'
import ProjectFilters from './ProjectFilters.jsx'
import ProjectGrid from './ProjectGrid.jsx'
import './ProjectsSection.css'

const ALL = 'All'

function ProjectsSection() {
  const [category, setCategory] = useState(ALL)
  const [activeProject, setActiveProject] = useState(null)

  const categories = useMemo(
    () => [ALL, ...new Set(projects.map((project) => project.category))],
    [],
  )

  const visibleProjects = useMemo(() => {
    const filtered =
      category === ALL ? projects : projects.filter((project) => project.category === category)
    // Featured projects first; Array.prototype.sort is stable, so the rest keep their order.
    return [...filtered].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)))
  }, [category])

  const hasPlaceholders = projects.some((project) => project.placeholder)

  return (
    <section className="projects" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          id="projects-title"
          eyebrow="Projects"
          title="Things I've built"
          subtitle="A selection of projects where I applied machine learning, data analysis, and software engineering to real problems."
        />

        {hasPlaceholders && <PlaceholderNotice source="src/data/projects.js" />}

        <ProjectFilters categories={categories} active={category} onChange={setCategory} />

        <ProjectGrid projects={visibleProjects} onSelect={setActiveProject} />

        <ProjectDetails project={activeProject} onClose={() => setActiveProject(null)} />
      </div>
    </section>
  )
}

export default ProjectsSection
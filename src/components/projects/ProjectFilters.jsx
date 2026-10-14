import { cx } from '../../lib/utils.js'

function ProjectFilters({ categories, active, onChange }) {
  return (
    <div className="project-filters" role="group" aria-label="Filter projects by category">
      {categories.map((category) => {
        const isActive = category === active
        return (
          <button
            key={category}
            type="button"
            className={cx('project-filter', isActive && 'project-filter--active')}
            aria-pressed={isActive}
            onClick={() => onChange(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default ProjectFilters
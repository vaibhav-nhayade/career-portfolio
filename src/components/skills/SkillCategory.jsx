import SkillItem from './SkillItem.jsx'

function SkillCategory({ category }) {
  return (
    <article className="skill-card">
      <h3 className="skill-card__title">{category.title}</h3>
      <ul className="skill-card__list" aria-label={`${category.title} skills`}>
        {category.items.map((item) => (
          <SkillItem key={item.name} item={item} />
        ))}
      </ul>
    </article>
  )
}

export default SkillCategory
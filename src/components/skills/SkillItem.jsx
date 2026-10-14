function SkillItem({ item }) {
  return (
    <li className="skill-chip">
      {item.name}
      {item.learning && <span className="skill-chip__tag">Learning</span>}
    </li>
  )
}

export default SkillItem
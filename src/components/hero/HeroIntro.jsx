import { personal } from '../../data/personal.js'

function HeroIntro() {
  return (
    <>
      <span className="eyebrow reveal" style={{ '--delay': '60ms' }}>
        {personal.role}
      </span>

      <h1 className="hero__name reveal" style={{ '--delay': '140ms' }}>
        Hi, I&apos;m <span className="hero__name-highlight">{personal.name}</span>
      </h1>

      <p className="hero__intro reveal" style={{ '--delay': '240ms' }}>
        {personal.heroSummary}
      </p>
    </>
  )
}

export default HeroIntro
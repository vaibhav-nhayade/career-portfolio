import Button from '../ui/Button.jsx'
import './HeroActions.css'

function HeroActions() {
  return (
    <div className="hero__actions reveal" style={{ '--delay': '340ms' }}>
      <Button href="#projects">View projects</Button>
      <Button href="#contact" variant="secondary">
        Get in touch
      </Button>
    </div>
  )
}

export default HeroActions
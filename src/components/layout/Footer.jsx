import { personal } from '../../data/personal.js'
import SocialLinks from './SocialLinks.jsx'
import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <div>
            <p className="site-footer__name">{personal.name}</p>
            <p className="site-footer__tagline">{personal.footerTagline}</p>
          </div>
          <SocialLinks />
        </div>
        <p className="site-footer__copyright">
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
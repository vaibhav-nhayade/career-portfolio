import { FiMail, FiMapPin } from 'react-icons/fi'
import { personal } from '../../data/personal.js'
import SocialLinks from '../layout/SocialLinks.jsx'

function ContactInfo() {
  return (
    <aside className="contact-info" aria-label="Contact details">
      <p className="contact-info__lead">
        Based in {personal.city}. I'm happy to talk about AI, data science, or anything you're building.
      </p>

      <ul className="contact-info__list">
        <li>
          <FiMapPin size={18} aria-hidden="true" />
          <span>{personal.city}</span>
        </li>
        {personal.email && (
          <li>
            <FiMail size={18} aria-hidden="true" />
            <a href={`mailto:${personal.email}`}>{personal.email}</a>
          </li>
        )}
      </ul>

      <div className="contact-info__socials">
        <p className="contact-info__label">Find me online</p>
        <SocialLinks />
      </div>
    </aside>
  )
}

export default ContactInfo
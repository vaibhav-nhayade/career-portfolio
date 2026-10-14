import SectionHeading from '../ui/SectionHeading.jsx'
import ContactForm from './ContactForm.jsx'
import ContactInfo from './ContactInfo.jsx'
import './ContactSection.css'

function ContactSection() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading
          id="contact-title"
          eyebrow="Contact"
          title="Let's connect"
          subtitle="Have a question, an opportunity, or a project idea? Send a message and I'll get back to you."
        />

        <div className="contact__grid">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default ContactSection
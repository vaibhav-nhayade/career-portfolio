import { useState } from 'react'
import { personal } from '../../data/personal.js'
import { validateContactForm } from '../../lib/validators.js'
import Button from '../ui/Button.jsx'

const EMPTY_VALUES = { name: '', email: '', message: '' }

function ContactForm() {
  const [values, setValues] = useState(EMPTY_VALUES)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const canSend = Boolean(personal.email)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
    setSent(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const found = validateContactForm(values)
    setErrors(found)
    if (Object.keys(found).length > 0 || !canSend) return

    // No backend: hand the message to the visitor's own email client.
    const subject = encodeURIComponent(`Portfolio enquiry from ${values.name.trim()}`)
    const body = encodeURIComponent(
      `${values.message.trim()}\n\n— ${values.name.trim()} (${values.email.trim()})`,
    )
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`
    setValues(EMPTY_VALUES)
    setSent(true)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <Field
        label="Name"
        name="name"
        value={values.name}
        onChange={handleChange}
        error={errors.name}
        autoComplete="name"
      />
      <Field
        label="Email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        error={errors.email}
        autoComplete="email"
      />
      <Field
        label="Message"
        name="message"
        as="textarea"
        value={values.message}
        onChange={handleChange}
        error={errors.message}
      />

      {!canSend && (
        <p className="contact-form__notice">
          Direct messages are coming soon. Reach out through the social links for now.
        </p>
      )}

      {sent && (
        <p className="contact-form__success" role="status">
          Your email app should open with your message ready to send.
        </p>
      )}

      <Button type="submit" disabled={!canSend} className="contact-form__submit">
        Send message
      </Button>
    </form>
  )
}

function Field({ label, name, as = 'input', error, ...rest }) {
  const id = `contact-${name}`
  const errorId = `${id}-error`
  const Control = as

  return (
    <div className="contact-form__field">
      <label htmlFor={id}>{label}</label>
      <Control
        id={id}
        name={name}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        {...rest}
      />
      {error && (
        <span id={errorId} className="contact-form__error">
          {error}
        </span>
      )}
    </div>
  )
}

export default ContactForm
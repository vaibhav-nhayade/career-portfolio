const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function isValidEmail(value) {
  return EMAIL_PATTERN.test(value.trim())
}

/** Returns an object mapping field names to error messages. Empty object means valid. */
export function validateContactForm({ name, email, message }) {
  const errors = {}
  const trimmedName = name.trim()
  const trimmedMessage = message.trim()

  if (!trimmedName) {
    errors.name = 'Please enter your name.'
  } else if (trimmedName.length > 80) {
    errors.name = 'Please keep your name under 80 characters.'
  }

  if (!email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!isValidEmail(email)) {
    errors.email = 'That email address does not look right.'
  }

  if (trimmedMessage.length < 10) {
    errors.message = 'Please write at least 10 characters.'
  } else if (trimmedMessage.length > 2000) {
    errors.message = 'Please keep your message under 2000 characters.'
  }

  return errors
}
import { cx } from '../../lib/utils.js'
import './Button.css'

function Button({ href, variant = 'primary', className, children, type = 'button', ...rest }) {
  const classes = cx('btn', `btn--${variant}`, className)

  if (href) {
    return (
      <a className={classes} href={href} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  )
}

export default Button
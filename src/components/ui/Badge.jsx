import { cx } from '../../lib/utils.js'
import './Badge.css'

function Badge({ children, tone = 'neutral', className }) {
  return <span className={cx('badge', `badge--${tone}`, className)}>{children}</span>
}

export default Badge
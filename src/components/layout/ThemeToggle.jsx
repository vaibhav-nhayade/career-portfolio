import { FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../../hooks/useTheme.js'
import './ThemeToggle.css'

function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'
  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode'

  return (
    <button type="button" className="theme-toggle" onClick={toggle} aria-label={label} title={label}>
      {isDark ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
    </button>
  )
}

export default ThemeToggle
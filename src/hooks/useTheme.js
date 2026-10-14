import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'vn-portfolio-theme'
const THEME_COLORS = { light: '#FAFAF9', dark: '#101114' }

function readInitialTheme() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // Storage can be blocked (some private modes); fall back to the system setting.
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState(readInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', THEME_COLORS[theme])
    try {
      window.localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // Ignore write failures; the theme still applies for this session.
    }
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, toggle }
}
import { useState } from 'react'
import WelcomePage from './components/welcome/WelcomePage.jsx'

function MainPortfolioPlaceholder() {
  return (
    <main style={{ minHeight: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-sans)', color: 'var(--color-ink-muted)', textAlign: 'center', padding: 'var(--space-6)' }}>
      Main portfolio — under construction. Next milestone.
    </main>
  )
}

function App() {
  const [launched, setLaunched] = useState(false)
  if (!launched) return <WelcomePage onLaunch={() => setLaunched(true)} />
  return <MainPortfolioPlaceholder />
}

export default App
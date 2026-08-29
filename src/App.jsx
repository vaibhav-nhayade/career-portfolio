import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { AppProviders } from './app/providers'
import WelcomeScreen from './components/entry/WelcomeScreen'

function App() {
  const [launched, setLaunched] = useState(false)

  return (
    <AppProviders>
      <AnimatePresence mode="wait">
        {!launched ? (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.985 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
          >
            <WelcomeScreen onLaunch={() => setLaunched(true)} />
          </motion.div>
        ) : (
          <motion.main
            key="portfolio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground"
          >
            <p className="text-muted-foreground">
              Portfolio experience coming next.
            </p>
          </motion.main>
        )}
      </AnimatePresence>
    </AppProviders>
  )
}

export default App
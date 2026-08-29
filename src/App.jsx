import { AppProviders } from './app/providers'

function App() {
  return (
    <AppProviders>
      <div className="min-h-screen bg-background text-foreground">
        <main>
          <section className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-24">
            <div className="text-center">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Career Portfolio
              </p>

              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                A career in technology,
                <br />
                documented over time.
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                A living digital archive of engineering, projects,
                research, and the journey behind them.
              </p>
            </div>
          </section>
        </main>
      </div>
    </AppProviders>
  )
}

export default App
import { ArrowUpRight, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/vaibhav-nhayade',
    type: 'github',
  },
  {
    label: 'LinkedIn',
    href: '#',
    type: 'linkedin',
  },
]

function BrandIcon({ type, size = 16 }) {
  if (type === 'github') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.49.5.092.682-.217.682-.483 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.455-1.158-1.11-1.467-1.11-1.467-.909-.621.069-.608.069-.608 1.005.071 1.533 1.032 1.533 1.032.893 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.221-.253-4.555-1.111-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.6 9.6 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.936.359.31.678.92.678 1.852 0 1.337-.012 2.416-.012 2.744 0 .269.18.58.688.482A10.001 10.001 0 0 0 22 12C22 6.477 17.523 2 12 2Z"
        />
      </svg>
    )
  }

  if (type === 'linkedin') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.604 0 4.267 2.372 4.267 5.455v6.286ZM5.337 7.433a2.063 2.063 0 1 1 0-4.127 2.063 2.063 0 0 1 0 4.127ZM3.56 20.452h3.558V9H3.56v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z"
        />
      </svg>
    )
  }

  return null
}

function WelcomeScreen({ onLaunch }) {
  const { resolvedTheme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <a
            href="/"
            aria-label="Vaibhav Nhayade home"
            className="text-sm font-semibold tracking-[-0.02em]"
          >
            VN.
          </a>

          <div className="flex items-center gap-1 rounded-full border border-border bg-surface/80 p-1 shadow-sm backdrop-blur-xl">
            {socialLinks.map(({ label, href, type }) => (
              <a
                key={label}
                href={href}
                target={href !== '#' ? '_blank' : undefined}
                rel={href !== '#' ? 'noreferrer' : undefined}
                aria-label={label}
                title={label}
                className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-surface-elevated hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <BrandIcon type={type} />
              </a>
            ))}

            <span
              aria-hidden="true"
              className="mx-1 h-4 w-px bg-border"
            />

            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              title="Toggle theme"
              className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-surface-elevated hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {resolvedTheme === 'dark' ? (
                <Sun size={16} strokeWidth={1.8} />
              ) : (
                <Moon size={16} strokeWidth={1.8} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main experience */}
      <section className="relative flex min-h-screen items-center px-5 pb-10 pt-28 sm:px-8 lg:px-10">
        {/* Ambient light */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-12rem] top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-accent/5 blur-3xl"
        />

        <div className="relative mx-auto grid w-full max-w-[1440px] gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          {/* Copy */}
          <div>
            <div className="mb-8 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>Career archive · Est. 2026</span>
            </div>

            <h1 className="max-w-5xl text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[0.92] tracking-[-0.065em]">
              Building
              <br />
              <span className="text-muted-foreground">
                intelligent
              </span>
              <br />
              systems.
            </h1>

            <p className="mt-10 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
              A living record of my journey through AI, data science,
              software engineering, experiments, and the things worth
              building along the way.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onLaunch}
                className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                Launch portfolio

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-background/10 transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowUpRight size={14} />
                </span>
              </button>

              <span className="text-sm text-muted-foreground">
                The journey starts here.
              </span>
            </div>
          </div>

          {/* Visual system */}
          <div
            aria-hidden="true"
            className="relative hidden aspect-square w-full max-w-[520px] justify-self-end lg:flex"
          >
            <div className="absolute inset-[12%] rounded-[2.5rem] border border-border bg-surface shadow-[0_30px_100px_rgba(15,23,42,0.08)]" />

            <div className="absolute inset-[21%] rounded-[2rem] border border-border bg-surface-elevated" />

            <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-background shadow-[0_20px_60px_rgba(15,23,42,0.1)]">
              <div className="absolute inset-3 rounded-full border border-border" />

              <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground" />
            </div>

            <div className="absolute left-[8%] top-[22%] rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium shadow-sm">
              AI
            </div>

            <div className="absolute bottom-[22%] right-[7%] rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium shadow-sm">
              DATA
            </div>

            <div className="absolute bottom-[9%] left-[28%] rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium shadow-sm">
              ENGINEERING
            </div>
          </div>
        </div>
      </section>

      {/* Footer metadata */}
      <footer className="absolute inset-x-0 bottom-0">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 pb-5 text-xs text-muted-foreground sm:px-8 lg:px-10">
          <span>AI · Data · Engineering</span>

          <span className="hidden sm:inline">
            Designed to evolve with the career.
          </span>

          <span>01 / 01</span>
        </div>
      </footer>
    </main>
  )
}

export default WelcomeScreen
# Career Portfolio — Architecture

> **A living digital archive of a career in technology.**

**Project:** Career Portfolio  
**Repository:** `vaibhav-nhayade/career-portfolio`  
**License:** MIT  
**Status:** Architecture Locked — Development Starting  
**Architecture Version:** 1.0.0

---

## 1. Project Vision

This project is a long-term, data-driven personal portfolio designed to document an evolving career in technology.

It is not intended to be only a résumé website or a collection of projects.

The application should be capable of representing the complete journey of an engineer:

```text
Student
   ↓
Engineer
   ↓
Senior Engineer
   ↓
Staff Engineer
   ↓
Principal Engineer
   ↓
Architect / Technical Leader
   ↓
Career Archive
```

The architecture must therefore remain scalable for many years without requiring structural redesign whenever new career milestones, projects, skills, publications, or achievements are added.

### Core principle

> **Content should evolve without requiring presentation-layer changes.**

Adding a new job, project, article, technology, milestone, or achievement should primarily require modifying the appropriate data source rather than rewriting UI components.

---

# 2. Product Experience

The website consists of two major experiences:

```text
                    Portfolio Application
                           │
             ┌─────────────┴─────────────┐
             │                           │
       Entry Experience            Main Portfolio
             │                           │
      Welcome Screen             Site Shell
             │                           │
       Launch Portfolio              Sections
```

The entry experience introduces the portfolio before the user enters the main application.

The transition should feel intentional and polished rather than behaving like a traditional loading screen.

---

# 3. Technology Stack

## Core

- React
- JavaScript
- Vite

Although the original project concept references HTML, CSS, and JavaScript, the implementation uses React because several required technologies are React-oriented.

## Styling

- Tailwind CSS v4
- Custom CSS design tokens where necessary

## UI

- shadcn/ui design principles
- Custom reusable UI primitives
- Lucide React icons

## Animation

- Framer Motion

Used for:

- page transitions
- section reveals
- hover interactions
- modal transitions
- counters
- timeline interactions
- subtle scroll-linked effects

## Theme

- next-themes

Supported modes:

- Light
- Dark
- System

## Forms

- React Hook Form
- Zod

Used for client-side form validation.

## Tooling

- ESLint
- Git
- GitHub

---

# 4. Architectural Principles

The application follows these principles.

## 4.1 Data-driven architecture

Dynamic content must be separated from presentation.

```text
data/
   ↓
components/
   ↓
UI
```

Components should consume structured data rather than containing large amounts of hard-coded career content.

---

## 4.2 Separation of concerns

The project is divided into:

```text
Application
Components
Data
Hooks
Libraries
Animations
Styles
Assets
```

Each layer should have a clear responsibility.

---

## 4.3 Reusability

Reusable UI primitives belong in:

```text
components/ui/
```

Section-specific components belong in their respective domain directories.

---

## 4.4 Progressive complexity

The project should not begin with unnecessary abstractions.

Architecture may grow as the product grows.

Do not create empty files, artificial layers, or abstractions solely to make the repository appear sophisticated.

---

## 4.5 Accessibility by default

Accessibility is part of the architecture rather than a final polishing step.

All interactive components should support:

- keyboard navigation
- visible focus states
- semantic HTML
- accessible names
- appropriate ARIA attributes
- reduced-motion preferences
- sufficient contrast
- accessible form validation

---

## 4.6 Responsive by design

The application must work across:

- mobile
- tablet
- laptop
- desktop
- ultra-wide displays

Responsive behavior should be intentionally designed rather than relying only on automatic CSS shrinking.

---

# 5. High-Level Application Architecture

```text
career-portfolio/
│
├── public/
│
├── src/
│   │
│   ├── app/
│   │
│   ├── components/
│   │
│   ├── data/
│   │
│   ├── hooks/
│   │
│   ├── lib/
│   │
│   ├── animations/
│   │
│   ├── styles/
│   │
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
├── README.md
├── Architecture.md
├── LICENSE
└── .gitignore
```

---

# 6. Directory Structure

## 6.1 Public

```text
public/
├── favicon.svg
├── og-image.png
├── resume.pdf
└── assets/
    ├── projects/
    ├── career/
    └── writing/
```

The `public` directory contains static assets that do not require application-level processing.

---

# 7. Application Layer

```text
src/app/
├── App.jsx
├── routes.js
└── providers.jsx
```

## `App.jsx`

Root application composition.

Responsible for determining which major experience is currently displayed.

---

## `routes.js`

Contains route definitions if additional routes are introduced.

The initial portfolio is primarily a single-page experience.

The architecture should nevertheless allow future routes such as:

```text
/projects/project-name
/articles/article-name
/career/role-name
```

without requiring a complete rewrite.

---

## `providers.jsx`

Application-wide providers.

Potential responsibilities:

- theme provider
- future state providers
- other global application contexts

---

# 8. Component Architecture

```text
src/components/
```

Components are organized by responsibility and product domain.

---

## 8.1 UI primitives

```text
components/ui/
├── Button.jsx
├── Badge.jsx
├── Card.jsx
├── Dialog.jsx
├── Drawer.jsx
├── Tabs.jsx
├── Tooltip.jsx
├── Toast.jsx
└── Separator.jsx
```

These components are intentionally generic.

They should not contain career-specific content.

---

# 9. Layout Architecture

```text
components/layout/
├── SiteShell.jsx
├── Navbar.jsx
├── Footer.jsx
├── ScrollProgress.jsx
└── PageTransition.jsx
```

### SiteShell

Provides the primary application structure.

```text
SiteShell
├── Navbar
├── Main Content
└── Footer
```

### Navbar

Global navigation containing:

- section navigation
- career status
- resume action
- theme switcher

### ScrollProgress

Provides a subtle indication of the user's position within the portfolio.

### PageTransition

Controls transitions between major application experiences.

---

# 10. Entry Experience

```text
components/entry/
├── WelcomeScreen.jsx
└── LaunchButton.jsx
```

The welcome screen is the first experience.

Its purpose is to establish identity and create curiosity without creating unnecessary friction.

The user should be able to enter the main portfolio quickly.

### Design constraints

Avoid:

- long loading animations
- fake progress indicators
- excessive particle effects
- unnecessary 3D scenes
- intrusive sound
- generic terminal animations

The entry experience should feel like the opening of a professional digital archive.

---

# 11. Hero Architecture

```text
components/hero/
├── HeroSection.jsx
├── HeroVisual.jsx
├── TechOrb.jsx
└── MetricCounter.jsx
```

The hero communicates:

1. identity
2. current focus
3. value proposition
4. primary action
5. secondary action
6. selected career metrics

Metrics must be data-driven.

---

# 12. About Architecture

```text
components/about/
└── AboutSection.jsx
```

The About section communicates the human story behind the engineering work.

It should remain concise and complement the career timeline rather than duplicate it.

---

# 13. Career Architecture

```text
components/career/
├── CareerSection.jsx
├── CareerTimeline.jsx
├── TimelineNode.jsx
├── TimelineCard.jsx
├── TimelineFilters.jsx
└── CareerDeepDive.jsx
```

The career section is one of the primary differentiating features of the website.

It must support:

- chronological career roles
- milestones
- hackathons
- major achievements
- engineering impact
- technology tags
- measurable outcomes
- expandable deep dives

### Career modes

The timeline should support multiple views, including:

```text
Engineering Roles
Milestones / Hackathons
```

The data model should allow additional milestone types later.

---

# 14. Project Architecture

```text
components/projects/
├── ProjectsSection.jsx
├── ProjectFilters.jsx
├── ProjectGrid.jsx
├── ProjectCard.jsx
└── ProjectDetail.jsx
```

Projects support filtering by category.

Initial categories:

```text
All
AI / Data
Software
Systems
Open Source
```

Each project should support:

- title
- description
- category
- technologies
- challenge
- solution
- impact
- preview image
- live demo
- repository
- architecture information

---

# 15. Expertise Architecture

```text
components/expertise/
├── ExpertiseSection.jsx
├── SkillMatrix.jsx
└── SkillCategory.jsx
```

The skills system should avoid arbitrary percentage bars.

Instead, technologies should be grouped by domain.

Example:

```text
Languages
Frontend
Backend
AI / Data
Cloud
DevOps
Tools / Systems
```

Optional mastery classifications may include:

```text
Primary
Working Knowledge
Exploring
```

These classifications are qualitative rather than pretending to provide mathematically precise skill measurements.

---

# 16. Open Source Architecture

```text
components/open-source/
├── BuilderLog.jsx
└── ContributionCard.jsx
```

The Builder Log represents the ongoing development journey.

It can contain:

- open-source contributions
- experiments
- hackathons
- prototypes
- research experiments
- technical explorations

This section is intentionally broader than conventional project portfolios.

---

# 17. Writing Architecture

```text
components/writing/
├── WritingSection.jsx
└── ArticleCard.jsx
```

Supported content can include:

- articles
- technical notes
- research
- conference talks
- presentations
- tutorials

Each item may include:

- title
- description
- date
- category
- read time
- external URL

---

# 18. Beyond Code

```text
components/beyond-code/
└── BeyondCode.jsx
```

This section provides a human dimension to the portfolio.

Potential content:

- engineering principles
- lessons learned
- interests
- books
- personal philosophy
- memorable career moments

It should remain visually restrained.

---

# 19. Contact Architecture

```text
components/contact/
├── ContactSection.jsx
├── ContactForm.jsx
└── SocialLinks.jsx
```

The contact system supports:

- email
- GitHub
- LinkedIn
- X
- Substack
- other future social profiles

The contact form uses:

```text
React Hook Form
       +
Zod
       ↓
Client-side validation
       ↓
Submission abstraction
```

The frontend should remain independent of the eventual backend/email provider.

---

# 20. Data Architecture

All major dynamic content belongs in:

```text
src/data/
```

Initial structure:

```text
data/
├── site.js
├── hero.js
├── career.js
├── milestones.js
├── projects.js
├── skills.js
├── openSource.js
├── writing.js
└── socials.js
```

---

## 20.1 Site data

`site.js`

Contains global identity information.

Example responsibilities:

- name
- title
- location
- current status
- email
- resume path
- site metadata

---

## 20.2 Hero data

`hero.js`

Contains:

- headline
- supporting statement
- CTA labels
- metrics
- current focus

---

## 20.3 Career data

`career.js`

Each career record should contain a stable ID.

Example conceptual structure:

```js
{
  id: "career-001",
  type: "engineering",
  company: "...",
  role: "...",
  start: "...",
  end: "...",
  location: "...",
  description: "...",
  impact: [],
  metrics: [],
  technologies: [],
  deepDive: {
    challenge: "...",
    approach: "...",
    architecture: "...",
    outcome: "..."
  }
}
```

---

## 20.4 Project data

`projects.js`

Each project should contain:

```js
{
  id: "project-001",
  title: "...",
  category: "...",
  featured: true,
  description: "...",
  challenge: "...",
  solution: "...",
  impact: "...",
  technologies: [],
  links: {
    demo: "...",
    github: "..."
  },
  image: "..."
}
```

---

# 21. Hooks

```text
src/hooks/
├── useTheme.js
├── useScrollProgress.js
├── useMediaQuery.js
└── useClipboard.js
```

Hooks contain reusable behavior.

They should not contain presentation-specific markup.

---

# 22. Libraries and Utilities

```text
src/lib/
├── utils.js
├── constants.js
└── validation.js
```

### `utils.js`

Generic helper functions.

### `constants.js`

Application-level constants.

### `validation.js`

Zod schemas and validation logic.

---

# 23. Animation Architecture

```text
src/animations/
├── variants.js
├── transitions.js
└── motionConfig.js
```

Animations should be centralized where practical.

Common motion patterns include:

```text
fadeIn
fadeUp
slideIn
scaleIn
staggerChildren
cardHover
modalTransition
pageTransition
```

Animations should prioritize:

- smoothness
- hierarchy
- responsiveness
- performance
- accessibility

---

# 24. Reduced Motion

The application must respect:

```text
prefers-reduced-motion
```

When reduced motion is requested:

- large transitions should be reduced or disabled
- parallax should be disabled
- decorative motion should be minimized
- content should remain fully accessible

---

# 25. Styling Architecture

```text
src/styles/
├── globals.css
├── tokens.css
└── animations.css
```

### `tokens.css`

Defines the design system.

Conceptual token groups:

```text
Colors
Typography
Spacing
Radius
Shadows
Surfaces
Borders
Motion
```

The design should support both light and dark themes.

---

# 26. Visual Design System

The visual direction is:

> **Linear / Vercel-inspired futuristic minimalism**

The design must avoid:

- generic student portfolio aesthetics
- muddy all-black interfaces
- excessive gradients
- neon rainbow colors
- unreadably small typography
- excessive glassmorphism
- unnecessary 3D effects
- visual clutter

---

## Typography

Preferred typography:

- Inter
- Geist
- Plus Jakarta Sans

Priorities:

- large headings
- strong hierarchy
- generous line-height
- readable body text
- accessible contrast

Typography must remain comfortable on both desktop and mobile.

---

# 27. Color Philosophy

Dark mode should not mean:

```text
#000000 everywhere
```

Instead, use a layered surface system:

```text
Background
    ↓
Primary Surface
    ↓
Elevated Surface
    ↓
Card Surface
    ↓
Interactive Surface
```

Light mode should receive equal design attention rather than being treated as an inverse of dark mode.

---

# 28. Navigation Architecture

The navbar is a floating pill-style interface.

It should contain:

```text
Identity
Navigation
Career Status
Resume
Theme
```

Navigation uses smooth section scrolling.

The navbar should remain usable on mobile through an appropriate compact navigation pattern.

---

# 29. Responsive Architecture

## Mobile

```text
Single column
Compact navigation
Stacked cards
Simplified timeline
Touch-friendly controls
```

## Tablet

```text
Two-column layouts where appropriate
Expanded navigation
Balanced timeline
```

## Desktop

```text
12-column layout
Large typography
Asymmetric compositions
Expanded timeline
Large project previews
```

## Ultra-wide

Content width must remain controlled.

The application should not stretch text and cards indefinitely across the viewport.

---

# 30. Accessibility Architecture

The following are mandatory:

- semantic HTML
- keyboard-accessible interactive elements
- visible focus indicators
- logical tab order
- accessible labels
- accessible form errors
- sufficient contrast
- reduced-motion support
- meaningful heading hierarchy
- appropriate landmarks
- screen-reader-friendly state changes

Buttons should be actual buttons.

Links should be actual links.

Navigation should use semantic navigation elements.

---

# 31. SEO Architecture

The application should include:

- descriptive page title
- meta description
- canonical URL
- OpenGraph metadata
- social sharing image
- Twitter/X metadata
- favicon
- theme color
- semantic HTML

Future structured data may include:

```text
Person
Website
Article
CreativeWork
```

where appropriate.

---

# 32. Performance Principles

Performance is treated as a product feature.

Priorities:

- avoid unnecessary JavaScript
- lazy-load expensive content where appropriate
- optimize images
- avoid excessive animation
- minimize layout shifts
- keep DOM complexity reasonable
- avoid unnecessary re-renders
- use responsive image strategies
- preserve fast initial rendering

Decorative effects must never compromise usability.

---

# 33. State Management

The application should avoid introducing a global state library unless real requirements emerge.

Local component state should handle local interactions.

Examples:

```text
Project filter
Modal open/close
Timeline mode
Contact form state
```

Theme state is handled through `next-themes`.

If future requirements introduce genuinely shared application state, the architecture can be extended deliberately.

---

# 34. Routing Strategy

The initial application is a single-page experience.

Primary navigation uses section IDs:

```text
#about
#career
#projects
#expertise
#opensource
#writing
#beyond-code
#contact
```

The architecture should remain compatible with future route-based experiences.

---

# 35. Content Evolution Strategy

The application must support long-term growth.

For example:

```text
2026
Career Entry
   ↓
2028
First Engineering Role
   ↓
2032
Senior Role
   ↓
2037
Staff Role
   ↓
2045
Principal Role
   ↓
2055
Architecture / Leadership
   ↓
...
```

No timeline component rewrite should be necessary merely because another decade of career data is added.

---

# 36. Git Development Philosophy

The repository should document genuine development progress.

Avoid artificially creating commits simply to increase commit count.

Commits should represent meaningful milestones.

Example progression:

```text
chore: initialize portfolio architecture

feat: establish design system foundations

feat: create portfolio entry experience

feat: build application shell and navigation

feat: introduce interactive hero experience

feat: add personal story section

feat: build data-driven career timeline

feat: add career deep-dive experience

feat: build engineering work showcase

feat: introduce technical expertise matrix

feat: add open-source builder log

feat: build writing and research archive

feat: add beyond-code section

feat: build contact experience

feat: implement theme system

feat: add motion and interaction system

a11y: harden keyboard and reduced-motion support

perf: optimize assets and rendering

seo: implement metadata and structured content

polish: refine responsive layouts

test: validate production experience

chore: prepare portfolio for production
```

The exact number and wording of commits may change according to the actual work performed.

---

# 37. Development Milestones

The project will be developed incrementally.

## Milestone 0 — Architecture

Deliverables:

- `Architecture.md`
- project decisions
- technology decisions

Status:

**Complete**

---

## Milestone 1 — Foundation

Deliverables:

- Vite application
- React setup
- Tailwind CSS v4
- dependency setup
- ESLint
- base directory structure
- initial design tokens

Commit:

```text
chore: initialize portfolio architecture
```

---

## Milestone 2 — Entry Experience

Deliverables:

- welcome screen
- launch interaction
- transition into portfolio

Commit:

```text
feat: create portfolio entry experience
```

---

## Milestone 3 — Application Shell

Deliverables:

- navbar
- footer
- theme system
- scroll progress
- page structure

Commit:

```text
feat: build application shell and navigation
```

---

## Milestone 4 — Hero

Deliverables:

- hero
- metrics
- interactive visual
- CTA system

Commit:

```text
feat: introduce interactive hero experience
```

---

## Milestone 5 — Career

Deliverables:

- data model
- timeline
- filters
- cards
- deep dives

Commit:

```text
feat: build data-driven career timeline
```

---

## Milestone 6 — Engineering Work

Deliverables:

- project data
- filters
- project cards
- project details

Commit:

```text
feat: build engineering work showcase
```

---

## Milestone 7 — Expertise

Deliverables:

- skills data
- categorized matrix
- responsive presentation

Commit:

```text
feat: introduce technical expertise matrix
```

---

## Milestone 8 — Builder Log

Deliverables:

- open-source section
- experiments
- contributions

Commit:

```text
feat: add open-source builder log
```

---

## Milestone 9 — Writing

Deliverables:

- writing archive
- articles
- talks
- research

Commit:

```text
feat: build writing and research archive
```

---

## Milestone 10 — Contact

Deliverables:

- contact form
- validation
- copy email
- social links

Commit:

```text
feat: build contact experience
```

---

## Milestone 11 — Motion & Interaction

Deliverables:

- scroll reveals
- hover interactions
- transitions
- reduced-motion handling

Commit:

```text
feat: add motion and interaction system
```

---

## Milestone 12 — Accessibility & SEO

Deliverables:

- keyboard navigation
- accessibility review
- metadata
- OpenGraph
- structured data

Commits:

```text
a11y: harden keyboard and reduced-motion support

seo: implement metadata and structured content
```

---

## Milestone 13 — Performance & Production

Deliverables:

- asset optimization
- responsive validation
- performance improvements
- production build
- final QA

Commits:

```text
perf: optimize assets and rendering

test: validate production experience

chore: prepare portfolio for production
```

---

# 38. Architecture Boundaries

The following boundaries should remain stable.

### Data should not depend on UI components.

```text
data → components
```

not:

```text
data → specific visual implementation
```

### UI primitives should not depend on career content.

```text
Button
Card
Dialog
Tabs
```

must remain reusable.

### Sections should own their presentation.

For example:

```text
career/
```

owns career-specific presentation.

### Global behavior should remain centralized.

Theme, scrolling, clipboard, validation, and motion configuration should not be duplicated across unrelated components.

---

# 39. What This Architecture Intentionally Avoids

This project will not introduce unnecessary complexity such as:

- Redux without a real need
- backend services before required
- database infrastructure
- CMS integration at the beginning
- excessive component fragmentation
- micro-frontends
- premature state-management abstractions
- artificial design-system complexity
- unnecessary animation libraries
- multiple frontend frameworks

The architecture should remain **professional because it is well organized**, not because it contains the maximum number of technologies.

---

# 40. Definition of Done

A feature is considered complete when it:

- works on mobile and desktop
- follows the established design system
- is keyboard accessible
- respects reduced-motion preferences
- uses data-driven content where appropriate
- has no obvious console errors
- does not introduce unnecessary duplication
- maintains responsive behavior
- fits the established visual language
- does not compromise performance

---

# 41. Long-Term Architectural Goal

The ultimate goal is not simply:

> "Build a portfolio website."

The goal is:

> **Build a digital career archive capable of growing alongside an entire engineering career.**

The website should remain recognizable and maintainable even as its content evolves from a student's early projects into decades of engineering work, technical leadership, research, writing, and accumulated experience.

The architecture therefore prioritizes:

```text
Longevity
   +
Maintainability
   +
Data-driven content
   +
Accessibility
   +
Performance
   +
Visual quality
   +
Meaningful evolution
```

---

# 42. Architecture Status

**Status: LOCKED**

Changes to this architecture should only be made when a genuine technical or product requirement justifies them.

Normal UI improvements, new content, new projects, new career milestones, and visual refinements should **not** require changing the core architecture.

---

## Final Architecture Principle

> **The portfolio is the interface.  
> The data is the story.  
> The Git history is the journey.  
> The architecture is what allows all three to evolve together.**
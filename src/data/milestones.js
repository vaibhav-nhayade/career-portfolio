/**
 * Milestones on the learning journey, listed oldest first (top to bottom).
 * `kind` is a free label (Project, Learning, Achievement, Goal).
 * `upcoming: true` draws the marker as a dashed "next" dot.
 * `isPlaceholder: true` marks sample content; delete the flag once it is real.
 */
export const milestones = [
  {
    id: 'milestone-1',
    isPlaceholder: true,
    date: 'Mon YYYY',
    kind: 'Learning',
    title: 'Started hands-on machine learning',
    description: 'The point where I moved from reading about models to training and evaluating my own.',
  },
  {
    id: 'milestone-2',
    isPlaceholder: true,
    date: 'Mon YYYY',
    kind: 'Project',
    title: 'Completed my first end-to-end project',
    description: 'From raw data to a working result, including the mistakes I learned the most from.',
  },
  {
    id: 'milestone-3',
    isPlaceholder: true,
    date: 'Mon YYYY',
    kind: 'Achievement',
    title: 'A milestone you are proud of',
    description: 'An award, a published project, a competition, or any result that marked real progress.',
  },
  {
    id: 'milestone-4',
    isPlaceholder: true,
    date: 'Next',
    kind: 'Goal',
    title: 'The next thing I am working toward',
    description: 'Where you want to take your skills next.',
    upcoming: true,
  },
]
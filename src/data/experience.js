/**
 * Work, internship, and project-based experience, newest first.
 * Entries with `isPlaceholder: true` show a notice in the UI; delete the flag once
 * the entry holds your verified details. `link` / `linkLabel` are optional.
 */
export const experience = [
  {
    id: 'experience-1',
    isPlaceholder: true,
    role: 'Your Role Title',
    company: 'Organization Name',
    employmentType: 'Internship',
    location: 'City, Country',
    startDate: 'Mon YYYY',
    endDate: 'Present',
    summary:
      'One or two sentences on what this role involved, the problem you worked on, and who you worked with.',
    highlights: [
      'A concrete contribution, ideally with a measurable outcome.',
      'Another contribution, such as a model, pipeline, or process you improved.',
    ],
    technologies: ['Python', 'Pandas', 'SQL'],
    link: null,
    linkLabel: null,
  },
  {
    id: 'experience-2',
    isPlaceholder: true,
    role: 'Another Role Title',
    company: 'Another Organization',
    employmentType: 'Project / Volunteer',
    location: 'Remote',
    startDate: 'Mon YYYY',
    endDate: 'Mon YYYY',
    summary:
      'Briefly describe the work, the tools you used, and what you learned from it.',
    highlights: ['A key outcome or deliverable from this experience.'],
    technologies: ['Scikit-learn', 'Jupyter'],
    link: null,
    linkLabel: null,
  },
]
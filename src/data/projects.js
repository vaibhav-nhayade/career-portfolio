/**
 * Project showcase. Each entry is shown as a card, and clicking it opens the details dialog.
 *
 * - `placeholder: true` marks sample content (shows a "Sample" badge). Delete the flag
 *   once an entry describes your real work.
 * - `links`: set a URL to show that button; leave it null to hide it.
 * - `featured: true` pins the project to the front of its category list.
 */
export const projects = [
  {
    id: 'predictive-analytics-dashboard',
    title: 'Predictive Analytics Dashboard',
    category: 'Data Analysis',
    status: 'Completed',
    featured: true,
    placeholder: true,
    summary:
      'An interactive dashboard that turns a raw sales dataset into trends, forecasts, and KPIs that a non-technical user can explore.',
    highlights: [
      'Cleaned and modelled the source data with a reproducible pandas pipeline.',
      'Built filters and charts so stakeholders can answer their own questions.',
    ],
    tech: ['Python', 'Pandas', 'Plotly', 'Streamlit'],
    links: { github: null, demo: null, writeup: null },
  },
  {
    id: 'customer-churn-model',
    title: 'Customer Churn Prediction',
    category: 'Machine Learning',
    status: 'Completed',
    featured: true,
    placeholder: true,
    summary:
      'A classification model that flags customers likely to leave, with a short write-up on the features that drove the predictions.',
    highlights: [
      'Compared several classifiers using cross-validation and class-imbalance handling.',
      'Explained predictions with feature importance so results were actionable.',
    ],
    tech: ['Python', 'Scikit-learn', 'XGBoost', 'Matplotlib'],
    links: { github: null, demo: null, writeup: null },
  },
  {
    id: 'image-classifier-app',
    title: 'Image Classifier Web App',
    category: 'AI',
    status: 'In progress',
    placeholder: true,
    summary:
      'A small web app where users upload an image and get back the top predicted labels from a pretrained convolutional network.',
    highlights: [
      'Fine-tuned a pretrained model on a custom set of labelled images.',
    ],
    tech: ['PyTorch', 'FastAPI', 'React'],
    links: { github: null, demo: null, writeup: null },
  },
  {
    id: 'personal-portfolio',
    title: 'Portfolio Website',
    category: 'Web',
    status: 'Completed',
    placeholder: true,
    summary:
      'The site you are looking at: a responsive React portfolio with a light and dark theme, accessible navigation, and content kept in plain data files.',
    highlights: [
      'Structured content in data files so updates never require touching components.',
      'Built with accessibility in mind: keyboard navigation, focus states, and reduced-motion support.',
    ],
    tech: ['React', 'Vite', 'CSS'],
    links: { github: null, demo: null, writeup: null },
  },
]
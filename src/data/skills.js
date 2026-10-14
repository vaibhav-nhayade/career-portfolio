/**
 * Skills grouped by category. `placeholder: true` marks sample content.
 * Add `learning: true` to an item to tag it "Learning" rather than proficient.
 */
export const skillCategories = [
  {
    id: 'languages',
    title: 'Languages',
    placeholder: true,
    items: [{ name: 'Python' }, { name: 'SQL' }, { name: 'Java' }, { name: 'C++' }],
  },
  {
    id: 'data',
    title: 'Data & Analytics',
    placeholder: true,
    items: [{ name: 'Pandas' }, { name: 'NumPy' }, { name: 'Matplotlib' }, { name: 'Power BI', learning: true }],
  },
  {
    id: 'ml',
    title: 'Machine Learning & AI',
    placeholder: true,
    items: [{ name: 'Scikit-learn' }, { name: 'TensorFlow' }, { name: 'PyTorch', learning: true }, { name: 'NLP' }],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    placeholder: true,
    items: [{ name: 'Git & GitHub' }, { name: 'Jupyter' }, { name: 'Linux' }, { name: 'Docker', learning: true }],
  },
]
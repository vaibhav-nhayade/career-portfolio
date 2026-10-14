import { FiArrowUpRight, FiFileText } from 'react-icons/fi'

function ArticleCard({ article }) {
  const content = (
    <>
      <span className="writing-card__icon" aria-hidden="true">
        <FiFileText size={18} />
      </span>
      <span className="writing-card__body">
        <span className="writing-card__title">{article.title}</span>
        <span className="writing-card__meta">
          {article.platform} · {article.date}
        </span>
        <span className="writing-card__summary">{article.summary}</span>
      </span>
      {article.url && <FiArrowUpRight className="writing-card__arrow" size={18} aria-hidden="true" />}
    </>
  )

  if (!article.url) {
    return <div className="writing-card">{content}</div>
  }

  return (
    <a className="writing-card writing-card--link" href={article.url} target="_blank" rel="noreferrer noopener">
      {content}
    </a>
  )
}

export default ArticleCard
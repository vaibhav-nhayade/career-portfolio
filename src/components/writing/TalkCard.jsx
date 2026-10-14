import { FiArrowUpRight, FiMic } from 'react-icons/fi'

function TalkCard({ talk }) {
  const content = (
    <>
      <span className="writing-card__icon" aria-hidden="true">
        <FiMic size={18} />
      </span>
      <span className="writing-card__body">
        <span className="writing-card__title">{talk.title}</span>
        <span className="writing-card__meta">
          {talk.event} · {talk.date}
        </span>
      </span>
      {talk.url && <FiArrowUpRight className="writing-card__arrow" size={18} aria-hidden="true" />}
    </>
  )

  if (!talk.url) {
    return <div className="writing-card">{content}</div>
  }

  return (
    <a className="writing-card writing-card--link" href={talk.url} target="_blank" rel="noreferrer noopener">
      {content}
    </a>
  )
}

export default TalkCard
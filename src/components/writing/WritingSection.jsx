import { articles } from '../../data/articles.js'
import { talks } from '../../data/talks.js'
import SectionHeading from '../ui/SectionHeading.jsx'
import ArticleCard from './ArticleCard.jsx'
import TalkCard from './TalkCard.jsx'
import './WritingSection.css'

function WritingSection() {
  return (
    <section className="writing" id="writing" aria-labelledby="writing-title">
      <div className="container">
        <SectionHeading
          id="writing-title"
          eyebrow="Writing & Talks"
          title="Sharing what I learn"
          subtitle="Articles, notes, and presentations where I explain what I have been building and learning."
        />

        <div className="writing__grid">
          <div className="writing__column">
            <h3 className="writing__heading">Articles</h3>
            {articles.length ? (
              <ul className="writing__list">
                {articles.map((article) => (
                  <li key={article.id}>
                    <ArticleCard article={article} />
                  </li>
                ))}
              </ul>
            ) : (
              <p className="writing__empty">Articles will appear here soon.</p>
            )}
          </div>

          <div className="writing__column">
            <h3 className="writing__heading">Talks</h3>
            {talks.length ? (
              <ul className="writing__list">
                {talks.map((talk) => (
                  <li key={talk.id}>
                    <TalkCard talk={talk} />
                  </li>
                ))}
              </ul>
            ) : (
              <p className="writing__empty">Talks and workshops will appear here soon.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WritingSection
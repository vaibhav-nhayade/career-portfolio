import './PlaceholderNotice.css'

/** Shown while a section still contains sample entries. Remove it by replacing the sample data. */
function PlaceholderNotice({ source }) {
  return (
    <p className="placeholder-notice">
      Sample content: replace the entries in <code>{source}</code> with your own details.
    </p>
  )
}

export default PlaceholderNotice
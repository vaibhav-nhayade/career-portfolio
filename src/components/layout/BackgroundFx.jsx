import { usePointerSpotlight } from '../../hooks/usePointerSpotlight.js'
import './BackgroundFx.css'

function BackgroundFx() {
  usePointerSpotlight()

  return (
    <div className="site-bg" aria-hidden="true">
      <span className="site-blob site-blob--1" />
      <span className="site-blob site-blob--2" />
      <span className="site-blob site-blob--3" />
      <span className="site-spotlight" />
      <span className="site-grain" />
    </div>
  )
}

export default BackgroundFx
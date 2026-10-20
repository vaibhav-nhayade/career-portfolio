import { FaLinkedin } from 'react-icons/fa6'
import { SiCodeforces, SiGithub, SiKaggle, SiLeetcode } from 'react-icons/si'
import { socialLinks } from '../../data/socialLinks.js'
import { cx } from '../../lib/utils.js'
import './SocialLinks.css'

// Each platform gets its own brand gradient.
const PLATFORMS = [
  { key: 'github', label: 'GitHub', Icon: SiGithub, from: '#2B2F36', to: '#6E40C9' },
  { key: 'linkedin', label: 'LinkedIn', Icon: FaLinkedin, from: '#0A66C2', to: '#00B4D8' },
  { key: 'leetcode', label: 'LeetCode', Icon: SiLeetcode, from: '#FFA116', to: '#FF5E3A' },
  { key: 'codeforces', label: 'Codeforces', Icon: SiCodeforces, from: '#1F8ACB', to: '#FFCA28' },
  { key: 'kaggle', label: 'Kaggle', Icon: SiKaggle, from: '#20BEFF', to: '#0E7BB5' },
]

function SocialLink({ label, Icon, url, from, to, showLabel }) {
  const style = { '--brand-from': from, '--brand-to': to }

  if (!url) {
    const comingSoon = `${label} (coming soon)`
    return (
      <span className="social-link social-link--disabled" style={style} title={comingSoon} aria-label={comingSoon}>
        <Icon size={18} aria-hidden="true" />
        {showLabel && <span className="social-link__label">{label}</span>}
      </span>
    )
  }

  return (
    <a
      className="social-link"
      href={url}
      style={style}
      target="_blank"
      rel="noreferrer noopener"
      title={label}
      aria-label={label}
    >
      <Icon size={18} aria-hidden="true" />
      {showLabel && <span className="social-link__label">{label}</span>}
    </a>
  )
}

function SocialLinks({ className, showLabels = false }) {
  return (
    <div className={cx('social-links', className)}>
      {PLATFORMS.map(({ key, label, Icon, from, to }) => (
        <SocialLink
          key={key}
          label={label}
          Icon={Icon}
          url={socialLinks[key]}
          from={from}
          to={to}
          showLabel={showLabels}
        />
      ))}
    </div>
  )
}

export default SocialLinks
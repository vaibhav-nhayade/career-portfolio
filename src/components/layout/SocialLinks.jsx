import { SiCodechef, SiCodeforces, SiGithub, SiLeetcode } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa6'
import { socialLinks } from '../../data/socialLinks.js'
import { cx } from '../../lib/utils.js'
import './SocialLinks.css'

const PLATFORMS = [
  { key: 'github', label: 'GitHub', Icon: SiGithub },
  { key: 'linkedin', label: 'LinkedIn', Icon: FaLinkedin },
  { key: 'leetcode', label: 'LeetCode', Icon: SiLeetcode },
  { key: 'codeforces', label: 'Codeforces', Icon: SiCodeforces },
  { key: 'codechef', label: 'CodeChef', Icon: SiCodechef },
]

function SocialLink({ label, Icon, url }) {
  if (!url) {
    // Keep the icon visible but inert until a real URL is added in socialLinks.js.
    const comingSoon = `${label} (coming soon)`
    return (
      <span className="social-link social-link--disabled" title={comingSoon} aria-label={comingSoon}>
        <Icon size={16} aria-hidden="true" />
      </span>
    )
  }

  return (
    <a
      className="social-link"
      href={url}
      target="_blank"
      rel="noreferrer noopener"
      title={label}
      aria-label={label}
    >
      <Icon size={16} aria-hidden="true" />
    </a>
  )
}

function SocialLinks({ className }) {
  return (
    <div className={cx('social-links', className)}>
      {PLATFORMS.map(({ key, label, Icon }) => (
        <SocialLink key={key} label={label} Icon={Icon} url={socialLinks[key]} />
      ))}
    </div>
  )
}

export default SocialLinks
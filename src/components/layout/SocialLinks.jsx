import { SOCIALS } from '../../data/site.js';
import { A } from '../ui.jsx';
import Icon from '../Icon.jsx';

export default function SocialLinks({ className = '' }) {
  const links = SOCIALS.map((s) => (
    <A
      key={s.key}
      href={s.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={s.label}
    >
      <Icon name={s.icon} size={16} aria-hidden="true" />
    </A>
  ));
  return (
    <div className={`socials${className ? ` ${className}` : ''}`} aria-label="Social media">
      {links}
    </div>
  );
}

import { useEffect, useRef, useState } from 'react';
import { CONFIG } from '../data/site.js';
import { PH_RE, delayStyle } from '../lib/placeholders.js';
import Icon from './Icon.jsx';

export function Ph({ children }) {
  return <span className="ph">{children}</span>;
}

export function T({ text, as: As = 'span' }) {
  if (typeof text !== 'string' || !text.includes('[EDIT')) return <>{text}</>;
  const nodes = [];
  let last = 0;
  let m;
  PH_RE.lastIndex = 0;
  while ((m = PH_RE.exec(text))) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    nodes.push(
      <span className="ph" key={m.index}>
        {m[0]}
      </span>
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return <>{nodes}</>;
}

export function A({ href, children, className, onClick, ...rest }) {
  if (typeof href === 'string' && href.includes('[EDIT')) return null;
  return (
    <a href={href} className={className} onClick={onClick} {...rest}>
      {children}
    </a>
  );
}

export function Reveal({ as: As = 'div', delay, className = '', immediate = false, children, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(immediate);

  useEffect(() => {
    if (immediate) return;
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: CONFIG.REVEAL_THRESHOLD }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [immediate]);

  return (
    <As
      ref={ref}
      className={`reveal${shown ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={delayStyle(delay)}
      {...rest}
    >
      {children}
    </As>
  );
}

export function SectionHead({ eyebrow, title, text, tone = 'blue', id, className = '' }) {
  return (
    <Reveal className={`section-head${className ? ` ${className}` : ''}`}>
      {eyebrow ? (
        <span className={`eyebrow${tone === 'blue' ? ' eyebrow--blue' : ''}`}>
          <T text={eyebrow} />
        </span>
      ) : null}
      {title ? (
        <h2 id={id}>
          <T text={title} />
        </h2>
      ) : null}
      {text ? (
        <p>
          <T text={text} />
        </p>
      ) : null}
    </Reveal>
  );
}

export function CheckList({ items, className = '' }) {
  return (
    <ul className={`svc-list${className ? ` ${className}` : ''}`}>
      {items.map((item, i) => (
        <Reveal as="li" key={i} delay={i * 50}>
          <Icon name="check" size={17} strokeWidth={2.4} aria-hidden="true" />
          <span>
            <T text={item} />
          </span>
        </Reveal>
      ))}
    </ul>
  );
}

export function IconChip({ icon, tone, size = 25, className = '' }) {
  const toneClass = tone ? ` icon-chip--${tone}` : '';
  return (
    <span className={`icon-chip${toneClass}${className ? ` ${className}` : ''}`} aria-hidden="true">
      <Icon name={icon} size={size} />
    </span>
  );
}

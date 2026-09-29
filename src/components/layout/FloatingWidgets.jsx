import { useEffect, useRef, useState } from 'react';
import { CONFIG } from '../../data/site.js';
import { usePrefersReducedMotion } from '../../hooks/useMediaQuery.js';
import Icon from '../Icon.jsx';

const digits = (CONFIG.WHATSAPP_NUMBER || '').replace(/\D/g, '');
const href = digits
  ? `https://wa.me/${digits}?text=${encodeURIComponent(CONFIG.WHATSAPP_MESSAGE || '')}`
  : '';

export default function FloatingWidgets() {
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const openTimer = useRef(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setShowTop(window.pageYOffset > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleEnter = () => {
    window.clearTimeout(closeTimer.current);
    openTimer.current = window.setTimeout(() => setOpen(true), 60);
  };

  const handleLeave = () => {
    window.clearTimeout(openTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(false), 220);
  };

  return (
    <div className="floats">
      <a
        className={`wa${open ? ' is-open' : ''}${href ? '' : ' is-inactive'}`}
        id="waWidget"
        href={href || undefined}
        target="_blank"
        rel="noopener noreferrer"
        data-wa-label="Chat with us on WhatsApp"
        aria-disabled={href ? undefined : 'true'}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onFocus={handleEnter}
        onBlur={handleLeave}
      >
        <span className="wa__label" aria-hidden="true">
          <span className="wa__title">Chat with us</span>
          <span className="wa__sub">Typically replies within one working day</span>
        </span>
        <span className="wa__bubble" aria-hidden="true">
          <Icon name="whatsapp" size={27} />
        </span>
        <span className="sr-only">Chat with us on WhatsApp</span>
      </a>

      <button
        className={`to-top${showTop ? ' is-visible' : ''}`}
        id="toTop"
        type="button"
        aria-label="Back to top"
        onClick={() =>
          window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })
        }
      >
        <Icon name="arrowUp" size={19} strokeWidth={2.2} aria-hidden="true" />
      </button>
    </div>
  );
}

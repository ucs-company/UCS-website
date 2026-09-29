import { useEffect, useState } from 'react';
import { avatarFor } from '../lib/avatar.js';

/**
 * A team member's picture. Uses a real photo when one has been supplied in
 * `content.js`, otherwise draws a deterministic generated avatar so the card
 * always looks finished and nothing ever 404s.
 *
 * A photo that is configured but missing on disk falls back to the generated
 * avatar too, so a half-finished image drop never shows a broken image icon.
 *
 * Purely decorative: the member's role and name are rendered as real text
 * beneath it, so this is hidden from assistive technology.
 */
export default function MemberAvatar({ role, photo, className = '' }) {
  const [photoFailed, setPhotoFailed] = useState(false);
  const { initials, fontSize, from, to, angle, ringOffset, uid } = avatarFor(role);

  // A different member means a different photo path, so re-allow the image.
  useEffect(() => {
    setPhotoFailed(false);
  }, [photo]);

  const showPhoto = Boolean(photo) && !photoFailed;

  return (
    <span className={`member__avatar${className ? ` ${className}` : ''}`} aria-hidden="true">
      {showPhoto ? (
        <img
          className="member__photo"
          src={photo}
          alt=""
          loading="lazy"
          decoding="async"
          onError={() => setPhotoFailed(true)}
        />
      ) : (
        <svg
          className="member__avatar-art"
          viewBox="0 0 100 100"
          focusable="false"
          role="presentation"
        >
          <defs>
            <linearGradient id={`g-${uid}`} gradientTransform={`rotate(${angle} 0.5 0.5)`}>
              <stop offset="0%" stopColor={from} />
              <stop offset="100%" stopColor={to} />
            </linearGradient>
          </defs>
          <rect width="100" height="100" fill={`url(#g-${uid})`} />
          <circle
            cx="76"
            cy="24"
            r={ringOffset}
            fill="none"
            stroke="#FFFFFF"
            strokeOpacity="0.14"
            strokeWidth="2"
          />
          <circle cx="18" cy="88" r="26" fill="#FFFFFF" fillOpacity="0.07" />
          <text
            className="member__initials"
            x="50"
            y="50"
            textAnchor="middle"
            dominantBaseline="central"
            fill="#FFFFFF"
            fontSize={fontSize}
            fontWeight="800"
            letterSpacing="1"
          >
            {initials}
          </text>
        </svg>
      )}
    </span>
  );
}

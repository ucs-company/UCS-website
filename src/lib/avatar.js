/**
 * Deterministic team-avatar generation.
 *
 * Real staff photos are still unknown, so instead of shipping broken images or
 * inventing faces, each member card gets a generated SVG avatar: a brand-aligned
 * gradient plus the member's role initials. Everything is derived from the role
 * string, so a given role always looks identical on every page load (no flicker,
 * no reshuffling between visits).
 *
 * To use a real photo later, set `photo` on the member in
 * `src/data/content.js`; MemberAvatar prefers it and falls back to this.
 */

const PALETTES = [
  ['#0B2A4F', '#0077B6'],
  ['#0077B6', '#0EA5E9'],
  ['#F58220', '#C2410C'],
  ['#063B6B', '#0F766E'],
  ['#1D4ED8', '#1E3A8A'],
  ['#7C3AED', '#4C1D95'],
  ['#B45309', '#7C2D12'],
];

/** Stable 32-bit string hash (FNV-1a). Same input always yields the same output. */
function hash(str) {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i += 1) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h >>> 0;
}

/**
 * Initials for a job title.
 *   "UI/UX Designer"          -> "UI/UX"   (leading acronym wins)
 *   "Project Manager"         -> "PM"      (two words)
 *   "Mobile App Developer"    -> "MD"      (three or more: first + last)
 *   "Appointment Coordinator" -> "AC"
 */
export function initialsFor(role) {
  const raw = String(role || '').trim();
  if (!raw) return 'UCS';

  // A leading acronym such as "UI/UX" or "QA" reads better on its own.
  const first = raw.split(/\s+/)[0];
  if (/^[A-Za-z]{1,3}[/&-][A-Za-z0-9/&-]{1,4}$/.test(first)) {
    return first.toUpperCase();
  }

  const words = raw.split(/[\s/&,-]+/).filter((w) => /[A-Za-z]/.test(w));
  if (words.length === 0) return 'UCS';
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  if (words.length === 2) return (words[0][0] + words[1][0]).toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

/**
 * Font size for the initials, in a 100x100 viewBox. Longer strings are scaled
 * down so a five-character acronym such as "UI/UX" still has breathing room
 * inside the 78px circle instead of running edge to edge.
 */
export function fontSizeFor(initials) {
  const len = String(initials || '').length;
  if (len <= 2) return 36;
  if (len === 3) return 31;
  if (len === 4) return 28;
  return 24;
}

/** Pick the gradient pair, initials and angle for a role. Deterministic. */
export function avatarFor(role) {
  const seed = hash(String(role || 'ucs'));
  const [from, to] = PALETTES[seed % PALETTES.length];
  const initials = initialsFor(role);
  return {
    initials,
    fontSize: fontSizeFor(initials),
    from,
    to,
    angle: 115 + (seed % 7) * 20, // 115deg..235deg
    ringOffset: 34 + (seed % 5) * 9, // decorative arc radius
    uid: `av${seed.toString(36)}`,
  };
}

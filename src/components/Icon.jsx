const P = (d) => ({ t: 'path', d });
const C = (cx, cy, r) => ({ t: 'circle', cx, cy, r });
const R = (x, y, width, height, rx) => ({ t: 'rect', x, y, width, height, rx });

const PHONE =
  'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z';
const MAIL = [R(2, 4, 20, 16, 2), P('m22 7-10 6L2 7')];
const CHECK = [P('M20 6 9 17l-5-5')];
const ARROW_RIGHT = [P('M5 12h14M13 6l6 6-6 6')];
const ARROW_UP = [P('M12 19V5M5 12l7-7 7 7')];
const CHEV_DOWN = [P('m6 9 6 6 6-6')];
const CHEV_LEFT = [P('m15 18-6-6 6-6')];
const CHEV_RIGHT = [P('m9 18 6-6-6-6')];
const CLOSE = [P('M18 6 6 18M6 6l12 12')];
const CLOCK = [C(12, 12, 10), P('M12 6v6l4 2')];
const PIN = [P('M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z'), C(12, 10, 3)];
const TREND = [P('M3 3v18h18'), P('m19 9-5 5-3-3-4 4')];
const SHIELD_CHECK = [P('M12 2 4 6v6c0 5 3.4 9.4 8 10 4.6-.6 8-5 8-10V6z'), P('m9 12 2 2 4-4')];

const ICONS = {
  check: { s: CHECK },
  arrowRight: { s: ARROW_RIGHT },
  arrowUp: { s: ARROW_UP },
  chevronDown: { s: CHEV_DOWN },
  chevronLeft: { s: CHEV_LEFT },
  chevronRight: { s: CHEV_RIGHT },
  close: { s: CLOSE },
  phone: { s: [P(PHONE)] },
  mail: { s: MAIL },
  clock: { s: CLOCK },
  clockSmall: { s: [C(12, 12, 10), P('M12 8v4l2 2')] },
  pin: { s: PIN },
  code: { s: [P('m8 6-6 6 6 6'), P('m16 6 6 6-6 6')] },
  monitor: { s: [R(2, 3, 20, 14, 2), P('M8 21h8M12 17v4')] },
  smartphone: { s: [R(5, 2, 14, 20, 2.5), P('M11 18h2')] },
  cart: { s: [C(9, 20, 1.5), C(18, 20, 1.5), P('M2 3h3l2.6 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L21 7H6')] },
  building: { s: [P('M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6')] },
  api: { s: [P('M4 7h16M4 12h16M4 17h10'), C(19, 17, 3)] },
  card: { s: [R(2, 5, 20, 14, 2), P('M2 10h20M6 15h4')] },
  shield: { s: [P('M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'), P('m9 12 2 2 4-4')] },
  shieldCheck: { s: SHIELD_CHECK },
  megaphone: { s: [P('M3 11l18-5v12L3 14z'), P('M11.6 16.4 13 21H8l-1.6-6')] },
  medal: { s: [C(12, 8, 5), P('M8.2 12.5 7 22l5-3 5 3-1.2-9.5')] },
  rupee: { s: [P('M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6')] },
  userPlus: { s: [P('M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'), C(9, 7, 4), P('M19 8v6M22 11h-6')] },
  target: { s: [C(12, 12, 10), C(12, 12, 6), C(12, 12, 2)] },
  plusCircle: { s: [P('M9 12h6M12 9v6'), C(12, 12, 10)] },
  columns: { s: [P('M4 4h16v6H4zM4 14h10v6H4z')] },
  refresh: { s: [P('M3 12a9 9 0 1 0 9-9'), P('M3 4v5h5')] },
  calendar: { s: [P('M8 2v4M16 2v4M3 10h18'), R(3, 4, 18, 18, 2)] },
  file: { s: [P('M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'), P('M14 2v6h6M9 15h6')] },
  gift: { s: [P('M4 7V4h16v3M9 20h6M12 4v16')] },
  send: { s: [P('M22 2 11 13M22 2l-7 20-4-9-9-4z')] },
  alert: { s: [C(12, 12, 10), P('M12 8v4M12 16h.01')] },
  info: { s: [C(12, 12, 10), P('M12 16v-4M12 8h.01')] },
  star: { s: [P('m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8 5.8 21.1 7 14.2 2 9.3l6.9-1z')], fill: true },
  linkedin: { s: [P('M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z'), C(4, 4, 2)], fill: true },
  facebook: { s: [P('M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z')], fill: true },
  instagram: { s: [R(2, 2, 20, 20, 5), C(12, 12, 4), C(17.5, 6.5, 1)], lastFilled: true },
  google: { s: [P('M12 2a10 10 0 0 0-3.6 19.3c.5-3 .9-6.1.9-6.1s-.2-.5-.2-1.2c0-1.1.6-2 1.4-2 .7 0 1 .5 1 1.1 0 .7-.4 1.7-.6 2.6-.2.8.4 1.4 1.2 1.4 1.4 0 2.4-1.8 2.4-4 0-1.7-1.1-2.9-2.9-2.9-2.1 0-3.4 1.6-3.4 3.3 0 .6.2 1.1.5 1.4a.3.3 0 0 1 .1.3l-.2.7c0 .2-.2.3-.4.2-1-.4-1.5-1.4-1.5-2.6 0-1.9 1.6-4.2 4.8-4.2 2.6 0 4.3 1.9 4.3 3.9 0 2.7-1.5 4.7-3.7 4.7-.7 0-1.4-.4-1.6-.9l-.5 1.8c-.2.7-.7 1.6-1 2.2A10 10 0 1 0 12 2z')], fill: true },
  whatsapp: {
    s: [
      P('M17.5 14.4c-.3-.2-1.7-.9-2-1s-.5-.1-.7.2-.7 1-.9 1.2-.3.2-.6.1a8.1 8.1 0 0 1-2.4-1.5 9 9 0 0 1-1.6-2c-.2-.3 0-.5.1-.6l.5-.6a2 2 0 0 0 .3-.5 1.6 1.6 0 0 0 0-.6c0-.2-.7-1.7-.9-2.3s-.5-.6-.7-.6h-.6a1.2 1.2 0 0 0-.9.4 3.5 3.5 0 0 0-1.1 2.6 6.1 6.1 0 0 0 1.3 3.2 13.9 13.9 0 0 0 5.4 4.7 17 17 0 0 0 1.7.6 4 4 0 0 0 1.8.1 3 3 0 0 0 1.9-1.3 2.4 2.4 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.3z'),
      P('M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3a8.2 8.2 0 1 1 7 3.9z'),
    ],
    fill: true,
  },
};

export default function Icon({ name, size = 24, className, strokeWidth = 2, style, ...rest }) {
  const def = ICONS[name];
  if (!def) return null;
  const shapes = def.s.map((sh, i) => {
    const attrs = {};
    if (sh.t === 'circle') {
      attrs.cx = sh.cx;
      attrs.cy = sh.cy;
      attrs.r = sh.r;
    } else if (sh.t === 'rect') {
      attrs.x = sh.x;
      attrs.y = sh.y;
      attrs.width = sh.width;
      attrs.height = sh.height;
      attrs.rx = sh.rx;
    } else {
      attrs.d = sh.d;
    }
    const solid = def.fill || (def.lastFilled && i === def.s.length - 1);
    return <path key={i} {...attrs} fill={solid ? 'currentColor' : 'none'} />;
  });

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
      {...rest}
    >
      {shapes}
    </svg>
  );
}

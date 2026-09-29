# UCS Website — Launch Guide

**Ultimate Consultancy Services** — software development & lead generation landing page.
React 19 + Vite 7. No CDN; every asset is bundled or served locally.

---

## 1. Company details

These are the confirmed business details. They live in **one place**,
`src/data/site.js`, and flow automatically to the footer, the contact section,
the mobile drawer, the structured data and every `mailto:`/`tel:` link.

| Field | Value |
|---|---|
| Company | Ultimate Consultancy Services (UCS) |
| Phone | +91 99206 11078 |
| WhatsApp | +91 99206 11078 |
| Email | consaltancyservicesultimate@gmail.com |
| Address | Office No. 506, Sanjar Enclave, Near Khajuria Tank Road, S.V. Road, Kandivali West, Mumbai, Maharashtra 400067, India |

The postal address is stored once, in structured form:

```js
// src/data/site.js
export const ADDRESS = {
  office: 'Office No. 506, Sanjar Enclave',
  landmark: 'Near Khajuria Tank Road, S.V. Road',
  locality: 'Kandivali West, Mumbai',
  state: 'Maharashtra',
  pin: '400067',
  country: 'India',
  lines: [
    'Office No. 506, Sanjar Enclave',
    'Near Khajuria Tank Road, S.V. Road',
    'Kandivali West, Mumbai',
    'Maharashtra 400067, India',
  ],
  // derived, used by JSON-LD and the contact section
  street: 'Office No. 506, Sanjar Enclave, Near Khajuria Tank Road, S.V. Road',
  city: 'Kandivali West, Mumbai',
  region: 'Maharashtra',
  postalCode: '400067',
  countryCode: 'IN',
};
```

**To change the address, edit `ADDRESS` only.** Do not hand-edit the footer, the
contact aside or the JSON-LD — they all read from this object, so the address
cannot drift out of sync between them.

Note: the blue contact strip that used to sit above the header has been
removed at your request. The phone, email and address are still reachable from
the footer, the contact section and the mobile navigation drawer.

---

## 2. Run it locally

```bash
npm install     # first time only
npm run dev     # http://localhost:5173
```

| Script | What it does |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the built `dist/` locally to check the real thing |

Always test with `npm run dev` or `npm run preview`, **not** by opening
`index.html` from disk. The old no-build workflow no longer applies: `index.html`
is now a Vite entry point that loads `/src/main.jsx`, which a browser cannot
execute on its own.

---

## 3. Project layout

```
index.html                     Vite entry point + meta tags
vite.config.js                 React plugin, base: './', build settings
src/
  main.jsx                     mounts React
  App.jsx                      page composition, section order
  data/
    site.js                    ADDRESS, CONTACT, CONFIG, navigation, socials
    content.js                 all page copy (services, team, pricing, FAQ, ...)
    recordings.json            11 languages x 3 recordings
  components/
    layout/                    Header, Nav, Footer, FloatingWidgets, SocialLinks
    sections/                  Core, Telecalling, Content, FaqContact
    Icon.jsx                   inline SVG icon set
    StructuredData.jsx         JSON-LD
    ui.jsx                     placeholders, smart links, reveal, section heads
  hooks/                       scroll, drawer, slider, tabs, form, media queries
  lib/placeholders.js          [EDIT] detection helpers
  styles/main.css              all styling
public/                        copied verbatim into dist/
  assets/img/UCS (1).png       the logo
  assets/audio/<language>/     optional sample recordings
  fonts/                       optional woff2 files
tools/extract-recordings.mjs   one-off script used to build recordings.json
```

---

## 4. Required before you go live

### 4.1 Find every placeholder

Unresolved facts are left as `[EDIT]` markers rather than invented. They render
with a subtle highlighted style so they are easy to spot, and a placeholder
**link** is hidden from the page entirely rather than rendering a dead link.

```bash
# 48 visible placeholders at the time of writing
grep -r "\[EDIT" src
```

They cover: business hours, social URLs, legal URLs, canonical URL and
`og:image`, map coordinates, team names/photos, portfolio case studies, pricing
figures, and testimonial quotes with attributions.

### 4.2 Make the contact form actually send

In **`src/data/site.js`**:

```js
export const CONFIG = {
  FORM_ENDPOINT: '',           // e.g. 'https://formspree.io/f/xxxxxxxx'
  FORM_ENDPOINT_IS_JSON: false, // Formspree accepts JSON; EmailJS needs FormData
  WHATSAPP_NUMBER: '919920611078',
  WHATSAPP_MESSAGE: 'Hi UCS, I would like to know more about your services.',
};
```

While `FORM_ENDPOINT` is empty the form runs in **demo mode**: it validates
everything, then shows a "nothing was sent" confirmation. Nothing is
transmitted. This is deliberate, so the page is safe to share before you have an
endpoint. Set it and confirm you receive a real submission before launch.

### 4.3 Add the missing assets

| Missing | Why it matters | Fix |
|---|---|---|
| `public/img/og-image.jpg` | Link previews on WhatsApp/LinkedIn show no image. | Add a 1200x630 JPG, then make `og:image` an **absolute** URL in `index.html` once the domain is known. |
| `public/fonts/*.woff2` | 5 brand faces are not in the repo. | Either add them (Inter 400/500/600, Poppins 700/800) and uncomment the `@font-face` block in `src/styles/main.css`, or leave it as is. |

The `@font-face` rules are **deliberately commented out** right now. An
`@font-face` pointing at a file that does not exist makes the browser fetch it,
fail to decode it and log an error on every single page load, which is worse
than simply using the fallback font stack. The design already degrades cleanly,
so nothing breaks visually either way.

Expected filenames if you add them:
`inter-400.woff2`, `inter-500.woff2`, `inter-600.woff2`, `poppins-700.woff2`,
`poppins-800.woff2`.

### 4.4 Team photos (optional)

The **Our team** cards do not use fake stock faces. Each of the 7 members gets a
**generated SVG avatar** — a brand-aligned gradient plus their role initials —
derived from the role title, so a given role always looks identical on every
page load. Zero image requests, nothing to 404, nothing to license.

Current initials: PM, LD, UI/UX, MD (development) and TL, LS, AC (telecalling).

When you have real photos, drop them in and point the member at the file. **No
code change beyond setting one field:**

```
public/assets/team/project-manager.jpg
public/assets/team/lead-developer.jpg
public/assets/team/ui-ux-designer.jpg
public/assets/team/mobile-app-developer.jpg
public/assets/team/telecalling-team-lead.jpg
public/assets/team/lead-generation-specialist.jpg
public/assets/team/appointment-coordinator.jpg
```

```js
// src/data/content.js
{ role: 'Project Manager', photo: 'assets/team/project-manager.jpg', skills: [...] }
```

Square images work best (the photo is cropped to a circle with `object-fit:
cover`). A file that is missing or fails to decode automatically falls back to
the generated avatar, so a half-finished image drop never shows a broken image.

Member **names** are still `[EDIT]` placeholders, because inventing the names of
people who do not exist on a real business site is not something to do quietly.
Fill in `member__name` in `content.js` when you have them.

### 4.5 Sample recordings (optional)

`src/data/recordings.json` describes 11 languages x 3 recordings. The page
probes each file at runtime and, **if it is missing, keeps showing "Recording
coming soon" and never renders a broken audio player.** So the page is complete
without any audio.

To add audio, drop the files into `public/assets/audio/<language>/` using these
names:

```
public/assets/audio/english/recording-1.mp3
public/assets/audio/hindi/recording-1.mp3
public/assets/audio/marathi/recording-1.mp3
public/assets/audio/bengali/recording-1.mp3
public/assets/audio/malayalam/recording-1.mp3
public/assets/audio/punjabi/recording-1.mp3
public/assets/audio/telugu/recording-1.mp3
public/assets/audio/gujarati/recording-1.mp3
public/assets/audio/kannada/recording-1.mp3
public/assets/audio/odia/recording-1.mp3
public/assets/audio/tamil/recording-1.mp3
```

Keep them small (speech at ~64-96 kbps is plenty) and confirm you have the
caller's permission to publish their voice.

---

## 5. Before launch checklist

- [ ] Every `[EDIT]` marker replaced
- [ ] `FORM_ENDPOINT` set, and a real submission received end to end
- [ ] `og-image.jpg` added and `og:image` made absolute
- [ ] Canonical URL set in `index.html` and in `StructuredData.jsx`
- [ ] Fonts added, or the commented `@font-face` block left as is
- [ ] Privacy policy and terms pages exist at the linked URLs
- [ ] Team, portfolio, pricing and testimonial claims signed off as true
- [ ] Address confirmed correct in the footer, contact section and JSON-LD
- [ ] Checked on a real phone (iOS Safari and Android Chrome)

---

## 6. Publishing

```bash
npm run build
```

Upload the **contents of `dist/`** — not the project root. `dist/` is
self-contained and fully static.

`base: './'` is set in `vite.config.js`, so the build also works when hosted
from a subfolder (e.g. `example.com/ucs/`) without any further changes.

Works on any static host: Netlify, Vercel, Gitflare Pages, GitHub Pages,
cPanel/FTP or ordinary shared hosting. There is no server-side code, and the
only outbound request the page can make is the contact form POST to the endpoint
you configure.

---

## 7. Accessibility and behaviour notes

- One `<h1>`, logical heading order, skip link, visible focus rings.
- Sticky header; the services dropdown and mobile drawer close on `Escape`, and
  the drawer traps focus.
- The recording tablist uses a roving `tabindex`, supports arrow keys, and
  scrolls horizontally on narrow screens.
- The FAQ is keyboard operable and animates via a class, so collapsed answers
  are correctly hidden from screen readers.
- The testimonial slider is keyboard operable and draggable.
- `prefers-reduced-motion` disables reveal animations and smooth scrolling.
- Every form control has a `<label>`; errors are announced via `aria-live`.
- A honeypot field blocks naive spam bots, and is visually hidden without
  `display: none` so bots do not skip it.

---

## 8. Things worth knowing

- The brand name appears in the page title, meta tags, JSON-LD
  `ProfessionalService` schema, header, footer and body copy. If you rename the
  company, search for `Ultimate Consultancy Services` and update all of them.
- Address, phone, email, navigation and social links are all defined in
  `src/data/site.js`. Edit there, not in the components.
- Pricing, team and testimonial content is placeholder copy, held in
  `src/data/content.js`.
- The logo is a transparent PNG whose artwork has ~15% padding on every side;
  `main.css` scales it with `--scale-logo` to fill the plate. Change that one
  variable to resize it everywhere.

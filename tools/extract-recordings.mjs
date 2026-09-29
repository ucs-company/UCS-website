/* One-off migration helper: parses the legacy static index.html and emits
   src/data/recordings.json for the 11-language recordings tablist. */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const src = readFileSync(
  'C:/Users/BEINGS~1/AppData/Local/Temp/opencode/static-backup/index.html',
  'utf8'
);

const langs = [];
const tabRe = /<button class="tab"[^>]*id="tab-([a-z]+)"[^>]*>([^<]+)<\/button>/g;
let m;
while ((m = tabRe.exec(src))) langs.push({ slug: m[1], label: m[2].trim() });

// Slice each panel by its start offsets so panel order/visibility cannot break parsing.
const starts = [];
const startRe = /<div class="tabpanel" role="tabpanel" id="panel-([a-z]+)"/g;
while ((m = startRe.exec(src))) starts.push({ slug: m[1], at: m.index });

const cardRe =
  /<span class="rec-card__label">([^<]+)<\/span>\s*<span class="rec-card__lang">([^<]+)<\/span>\s*<audio class="rec-card__audio" data-src="([^"]+)"/g;

const bySlug = {};
for (let i = 0; i < starts.length; i++) {
  const end = i + 1 < starts.length ? starts[i + 1].at : src.indexOf('\n    </div>\n', starts[i].at);
  const body = src.slice(starts[i].at, end);
  const cards = [];
  let c;
  cardRe.lastIndex = 0;
  while ((c = cardRe.exec(body))) {
    cards.push({
      label: c[1].trim(),
      lang: c[2].trim().replace(/&middot;/g, '\u00b7').replace(/&amp;/g, '&'),
      src: c[3],
    });
  }
  bySlug[starts[i].slug] = cards;
}

const out = langs.map((l) => ({ ...l, cards: bySlug[l.slug] || [] }));
mkdirSync('src/data', { recursive: true });
writeFileSync('src/data/recordings.json', JSON.stringify(out, null, 2) + '\n', 'utf8');

const total = out.reduce((n, l) => n + l.cards.length, 0);
console.log(`languages: ${out.length}, cards: ${total}`);
for (const l of out) console.log(`  ${l.slug.padEnd(10)} ${l.cards.length} card(s)`);
const missing = out.filter((l) => l.cards.length !== 3);
console.log(missing.length ? `UNEXPECTED: ${missing.map((l) => l.slug).join(', ')}` : 'all languages have 3 cards');

export const PH_RE = /\[EDIT[^\]]*\]/g;
const PH_TEST = /\[EDIT[^\]]*\]/;

export function isPlaceholderHref(href) {
  return typeof href === 'string' && href.includes('[EDIT');
}

export function hasPlaceholder(text) {
  return typeof text === 'string' && PH_TEST.test(text);
}

export function delayStyle(delay) {
  return delay ? { '--d': `${delay}ms` } : undefined;
}

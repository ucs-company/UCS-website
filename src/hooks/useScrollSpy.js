import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from './useMediaQuery.js';

const SERVICES_IDS = ['services', 'development', 'technologies', 'process', 'telecalling'];

export function useScrollSpy(ids) {
  const [active, setActive] = useState('');
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const header = document.getElementById('siteHeader');
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
      .map((el) => ({ id: el.id, top: el.offsetTop }))
      .sort((a, b) => a.top - b.top);

    if (!targets.length) return;

    const headerHeight = header ? header.offsetHeight : 68;
    let ticking = false;

    const update = () => {
      ticking = false;
      const line = window.pageYOffset + headerHeight + 90;
      let current = null;

      for (const t of targets) {
        if (t.top <= line) current = t.id;
      }

      const atBottom =
        window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
      if (atBottom) current = targets[targets.length - 1].id;

      setActive(current || targets[0].id);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    const onResize = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [ids.join('|')]);

  const servicesActive = SERVICES_IDS.includes(active);
  return { active, servicesActive, reduced };
}

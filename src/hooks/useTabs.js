import { useCallback, useEffect, useRef, useState } from 'react';

export function useTabs(length) {
  const [index, setIndex] = useState(0);
  const tabsRef = useRef([]);

  const select = useCallback(
    (next, focus = true) => {
      const clamped = (next + length) % length;
      setIndex(clamped);
      if (focus) {
        const btn = tabsRef.current[clamped];
        if (btn) btn.focus();
      }
    },
    [length]
  );

  const onKeyDown = (e) => {
    const map = {
      ArrowRight: 1,
      ArrowDown: 1,
      ArrowLeft: -1,
      ArrowUp: -1,
      Home: 'first',
      End: 'last',
    };
    const action = map[e.key];
    if (action === undefined) return;
    e.preventDefault();
    if (action === 'first') select(0);
    else if (action === 'last') select(length - 1);
    else select(index + action);
  };

  const registerTab = (i) => (el) => {
    tabsRef.current[i] = el;
  };

  return { index, setIndex, select, onKeyDown, registerTab };
}

export function useAudioAvailability(src) {
  const [state, setState] = useState('probing');

  useEffect(() => {
    if (!src) {
      setState('missing');
      return;
    }
    let cancelled = false;
    setState('probing');
    const audio = new Audio();
    const settle = (ok) => {
      if (!cancelled) setState(ok ? 'ready' : 'missing');
    };
    const done = () => settle(true);
    const bad = () => settle(false);
    audio.addEventListener('canplaythrough', done, { once: true });
    audio.addEventListener('loadeddata', done, { once: true });
    audio.addEventListener('error', bad, { once: true });
    audio.preload = 'metadata';
    audio.src = src;
    const timer = window.setTimeout(() => settle(false), 4000);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      audio.removeEventListener('canplaythrough', done);
      audio.removeEventListener('loadeddata', done);
      audio.removeEventListener('error', bad);
      audio.src = '';
    };
  }, [src]);

  return state;
}

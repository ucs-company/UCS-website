import { useCallback, useEffect, useRef, useState } from 'react';

export function useSlider(count) {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(1);
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState(0);
  const viewportRef = useRef(null);
  const drag = useRef({ active: false, startX: 0, startY: 0, delta: 0, locked: false });

  const computePerView = useCallback(() => {
    const w = window.innerWidth;
    if (w >= 1024) return 3;
    if (w >= 768) return 2;
    return 1;
  }, []);

  const maxIndex = Math.max(0, count - perView);

  useEffect(() => {
    const relayout = () => {
      const next = computePerView();
      setPerView(next);
      setIndex((i) => Math.min(i, Math.max(0, count - next)));
    };
    relayout();
    window.addEventListener('resize', relayout);
    return () => window.removeEventListener('resize', relayout);
  }, [computePerView, count]);

  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp) return;
    const step = vp.clientWidth / perView;
    const max = Math.max(0, count - perView);
    setOffset(Math.min(index, max) * step);
  }, [index, perView, count]);

  const go = useCallback(
    (next) => setIndex((i) => Math.max(0, Math.min(next, maxIndex))),
    [maxIndex]
  );

  const onPointerDown = (e) => {
    if (e.button !== undefined && e.button !== 0) return;
    drag.current = { active: true, startX: e.clientX, startY: e.clientY, delta: 0, locked: false };
  };

  const onPointerMove = (e) => {
    const d = drag.current;
    if (!d.active) return;
    const dx = e.clientX - d.startX;
    const dy = e.clientY - d.startY;
    if (!d.locked) {
      if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
      d.locked = true;
      setDragging(true);
    }
    const vp = viewportRef.current;
    const step = vp ? vp.clientWidth / perView : 1;
    const atStart = index === 0 && dx > 0;
    const atEnd = index === maxIndex && dx < 0;
    const resist = atStart || atEnd ? 0.35 : 1;
    d.delta = dx * resist;
    setOffset(Math.max(0, index * step + d.delta));
  };

  const endDrag = () => {
    const d = drag.current;
    if (!d.active) return;
    const wasLocked = d.locked;
    const delta = d.delta;
    drag.current = { active: false, startX: 0, startY: 0, delta: 0, locked: false };
    if (!wasLocked) return;
    setDragging(false);
    const vp = viewportRef.current;
    const step = vp ? vp.clientWidth / perView : 1;
    const threshold = Math.max(45, step * 0.18);
    if (delta <= -threshold) go(index + 1);
    else if (delta >= threshold) go(index - 1);
  };

  return {
    index,
    perView,
    maxIndex,
    offset,
    dragging,
    go,
    viewportRef,
    handlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp: endDrag,
      onPointerCancel: endDrag,
      onPointerLeave: endDrag,
    },
  };
}

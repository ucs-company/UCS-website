import { useCallback, useState } from 'react';

/**
 * FAQ accordion state. The open/closed animation is driven entirely by the
 * `.is-open` class in CSS, so this hook only tracks which items are open.
 */
export function useFaq() {
  const [open, setOpen] = useState({});

  const toggle = useCallback((id) => {
    setOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  return { open, toggle };
}

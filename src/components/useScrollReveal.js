import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('vis'); }),
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );
    el.querySelectorAll('.rv').forEach((child) => obs.observe(child));
    return () => obs.disconnect();
  }, []);
  return ref;
}

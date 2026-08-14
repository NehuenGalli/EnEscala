import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook to detect when an element scrolls into viewport
 * using IntersectionObserver.
 */
export function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (options.once ?? true) {
          observer.unobserve(el);
        }
      } else if (!(options.once ?? true)) {
        setIsInView(false);
      }
    }, {
      threshold: options.threshold ?? 0.05,
      rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
    });

    observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [options.threshold, options.rootMargin, options.once]);

  return [ref, isInView];
}

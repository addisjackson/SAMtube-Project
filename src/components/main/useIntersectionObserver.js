import { useEffect, useRef, useState } from "react";

export default function useIntersectionObserver(options = {}) {
  const targetRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        root: options.root || null,
        rootMargin: options.rootMargin || "0px",
        threshold: options.threshold ?? 0.5,
      }
    );

    const node = targetRef.current;
    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [options.root, options.rootMargin, options.threshold]);

  return { targetRef, isIntersecting };
}

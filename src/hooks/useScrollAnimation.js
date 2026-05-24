import { useEffect, useRef, useState } from "react";

/**
 * Custom hook for scroll-triggered animations
 * using Intersection Observer.
 */

function useScrollAnimation(threshold = 0.2) {
  const elementRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
      },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold]);

  return [elementRef, isVisible];
}

export default useScrollAnimation;

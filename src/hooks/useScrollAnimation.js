import { useEffect, useRef, useState } from "react";

function useScrollAnimation(threshold = 0.2) {
  const elementRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
      },
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold]);

  return [elementRef, isVisible];
}

export default useScrollAnimation;

import { useEffect, useState } from "react";

export const useCurrentView = () => {
  const [inView, setInView] = useState(false);
  const [ref, setRef] = useState(null);

  const handleIntersection = (entries) => {
    setInView(entries[0].isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    });
    if (ref) {
      observer.observe(ref);
    }
    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref]);

  return [setRef, inView];
};

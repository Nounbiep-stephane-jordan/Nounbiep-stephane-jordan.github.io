import { useState } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import React from "react";
function useInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}

export { useInViewport };

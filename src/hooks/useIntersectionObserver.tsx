
import { useState, useEffect, useRef } from 'react';
import { useDebounce } from './useDebounce';

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
}

export const useIntersectionObserver = ({
  threshold = 0.3,
  rootMargin = '0px'
}: UseIntersectionObserverProps = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  
  // Debounce the visibility state to prevent rapid state changes
  const debouncedIsVisible = useDebounce(isVisible, 50);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setIsVisible(true);
          setHasTriggered(true);
          // Disconnect after first intersection to prevent re-triggering
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, hasTriggered]);

  return { elementRef, isVisible: debouncedIsVisible };
};

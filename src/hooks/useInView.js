import { useState, useEffect, useRef } from 'react';

export default function useInView(options) {
  const [inView, setInView] = useState(false); // Tracks visibility
  const ref = useRef(null); // Reference to the DOM element

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting); // Update inView based on visibility
      },
      {
        threshold: 1, // Trigger when 10% of the element is visible
        ...options,
      }
    );

    if (ref.current) {
      observer.observe(ref.current); // Observe the element
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current); // Clean up observer
      }
    };
  }, [options]);

  return { ref, inView }; // Return ref and inView state
}

import { useState, useEffect, useRef } from 'react';

/**
 * A custom hook to detect which section is currently active in the viewport.
 * @param sectionIds - An array of section IDs to observe.
 * @param rootMargin - The margin around the root. Can be used to trigger 'isIntersecting' earlier or later.
 * @returns The ID of the active section.
 */
export function useActiveSection(
  sectionIds: string[],
  rootMargin = '0px 0px -40% 0px'
) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Disconnect previous observer if it exists
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin }
    );

    const { current: currentObserver } = observer;

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((sec): sec is HTMLElement => sec !== null);

    if (sections.length) {
      sections.forEach((sec) => currentObserver.observe(sec));
    }

    return () => {
      if (currentObserver) {
        sections.forEach((sec) => currentObserver.unobserve(sec));
      }
    };
  }, [sectionIds, rootMargin]);

  return activeSection;
}

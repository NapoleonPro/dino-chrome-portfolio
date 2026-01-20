import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    // Set initial position off-screen to avoid flash on load
    if (cursorRef.current) {
      cursorRef.current.style.transform = 'translate3d(-100px, -100px, 0) translate(-50%, -50%)';
    }

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-3 h-3 bg-black rounded-full pointer-events-none z-[9999]"
    />
  );
};

export default CustomCursor;
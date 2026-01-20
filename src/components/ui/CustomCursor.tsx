import { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

const CustomCursor = () => {
  const { theme } = useTheme();
  const mainCursorRef = useRef<HTMLDivElement>(null);
  const followerCursorRef = useRef<HTMLDivElement>(null);
  
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', onMouseMove);

    const onMouseEnter = () => setIsHovering(true);
    const onMouseLeave = () => setIsHovering(false);

    document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    let followerPos = { x: -100, y: -100 };
    const speed = 0.1; // Smoothing factor

    const animateFollower = () => {
      followerPos.x += (position.x - followerPos.x) * speed;
      followerPos.y += (position.y - followerPos.y) * speed;

      if (mainCursorRef.current) {
        mainCursorRef.current.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
      }
      if (followerCursorRef.current) {
        followerCursorRef.current.style.transform = `translate3d(${followerPos.x}px, ${followerPos.y}px, 0)`;
      }
      animationFrameId = requestAnimationFrame(animateFollower);
    };

    animateFollower();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [position]);

  const cursorColor = theme === 'dark' ? '#ffffff' : '#1a1a1a';

  return (
    <>
      <div
        ref={mainCursorRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999]"
        style={{ backgroundColor: cursorColor, transition: 'transform 0.1s ease-out' }}
      />
      <div
        ref={followerCursorRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9999] transition-transform duration-300 ease-out
                    ${isHovering ? 'w-10 h-10' : 'w-8 h-8'}`}
        style={{
          border: `1px solid ${cursorColor}`,
          transform: `translate(-50%, -50%) ${isHovering ? 'scale(1.5)' : 'scale(1)'}`,
          opacity: isHovering ? 0.3 : 0.5,
        }}
      />
    </>
  );
};

export default CustomCursor;

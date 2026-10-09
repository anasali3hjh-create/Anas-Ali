import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on devices that support hover (not touch-only)
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        setIsHovered(true);
        setHoverText(cursorTarget.getAttribute('data-cursor') || 'VIEW');
      } else {
        setIsHovered(false);
        setHoverText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-50 transition-transform duration-75 ease-out hidden md:block"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      {isHovered ? (
        <div className="-translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-[#F5A623] text-black font-display font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg border border-black/10 scale-100 transition-all duration-200">
          {hoverText}
        </div>
      ) : (
        <div className="-translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#050505] mix-blend-difference scale-100 transition-all duration-150" />
      )}
    </div>
  );
};

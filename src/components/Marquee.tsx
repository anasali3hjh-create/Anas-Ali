import React from 'react';

interface MarqueeProps {
  text: string;
  reverse?: boolean;
  dark?: boolean;
  className?: string;
  speedClass?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  text,
  reverse = false,
  dark = true,
  className = '',
}) => {
  // Repeat items to ensure seamless loop
  const repeatedItems = Array(6).fill(text);

  return (
    <div
      className={`relative w-full overflow-hidden select-none py-4 md:py-6 border-y ${
        dark
          ? 'bg-[#000000] text-[#F5F3EE] border-white/10'
          : 'bg-[#F5F3EE] text-[#050505] border-[#E8E5DE]'
      } ${className}`}
      aria-hidden="true"
    >
      <div className={reverse ? 'animate-marquee-reverse' : 'animate-marquee'}>
        {repeatedItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-6 md:gap-10 shrink-0 pr-6 md:pr-10"
          >
            <span className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase">
              {item}
            </span>
            <span className="inline-block w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#F5A623] shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};

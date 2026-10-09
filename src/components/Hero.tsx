import React from 'react';
import { ArrowDownRight, Globe } from 'lucide-react';
import { HERO_STATS } from '../data/portfolioData';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section
      id="hero"
      className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden bg-[#F5F3EE]"
    >
      {/* Background subtle crosshair grid accents */}
      <div className="absolute inset-0 crosshair-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        {/* Hero Main Grid: Typography alongside the Enlarged Lady Portrait (Visual to LinkedIn) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column (Cols 1 - 7): Oversized Typography, Introduction & Social Pills */}
          <div className="md:col-span-7 lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Small introductory greeting */}
              <p className="text-sm sm:text-base font-mono font-medium tracking-wider text-[#737373] mb-3">
                Hi
              </p>

              <h1
                id="hero-headline"
                className="font-display font-bold text-[54px] sm:text-[76px] md:text-[86px] lg:text-[108px] xl:text-[122px] leading-[0.92] tracking-[-0.035em] text-[#050505] select-none mb-6"
              >
                <span className="block">I’m</span>
                <span className="inline-flex items-center gap-2 sm:gap-3 flex-wrap">
                  <span>Anas Ali</span>
                  <span className="inline-block w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-[#F5A623] self-end mb-2 sm:mb-3" />
                </span>
              </h1>

              {/* Supporting line & Bio text */}
              <div className="max-w-xl">
                <p className="text-xl sm:text-2xl font-display font-medium text-[#050505] leading-snug tracking-tight mb-2">
                  Graphic Designer specializing in bold visual identities, social media designs, and creative digital experiences
                </p>
              </div>

              {/* Clickable View Portfolio Action */}
              <div className="pt-6">
                <button
                  onClick={onExploreClick}
                  id="hero-view-portfolio-btn"
                  data-cursor="PORTFOLIO"
                  className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#050505] text-[#F5F3EE] hover:bg-[#F5A623] hover:text-[#050505] transition-all duration-300 shadow-md hover:shadow-xl font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase cursor-pointer"
                  aria-label="View Portfolio"
                >
                  <span>VIEW PORTFOLIO</span>
                  <ArrowDownRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column (Cols 8 - 12): Hero Visual Picture (Non-clickable, clean display) */}
          <div className="md:col-span-5 lg:col-span-5 relative flex flex-col mt-8 md:mt-0">
            
            {/* Outer Decorative Crosshairs */}
            <div className="absolute -top-3.5 -left-3.5 text-xs font-mono text-[#050505]/40 select-none z-10">
              ⌖ [REF-01]
            </div>
            <div className="absolute -top-3.5 -right-3.5 text-xs font-mono text-[#050505]/40 select-none z-10">
              +
            </div>

            {/* Rounded Rectangular Visual Container (Clean visual frame with #123F32 backdrop) */}
            <div className="relative w-full h-full min-h-[460px] sm:min-h-[520px] md:min-h-full rounded-[32px] overflow-hidden bg-[#123F32] shadow-2xl border-2 border-[#050505] flex flex-col justify-between select-none">
              
              {/* Artistic Signature Overlay in Script styling */}
              <div className="absolute top-6 left-6 z-20 pointer-events-none">
                <svg className="w-32 h-14 text-white/90 drop-shadow-sm" viewBox="0 0 160 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 45C25 15 45 10 55 25C65 40 40 50 35 35C30 20 60 15 80 20C100 25 90 45 110 30C130 15 140 25 150 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="152" cy="18" r="2" fill="currentColor" />
                </svg>
              </div>

              {/* Floating Top-Right Globe Badge */}
              <div className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-black/85 text-white flex items-center justify-center backdrop-blur-sm shadow-md pointer-events-none">
                <Globe className="w-5 h-5 text-[#F5F3EE]" />
              </div>

              {/* Hero Visual Feature Picture */}
              <img
                src="https://i.ibb.co/8LkB7LbQ/Capture.png"
                alt="Editorial Portrait - Visual Direction"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />

              {/* Subtle bottom gradient tint */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
            </div>
          </div>

        </div>

        {/* Full-width Statistics Row (20+ Projects, 10+ Concepts, 2+ Years) below */}
        <div className="pt-8 mt-12 md:mt-16 border-t border-[#E8E5DE] grid grid-cols-3 gap-6 md:gap-10">
          {HERO_STATS.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <span className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter text-[#050505]">
                {stat.number}
              </span>
              <span className="text-xs sm:text-sm md:text-base font-display font-semibold text-[#050505] mt-1">
                {stat.label}
              </span>
              <span className="hidden sm:block text-[11px] md:text-xs text-[#737373] mt-0.5 leading-tight">
                {stat.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

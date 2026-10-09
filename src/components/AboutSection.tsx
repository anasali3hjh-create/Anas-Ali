import React from 'react';
import { Target, Compass, Sparkles, ArrowDownRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative bg-[#000000] text-[#F5F3EE] py-24 md:py-36 overflow-hidden select-none"
    >
      {/* Background subtle technical coordinate lines */}
      <div className="absolute inset-0 crosshair-pattern-dark opacity-40 pointer-events-none" />

      {/* Decorative Technical Crosshairs in the four corners (reminiscent of reference) */}
      <div className="absolute top-8 left-8 md:top-14 md:left-14 flex items-center gap-2 text-white/30 font-mono text-xs">
        <svg className="w-8 h-8 text-white/40" viewBox="0 0 32 32" fill="none" stroke="currentColor">
          <circle cx="16" cy="16" r="12" strokeWidth="1" />
          <circle cx="16" cy="16" r="4" strokeWidth="1" fill="currentColor" fillOpacity="0.3" />
          <line x1="16" y1="0" x2="16" y2="32" strokeWidth="1" />
          <line x1="0" y1="16" x2="32" y2="16" strokeWidth="1" />
        </svg>
        <span className="hidden sm:inline">[POS: 00.1 / LAT]</span>
      </div>

      <div className="absolute top-8 right-8 md:top-14 md:right-14 flex items-center gap-2 text-white/30 font-mono text-xs">
        <span className="hidden sm:inline">[REF: ABOUT.SYS]</span>
        <svg className="w-8 h-8 text-white/40" viewBox="0 0 32 32" fill="none" stroke="currentColor">
          <circle cx="16" cy="16" r="12" strokeWidth="1" />
          <circle cx="16" cy="16" r="4" strokeWidth="1" fill="currentColor" fillOpacity="0.3" />
          <line x1="16" y1="0" x2="16" y2="32" strokeWidth="1" />
          <line x1="0" y1="16" x2="32" y2="16" strokeWidth="1" />
        </svg>
      </div>

      <div className="absolute bottom-8 left-8 md:bottom-14 md:left-14 flex items-center gap-2 text-white/30 font-mono text-xs">
        <svg className="w-8 h-8 text-white/40" viewBox="0 0 32 32" fill="none" stroke="currentColor">
          <circle cx="16" cy="16" r="12" strokeWidth="1" />
          <circle cx="16" cy="16" r="4" strokeWidth="1" fill="currentColor" fillOpacity="0.3" />
          <line x1="16" y1="0" x2="16" y2="32" strokeWidth="1" />
          <line x1="0" y1="16" x2="32" y2="16" strokeWidth="1" />
        </svg>
        <span className="hidden sm:inline">[VER: 2026.4]</span>
      </div>

      <div className="absolute bottom-8 right-8 md:bottom-14 md:right-14 flex items-center gap-2 text-white/30 font-mono text-xs">
        <span className="hidden sm:inline">[ANAS — DESIGNER]</span>
        <svg className="w-8 h-8 text-white/40" viewBox="0 0 32 32" fill="none" stroke="currentColor">
          <circle cx="16" cy="16" r="12" strokeWidth="1" />
          <circle cx="16" cy="16" r="4" strokeWidth="1" fill="currentColor" fillOpacity="0.3" />
          <line x1="16" y1="0" x2="16" y2="32" strokeWidth="1" />
          <line x1="0" y1="16" x2="32" y2="16" strokeWidth="1" />
        </svg>
      </div>

      {/* Side Precision Measurement Lines */}
      <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-4 text-white/20">
        <div className="w-[1px] h-16 bg-white/30" />
        <span className="font-mono text-[10px] tracking-widest rotate-90">AXIS-X</span>
        <div className="w-[1px] h-16 bg-white/30" />
      </div>

      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-4 text-white/20">
        <div className="w-[1px] h-16 bg-white/30" />
        <span className="font-mono text-[10px] tracking-widest -rotate-90">AXIS-Y</span>
        <div className="w-[1px] h-16 bg-white/30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Large Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 text-xs font-mono text-[#F5A623] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>02 — THE DESIGNER</span>
          </div>
          <h2 className="font-display font-bold text-6xl sm:text-8xl md:text-9xl tracking-tighter text-white uppercase">
            ABOUT ME
          </h2>
        </div>

        {/* Text Editorial Content */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display font-medium text-2xl sm:text-3xl md:text-4xl text-white leading-snug tracking-tight mb-6">
            "I'm a graphic designer passionate about turning ideas into visual experiences. I enjoy working with typography, composition, color, branding and digital content."
          </p>

          <p className="font-body text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto mb-10">
            I believe good design should be simple enough to understand, distinctive enough to remember and flexible enough to work across different platforms. Every line, typeface choice and margin has a deliberate purpose.
          </p>

          {/* Core Values / Method Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/15">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left">
              <span className="text-[#F5A623] font-mono text-xs block mb-1">01 / DISCIPLINE</span>
              <h4 className="font-display font-bold text-white text-base">Swiss Typographic Grid</h4>
              <p className="text-xs text-white/60 mt-1">Mathematical proportion and unyielding typographic hierarchy.</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left">
              <span className="text-[#F5A623] font-mono text-xs block mb-1">02 / IMPACT</span>
              <h4 className="font-display font-bold text-white text-base">High-Contrast Direction</h4>
              <p className="text-xs text-white/60 mt-1">Bold imagery, warm accent punctuation, and memorable presence.</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left">
              <span className="text-[#F5A623] font-mono text-xs block mb-1">03 / ADAPTABILITY</span>
              <h4 className="font-display font-bold text-white text-base">Multi-Platform Systems</h4>
              <p className="text-xs text-white/60 mt-1">Cohesive execution across physical print, outdoor and digital feeds.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

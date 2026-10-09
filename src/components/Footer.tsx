import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] text-[#F5F3EE] pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          
          {/* Logo & Identity */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 rounded-full bg-[#F5F3EE]" />
              <div className="w-5 h-5 rounded-full bg-[#F5A623] -ml-2.5 opacity-90" />
              <div className="w-2.5 h-5 rounded-r-full bg-[#F5F3EE]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-sm font-bold tracking-tighter uppercase text-white">
                ANAS ALI
              </span>
              <span className="text-[10px] tracking-widest text-white/50 uppercase font-mono">
                GRAPHIC DESIGN STUDIO
              </span>
            </div>
          </div>

          {/* Center Copyright */}
          <div className="text-xs font-mono text-white/60">
            © 2026 Anas Ali — Graphic Designer. All rights reserved.
          </div>

          {/* Right Navigation & Back to Top */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-xs font-mono">
              <button
                onClick={() => onNavigate('hero')}
                className="text-white/70 hover:text-[#F5A623] transition-colors cursor-pointer"
              >
                Home
              </button>
              <span className="text-white/20">/</span>
              <button
                onClick={() => onNavigate('about')}
                className="text-white/70 hover:text-[#F5A623] transition-colors cursor-pointer"
              >
                About Me
              </button>
              <span className="text-white/20">/</span>
              <button
                onClick={() => onNavigate('portfolio')}
                className="text-white/70 hover:text-[#F5A623] transition-colors cursor-pointer"
              >
                Portfolio
              </button>
              <span className="text-white/20">/</span>
              <button
                onClick={() => onNavigate('contact')}
                className="text-white/70 hover:text-[#F5A623] transition-colors cursor-pointer"
              >
                Contact
              </button>
              <span className="text-white/20">/</span>
              <a
                href="https://www.instagram.com/pixelcraft.pkk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5A623] hover:text-white transition-colors"
              >
                Instagram
              </a>
              <span className="text-white/20">/</span>
              <a
                href="tel:+923043340276"
                className="text-white/70 hover:text-[#F5A623] transition-colors"
                title="Direct Phone / WhatsApp"
              >
                03043340276
              </a>
            </div>

            <button
              onClick={scrollToTop}
              id="back-to-top-btn"
              className="p-2.5 rounded-full bg-white/10 hover:bg-[#F5A623] hover:text-black transition-all cursor-pointer text-white"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Micro Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-white/40">
          <div>
            Designed & built with creativity.
          </div>
          <div>
            SWISS GRID PRINCIPLES • MODERN DIGITAL EXECUTION
          </div>
        </div>

      </div>
    </footer>
  );
};

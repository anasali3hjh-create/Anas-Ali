import React from 'react';
import { TOOL_CATEGORIES } from '../data/portfolioData';
import { Sparkles, Terminal, Wrench } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 bg-[#F5F3EE] border-t border-[#E8E5DE] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#F5A623] uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-[#050505]" />
              <span>[05 — ARSENAL]</span>
            </div>
            <h2 className="font-display font-bold text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#050505] uppercase">
              TOOLS I USE
            </h2>
          </div>

          <div className="max-w-sm">
            <p className="font-mono text-xs text-[#737373] leading-relaxed uppercase">
              // ZERO COMPROMISE STACK
              <br />
              Mastery over industry standards alongside fundamental graphic principles.
            </p>
          </div>
        </div>

        {/* 2-Column Clean Typographic Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {TOOL_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-[#050505]">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#050505]">
                  {cat.category}
                </span>
                <span className="font-mono text-xs text-[#F5A623]">
                  [SECTION 0{idx + 1}]
                </span>
              </div>

              <div className="divide-y divide-[#E8E5DE]">
                {cat.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 group hover:bg-[#E8E5DE]/30 px-3 rounded-lg transition-colors"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs text-[#737373]">
                        0{itemIdx + 1}
                      </span>
                      <span className="font-display font-bold text-xl sm:text-2xl text-[#050505] uppercase tracking-tight group-hover:text-[#F5A623] transition-colors">
                        {item.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 sm:text-right">
                      <span className="text-xs text-[#737373] font-body">
                        {item.note}
                      </span>
                      <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded-full bg-[#050505] text-[#F5F3EE] shrink-0">
                        {item.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

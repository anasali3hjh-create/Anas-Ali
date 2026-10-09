import React from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 md:py-36 bg-[#F5F3EE] border-t border-[#E8E5DE] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#E8E5DE]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#F5A623] uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-[#050505]" />
              <span>[06 — METHODOLOGY]</span>
            </div>
            <h2 className="font-display font-bold text-6xl sm:text-8xl md:text-9xl tracking-tight text-[#050505] uppercase leading-[0.88]">
              MY
              <br />
              PROCESS
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-body text-base md:text-lg text-[#737373] leading-relaxed">
              A structured four-phase creative framework ensuring conceptual depth, visual cohesion, and predictable, on-time delivery.
            </p>
          </div>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Subtle connecting guideline on desktop */}
          <div className="hidden md:block absolute top-7 left-10 right-10 h-[1.5px] bg-[#E8E5DE] z-0" />

          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.number}
              id={`process-step-${step.number}`}
              className="relative z-10 flex flex-col justify-between p-6 sm:p-8 rounded-[24px] bg-[#F5F3EE] border border-[#E8E5DE] hover:border-[#050505] hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                {/* Step indicator circle */}
                <div className="w-14 h-14 rounded-full bg-[#050505] text-[#F5F3EE] group-hover:bg-[#F5A623] group-hover:text-black flex items-center justify-center font-display font-bold text-lg mb-6 transition-colors shadow-md">
                  {step.number}
                </div>

                <span className="text-[11px] font-mono text-[#F5A623] uppercase tracking-widest block mb-1">
                  PHASE {step.number}
                </span>

                <h3 className="font-display font-bold text-3xl text-[#050505] uppercase tracking-tight mb-2">
                  {step.title}
                </h3>

                <h4 className="text-xs font-mono text-[#050505] font-semibold mb-4 uppercase">
                  {step.subtitle}
                </h4>

                <p className="font-body text-sm text-[#737373] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step bottom technical coordinate */}
              <div className="mt-8 pt-4 border-t border-[#E8E5DE] flex items-center justify-between text-[10px] font-mono text-[#737373]">
                <span>STAGE 0{index + 1}/04</span>
                <span className="group-hover:text-[#F5A623] transition-colors">↗ READY</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { ArrowRight, Plus, Sparkles, Check } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface ServicesSectionProps {
  onStartProject: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onStartProject }) => {
  const [activeHoverIndex, setActiveHoverIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 md:py-36 bg-[#F5F3EE] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#E8E5DE]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#F5A623] uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-[#050505]" />
              <span>[04 — CAPABILITIES]</span>
            </div>
            <h2 className="font-display font-bold text-6xl sm:text-8xl md:text-9xl tracking-tight text-[#050505] uppercase leading-[0.88]">
              WHAT
              <br />
              I DO
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-body text-base md:text-lg text-[#737373] leading-relaxed">
              Specialized creative disciplines focused on delivering distinctive, enduring, and scalable visual solutions for forward-thinking brands and creators.
            </p>
          </div>
        </div>

        {/* Large Horizontal Rows (Directly inspired by reference layout) */}
        <div className="divide-y divide-[#E8E5DE] border-b border-[#E8E5DE]">
          {SERVICES.map((service, index) => {
            const isHovered = activeHoverIndex === index;

            return (
              <div
                key={service.number}
                id={`service-row-${service.number}`}
                onMouseEnter={() => setActiveHoverIndex(index)}
                onMouseLeave={() => setActiveHoverIndex(null)}
                onClick={() => onStartProject(service.title)}
                className={`group py-8 md:py-12 transition-all duration-300 cursor-pointer relative px-4 md:px-6 rounded-2xl ${
                  isHovered ? 'bg-[#E8E5DE]/40 -translate-y-1 shadow-sm' : ''
                }`}
              >
                {/* Left Orange Accent Bar Indicator */}
                <div
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-1.5 rounded-full bg-[#F5A623] transition-all duration-300 ${
                    isHovered ? 'h-3/4 opacity-100' : 'h-0 opacity-0'
                  }`}
                />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
                  {/* Number & Service Name */}
                  <div className="md:col-span-6 flex items-start gap-4 sm:gap-6">
                    <span className="font-mono text-sm md:text-base font-bold text-[#737373] group-hover:text-[#F5A623] transition-colors mt-1">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#050505] uppercase transition-transform duration-300 group-hover:translate-x-2">
                        {service.title}
                      </h3>
                      <span className="inline-block mt-2 text-[11px] font-mono uppercase tracking-wider text-[#F5A623] font-semibold">
                        {service.tag}
                      </span>
                    </div>
                  </div>

                  {/* Description & Deliverables */}
                  <div className="md:col-span-4">
                    <p className="font-body text-sm md:text-base text-[#737373] group-hover:text-[#050505] transition-colors leading-relaxed mb-3">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.deliverables.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#E8E5DE]/70 text-[#050505] border border-[#E8E5DE]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Action Button & Arrow */}
                  <div className="md:col-span-2 flex items-center justify-start md:justify-end">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#050505] text-xs font-mono font-bold uppercase transition-all duration-300 group-hover:bg-[#050505] group-hover:text-[#F5F3EE]">
                      <span className="hidden lg:inline">Inquire</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

import React, { useState, useMemo } from 'react';
import { ArrowUpRight, Filter, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';

interface PortfolioSectionProps {
  onSelectProject: (project: Project) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');

  const categories: ProjectCategory[] = [
    'All',
    'Branding',
    'Social Media',
    'Posters',
    'Thumbnails',
    'UI Design',
  ];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return PROJECTS;
    return PROJECTS.filter(
      (p) => p.category === selectedCategory || p.secondaryCategory === selectedCategory
    );
  }, [selectedCategory]);

  return (
    <section id="portfolio" className="py-24 md:py-36 bg-[#F5F3EE] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-[#E8E5DE]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#F5A623] uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-[#050505]" />
              <span>[03 — ARCHIVE]</span>
            </div>
            <h2 className="font-display font-bold text-6xl sm:text-8xl md:text-9xl tracking-tight text-[#050505] uppercase leading-[0.88]">
              PORTFOLIO
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-body text-base md:text-lg text-[#737373] leading-relaxed mb-6">
              An intentional curation of brand systems, experimental typography, social campaigns, and digital art direction.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project Categories">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    id={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => setSelectedCategory(cat)}
                    role="tab"
                    aria-selected={isActive}
                    className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#050505] text-[#F5F3EE] shadow-md'
                        : 'bg-transparent text-[#050505] border border-[#050505]/20 hover:border-[#050505] hover:bg-black/5'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          {filteredProjects.map((project, index) => {
            // Compute asymmetric column span based on card layout
            let colSpanClass = 'md:col-span-6';
            if (project.cardSize === 'wide') colSpanClass = 'md:col-span-12 lg:col-span-8';
            if (project.cardSize === 'square') colSpanClass = 'md:col-span-6 lg:col-span-4';
            if (project.cardSize === 'tall') colSpanClass = 'md:col-span-6 lg:col-span-6';
            if (project.cardSize === 'accent') colSpanClass = 'md:col-span-6 lg:col-span-6';

            const isAccent = project.cardSize === 'accent';

            return (
              <article
                key={project.id}
                id={`project-card-${project.id}`}
                data-cursor="VIEW"
                onClick={() => onSelectProject(project)}
                className={`${colSpanClass} group cursor-pointer flex flex-col justify-between`}
              >
                {/* Visual Container */}
                <div
                  className={`relative w-full rounded-[28px] overflow-hidden transition-all duration-500 border ${
                    isAccent
                      ? 'bg-[#F5A623] border-[#D98216]'
                      : 'bg-black/5 border-[#E8E5DE] group-hover:border-[#050505]'
                  } ${project.aspectRatioClass || 'aspect-[4/3]'} shadow-sm group-hover:shadow-xl flex items-center justify-center`}
                >
                  {/* Image with subtle zoom on hover */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full ${
                      project.objectFit === 'contain' ? 'object-contain' : 'object-cover'
                    } transition-transform duration-700 ease-out group-hover:scale-[1.03] ${
                      isAccent ? 'mix-blend-multiply opacity-95' : ''
                    }`}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Dark subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Project Number badge */}
                  <div className="absolute top-5 left-5 z-10">
                    <span className="font-mono text-xs font-bold px-3 py-1.5 rounded-full bg-[#050505] text-[#F5F3EE] backdrop-blur-md shadow-md">
                      {project.number}
                    </span>
                  </div>

                  {/* Floating Action Arrow */}
                  <div className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full bg-[#F5F3EE] text-[#050505] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#F5A623] group-hover:text-black">
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                  {/* Bottom category tag overlay */}
                  <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between pointer-events-none">
                    <span className="text-[11px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/90 text-[#050505] backdrop-blur-sm">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-white/90 drop-shadow-sm">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Card Editorial Typography (under image) */}
                <div className="mt-4 pt-3 border-t border-[#E8E5DE] flex items-start justify-between gap-4">
                  <div className="transition-transform duration-300 group-hover:-translate-y-1">
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#050505] uppercase tracking-tight flex items-center gap-2">
                      {project.title}
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </h3>
                    <p className="font-body text-sm text-[#737373] mt-1 line-clamp-2 max-w-md">
                      {project.shortDescription}
                    </p>
                  </div>

                  <span className="font-mono text-xs text-[#737373] shrink-0 mt-1 uppercase">
                    [EXPAND]
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center max-w-md mx-auto border border-dashed border-[#050505]/20 rounded-3xl p-10 bg-black/[0.02]">
            <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#F5A623] mb-2">[CATEGORY EMPTY]</span>
            <h3 className="font-display font-medium text-xl text-[#050505] mb-2">
              New {selectedCategory} projects in progress
            </h3>
            <p className="font-body text-sm text-[#737373] mb-6">
              Case studies for this discipline are currently being archived and updated.
            </p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="px-5 py-2.5 rounded-full bg-[#050505] text-[#F5F3EE] hover:bg-[#F5A623] hover:text-black transition-colors text-xs font-mono uppercase tracking-wider cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

import React, { useEffect } from 'react';
import { X, ArrowRight, ArrowLeft, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, onNext, onPrev]);

  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="project-modal-container"
        className="relative w-full max-w-5xl bg-[#F5F3EE] text-[#050505] rounded-[32px] overflow-hidden shadow-2xl my-auto border border-[#E8E5DE] max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Sticky Modal Top Bar */}
        <div className="sticky top-0 z-20 bg-[#F5F3EE]/95 backdrop-blur-md px-6 sm:px-10 py-4 border-b border-[#E8E5DE] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#F5A623] font-bold">
              PROJECT {project.number}
            </span>
            <span className="text-[#E8E5DE]">/</span>
            <span className="text-xs font-mono uppercase text-[#737373]">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onPrev}
              className="p-2 rounded-full border border-[#E8E5DE] hover:bg-black hover:text-white transition-colors cursor-pointer"
              aria-label="Previous Project"
              title="Previous (Left Arrow)"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={onNext}
              className="p-2 rounded-full border border-[#E8E5DE] hover:bg-black hover:text-white transition-colors cursor-pointer"
              aria-label="Next Project"
              title="Next (Right Arrow)"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              id="modal-close-btn"
              onClick={onClose}
              className="p-2 ml-2 rounded-full bg-[#050505] text-[#F5F3EE] hover:bg-[#F5A623] hover:text-black transition-colors cursor-pointer"
              aria-label="Close modal (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto px-6 sm:px-10 py-8 space-y-12">
          
          {/* Header Info */}
          <div className="border-b border-[#E8E5DE] pb-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#737373] block mb-2">
                  CASE STUDY #{project.number}
                </span>
                <h2
                  id="modal-project-title"
                  className="font-display font-bold text-4xl sm:text-6xl md:text-7xl tracking-tighter text-[#050505] uppercase"
                >
                  {project.title}
                </h2>
                <p className="text-lg text-[#737373] mt-2 font-body max-w-xl">
                  {project.shortDescription}
                </p>
              </div>

              {/* Metadata columns */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 font-mono text-xs">
                {project.client && (
                  <div>
                    <span className="text-[#737373] block mb-1">CLIENT</span>
                    <span className="text-[#050505] font-semibold">{project.client}</span>
                  </div>
                )}
                {project.year && (
                  <div>
                    <span className="text-[#737373] block mb-1">YEAR</span>
                    <span className="text-[#050505] font-semibold">{project.year}</span>
                  </div>
                )}
                <div>
                  <span className="text-[#737373] block mb-1">DISCIPLINE</span>
                  <span className="text-[#050505] font-semibold">{project.category}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Project Visual */}
          <div className={`relative rounded-[24px] overflow-hidden bg-black/5 border border-[#E8E5DE] flex items-center justify-center ${
            project.objectFit === 'contain' ? 'py-4 min-h-[480px] max-h-[80vh]' : 'aspect-[16/9]'
          }`}>
            <img
              src={project.image}
              alt={project.title}
              className={`${
                project.objectFit === 'contain'
                  ? 'max-h-[75vh] w-auto max-w-full object-contain rounded-xl'
                  : 'w-full h-full object-cover'
              }`}
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-mono">
              VISUAL SHOWCASE
            </div>
          </div>

          {/* Editorial Narrative: Brief & Process */}
          {project.brief && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
              <div className="md:col-span-4">
                <span className="text-xs font-mono text-[#F5A623] uppercase tracking-wider block mb-2">
                  01. PROJECT BRIEF
                </span>
                <h3 className="font-display font-bold text-2xl text-[#050505]">
                  The Challenge
                </h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-[#050505] text-base sm:text-lg leading-relaxed font-body">
                  {project.brief}
                </p>
              </div>
            </div>
          )}

          {(project.process || (project.colorPalette && project.colorPalette.length > 0)) && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-[#E8E5DE] pt-8">
              <div className="md:col-span-4">
                <span className="text-xs font-mono text-[#F5A623] uppercase tracking-wider block mb-2">
                  02. DESIGN PROCESS
                </span>
                <h3 className="font-display font-bold text-2xl text-[#050505]">
                  Method & System
                </h3>
              </div>
              <div className="md:col-span-8 space-y-4">
                {project.process && (
                  <p className="text-[#737373] text-base leading-relaxed font-body">
                    {project.process}
                  </p>
                )}
                
                {/* Color Palette Swatches */}
                {project.colorPalette && project.colorPalette.length > 0 && (
                  <div className="pt-4">
                    <span className="text-xs font-mono text-[#737373] block mb-2">
                      BRAND CHROMATIC SYSTEM:
                    </span>
                    <div className="flex items-center gap-3">
                      {project.colorPalette.map((hex, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div
                            className="w-8 h-8 rounded-full border border-black/10 shadow-sm"
                            style={{ backgroundColor: hex }}
                          />
                          <span className="text-xs font-mono uppercase text-[#050505]">
                            {hex}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {(project.result || (project.tools && project.tools.length > 0)) && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-[#E8E5DE] pt-8">
              <div className="md:col-span-4">
                <span className="text-xs font-mono text-[#F5A623] uppercase tracking-wider block mb-2">
                  03. FINAL RESULT
                </span>
                <h3 className="font-display font-bold text-2xl text-[#050505]">
                  Outcome & Impact
                </h3>
              </div>
              <div className="md:col-span-8">
                {project.result && (
                  <div className="p-5 rounded-2xl bg-[#E8E5DE]/50 border border-[#E8E5DE] flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#F5A623] shrink-0 mt-0.5" />
                    <p className="text-[#050505] text-base font-body leading-relaxed">
                      {project.result}
                    </p>
                  </div>
                )}

                {/* Tools Used Pills */}
                {project.tools && project.tools.length > 0 && (
                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-[#737373] mr-2">TOOLS EMPLOYED:</span>
                    {project.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-white border border-[#E8E5DE] text-xs font-mono font-medium text-[#050505]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Visual Gallery Spreads */}
          {project.galleryImages && project.galleryImages.length > 0 && (
            <div className="border-t border-[#E8E5DE] pt-8 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#737373] block">
                VISUAL APPLICATIONS & ARTIFACTS
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.galleryImages.map((img, idx) => (
                  <div key={idx} className="flex flex-col gap-2">
                    <div className={`rounded-2xl overflow-hidden bg-black/5 border border-[#E8E5DE] flex items-center justify-center ${
                      project.objectFit === 'contain' ? 'p-3 min-h-[380px]' : 'aspect-[4/3]'
                    }`}>
                      <img
                        src={img.url}
                        alt={img.caption}
                        className={`${
                          project.objectFit === 'contain'
                            ? 'max-h-[360px] w-auto max-w-full object-contain hover:scale-105 transition-transform duration-500 rounded-lg'
                            : 'w-full h-full object-cover hover:scale-105 transition-transform duration-500'
                        }`}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <p className="text-xs font-mono text-[#737373]">
                      {img.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Modal Bottom Action Bar */}
          <div className="pt-8 border-t border-[#E8E5DE] flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={onPrev}
              className="inline-flex items-center gap-2 text-sm font-display font-bold uppercase tracking-wider text-[#050505] hover:text-[#F5A623] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous Project</span>
            </button>

            <button
              onClick={onNext}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#050505] text-[#F5F3EE] hover:bg-[#F5A623] hover:text-black font-display font-bold text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer"
            >
              <span>Next Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

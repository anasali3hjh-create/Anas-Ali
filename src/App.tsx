import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { AboutSection } from './components/AboutSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProjectModal } from './components/ProjectModal';
import { ServicesSection } from './components/ServicesSection';
import { SkillsSection } from './components/SkillsSection';
import { ProcessSection } from './components/ProcessSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PROJECTS } from './data/portfolioData';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('Brand Identity');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % PROJECTS.length;
    setSelectedProject(PROJECTS[nextIndex]);
  };

  const handlePrevProject = () => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
    setSelectedProject(PROJECTS[prevIndex]);
  };

  const handleStartProjectFromService = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForContact(serviceName);
    }
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#F5F3EE] text-[#050505] selection:bg-[#F5A623] selection:text-black relative">
      {/* Subtle Custom Cursor for Desktop */}
      <CustomCursor />

      {/* Sticky Editorial Navigation */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Content Sections */}
      <main>
        {/* 01 — HERO */}
        <Hero onExploreClick={() => scrollToSection('portfolio')} />

        {/* 01.5 — MARQUEE 1 */}
        <Marquee
          text="GRAPHIC DESIGN • VISUAL IDENTITY • DIGITAL DESIGN • CREATIVE DIRECTION •"
          dark={true}
        />

        {/* 02 — ABOUT (The Designer) */}
        <AboutSection />

        {/* 02.5 — MARQUEE 2 */}
        <Marquee
          text="PORTFOLIO • SELECTED WORK • ARCHIVE •"
          reverse={true}
          dark={false}
        />

        {/* 03 & 04 — SELECTED WORK / PORTFOLIO SHOWCASE */}
        <PortfolioSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* 05 — DESIGN SERVICES (WHAT I DO) */}
        <ServicesSection onStartProject={handleStartProjectFromService} />

        {/* 06 — SKILLS & TOOLS (TOOLS I USE) */}
        <SkillsSection />

        {/* 07 — CREATIVE PROCESS (MY PROCESS) */}
        <ProcessSection />

        {/* 08 — CONTACT */}
        <ContactSection initialService={selectedServiceForContact} />
      </main>

      {/* 09 — FOOTER */}
      <Footer onNavigate={scrollToSection} />

      {/* Full-Screen Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNext={handleNextProject}
        onPrev={handlePrevProject}
      />
    </div>
  );
}

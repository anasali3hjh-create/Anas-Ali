import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About Me', id: 'about' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Services', id: 'services' },
    { label: 'Process', id: 'process' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        id="main-nav"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F5F3EE]/95 backdrop-blur-md border-b border-[#E8E5DE] py-3.5 shadow-[0_4px_20px_rgba(0,0,0,0.03)]'
            : 'bg-[#F5F3EE] border-b border-[#E8E5DE] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Left: Geometric Minimal Logo Mark */}
          <button
            id="brand-logo-btn"
            onClick={() => handleLinkClick('hero')}
            className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
            aria-label="Anas Portfolio Home"
          >
            {/* Custom geometric logo mark reminiscent of modern Swiss / editorial identity */}
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 rounded-full bg-[#050505] group-hover:bg-[#F5A623] transition-colors duration-300" />
              <div className="w-5 h-5 rounded-full bg-[#050505] -ml-2.5 mix-blend-multiply opacity-80 group-hover:bg-[#D98216] transition-colors duration-300" />
              <div className="w-2.5 h-5 rounded-r-full bg-[#050505] group-hover:bg-[#050505] transition-colors duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-sm font-bold tracking-tighter uppercase text-[#050505]">
                ANAS ALI
              </span>
              <span className="text-[10px] tracking-widest text-[#737373] uppercase font-mono">
                GRAPHIC DESIGN
              </span>
            </div>
          </button>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleLinkClick(item.id)}
                className="group relative text-[13px] font-medium tracking-tight text-[#050505] hover:text-black py-1 cursor-pointer transition-colors duration-200"
              >
                <span className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5">
                  {item.label}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#F5A623] transition-all duration-200 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Right: Availability Status & Quick Contact */}
          <div className="hidden lg:flex items-center gap-5">
            <div className="flex items-center gap-2 text-xs font-mono text-[#050505]/80 bg-[#E8E5DE]/60 px-3 py-1.5 rounded-full border border-[#E8E5DE]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5A623] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F5A623]" />
              </span>
              <span>Available for freelance</span>
            </div>

            <button
              id="nav-quick-cta"
              onClick={() => handleLinkClick('contact')}
              className="inline-flex items-center gap-1 text-xs font-display font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#050505] text-[#F5F3EE] hover:bg-[#F5A623] hover:text-black transition-all duration-200 cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#050505] bg-[#E8E5DE]/80 px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
              <span>Available</span>
            </div>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full border border-[#E8E5DE] text-[#050505] hover:bg-[#E8E5DE] transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="fixed inset-0 z-30 bg-[#F5F3EE] pt-24 px-8 pb-10 flex flex-col justify-between md:hidden animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col gap-6">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#737373]">
              Navigation
            </span>
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className="text-left font-display text-3xl font-bold tracking-tight text-[#050505] hover:text-[#F5A623] transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-6 h-6 text-[#737373]" />
                </button>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-[#E8E5DE] flex flex-col gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#050505]">
              <span className="w-2 h-2 rounded-full bg-[#F5A623]" />
              <span>Available for freelance work 2026</span>
            </div>
            <p className="text-xs text-[#737373] font-body">
              Anas — Graphic Designer focused on bold visual identities and digital typography.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

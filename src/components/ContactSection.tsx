import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Copy, Check, Send, Sparkles, Mail, Instagram } from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: initialService || 'Brand Identity',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedInstagram, setCopiedInstagram] = useState(false);

  const directEmail = 'anasali3hjh@gmail.com';
  const instagramHandle = 'pixelcraft.pkk';
  const instagramUrl = 'https://www.instagram.com/pixelcraft.pkk';

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide at least 10 characters regarding your project';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyInstagram = () => {
    navigator.clipboard.writeText(instagramHandle);
    setCopiedInstagram(true);
    setTimeout(() => setCopiedInstagram(false), 2500);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#000000] text-[#F5F3EE] relative overflow-hidden">
      {/* Background technical accents */}
      <div className="absolute inset-0 crosshair-pattern-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Contact Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (Cols 1 - 6): Big Statement & Direct Contact */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 text-xs font-mono text-[#F5A623] mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>07 — COLLABORATION</span>
              </div>

              <h2 className="font-display font-bold text-5xl sm:text-7xl md:text-8xl tracking-tight text-white uppercase leading-[0.88] mb-8">
                LET'S CREATE
                <br />
                SOMETHING
                <br />
                <span className="text-[#F5A623]">GREAT.</span>
              </h2>

              <p className="font-display text-xl sm:text-2xl text-white/90 font-medium mb-4">
                Have a project, idea or collaboration in mind?
              </p>

              <p className="font-body text-base text-white/60 leading-relaxed max-w-lg mb-10">
                Currently open for select freelance commissions, full brand transformations, and editorial packaging. Let's make work that leaves a lasting impression.
              </p>

              {/* Direct Channels */}
              <div className="space-y-4 mb-8 max-w-lg">
                {/* Direct Email Action Box */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="w-3.5 h-3.5 text-[#F5A623]" />
                    <span className="text-xs font-mono text-[#F5A623] uppercase tracking-widest block">
                      DIRECT LINE
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <a
                      href={`mailto:${directEmail}`}
                      className="font-display font-bold text-base sm:text-lg text-white hover:text-[#F5A623] transition-colors break-all"
                    >
                      {directEmail}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white hover:text-black text-xs font-mono transition-colors cursor-pointer"
                      aria-label="Copy email address"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                {/* Direct Instagram Action Box */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <Instagram className="w-3.5 h-3.5 text-[#F5A623]" />
                    <span className="text-xs font-mono text-[#F5A623] uppercase tracking-widest block">
                      INSTAGRAM
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display font-bold text-base sm:text-lg text-white hover:text-[#F5A623] transition-colors inline-flex items-center gap-2 group"
                    >
                      <span>@{instagramHandle}</span>
                      <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-[#F5A623] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </a>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleCopyInstagram}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white hover:text-black text-xs font-mono transition-colors cursor-pointer"
                        aria-label="Copy Instagram username"
                      >
                        {copiedInstagram ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedInstagram ? 'Copied' : 'Copy'}</span>
                      </button>
                      <a
                        href={instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F5A623] text-black hover:bg-white text-xs font-mono font-semibold transition-colors cursor-pointer"
                      >
                        <span>DM</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability status note */}
            <div className="mt-12 pt-6 border-t border-white/10 flex items-center gap-3 text-xs font-mono text-white/50">
              <span className="w-2 h-2 rounded-full bg-[#F5A623] animate-pulse" />
              <span>Typical response time: within 24–48 hours.</span>
            </div>
          </div>

          {/* Right Column (Cols 7 - 12): The Contact Form */}
          <div className="lg:col-span-6 bg-white/[0.03] p-8 sm:p-10 rounded-[32px] border border-white/15 backdrop-blur-sm">
            
            {isSubmitted ? (
              <div className="py-16 text-center space-y-6 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#F5A623] text-black flex items-center justify-center mx-auto shadow-xl">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-3xl sm:text-4xl text-white uppercase tracking-tight">
                  Message Sent
                </h3>
                <p className="font-body text-base text-white/70 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. I have received your project details and will review them shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      projectType: 'Brand Identity',
                      message: '',
                    });
                  }}
                  className="px-6 py-2.5 rounded-full border border-white/30 text-xs font-mono uppercase text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#F5A623] block mb-1">
                    PROJECT INQUIRY FORM
                  </span>
                  <p className="text-xs text-white/50 font-mono">
                    Fill out the fields below to initiate our creative conversation.
                  </p>
                </div>

                {/* Name field */}
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="block text-xs font-mono uppercase text-white/80">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="e.g. Elena Vance"
                    className="w-full px-4 py-3.5 rounded-xl bg-transparent border border-white/20 text-white placeholder-white/30 focus:border-[#F5A623] focus:outline-none transition-colors font-body text-sm"
                  />
                  {errors.name && (
                    <p className="text-xs font-mono text-red-400 mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email field */}
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="block text-xs font-mono uppercase text-white/80">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-transparent border border-white/20 text-white placeholder-white/30 focus:border-[#F5A623] focus:outline-none transition-colors font-body text-sm"
                  />
                  {errors.email && (
                    <p className="text-xs font-mono text-red-400 mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Project Type */}
                <div className="space-y-2">
                  <label htmlFor="contact-project-type" className="block text-xs font-mono uppercase text-white/80">
                    Project Type / Service
                  </label>
                  <select
                    id="contact-project-type"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#121212] border border-white/20 text-white focus:border-[#F5A623] focus:outline-none transition-colors font-body text-sm"
                  >
                    <option value="Brand Identity">01 — Brand Identity System</option>
                    <option value="Social Media Design">02 — Social Media & Motion Campaign</option>
                    <option value="Poster Design">03 — Poster Design & Typography Art</option>
                    <option value="YouTube Thumbnails">04 — YouTube High-CTR Packaging</option>
                    <option value="Digital Graphics">05 — Digital Graphics & Key Visuals</option>
                    <option value="UI Design">06 — UI Design & Spatial Prototypes</option>
                    <option value="Full Creative Direction">07 — Full Creative Direction</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="block text-xs font-mono uppercase text-white/80">
                    Project Details & Scope *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Tell me about the vision, timeline, target deliverables, and any references..."
                    className="w-full px-4 py-3.5 rounded-xl bg-transparent border border-white/20 text-white placeholder-white/30 focus:border-[#F5A623] focus:outline-none transition-colors font-body text-sm resize-none"
                  />
                  {errors.message && (
                    <p className="text-xs font-mono text-red-400 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[#F5A623] hover:bg-[#D98216] text-black font-display font-bold text-base uppercase tracking-wider transition-all duration-200 shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending Inquiry...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowUpRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center font-mono text-white/40">
                  Strictly confidential • No unsolicited spam guaranteed
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

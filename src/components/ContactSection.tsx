import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, Sparkles, Mail, Instagram, Phone, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedInstagram, setCopiedInstagram] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const directEmail = 'anasali3hjh@gmail.com';
  const instagramHandle = 'pixelcraft.pkk';
  const instagramUrl = 'https://www.instagram.com/pixelcraft.pkk';
  const phoneNumber = '03043340276';
  // International format for Pakistan (+92) for WhatsApp and tel link
  const formattedPhoneIntl = '+923043340276';
  const whatsappUrl = `https://wa.me/923043340276?text=${encodeURIComponent('Hi Anas, I would like to inquire about a project/collaboration.')}`;

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

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#000000] text-[#F5F3EE] relative overflow-hidden">
      {/* Background technical accents */}
      <div className="absolute inset-0 crosshair-pattern-dark opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Header & Statement */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-mono text-[#F5A623] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>07 — COLLABORATION</span>
          </div>

          <h2 className="font-display font-bold text-5xl sm:text-7xl md:text-8xl tracking-tight text-white uppercase leading-[0.9] mb-8">
            LET'S CREATE
            <br />
            SOMETHING
            <br />
            <span className="text-[#F5A623]">GREAT.</span>
          </h2>

          <p className="font-display text-xl sm:text-2xl text-white/90 font-medium mb-4">
            Have a project, idea or collaboration in mind?
          </p>

          <p className="font-body text-base text-white/60 leading-relaxed max-w-xl mx-auto">
            Currently open for select freelance commissions, full brand transformations, and editorial packaging. Reach out directly via email, Instagram, or phone to get started.
          </p>
        </div>

        {/* Direct Contact Channels Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* 1. Direct Email Action Box */}
          <div className="p-8 rounded-[28px] bg-white/[0.04] border border-white/10 hover:border-[#F5A623]/50 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-black transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-[#F5A623] uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  EMAIL
                </span>
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-2">Send an Email</h3>
              <p className="text-sm font-body text-white/60 mb-6">
                Send your brief, project scope, or questions directly to my inbox.
              </p>
              <a
                href={`mailto:${directEmail}`}
                className="font-display font-bold text-base sm:text-lg text-white hover:text-[#F5A623] transition-colors break-all block mb-6"
              >
                {directEmail}
              </a>
            </div>

            <div className="flex items-center gap-2 pt-6 border-t border-white/10">
              <a
                href={`mailto:${directEmail}`}
                className="flex-1 py-3 px-3.5 rounded-xl bg-[#F5A623] hover:bg-[#D98216] text-black font-display font-bold text-xs uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Write Email</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <button
                onClick={handleCopyEmail}
                className="py-3 px-3.5 rounded-xl bg-white/10 hover:bg-white hover:text-black text-xs font-mono transition-colors cursor-pointer flex items-center gap-1.5"
                aria-label="Copy email address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* 2. Direct Instagram Action Box */}
          <div className="p-8 rounded-[28px] bg-white/[0.04] border border-white/10 hover:border-[#F5A623]/50 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-black transition-colors">
                  <Instagram className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-[#F5A623] uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  INSTAGRAM
                </span>
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-2">Connect on Instagram</h3>
              <p className="text-sm font-body text-white/60 mb-6">
                Explore recent design experiments or send a direct message.
              </p>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display font-bold text-base sm:text-lg text-white hover:text-[#F5A623] transition-colors inline-flex items-center gap-1.5 mb-6"
              >
                <span>@{instagramHandle}</span>
                <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-[#F5A623] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>

            <div className="flex items-center gap-2 pt-6 border-t border-white/10">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-3.5 rounded-xl bg-[#F5A623] hover:bg-[#D98216] text-black font-display font-bold text-xs uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Direct Message</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <button
                onClick={handleCopyInstagram}
                className="py-3 px-3.5 rounded-xl bg-white/10 hover:bg-white hover:text-black text-xs font-mono transition-colors cursor-pointer flex items-center gap-1.5"
                aria-label="Copy Instagram username"
              >
                {copiedInstagram ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedInstagram ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* 3. Direct Phone / Contact Action Box (After Instagram section) */}
          <div className="p-8 rounded-[28px] bg-white/[0.04] border border-white/10 hover:border-[#F5A623]/50 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#F5A623] group-hover:bg-[#F5A623] group-hover:text-black transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-[#F5A623] uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  PHONE / WHATSAPP
                </span>
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-2">Direct Contact</h3>
              <p className="text-sm font-body text-white/60 mb-6">
                Call directly or reach out via WhatsApp for fast project discussion.
              </p>
              <a
                href={`tel:${formattedPhoneIntl}`}
                className="font-display font-bold text-base sm:text-lg text-white hover:text-[#F5A623] transition-colors inline-flex items-center gap-2 mb-6 tracking-wider"
              >
                <span>{phoneNumber}</span>
              </a>
            </div>

            <div className="space-y-2 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2">
                <a
                  href={`tel:${formattedPhoneIntl}`}
                  className="flex-1 py-3 px-3 rounded-xl bg-[#F5A623] hover:bg-[#D98216] text-black font-display font-bold text-xs uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-3 rounded-xl bg-white/10 hover:bg-[#25D366] hover:text-black text-white font-display font-bold text-xs uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
              <button
                onClick={handleCopyPhone}
                className="w-full py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white hover:text-black text-xs font-mono transition-colors cursor-pointer flex items-center justify-center gap-1.5 text-white/80"
                aria-label="Copy phone number"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedPhone ? 'Copied 03043340276' : 'Copy Number'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Availability Status Footer */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-mono text-white/50 text-center">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F5A623] animate-pulse" />
            <span>Currently open for freelance commissions (2026)</span>
          </div>
          <span className="hidden sm:inline text-white/20">•</span>
          <span>Typical response time: within 24–48 hours</span>
        </div>

      </div>
    </section>
  );
};

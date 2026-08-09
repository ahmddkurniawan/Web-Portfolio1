import React from 'react';
import { Download, Linkedin, Mail, ShieldCheck, CheckCircle2, ArrowRight, Award, FileSpreadsheet } from 'lucide-react';
import { candidateData } from '../data/candidateData';
import { generateCvPdf } from '../utils/pdfGenerator';
import headshotPhoto from '../assets/images/ahmad_kurnia_portrait_1786199865454.jpg';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative pt-24 sm:pt-32 pb-16 lg:pb-24 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white overflow-hidden"
    >
      {/* Background Subtle Accent Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 text-slate-200 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Ready for Operations &amp; Administration Staff Roles</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
                {candidateData.headline}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
                {candidateData.subheadline}
              </p>
            </div>

            {/* Core Capability Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center space-x-2 text-xs font-medium text-slate-300 bg-slate-800/60 p-2.5 rounded-lg border border-slate-700/50">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Pengelolaan Dokumen &amp; Arsip</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-medium text-slate-300 bg-slate-800/60 p-2.5 rounded-lg border border-slate-700/50">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Rekonsiliasi Stok &amp; Faktur</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-medium text-slate-300 bg-slate-800/60 p-2.5 rounded-lg border border-slate-700/50 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span>MS Office &amp; Google Workspace</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <button
                id="hero-download-cv-btn"
                onClick={generateCvPdf}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-semibold text-sm shadow-lg shadow-orange-600/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="w-4 h-4" />
                <span>Download CV (PDF)</span>
              </button>

              <a
                id="hero-linkedin-link"
                href={candidateData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold text-sm border border-slate-700 transition-all hover:-translate-y-0.5"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <button
                id="hero-contact-me-btn"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl bg-transparent hover:bg-slate-800/80 text-slate-300 hover:text-white font-semibold text-sm border border-slate-700 transition-all"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Target Role Tags */}
            <div className="pt-2 text-xs text-slate-400">
              <span className="text-slate-500 mr-2 font-medium">Target Posisi:</span>
              <div className="inline-flex flex-wrap gap-1.5 mt-1">
                {candidateData.targetRoles.map((role, idx) => (
                  <span
                    key={idx}
                    className="inline-block px-2.5 py-1 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60 font-mono text-[11px]"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Candidate Image & Trust Cards */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Card Frame Container */}
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Decorative Accent Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl blur-lg opacity-25" />

              {/* Main Card */}
              <div className="relative bg-slate-800 border border-slate-700 rounded-2xl p-4 sm:p-5 shadow-2xl">
                
                {/* Photo Aspect Ratio Container */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-700">
                  <img
                    src={headshotPhoto}
                    alt="Ahmad Kurnia"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* Name Label inside Photo */}
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <span className="text-xs font-semibold uppercase tracking-wider text-orange-400 block">
                      Administrasi &amp; Operasional
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      Ahmad Kurnia (ab)
                    </h3>
                  </div>
                </div>

                {/* Floating Metric Badges */}
                <div className="grid grid-cols-2 gap-3 mt-4 text-left">
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-700/80">
                    <div className="flex items-center space-x-2 text-orange-400 text-xs font-semibold">
                      <Award className="w-4 h-4" />
                      <span>S1 Bisnis Digital</span>
                    </div>
                    <p className="text-lg font-bold text-white mt-0.5">IPK 3.61</p>
                    <p className="text-[11px] text-slate-400">UNM (2026)</p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-700/80">
                    <div className="flex items-center space-x-2 text-emerald-400 text-xs font-semibold">
                      <FileSpreadsheet className="w-4 h-4" />
                      <span>Certified Excel</span>
                    </div>
                    <p className="text-lg font-bold text-white mt-0.5">Intermediate</p>
                    <p className="text-[11px] text-slate-400">CodingStudio &amp; MySkill</p>
                  </div>
                </div>

                {/* Secondary CTA to view full CV inside modal */}
                <button
                  id="hero-view-cv-modal-btn"
                  onClick={onOpenCvModal}
                  className="w-full mt-3 py-2.5 px-4 rounded-xl bg-slate-700/60 hover:bg-slate-700 border border-slate-600 text-slate-200 text-xs font-semibold flex items-center justify-center space-x-2 transition-colors"
                >
                  <ShieldCheck className="w-4 h-4 text-orange-400" />
                  <span>Lihat CV Lengkap Verifikasi HRD</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </button>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

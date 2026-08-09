import React from 'react';
import { Award, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { candidateData } from '../data/candidateData';

export const Certifications: React.FC = () => {
  return (
    <section id="certificates" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-orange-600" />
            <span>Professional Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Sertifikasi &amp; Pelatihan
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Sertifikasi resmi untuk memperkuat kompetensi pengolahan data Excel, Microsoft Office, dan analisis penjualan.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {candidateData.certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-orange-400 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-slate-900 text-slate-200 text-xs font-mono font-semibold">
                    {cert.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors leading-snug">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-xs font-semibold text-slate-600 mb-4 flex items-center space-x-1.5">
                  <span>Penyelenggara:</span>
                  <span className="text-slate-900 font-bold">{cert.issuer}</span>
                </p>
              </div>

              {/* Verified Footer */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center space-x-1 text-emerald-600 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Skill</span>
                </span>
                <span className="text-[11px] bg-white px-2 py-0.5 rounded border border-slate-200 font-mono">
                  {cert.category.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

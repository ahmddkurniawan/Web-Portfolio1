import React from 'react';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';
import { candidateData } from '../data/candidateData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5 text-orange-600" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Riwayat Pendidikan
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Latar belakang akademis formal yang mendukung pemikiran analitis, kemampuan manajerial digital, serta disiplin kerja tinggi.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
          {candidateData.education.map((edu) => (
            <div
              key={edu.id}
              className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 hover:border-orange-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-900 text-orange-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold font-mono">
                    <Calendar className="w-3 h-3" />
                    <span>{edu.year}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {edu.institution}
                </h3>
                <p className="text-sm font-semibold text-orange-600 mb-2">
                  {edu.degree} – {edu.field}
                </p>

                <div className="inline-block px-3 py-1 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold mb-4">
                  Grade / Prestasii: {edu.grade}
                </div>

                {edu.highlights && (
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 border-t border-slate-200 pt-4">
                    {edu.highlights.map((hl, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <BookOpen className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

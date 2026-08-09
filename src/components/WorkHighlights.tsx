import React from 'react';
import { Layers, CheckCircle2, Building, Sparkles } from 'lucide-react';
import { candidateData } from '../data/candidateData';

export const WorkHighlights: React.FC = () => {
  return (
    <section id="highlights" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>Proven Outcomes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Work Highlights &amp; Solusi Administrasi
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Studi kasus kontribusi nyata berdasarkan tugas dan pembenahan sistem administrasi yang dilaksanakan di perusahaan sebelumnya.
          </p>
        </div>

        {/* Highlights Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {candidateData.workHighlights.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-orange-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-md bg-orange-100 text-orange-700 font-semibold text-xs">
                    {item.category}
                  </span>
                  <span className="text-xs font-medium text-slate-500 flex items-center space-x-1">
                    <Building className="w-3 h-3 text-slate-400" />
                    <span className="truncate max-w-[120px]">{item.company}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Outcomes */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Hasil &amp; Manfaat Operasional:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {item.outcomes.map((out, oIdx) => (
                      <li key={oIdx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tools Footer */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                {item.toolsUsed.map((tool, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[11px] font-mono"
                  >
                    {tool}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

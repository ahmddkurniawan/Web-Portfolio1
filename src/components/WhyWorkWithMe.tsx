import React from 'react';
import { CheckCircle2, FolderKanban, Zap, Users, ShieldCheck } from 'lucide-react';
import { candidateData } from '../data/candidateData';

export const WhyWorkWithMe: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'CheckCircle2':
        return CheckCircle2;
      case 'FolderKanban':
        return FolderKanban;
      case 'Zap':
        return Zap;
      case 'Users':
        return Users;
      default:
        return ShieldCheck;
    }
  };

  return (
    <section id="why-me" className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 text-orange-400 text-xs font-semibold uppercase tracking-wider border border-slate-700">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Value Proposition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mengapa Memilih Ahmad Kurnia?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            4 pilar karakter dan etos kerja yang menjadikan Ahmad aset berharga bagi efisiensi operasional dan administrasi tim Anda.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {candidateData.whyWorkPoints.map((point, idx) => {
            const IconComp = getIcon(point.iconName);

            return (
              <div
                key={idx}
                className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 hover:border-orange-500 hover:bg-slate-800 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-orange-400 flex items-center justify-center mb-5 group-hover:bg-orange-600 group-hover:text-white transition-all shadow-md">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">
                    {point.title}
                  </h3>

                  <p className="text-xs font-bold text-orange-400 mb-3">
                    {point.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {point.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-700/60 flex items-center space-x-1.5 text-[11px] text-slate-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  <span>Kualitas Utama HRD</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

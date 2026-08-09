import React from 'react';
import { Building2, ShoppingCart, Landmark, Calendar, MapPin, CheckCircle2, ChevronRight, Briefcase } from 'lucide-react';
import { candidateData } from '../data/candidateData';

export const Experience: React.FC = () => {
  const getExperienceIcon = (company: string) => {
    if (company.includes('BRI') || company.includes('BUMN')) {
      return Landmark;
    }
    if (company.includes('Tekizi') || company.includes('Toko Online')) {
      return ShoppingCart;
    }
    return Building2;
  };

  return (
    <section id="experience" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5 text-orange-600" />
            <span>Work History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pengalaman Kerja
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Rekam jejak profesional dalam bidang administrasi kantor, pengolahan data, pengelolaan stok opname, dan operasional e-commerce.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-8 top-6 bottom-6 w-0.5 bg-slate-200 hidden sm:block" />

          <div className="space-y-12">
            {candidateData.experiences.map((exp, idx) => {
              const IconComponent = getExperienceIcon(exp.company);

              return (
                <div key={exp.id} className="relative sm:pl-20 text-left group">
                  
                  {/* Timeline Badge Node */}
                  <div className="hidden sm:flex absolute left-0 top-0 w-16 h-16 rounded-2xl bg-slate-900 text-orange-400 border-4 border-white shadow-md items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Main Experience Card */}
                  <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 hover:border-orange-300 hover:shadow-md transition-all">
                    
                    {/* Header Row */}
                    <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-slate-200">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="sm:hidden p-1.5 rounded-lg bg-slate-900 text-orange-400">
                            <IconComponent className="w-4 h-4" />
                          </span>
                          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                            {exp.company}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mt-1">
                          {exp.role}
                        </h3>
                      </div>

                      <div className="flex items-center space-x-3 text-xs text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Summary Paragraph */}
                    <p className="text-slate-700 text-sm my-4 font-medium leading-relaxed bg-white p-3.5 rounded-xl border border-slate-100">
                      {exp.summary}
                    </p>

                    {/* Bullet Responsibilities */}
                    <div className="space-y-2.5 my-4">
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Tanggung Jawab &amp; Pencapaian Kerja:
                      </h4>
                      <ul className="space-y-2 text-slate-700 text-xs sm:text-sm">
                        {exp.responsibilities.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start space-x-2.5">
                            <ChevronRight className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skill Tags */}
                    <div className="pt-3 border-t border-slate-200/60 flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-semibold text-slate-400">Fokus:</span>
                      {exp.keySkillTags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-white text-slate-700 border border-slate-200 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

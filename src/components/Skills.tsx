import React, { useState } from 'react';
import { FileCheck, Database, Sliders, MessageSquare, CheckCircle2, Wrench } from 'lucide-react';
import { candidateData } from '../data/candidateData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const getCategoryIcon = (name: string) => {
    switch (name) {
      case 'ADMINISTRATION':
        return FileCheck;
      case 'DATA & OFFICE':
        return Database;
      case 'OPERATIONS':
        return Sliders;
      case 'COMMUNICATION':
        return MessageSquare;
      default:
        return Wrench;
    }
  };

  const filteredCategories = selectedCategory === 'ALL'
    ? candidateData.skillCategories
    : candidateData.skillCategories.filter(cat => cat.categoryName === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5 text-orange-600" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Keahlian &amp; Kompetensi
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Daftar penguasaan alat, administrasi, software perkantoran, dan kemampuan operasional yang teruji dalam pekerjaan harian.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setSelectedCategory('ALL')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === 'ALL'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            Semua Keahlian
          </button>
          {candidateData.skillCategories.map(cat => (
            <button
              key={cat.categoryName}
              onClick={() => setSelectedCategory(cat.categoryName)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat.categoryName
                  ? 'bg-orange-600 text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat.categoryName}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {filteredCategories.map(cat => {
            const IconComponent = getCategoryIcon(cat.categoryName);

            return (
              <div
                key={cat.categoryName}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 pb-4 mb-6 border-b border-slate-100">
                  <div className="p-3 rounded-xl bg-orange-100 text-orange-600">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {cat.categoryName}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skill Items List */}
                <div className="space-y-4">
                  {cat.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-300 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                          <span className="text-sm font-bold text-slate-900">
                            {skill.name}
                          </span>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-md bg-slate-200 text-slate-800 font-mono text-[11px] font-semibold">
                          {skill.level}
                        </span>
                      </div>
                      {skill.description && (
                        <p className="text-xs text-slate-600 mt-1.5 pl-6">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

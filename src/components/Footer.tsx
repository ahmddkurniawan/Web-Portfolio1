import React from 'react';
import { ArrowUp, Mail, Phone, Linkedin, FileText, Download } from 'lucide-react';
import { candidateData } from '../data/candidateData';
import { generateCvPdf } from '../utils/pdfGenerator';

interface FooterProps {
  onOpenCvModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCvModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800 text-left">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-orange-600 text-white font-bold flex items-center justify-center text-base">
                AK
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Ahmad Kurnia (ab)
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Portfolio resmi kandidat posisi Operations &amp; Administration Officer, Administrative Staff, dan Operations Staff. Berpengalaman dalam pengelolaan stok, faktur, entri data, dan e-commerce admin.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href={candidateData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${candidateData.contact.email}`}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={candidateData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigasi Halaman
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-orange-400 transition-colors">
                  Tentang Ahmad
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('experience')} className="hover:text-orange-400 transition-colors">
                  Pengalaman Kerja
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('skills')} className="hover:text-orange-400 transition-colors">
                  Keahlian &amp; Tools
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('certificates')} className="hover:text-orange-400 transition-colors">
                  Sertifikat Komputer
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('highlights')} className="hover:text-orange-400 transition-colors">
                  Work Highlights
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('education')} className="hover:text-orange-400 transition-colors">
                  Pendidikan Terakhir
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick CV Actions */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Dokumen HRD
            </h4>
            
            <div className="space-y-2">
              <button
                onClick={generateCvPdf}
                className="w-full flex items-center justify-center space-x-2 py-2.5 px-3 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-semibold text-xs transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Unduh CV (PDF)</span>
              </button>

              <button
                onClick={onOpenCvModal}
                className="w-full flex items-center justify-center space-x-2 py-2.5 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold text-xs border border-slate-800 transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-orange-400" />
                <span>Pratinjau CV Modal</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Rights Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Ahmad Kurnia (ab). Operations &amp; Administration Officer Portfolio.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 hover:text-white transition-colors text-xs"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5 text-orange-400" />
          </button>
        </div>

      </div>
    </footer>
  );
};

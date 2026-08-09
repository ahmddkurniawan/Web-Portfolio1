import React from 'react';
import { X, Download, Printer, CheckCircle2, ShieldCheck, Mail, Phone, MapPin, Linkedin, ExternalLink } from 'lucide-react';
import { candidateData } from '../data/candidateData';
import { generateCvPdf } from '../utils/pdfGenerator';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-orange-400" />
            <span className="text-sm font-bold tracking-wide">
              Document Preview: Curriculum Vitae Resmi - Ahmad Kurnia
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={generateCvPdf}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-xs font-semibold shadow-sm transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Unduh PDF</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Cetak</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body - Document Paper Style */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-left bg-slate-50 font-sans text-slate-900">
          
          <div className="bg-white p-6 sm:p-10 rounded-xl border border-slate-200 shadow-sm space-y-8 max-w-3xl mx-auto">
            
            {/* CV Title & Header */}
            <div className="border-b-2 border-slate-900 pb-6 space-y-2">
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                CURRICULUM VITAE
              </h1>
              <h2 className="text-xl font-bold text-slate-800">
                {candidateData.name}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-slate-600">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{candidateData.contact.address}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Telepon: {candidateData.contact.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Email: {candidateData.contact.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Linkedin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <a href={candidateData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
                    linkedin.com/in/ahmaddkurnia
                  </a>
                </div>
              </div>
            </div>

            {/* Profil Singkat */}
            <div className="space-y-2">
              <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider bg-slate-100 p-2 rounded border-l-4 border-orange-500">
                PROFIL SINGKAT
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-1">
                Lulusan SMA &amp; S1 Bisnis Digital dengan keahlian menengah di bidang komputer, terutama dalam penggunaan Microsoft Office, manajemen data, dan pengoperasian sistem komputer dasar. Teliti, cepat belajar, dan mampu bekerja dengan baik dalam tim maupun mandiri. Memiliki pengalaman sebagai admin toko online, magang di bagian administrasi kantor, serta bekerja di salah satu perusahaan distributor kesehatan sebagai staff administrasi.
              </p>
            </div>

            {/* Keahlian Komputer */}
            <div className="space-y-2">
              <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider bg-slate-100 p-2 rounded border-l-4 border-orange-500">
                KEAHLIAN KOMPUTER
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 pt-1">
                <li className="flex items-start space-x-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>Microsoft Word &amp; Excel (pengolahan dokumen, tabel, rumus dasar)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>PowerPoint (pembuatan presentasi sederhana)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>Google Workspace (Drive, Docs, Sheets, Calendar)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>Dasar pengelolaan file dan folder di komputer</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>Dasar desain menggunakan Canva</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>Familiar dengan penggunaan media sosial dan e-mail profesional</span>
                </li>
              </ul>
            </div>

            {/* Pengalaman Kerja */}
            <div className="space-y-4">
              <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider bg-slate-100 p-2 rounded border-l-4 border-orange-500">
                PENGALAMAN KERJA
              </h3>

              {candidateData.experiences.map((exp) => (
                <div key={exp.id} className="space-y-2 pb-3 border-b border-slate-200 last:border-0">
                  <div className="flex flex-wrap justify-between items-baseline">
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">
                      {exp.role} - <span className="text-orange-600">{exp.company}</span>
                    </h4>
                    <span className="text-xs font-semibold text-slate-500">
                      ( {exp.period} )
                    </span>
                  </div>

                  <ul className="space-y-1 text-xs text-slate-700 pl-2">
                    {exp.responsibilities.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start space-x-2">
                        <span className="text-slate-400 font-bold">•</span>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Pendidikan */}
            <div className="space-y-3">
              <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider bg-slate-100 p-2 rounded border-l-4 border-orange-500">
                PENDIDIKAN
              </h3>

              <div className="space-y-2 text-xs sm:text-sm text-slate-800">
                <div>
                  <p className="font-bold text-slate-900">Universitas Negeri Makassar (2026)</p>
                  <p className="text-slate-600">Bisnis Digital S1 – IPK 3.61</p>
                </div>
                <div>
                  <p className="font-bold text-slate-900">SMA Negeri 1 Bantaeng (2021)</p>
                  <p className="text-slate-600">MIPA – Nilai 86.91</p>
                </div>
              </div>
            </div>

            {/* Sertifikat */}
            <div className="space-y-2">
              <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider bg-slate-100 p-2 rounded border-l-4 border-orange-500">
                SERTIFIKAT
              </h3>

              <ul className="space-y-1.5 text-xs text-slate-700 pt-1">
                {candidateData.certifications.map((cert) => (
                  <li key={cert.id} className="flex items-center space-x-2">
                    <span className="text-orange-500 font-bold">•</span>
                    <span>{cert.title} - {cert.issuer} ({cert.year})</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Modal Bottom Bar */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 shrink-0">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Format CV Resmi Siap Dikirim ke HRD</span>
          </div>

          <button
            onClick={generateCvPdf}
            className="px-5 py-2 rounded-xl bg-orange-600 text-white font-semibold hover:bg-orange-500 transition-colors shadow-sm"
          >
            Unduh Dokumen CV (PDF)
          </button>
        </div>

      </div>
    </div>
  );
};

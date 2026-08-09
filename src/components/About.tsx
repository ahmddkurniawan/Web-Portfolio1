import React from 'react';
import { UserCheck, FileText, Download, CheckCircle, Database, Package, ShieldCheck, Cpu } from 'lucide-react';
import { candidateData } from '../data/candidateData';
import { generateCvPdf } from '../utils/pdfGenerator';

interface AboutProps {
  onOpenCvModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenCvModal }) => {
  const focusAreas = [
    { title: "Administrasi Kantor", desc: "Penyusunan dokumen, laporan aktivitas harian, dan tata kelola korespondensi.", icon: FileText },
    { title: "Data Management", desc: "Entri data berakurasi tinggi, pembuatan rekonsiliasi, dan manajemen basis data nasabah/pelanggan.", icon: Database },
    { title: "Inventory & Stok", desc: "Laporan stok opname teratur, pencocokan stok fisik vs sistem, dan kontrol selisih barang.", icon: Package },
    { title: "Pengarsipan Dokumen", desc: "Penataan arsip dokumen fisik & digital yang terklasifikasi dan aman.", icon: ShieldCheck },
    { title: "Operational Support", desc: "Mendukung kelancaran aktivitas toko online & harian operasional perusahaan.", icon: Cpu },
    { title: "Microsoft & Google Office", desc: "Penguasaan Microsoft Office (Word, Excel, PPT) dan Google Workspace (Sheets, Drive, Docs).", icon: UserCheck }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider">
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tentang Ahmad Kurnia
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Kandidat siap kerja dengan spesialisasi di bidang administrasi, manajemen data, laporan inventaris, serta operasional harian.
          </p>
        </div>

        {/* Profile Card & Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Bio Description Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6 text-left">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center space-x-2">
                <UserCheck className="w-5 h-5 text-orange-600" />
                <span>Ringkasan Profil Profesional</span>
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {candidateData.profileSummary}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
                Fokus Keahlian Utama
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {focusAreas.map((area, idx) => {
                  const IconComp = area.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-orange-300 transition-colors flex items-start space-x-3"
                    >
                      <div className="p-2 rounded-lg bg-orange-100 text-orange-600 shrink-0 mt-0.5">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-slate-900">{area.title}</h5>
                        <p className="text-[11px] text-slate-600 leading-snug mt-1">{area.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Verification Note */}
            <div className="p-4 rounded-xl bg-slate-900 text-slate-200 text-xs flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Seluruh riwayat pengalaman dan kualifikasi tersinkronisasi akurat dengan CV resmi.</span>
              </div>
              <button
                id="about-view-cv-btn"
                onClick={onOpenCvModal}
                className="text-orange-400 hover:text-orange-300 font-semibold underline underline-offset-2 shrink-0 text-xs"
              >
                Pratinjau CV
              </button>
            </div>
          </div>

          {/* Right Card: Quick Credentials & Download CV Card */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-lg space-y-6 text-left">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider block">
                Synchronized Profile CV
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                Kualifikasi &amp; Kontak HRD
              </h3>
            </div>

            <dl className="space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <dt className="text-slate-400">Pendidikan Terakhir</dt>
                <dd className="font-semibold text-white">S1 Bisnis Digital (UNM)</dd>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <dt className="text-slate-400">IPK Kelulusan</dt>
                <dd className="font-semibold text-orange-400">3.61 / 4.00</dd>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <dt className="text-slate-400">Lokasi Domisili</dt>
                <dd className="font-semibold text-white">Makassar, Sulawesi Selatan</dd>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-800">
                <dt className="text-slate-400">Status Kerja</dt>
                <dd className="font-semibold text-emerald-400">Siap Langsung Bekerja</dd>
              </div>
              <div className="flex justify-between py-1.5">
                <dt className="text-slate-400">Sertifikasi Komputer</dt>
                <dd className="font-semibold text-white">4 Sertifikat Terverifikasi</dd>
              </div>
            </dl>

            <div className="pt-2 space-y-3">
              <button
                id="about-download-pdf-btn"
                onClick={generateCvPdf}
                className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-semibold text-xs transition-all shadow-md active:scale-98"
              >
                <Download className="w-4 h-4" />
                <span>Unduh CV Resmi Ahmad Kurnia (PDF)</span>
              </button>

              <button
                id="about-open-cv-modal-btn"
                onClick={onOpenCvModal}
                className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs border border-slate-700 transition-colors"
              >
                <FileText className="w-4 h-4 text-orange-400" />
                <span>Buka Dokumen CV dalam Modal</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

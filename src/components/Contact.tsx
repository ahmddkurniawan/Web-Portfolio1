import React, { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, Copy, Check, MessageSquare, Download, ArrowUpRight } from 'lucide-react';
import { candidateData } from '../data/candidateData';
import { generateCvPdf } from '../utils/pdfGenerator';

export const Contact: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [msgRole, setMsgRole] = useState('Operations & Administration Officer');
  const [msgCompany, setMsgCompany] = useState('');
  const [msgNote, setMsgNote] = useState('');

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSendWa = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo Ahmad Kurnia, kami dari ${msgCompany || 'Perusahaan'} tertarik dengan profil Anda untuk posisi ${msgRole}. ${msgNote ? `Catatan: ${msgNote}` : ''}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/62882019940233?text=${encoded}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-4 h-4" />
            <span>Direct Hiring Channel</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Let's Work Together
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Ahmad Kurnia terbuka untuk diskusi posisi Administrasi, Operasional, Laporan Inventaris, dan Admin Toko Online. Hubungi langsung melalui channel berikut:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between hover:border-orange-300 transition-colors">
              <div className="flex items-center space-x-3.5">
                <div className="p-3 rounded-xl bg-orange-100 text-orange-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Email Resmi
                  </span>
                  <a
                    href={`mailto:${candidateData.contact.email}`}
                    className="text-sm font-bold text-slate-900 hover:text-orange-600 transition-colors break-all"
                  >
                    {candidateData.contact.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(candidateData.contact.email, 'email')}
                className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg shrink-0 transition-colors"
                title="Salin Email"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between hover:border-orange-300 transition-colors">
              <div className="flex items-center space-x-3.5">
                <div className="p-3 rounded-xl bg-emerald-100 text-emerald-600 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    WhatsApp &amp; Telepon
                  </span>
                  <a
                    href={candidateData.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-slate-900 hover:text-emerald-600 transition-colors"
                  >
                    {candidateData.contact.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(candidateData.contact.phone, 'phone')}
                className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg shrink-0 transition-colors"
                title="Salin Nomor Phone"
              >
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn Card */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between hover:border-orange-300 transition-colors">
              <div className="flex items-center space-x-3.5">
                <div className="p-3 rounded-xl bg-blue-100 text-blue-600 shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    LinkedIn Profil
                  </span>
                  <a
                    href={candidateData.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors flex items-center space-x-1"
                  >
                    <span>linkedin.com/in/ahmaddkurnia</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-3.5">
              <div className="p-3 rounded-xl bg-slate-100 text-slate-600 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Lokasi Alamat
                </span>
                <p className="text-xs font-semibold text-slate-800 leading-snug">
                  {candidateData.contact.address}
                </p>
              </div>
            </div>

            {/* Download Button */}
            <button
              onClick={generateCvPdf}
              className="w-full flex items-center justify-center space-x-2 py-3.5 px-4 rounded-xl bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 shadow-md transition-colors"
            >
              <Download className="w-4 h-4 text-orange-400" />
              <span>Unduh Curriculum Vitae (PDF Resmi)</span>
            </button>

          </div>

          {/* Right Column: Instant HRD Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                Kirim Pesan / Undangan Wawancara HRD
              </h3>
              <p className="text-xs text-slate-500">
                Isi form singkat ini untuk langsung mengirim pesan rekrutmen via WhatsApp ke WhatsApp Ahmad Kurnia.
              </p>
            </div>

            <form onSubmit={handleSendWa} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Nama Perusahaan / Instansi
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: PT Indonesia Jaya / Rekruter BUMN"
                  value={msgCompany}
                  onChange={(e) => setMsgCompany(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Posisi yang Ditawarkan
                </label>
                <select
                  value={msgRole}
                  onChange={(e) => setMsgRole(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-white"
                >
                  <option value="Operations & Administration Officer">Operations &amp; Administration Officer</option>
                  <option value="Administrative Staff">Administrative Staff</option>
                  <option value="Operations Staff">Operations Staff</option>
                  <option value="Store / E-Commerce Admin">Store / E-Commerce Admin</option>
                  <option value="Posisi Administrasi Lainnya">Posisi Administrasi Lainnya</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Pesan Tambahan / Jadwal Interview (Opsional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tuliskan detail singkat tawaran atau pertanyaan..."
                  value={msgNote}
                  onChange={(e) => setMsgNote(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-md active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim via WhatsApp Direct</span>
                </button>

                <a
                  href={`mailto:${candidateData.contact.email}?subject=Undangan Interview - ${msgRole}&body=Halo Ahmad Kurnia,%0D%0AKami dari ${msgCompany || 'Perusahaan'} bermaksud mengundang Anda...`}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs border border-slate-200 transition-colors"
                >
                  <Mail className="w-4 h-4 text-slate-600" />
                  <span>Kirim via Email Client</span>
                </a>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

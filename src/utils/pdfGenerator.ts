import jsPDF from 'jspdf';
import { candidateData } from '../data/candidateData';

export function generateCvPdf(): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 18;
  const contentWidth = pageWidth - (margin * 2);
  let y = 20;

  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > 275) {
      doc.addPage();
      y = 20;
    }
  };

  // --- HEADER SECTION ---
  doc.setFillColor(15, 23, 42); // Navy Dark
  doc.rect(0, 0, pageWidth, 42, 'F');

  // Name
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.text('CURRICULUM VITAE', margin, 16);

  doc.setFontSize(14);
  doc.text(candidateData.name, margin, 24);

  // Subtitle / Contact summary
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(226, 232, 240);
  doc.text(`Email: ${candidateData.contact.email}  |  Telp/WA: ${candidateData.contact.phone}`, margin, 31);
  doc.text(`LinkedIn: linkedin.com/in/ahmaddkurnia  |  Alamat: ${candidateData.contact.address}`, margin, 36);

  y = 50;

  // Helper Section Title
  const addSectionHeader = (title: string) => {
    checkPageBreak(12);
    doc.setFillColor(241, 245, 249); // Slate-100
    doc.rect(margin, y, contentWidth, 7, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(15, 23, 42);
    doc.text(title.toUpperCase(), margin + 3, y + 5);

    // Accent line
    doc.setFillColor(234, 88, 12); // Orange accent
    doc.rect(margin, y, 2, 7, 'F');

    y += 11;
  };

  // --- PROFIL SINGKAT ---
  addSectionHeader('Profil Singkat');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(51, 65, 85);

  const profileLines = doc.splitTextToSize(
    "Lulusan SMA & S1 Bisnis Digital dengan keahlian di bidang administrasi, pengelolaan data, dokumen, stok, dan operasional. Memiliki kemampuan Microsoft Office, Google Workspace, pengarsipan dokumen, pengolahan data, serta administrasi toko online. Teliti, cepat belajar, komunikatif, dan mampu bekerja secara mandiri maupun dalam tim.",
    contentWidth
  );
  doc.text(profileLines, margin, y);
  y += profileLines.length * 5 + 4;

  // --- KEAHLIAN KOMPUTER & ADMINISTRASI ---
  addSectionHeader('Keahlian Komputer & Administrasi');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(30, 41, 59);

  const skillsList = [
    "• Microsoft Word & Excel (pengolahan dokumen, tabel, formula, VLOOKUP/Pivot)",
    "• PowerPoint (pembuatan presentasi sederhana & informatif)",
    "• Google Workspace (Drive, Docs, Sheets, Calendar, Gmail)",
    "• Dasar pengelolaan file dan folder di komputer (penataan & struktur arsip)",
    "• Dasar desain menggunakan Canva (materi visual administrasi)",
    "• Familiar dengan penggunaan media sosial dan e-mail profesional"
  ];

  skillsList.forEach(skill => {
    checkPageBreak(5);
    doc.text(skill, margin, y);
    y += 5;
  });
  y += 3;

  // --- PENGALAMAN KERJA ---
  addSectionHeader('Pengalaman Kerja');

  candidateData.experiences.forEach(exp => {
    checkPageBreak(18);

    // Role & Company Header
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(15, 23, 42);
    doc.text(`${exp.role} - ${exp.company}`, margin, y);

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(9);
    doc.setTextColor(100, 116, 139);
    doc.text(`( ${exp.period} )`, pageWidth - margin, y, { align: 'right' });
    y += 6;

    // Bullet points
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(51, 65, 85);

    exp.responsibilities.forEach(resp => {
      const respLines = doc.splitTextToSize(`• ${resp}`, contentWidth - 4);
      checkPageBreak(respLines.length * 4.5);
      doc.text(respLines, margin + 2, y);
      y += respLines.length * 4.5 + 1;
    });

    y += 4;
  });

  // --- PENDIDIKAN ---
  addSectionHeader('Pendidikan');

  candidateData.education.forEach(edu => {
    checkPageBreak(12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text(`${edu.institution} (${edu.year})`, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(71, 85, 105);
    y += 5;
    doc.text(`${edu.degree} (${edu.field}) – ${edu.grade}`, margin + 2, y);
    y += 6;
  });
  y += 2;

  // --- SERTIFIKAT ---
  addSectionHeader('Sertifikat');

  candidateData.certifications.forEach(cert => {
    checkPageBreak(6);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(30, 41, 59);
    doc.text(`• ${cert.title} - ${cert.issuer} (${cert.year})`, margin, y);
    y += 5;
  });

  // Save / Auto-Download
  doc.save('Ahmad_Kurnia_CV.pdf');
}

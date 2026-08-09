import {
  WorkExperience,
  EducationItem,
  CertificationItem,
  SkillCategory,
  WorkHighlight,
  WhyWorkPoint
} from '../types';

export const candidateData = {
  name: "Ahmad Kurnia (ab)",
  displayName: "Ahmad Kurnia",
  roleTitle: "Operations & Administration Professional",
  headline: "Operations & Administration Professional",
  subheadline: "Detail-oriented professional with experience in administration, data management, inventory reporting, and daily operations.",
  profileSummary: "Lulusan dengan pengalaman di bidang administrasi, pengelolaan data, dokumen, stok, dan operasional. Memiliki kemampuan Microsoft Office, Google Workspace, pengarsipan dokumen, pengolahan data, serta administrasi toko online. Teliti, cepat belajar, komunikatif, dan mampu bekerja secara mandiri maupun dalam tim.",
  
  contact: {
    email: "ahmad.kurniwn24@gmail.com",
    phone: "0882019940233",
    whatsappUrl: "https://wa.me/62882019940233",
    linkedin: "https://linkedin.com/in/ahmaddkurnia",
    address: "Jl. Beruang 51, Veteran Selatan, Makassar, Sulawesi Selatan",
    availability: "Ready for Immediate Join / Full-time"
  },

  targetRoles: [
    "Operations & Administration Officer",
    "Administrative Staff",
    "Operations Staff",
    "Store / Online Shop Administrator",
    "Inventory & Document Controller"
  ],

  stats: [
    { label: "IPK S1 Bisnis Digital", value: "3.61", subtitle: "Universitas Negeri Makassar" },
    { label: "Sertifikasi Profesional", value: "4", subtitle: "Office & Excel Analytics" },
    { label: "Pengalaman Kerja", value: "3 Roles", subtitle: "Admin, Ops & E-commerce" },
    { label: "Akurasi Data & Stok", value: "100%", subtitle: "Detail-oriented & Organized" }
  ],

  experiences: [
    {
      id: "exp-1",
      role: "Staff Administrasi",
      company: "PT Abadi Makmur Bersama",
      location: "Makassar",
      period: "Mei 2025 – Oktober 2025",
      startDate: "Mei 2025",
      endDate: "Oktober 2025",
      summary: "Mengelola laporan stok opname, rekonsiliasi data stok fisik dengan sistem, penyusunan laporan harian, serta penataan pengarsipan dokumen faktur.",
      responsibilities: [
        "Membuat dan menyusun laporan stok opname secara rutin dan terjadwal, menggantikan sistem pelaporan sebelumnya yang tidak teratur waktunya.",
        "Merapikan format laporan stok opname agar lebih sistematis dan mudah dipahami oleh atasan dan tim.",
        "Melakukan pengecekan dan pencocokan data stok fisik dengan data sistem secara berkala.",
        "Menyusun laporan aktivitas harian sebagai bentuk pertanggungjawaban dan monitoring pekerjaan.",
        "Membantu merapikan dan menyelesaikan dokumen faktur yang sebelumnya belum terselesaikan.",
        "Melakukan pengarsipan faktur yang telah dirapikan agar mudah ditelusuri kembali saat dibutuhkan.",
        "Berkoordinasi dengan bagian gudang terkait data stok untuk memastikan keakuratan laporan opname."
      ],
      keySkillTags: ["Stok Opname", "Faktur & Invoice", "Laporan Harian", "Rekonsiliasi Stok", "Sistem Pengarsipan"]
    },
    {
      id: "exp-2",
      role: "Staff Admin Toko Online",
      company: "Tekizi ID",
      location: "Makassar",
      period: "September 2024 – April 2025",
      startDate: "September 2024",
      endDate: "April 2025",
      summary: "Memimpin kerapian pencatatan stok dan pesanan di Google Sheets, mengelola layanan komunikasi pelanggan, serta penataan invoice harian.",
      responsibilities: [
        "Berhasil merapikan sistem pencatatan stok dan pesanan di Google Sheets sehingga meminimalisir kesalahan input dan selisih stok.",
        "Meningkatkan kecepatan respon chat dan email pelanggan, sehingga rata-rata waktu balas menjadi lebih cepat.",
        "Menjaga rating pelayanan pelanggan tetap baik berkat komunikasi yang responsif dan ramah.",
        "Mengarsipkan seluruh invoice pembelian harian secara konsisten tanpa ada dokumen yang tertinggal atau hilang.",
        "Membantu mengurangi komplain pelanggan terkait kesalahan stok atau pesanan berkat pengelolaan data yang lebih rapi.",
        "Berkontribusi dalam menjaga kelancaran operasional toko online sehari-hari, termasuk saat periode ramai pesanan."
      ],
      keySkillTags: ["Google Sheets", "Admin E-commerce", "Customer Service", "Pengarsipan Invoice", "Pengelolaan Pesanan"]
    },
    {
      id: "exp-3",
      role: "Magang Administrasi",
      company: "Rumah BUMN BRI Makassar",
      location: "Makassar",
      period: "Mei – Agustus 2024",
      startDate: "Mei 2024",
      endDate: "Agustus 2024",
      summary: "Mengelola entri data nasabah dengan akurasi tinggi, merapikan sistem arsip dokumen digital, serta menata ulang dokumen fisik.",
      responsibilities: [
        "Berhasil menginput data nasabah dengan tingkat akurasi tinggi dan minim kesalahan.",
        "Merapikan sistem pengarsipan dokumen digital sehingga lebih mudah dicari dan diakses oleh tim.",
        "Menata ulang arsip dokumen fisik yang sebelumnya belum tersusun rapi menjadi lebih sistematis dan terklasifikasi.",
        "Mempercepat proses pencarian dokumen nasabah saat dibutuhkan berkat sistem pengarsipan yang lebih baik.",
        "Membantu menjaga kerapian dan keamanan data nasabah sesuai prosedur perusahaan."
      ],
      keySkillTags: ["Data Entry Nasabah", "Arsip Digital", "Pengarsipan Fisik", "Akurasi Data", "Prosedur Keamanan"]
    }
  ] as WorkExperience[],

  skillCategories: [
    {
      categoryName: "ADMINISTRATION",
      description: "Kemampuan utama dalam tata kelola dokumen, pengarsipan, dan prosedur kantor.",
      skills: [
        { name: "Document Management", level: "Expert", description: "Penyusunan, pengelompokan, dan penataan arsip" },
        { name: "Data Entry", level: "Expert", description: "Penginputan data berakurasi tinggi & minim presisi" },
        { name: "Filing & Archiving", level: "Advanced", description: "Sistem pengarsipan digital & fisik terstruktur" },
        { name: "Invoice Management", level: "Advanced", description: "Pengolahan & rekonsiliasi faktur pembelian/penjualan" }
      ]
    },
    {
      categoryName: "DATA & OFFICE",
      description: "Penguasaan software perkantoran dan spreadsheet untuk analisis serta laporan.",
      skills: [
        { name: "Microsoft Excel", level: "Intermediate / Advanced", description: "Formula dasar-menengah, analisis data, & VLOOKUP/Pivot" },
        { name: "Microsoft Word", level: "Advanced", description: "Penyusunan dokumen formal, surat, & format rapi" },
        { name: "Microsoft PowerPoint", level: "Proficient", description: "Pembuatan slide presentasi ringkas & informatif" },
        { name: "Google Sheets", level: "Advanced", description: "Manajemen pesanan & stok real-time cloud" },
        { name: "Google Workspace", level: "Advanced", description: "Drive, Docs, Sheets, Calendar, & Gmail" }
      ]
    },
    {
      categoryName: "OPERATIONS",
      description: "Dukungan operasional harian, manajemen stok gudang, dan pelaporan.",
      skills: [
        { name: "Inventory Management", level: "Advanced", description: "Pencatatan & pemantauan jumlah barang" },
        { name: "Stock Reconciliation", level: "Advanced", description: "Pencocokan stok fisik vs data sistem" },
        { name: "Daily Reporting", level: "Advanced", description: "Penyusunan laporan aktivitas & pertanggungjawaban harian" },
        { name: "Operational Support", level: "Advanced", description: "Menjaga kelancaran ritme kerja operasional" }
      ]
    },
    {
      categoryName: "COMMUNICATION",
      description: "Interaksi profesional dengan rekan kerja, atasan, dan pelanggan.",
      skills: [
        { name: "Customer Service", level: "Proficient", description: "Respon cepat, ramah, & penyelesaian komplain" },
        { name: "Email Communication", level: "Proficient", description: "Etika korespondensi surel profesional" },
        { name: "Team Coordination", level: "Advanced", description: "Koordinasi efektif antar-departemen (Gudang/Admin)" },
        { name: "Basic Canva", level: "Basic", description: "Desain visual sederhana untuk materi administrasi" }
      ]
    }
  ] as SkillCategory[],

  certifications: [
    {
      id: "cert-1",
      title: "Creating Sales Analytics in Excel",
      issuer: "MySkill",
      year: "2026",
      category: "analytics"
    },
    {
      id: "cert-2",
      title: "Kursus Pelatihan Komputer Intermediate Excel",
      issuer: "CodingStudio",
      year: "2026",
      category: "excel"
    },
    {
      id: "cert-3",
      title: "Kursus Pelatihan Komputer Dasar Excel",
      issuer: "CodingStudio",
      year: "2024",
      category: "excel"
    },
    {
      id: "cert-4",
      title: "Pelatihan Microsoft Office Dasar",
      issuer: "LPK Komputer Pintar",
      year: "2022",
      category: "office"
    }
  ] as CertificationItem[],

  education: [
    {
      id: "edu-1",
      institution: "Universitas Negeri Makassar",
      degree: "S1 Bisnis Digital",
      field: "Fakultas Ekonomi dan Bisnis",
      grade: "IPK 3.61 / 4.00",
      year: "Lulus 2026",
      highlights: [
        "Fokus studi pada manajemen operasional digital, tata kelola data, dan sistem informasi bisnis.",
        "Meraih Indeks Prestasi Kumulatif (IPK) 3.61 dengan predikat Sangat Memuaskan."
      ]
    },
    {
      id: "edu-2",
      institution: "SMA Negeri 1 Bantaeng",
      degree: "Sekolah Menengah Atas",
      field: "Matematika dan Ilmu Pengetahuan Alam (MIPA)",
      grade: "Nilai Rata-rata 86.91",
      year: "2021",
      highlights: [
        "Memiliki keahlian dasar analitis, logika matematika, dan ketelitian tinggi sejak masa sekolah."
      ]
    }
  ] as EducationItem[],

  workHighlights: [
    {
      id: "wh-1",
      title: "Inventory Reporting Improvement",
      company: "PT Abadi Makmur Bersama",
      category: "Inventory & Reporting",
      description: "Membuat dan merapikan format laporan stok opname rutin, menggantikan sistem pelaporan lama yang tidak teratur agar lebih terstruktur dan mudah dipahami manajemen.",
      outcomes: [
        "Pelaporan stok opname menjadi terjadwal dan teratur secara berkala.",
        "Format laporan lebih rapi, memudahkan atasan dalam memantau selisih stok.",
        "Pencocokan data stok fisik dan sistem berjalan lebih akurat melalui koordinasi rutin dengan tim gudang."
      ],
      toolsUsed: ["Microsoft Excel", "Stok Opname", "Rekonsiliasi Data"]
    },
    {
      id: "wh-2",
      title: "Google Sheets Stock & Order Management",
      company: "Tekizi ID",
      category: "E-Commerce Administration",
      description: "Mengorganisir ulang pencatatan stok dan pesanan harian toko online menggunakan Google Sheets untuk menekan risiko kesalahan input.",
      outcomes: [
        "Meminimalisir kesalahan input data dan selisih stok secara signifikan.",
        "Menjaga konsistensi pengarsipan invoice harian tanpa ada dokumen yang hilang.",
        "Mendukung kelancaran operasional toko online bahkan saat lonjakan pesanan tinggi."
      ],
      toolsUsed: ["Google Sheets", "Google Drive", "Manajemen Invoice"]
    },
    {
      id: "wh-3",
      title: "Digital & Physical Document Archiving",
      company: "Rumah BUMN BRI Makassar",
      category: "Document Archiving",
      description: "Menata ulang sistem pengarsipan dokumen digital dan fisik nasabah menjadi terklasifikasi dan terstruktur dengan rapi.",
      outcomes: [
        "Mempercepat waktu pencarian dokumen nasabah saat dibutuhkan oleh tim.",
        "Arsip fisik teratur sesuai klasifikasi dan standar kerapian perusahaan.",
        "Menjaga keamanan data dan dokumen nasabah sesuai SOP."
      ],
      toolsUsed: ["Arsip Digital", "Pengarsipan Fisik", "Data Entry"]
    },
    {
      id: "wh-4",
      title: "Invoice & Billing Management",
      company: "PT Abadi Makmur Bersama & Tekizi ID",
      category: "Financial Administration",
      description: "Membantu merapikan, menyelesaikan, dan mengarsipkan dokumen faktur serta invoice harian secara tertib.",
      outcomes: [
        "Seluruh faktur tertunggak berhasil dirapikan dan diselesaikan.",
        "Dokumen faktur mudah ditelusuri kembali melalui penataan arsip yang rapi.",
        "Mendukung transparansi pencatatan transaksi harian."
      ],
      toolsUsed: ["Faktur / Invoice", "Pencatatan Harian", "Office Tool"]
    },
    {
      id: "wh-5",
      title: "Daily Activity Reporting System",
      company: "PT Abadi Makmur Bersama",
      category: "Operational Support",
      description: "Menyusun laporan aktivitas harian secara konsisten sebagai bentuk monitoring dan pertanggungjawaban progres pekerjaan harian.",
      outcomes: [
        "Aktivitas kerja harian terekam dengan jelas dan transparan.",
        "Memudahkan pemantauan tugas oleh atasan langsung.",
        "Meningkatkan kedisiplinan dan akuntabilitas kerja."
      ],
      toolsUsed: ["Laporan Harian", "Microsoft Word", "Monitoring Ops"]
    }
  ] as WorkHighlight[],

  whyWorkPoints: [
    {
      title: "Detail-Oriented (Teliti)",
      subtitle: "Minim Kesalahan & Presisi",
      description: "Terbiasa melakukan verifikasi ganda pada data stok, invoice, dan entri nasabah untuk memastikan tidak ada selisih atau kesalahan input.",
      iconName: "CheckCircle2"
    },
    {
      title: "Organized (Terorganisir)",
      subtitle: "Sistem Pengarsipan Rapi",
      description: "Mampu menyusun dokumen fisik maupun file digital dengan sistematis sehingga mudah dicari dan diakses kembali sewaktu-waktu.",
      iconName: "FolderKanban"
    },
    {
      title: "Fast Learner (Cepat Belajar)",
      subtitle: "Adaptif Terhadap Sistem",
      description: "S1 Bisnis Digital dengan kemampuan cepat memahami software baru, Google Workspace, Excel analytics, serta SOP perusahaan.",
      iconName: "Zap"
    },
    {
      title: "Reliable Team Player (Dapat Diandalkan)",
      subtitle: "Komunikasi & Kolaborasi",
      description: "Terbiasa berkoordinasi lintas fungsi (seperti tim gudang, customer service, & manajemen) untuk menjaga operasional tetap lancar.",
      iconName: "Users"
    }
  ] as WhyWorkPoint[]
};

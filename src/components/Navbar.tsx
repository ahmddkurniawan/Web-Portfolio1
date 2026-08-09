import React, { useState, useEffect } from 'react';
import { Download, Menu, X, FileText, CheckCircle } from 'lucide-react';
import { generateCvPdf } from '../utils/pdfGenerator';

interface NavbarProps {
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'highlights', label: 'Work Highlights' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(navLinks[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCv = () => {
    generateCvPdf();
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800 text-white'
          : 'bg-slate-900 text-white border-b border-slate-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Brand */}
          <button
            id="nav-logo-btn"
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-3 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
              AK
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-orange-400 transition-colors">
                Ahmad Kurnia
              </span>
              <span className="block text-xs text-slate-400 font-medium">
                Operations &amp; Admin
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map(link => (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => scrollToSection(link.id)}
                className={`px-3 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                  activeSection === link.id
                    ? 'text-orange-400 bg-slate-800/80 shadow-inner'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              id="nav-view-cv-btn"
              onClick={onOpenCvModal}
              className="inline-flex items-center space-x-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-orange-400" />
              <span>Lihat CV</span>
            </button>

            <button
              id="nav-download-cv-btn"
              onClick={handleDownloadCv}
              className="inline-flex items-center space-x-2 text-xs font-semibold px-4 py-2 rounded-lg bg-orange-600 text-white hover:bg-orange-500 shadow-md shadow-orange-600/20 active:scale-95 transition-all"
            >
              {downloadSuccess ? (
                <>
                  <CheckCircle className="w-4 h-4 text-white" />
                  <span>CV Terunduh!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Unduh CV</span>
                </>
              )}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              id="mobile-download-cv-btn"
              onClick={handleDownloadCv}
              className="p-2 text-orange-400 hover:bg-slate-800 rounded-lg sm:hidden"
              title="Unduh CV"
            >
              <Download className="w-5 h-5" />
            </button>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div id="mobile-drawer" className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-2 shadow-2xl">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-3">
            {navLinks.map(link => (
              <button
                key={link.id}
                id={`mobile-nav-link-${link.id}`}
                onClick={() => scrollToSection(link.id)}
                className={`text-left px-3 py-2.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeSection === link.id
                    ? 'bg-orange-600 text-white'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800 flex flex-col space-y-2">
            <button
              id="mobile-drawer-view-cv"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-lg border border-slate-700 text-slate-200 text-xs font-semibold hover:bg-slate-800"
            >
              <FileText className="w-4 h-4 text-orange-400" />
              <span>Lihat CV Lengkap</span>
            </button>

            <button
              id="mobile-drawer-download-cv"
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleDownloadCv();
              }}
              className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-lg bg-orange-600 text-white text-xs font-semibold hover:bg-orange-500"
            >
              <Download className="w-4 h-4" />
              <span>Unduh CV (PDF)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

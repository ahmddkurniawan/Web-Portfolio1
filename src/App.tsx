import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { WorkHighlights } from './components/WorkHighlights';
import { Education } from './components/Education';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { Contact } from './components/Contact';
import { CvModal } from './components/CvModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  const handleOpenCvModal = () => {
    setIsCvModalOpen(true);
  };

  const handleCloseCvModal = () => {
    setIsCvModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-orange-500 selection:text-white flex flex-col justify-between">
      <div>
        {/* Sticky Top Navbar */}
        <Navbar onOpenCvModal={handleOpenCvModal} />

        {/* Page Sections */}
        <main>
          <Hero onOpenCvModal={handleOpenCvModal} />
          <About onOpenCvModal={handleOpenCvModal} />
          <Experience />
          <Skills />
          <Certifications />
          <WorkHighlights />
          <Education />
          <WhyWorkWithMe />
          <Contact />
        </main>
      </div>

      {/* Footer */}
      <Footer onOpenCvModal={handleOpenCvModal} />

      {/* CV Interactive Modal Viewer */}
      <CvModal isOpen={isCvModalOpen} onClose={handleCloseCvModal} />
    </div>
  );
}

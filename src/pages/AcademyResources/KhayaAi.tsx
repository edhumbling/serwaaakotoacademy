import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const KhayaAi = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="w-full h-[calc(100vh-64px)]">
          <iframe
            src="https://translate.ghananlp.org/"
            className="w-full h-full border-0"
            title="KHAYA AI Translator"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default KhayaAi;

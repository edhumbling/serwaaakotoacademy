
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AndiSearch = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="w-full h-[calc(100vh-64px)]">
          <iframe
            src="https://andisearch.com"
            className="w-full h-full border-0"
            title="Andi Search Tool"
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

export default AndiSearch;

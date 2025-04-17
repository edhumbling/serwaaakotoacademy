import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import ScrollButton from '@/components/ScrollButton';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Gallery />
        <Contact />
      </main>
      <ScrollButton />
      <Footer />
    </div>
  );
};

export default Index;
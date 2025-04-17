import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Gallery />
        <Contact />
        <WhatsAppButton phoneNumber="233547798816" />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
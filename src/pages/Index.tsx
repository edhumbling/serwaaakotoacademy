import React from 'react';
import MainLayout from '@/components/MainLayout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Gallery />
      <Contact />
    </MainLayout>
  );
};

export default Index;
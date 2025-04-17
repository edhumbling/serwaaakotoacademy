import React from 'react';
import Navbar from './Navbar';
import RevealFooter from './RevealFooter';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pb-0">
        {children}
      </main>
      <div className="h-20 md:h-24 lg:h-28"></div> {/* Spacer for the footer */}
      <RevealFooter />
    </div>
  );
};

export default MainLayout;

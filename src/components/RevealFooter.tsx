import React, { useState, useEffect, useRef } from 'react';
import Footer from './Footer';

const RevealFooter: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const footerHeight = useRef(0);

  useEffect(() => {
    // Get the footer height once it's mounted
    if (footerRef.current) {
      footerHeight.current = footerRef.current.offsetHeight;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > lastScrollY.current ? 'down' : 'up';
      lastScrollY.current = currentScrollY;

      // Check if we're near the bottom of the page
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isBottom = scrollPosition >= documentHeight - 100; // 100px threshold

      setIsAtBottom(isBottom);

      // Show footer when scrolling up or at the bottom of the page
      if (scrollDirection === 'up' || isBottom) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={footerRef}
      className={`fixed bottom-0 left-0 right-0 z-40 ${
        isVisible ? 'animate-gate-reveal' : 'translate-y-full opacity-90 transition-all duration-500 ease-in-out'
      }`}
      style={{
        willChange: 'transform, opacity',
        transformOrigin: 'bottom',
        backdropFilter: 'blur(5px)'
      }}
    >
      <Footer />

      {/* Pull tab indicator - only shown when footer is hidden and not at bottom */}
      {!isVisible && !isAtBottom && (
        <div
          className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-t-lg cursor-pointer flex items-center space-x-2 hover:bg-gray-800 transition-colors animate-bounce"
          onClick={() => setIsVisible(true)}
        >
          <span>Pull Up Footer</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default RevealFooter;

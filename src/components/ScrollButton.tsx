import React, { useState, useEffect } from 'react';

const ScrollButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
      setIsAtTop(window.pageYOffset < 300);
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToPosition = (position: 'top' | 'bottom') => {
    window.scrollTo({
      top: position === 'top' ? 0 : document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={() => scrollToPosition(isAtTop ? 'bottom' : 'top')}
      className={`fixed bottom-32 right-6 z-40 flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-sm bg-white/30 border border-white/20 shadow-lg hover:bg-white/40 transition-all duration-300 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      aria-label={`Scroll to ${isAtTop ? 'bottom' : 'top'}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`w-6 h-6 text-gray-800 transition-transform duration-300 ${isAtTop ? 'rotate-180' : ''}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
      <span className="absolute -top-8 right-0 bg-black/75 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {isAtTop ? 'Scroll to Bottom' : 'Scroll to Top'}
      </span>
    </button>
  );
};

export default ScrollButton;
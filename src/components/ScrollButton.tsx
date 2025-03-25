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
      className={`fixed bottom-28 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-school-seaBlue shadow-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-110 group ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      aria-label={`Scroll to ${isAtTop ? 'bottom' : 'top'}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className={`w-6 h-6 transition-transform duration-300 ${isAtTop ? 'rotate-180' : ''}`}
      >
        <path
          d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
        />
      </svg>
    </button>
  );
};

export default ScrollButton;
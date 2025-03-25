
import { useEffect } from 'react';

interface SplashCursorProps {
  color?: string;
  size?: number;
  duration?: number;
}

const SplashCursor = ({
  color = 'rgba(58, 151, 212, 0.6)', // school-seaBlue with some transparency
  size = 30,
  duration = 1000,
}: SplashCursorProps) => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const splash = document.createElement('div');
      splash.className = 'splash-cursor';
      splash.style.left = `${e.clientX - size / 2}px`;
      splash.style.top = `${e.clientY - size / 2}px`;
      splash.style.width = `${size}px`;
      splash.style.height = `${size}px`;
      splash.style.backgroundColor = color;
      splash.style.position = 'fixed';
      splash.style.borderRadius = '50%';
      splash.style.pointerEvents = 'none';
      splash.style.zIndex = '9999';
      splash.style.transform = 'scale(0)';
      splash.style.animation = `splash ${duration}ms ease-out forwards`;
      
      document.body.appendChild(splash);
      
      setTimeout(() => {
        document.body.removeChild(splash);
      }, duration);
    };
    
    // Add the animation style
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes splash {
        0% {
          transform: scale(0);
          opacity: 0.8;
        }
        100% {
          transform: scale(1.5);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
    
    document.addEventListener('click', handleMouseMove);
    
    return () => {
      document.removeEventListener('click', handleMouseMove);
      document.head.removeChild(style);
    };
  }, [color, size, duration]);
  
  return null;
};

export default SplashCursor;

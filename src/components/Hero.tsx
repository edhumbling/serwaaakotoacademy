
import { useEffect, useState } from 'react';
import ImageWithLoader from './ImageWithLoader';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithLoader
          src="https://ik.imagekit.io/humbling/creche/WhatsApp%20Image%202025-03-21%20at%2018.12.33_79e96afc.jpg?updatedAt=1742906298307"
          alt="School Children"
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className={cn(
            "text-white max-w-xl transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="inline-block px-4 py-1 rounded-full bg-school-green/20 border border-school-green/30 text-white backdrop-blur-sm text-sm mb-4 animate-pulse-gentle">
              Welcome to excellence in education
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 leading-tight">
              Serwaa Akoto Academy
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-md">
              Providing inclusive and equitable quality formal education and training for the future leaders of tomorrow.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#about" className="btn-primary">
                Discover More
              </a>
              <a href="#contact" className="btn-outline border-white text-white hover:bg-white/10">
                Contact Us
              </a>
            </div>
          </div>

          <div className={cn(
            "relative lg:block hidden transition-all duration-1000 delay-300",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          )}>
            <div className="glass rounded-2xl overflow-hidden shadow-xl rotate-3 transform hover:rotate-0 transition-all duration-500">
              <ImageWithLoader
                src="https://ik.imagekit.io/humbling/creche/WhatsApp%20Image%202025-03-21%20at%2018.12.27_964ef960.jpg?updatedAt=1742906298570"
                alt="Serwaa Akoto Academy Students"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl overflow-hidden shadow-xl -rotate-3 transform hover:rotate-0 transition-all duration-500 w-48 h-48">
              <div className="p-4 text-white backdrop-blur-md bg-school-seaBlue/70 h-full flex flex-col justify-center items-center">
                <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
                <p className="text-sm">Quality education for all children</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center animate-bounce">
        <span className="text-sm mb-2">Scroll Down</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

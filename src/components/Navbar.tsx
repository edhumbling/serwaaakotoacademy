
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import ImageWithLoader from './ImageWithLoader';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper function to handle navigation for section links
  const handleSectionNavigation = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();

    // If we're on the home page, scroll to the section
    if (location.pathname === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
        return;
      }
    }

    // If we're on another page, navigate to home page with the section hash
    window.location.href = `/${sectionId === 'about' ? '#about' : sectionId === 'gallery' ? '#gallery' : '#contact'}`;
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-2',
        isScrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-md py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <ImageWithLoader
            src="https://ik.imagekit.io/humbling/WhatsApp%20Image%202025-03-24%20at%2012.03.34_91c72f1d.jpg?updatedAt=1742906038933"
            alt="Serwaa Akoto Academy Logo"
            className="w-10 h-10 rounded-full object-cover"
            containerClassName="w-10 h-10 rounded-full overflow-hidden"
            priority
          />
          <span className={cn(
            "font-heading font-semibold transition-all duration-300",
            isScrolled ? "text-gray-900 text-lg" : "text-white text-xl",
          )}>
            Serwaa Akoto Academy
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <Link to="/" className="nav-link">Home</Link>
          <a href="#about" className="nav-link" onClick={(e) => handleSectionNavigation(e, 'about')}>About</a>
          <a href="#gallery" className="nav-link" onClick={(e) => handleSectionNavigation(e, 'gallery')}>Gallery</a>
          <Link to="/ghanaian-education" className="nav-link">Education</Link>
          <Link to="/ai-search" className="nav-link">AI Search</Link>
          <Link to="/academy-resources" className="nav-link">Resources</Link>
          <Link to="/stem-resources" className="nav-link">STEM</Link>
          <Link to="/apply-for-job" className="nav-link">Careers</Link>
          <a href="#contact" className="nav-link" onClick={(e) => handleSectionNavigation(e, 'contact')}>Contact</a>
          <Link
            to="/enroll-now"
            className="ml-4 btn-primary"
          >
            Enroll Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden absolute left-0 right-0 bg-white/90 backdrop-blur-lg shadow-lg transition-all duration-300 overflow-hidden",
        isMenuOpen ? "max-h-[500px] border-b border-gray-200" : "max-h-0"
      )}>
        <nav className="flex flex-col space-y-2 px-4 py-4">
          {/* Prominent Enroll Now Button at the top */}
          <Link
            to="/enroll-now"
            className="px-4 py-3 bg-school-seaBlue text-white rounded-md text-center font-medium text-base mb-2 shadow-md hover:bg-school-seaBlue/90 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Enroll Now
          </Link>

          <div className="border-t border-gray-200 my-2 pt-2"></div>

          <Link
            to="/"
            className="px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <a
            href="#about"
            className="px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
            onClick={(e) => handleSectionNavigation(e, 'about')}
          >
            About
          </a>
          <a
            href="#gallery"
            className="px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
            onClick={(e) => handleSectionNavigation(e, 'gallery')}
          >
            Gallery
          </a>
          <Link
            to="/ghanaian-education"
            className="px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Education
          </Link>
          <Link
            to="/ai-search"
            className="px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            AI Search
          </Link>
          <Link
            to="/academy-resources"
            className="px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Resources
          </Link>
          <Link
            to="/stem-resources"
            className="px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            STEM
          </Link>
          <a
            href="#contact"
            className="px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
            onClick={(e) => handleSectionNavigation(e, 'contact')}
          >
            Contact
          </a>
          <Link
            to="/apply-for-job"
            className="px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Careers
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

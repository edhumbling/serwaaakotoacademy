
import { Link } from 'react-router-dom';
import ImageWithLoader from './ImageWithLoader';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="content-container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <ImageWithLoader
                src="https://ik.imagekit.io/humbling/WhatsApp%20Image%202025-03-24%20at%2012.03.34_91c72f1d.jpg?updatedAt=1742906038933"
                alt="Serwaa Akoto Academy Logo"
                className="w-10 h-10 rounded-full object-cover"
                containerClassName="w-10 h-10 rounded-full overflow-hidden bg-white"
              />
              <span className="font-heading font-bold text-xl">
                Serwaa Akoto Academy
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Providing inclusive and equitable quality formal education and training for the future leaders of tomorrow.
            </p>
            <div className="pt-2">
              <a 
                href="https://wa.me/233547798816"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#25D366] hover:bg-[#25D366]/90 transition-colors"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24" 
                  fill="white" 
                  className="w-5 h-5"
                >
                  <path 
                    d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.288.131.332.202.043.72.043.433-.101.823z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 font-heading">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Academy</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/ghanaian-education" className="text-gray-300 hover:text-white transition-colors">Education</Link>
              </li>
              <li>
                <Link to="/ai-search" className="text-gray-300 hover:text-white transition-colors">AI Search</Link>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors fixed bottom-8 right-8 w-12 h-12 rounded-full backdrop-blur-sm bg-black/30 border border-white/10 flex items-center justify-center group hover:bg-black/50 transition-all" onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    const isAtBottom = window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight - 100;
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`w-6 h-6 text-white transform transition-transform group-hover:scale-110 ${window.pageYOffset > 100 ? 'rotate-180' : ''}`}
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
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 font-heading">Programs</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Creche</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Nursery</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Kindergarten</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Primary Education</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Junior High School</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 font-heading">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300 text-sm">Kodie-Kotokuom, Ashanti Region, Ghana</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-gray-300 text-sm">+233 54 779 8816</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-gray-300 text-xs sm:text-sm break-all">serwaaakotoacademygh@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="content-container py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Serwaa Akoto Academy. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

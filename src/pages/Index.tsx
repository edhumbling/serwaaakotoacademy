
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { cn } from '@/lib/utils';

const Index = () => {
  // Intersection Observer setup for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    // Observe all elements with the animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });

    // Update meta description with current year
    const currentYear = new Date().getFullYear();
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      const description = metaDescription.getAttribute('content');
      if (description) {
        // Update with current year if needed
        const updatedDescription = description.replace(/\d{4}/, currentYear.toString());
        metaDescription.setAttribute('content', updatedDescription);
      }
    }

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <MissionVision />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton phoneNumber="233547798816" />
    </div>
  );
};

const MissionVision = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Mission */}
          <div className="animate-on-scroll slide-right glass p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-school-seaBlue via-school-green to-school-yellow"></div>
            <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-school-yellow/10"></div>
            <div className="absolute -bottom-8 -left-8 w-20 h-20 rounded-full bg-school-green/10"></div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 font-heading">Our Mission</h3>
            <div className="h-1 w-16 bg-school-seaBlue mb-6"></div>
            <p className="text-gray-700">
              To ensure that all children of school-going age are provided with inclusive and equitable quality formal education and training through effective and efficient management of resources to make education delivery relevant to the manpower needs of the nation.
            </p>
          </div>
          
          {/* Vision */}
          <div className="animate-on-scroll slide-left glass p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-school-yellow via-school-green to-school-seaBlue"></div>
            <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-school-seaBlue/10"></div>
            <div className="absolute -bottom-8 -left-8 w-20 h-20 rounded-full bg-school-green/10"></div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 font-heading">Our Vision</h3>
            <div className="h-1 w-16 bg-school-yellow mb-6"></div>
            <p className="text-gray-700">
              Serwaa Akoto Academy seeks to create an enabling environment in all education institutions and management positions that will facilitate effective teaching and learning and efficiency in the management for the attainment of the goals of the service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;

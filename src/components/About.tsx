
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import ImageWithLoader from './ImageWithLoader';
import { Book, Clock, Calendar, School } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();
  const yearsOfOperation = currentYear - 2021; // Started 4 years ago from 2025

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Montessori-inspired background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-school-yellow/10"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 rounded-full bg-school-green/10"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-school-seaBlue/10"></div>
        
        {/* Paint splatters */}
        <svg className="absolute top-10 right-10 w-40 h-40 text-school-yellow/20" viewBox="0 0 200 200">
          <path d="M20,50 Q60,10 100,50 T180,50 T140,100 T180,150 T100,150 T20,150 T60,100 T20,50" fill="currentColor" />
        </svg>
        <svg className="absolute bottom-10 left-10 w-40 h-40 text-school-seaBlue/20" viewBox="0 0 200 200">
          <path d="M40,40 Q70,20 100,40 T160,40 T120,80 T160,120 T100,120 T40,120 T80,80 T40,40" fill="currentColor" />
        </svg>
      </div>

      <div className="content-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-4 text-gray-900 transition-all duration-700",
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          )}>
            About Our Academy
          </h2>
          <div className={cn(
            "h-1 w-20 bg-school-yellow mx-auto mb-6 transition-all duration-700 delay-100",
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          )}></div>
          <p className={cn(
            "text-gray-600 transition-all duration-700 delay-200",
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          )}>
            Located in Kodie-Kotokuom in the Ashanti Region of Ghana, Serwaa Akoto Academy 
            is dedicated to providing quality education that prepares students for the future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={cn(
            "relative transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            {/* Zaha Hadid inspired curved container */}
            <div className="relative">
              <div className="absolute -top-5 -left-5 right-5 bottom-5 bg-gradient-to-tr from-school-yellow/20 to-school-green/10 rounded-[70px_30px_50px_20px] transform rotate-6 backdrop-blur-sm"></div>
              <div className="rounded-2xl overflow-hidden shadow-lg relative z-10">
                <ImageWithLoader
                  src="https://ik.imagekit.io/humbling/creche/WhatsApp%20Image%202025-03-21%20at%2017.14.29_bb8cad6f.jpg?updatedAt=1742906297714"
                  alt="Serwaa Akoto Academy Students"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 glass-dark p-4 rounded-xl shadow-lg rotate-3 transform hover:rotate-0 transition-all duration-300 z-20">
              <div className="text-white">
                <p className="font-heading text-5xl font-bold">{yearsOfOperation}+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 glass p-4 rounded-xl shadow-lg -rotate-3 transform hover:rotate-0 transition-all duration-300 bg-school-green/20 backdrop-blur-sm border border-school-green/30 z-20">
              <div className="text-gray-800">
                <p className="font-heading text-lg font-semibold">Kodie-Kotokuom</p>
                <p className="text-xs">Ashanti Region, Ghana</p>
              </div>
            </div>

            {/* Student counter element */}
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 glass p-4 rounded-full shadow-lg z-20 h-24 w-24 flex flex-col items-center justify-center bg-school-seaBlue/30 backdrop-blur-sm border border-school-seaBlue/20">
              <p className="font-heading text-2xl font-bold text-white">200+</p>
              <p className="text-xs text-white/90">Students</p>
            </div>
          </div>

          <div className={cn(
            "space-y-8 transition-all duration-700 delay-400",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}>
            {/* Programs Offered */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-school-green transform hover:-translate-y-1">
              <h3 className="text-xl font-bold font-heading text-gray-900 mb-3 flex items-center">
                <School className="w-5 h-5 mr-2 text-school-green" />
                Our Programs
              </h3>
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="flex items-center space-x-2 bg-school-green/10 p-2 rounded-lg">
                  <div className="h-2 w-2 rounded-full bg-school-green"></div>
                  <p className="text-gray-700">Creche</p>
                </div>
                <div className="flex items-center space-x-2 bg-school-yellow/10 p-2 rounded-lg">
                  <div className="h-2 w-2 rounded-full bg-school-yellow"></div>
                  <p className="text-gray-700">Nursery</p>
                </div>
                <div className="flex items-center space-x-2 bg-school-seaBlue/10 p-2 rounded-lg">
                  <div className="h-2 w-2 rounded-full bg-school-seaBlue"></div>
                  <p className="text-gray-700">Kindergarten</p>
                </div>
                <div className="flex items-center space-x-2 bg-school-green/10 p-2 rounded-lg">
                  <div className="h-2 w-2 rounded-full bg-school-green"></div>
                  <p className="text-gray-700">Primary</p>
                </div>
                <div className="flex items-center space-x-2 bg-school-yellow/10 p-2 rounded-lg col-span-2">
                  <div className="h-2 w-2 rounded-full bg-school-yellow"></div>
                  <p className="text-gray-700">Junior High School (Coming Soon)</p>
                </div>
              </div>
            </div>

            {/* School Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-school-seaBlue transform hover:-translate-y-1">
              <h3 className="text-xl font-bold font-heading text-gray-900 mb-3 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-school-seaBlue" />
                School Hours
              </h3>
              <div className="space-y-3 mt-4">
                <div className="flex justify-between items-center">
                  <p className="text-gray-700 flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-school-seaBlue/70" />
                    Monday - Friday
                  </p>
                  <p className="text-gray-700">7:00 AM - 4:00 PM</p>
                </div>
                <div className="flex justify-between items-center text-gray-400">
                  <p className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 opacity-50" />
                    Saturday - Sunday
                  </p>
                  <p>Closed</p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-school-seaBlue transform hover:-translate-y-1">
              <h3 className="text-xl font-bold font-heading text-gray-900 mb-3 flex items-center">
                <Book className="w-5 h-5 mr-2 text-school-seaBlue" />
                Our Mission
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                To ensure that all children of school going age are provided with inclusive and 
                equitable quality formal education and training through effective and efficient 
                management of resources to make education delivery relevant to the manpower needs of the nation.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-school-yellow transform hover:-translate-y-1">
              <h3 className="text-xl font-bold font-heading text-gray-900 mb-3 flex items-center">
                <Book className="w-5 h-5 mr-2 text-school-yellow" />
                Our Vision
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                Serwaa Akoto seeks to create an enabling environment in all education institutions 
                and management positions that will facilitate effective teaching and learning 
                and efficiency in the management for the attainment of the goals of the service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

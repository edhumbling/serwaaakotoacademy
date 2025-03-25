
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import ImageWithLoader from './ImageWithLoader';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      className="section-padding bg-gradient-to-b from-white to-gray-50"
    >
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
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <ImageWithLoader
                src="https://ik.imagekit.io/humbling/creche/WhatsApp%20Image%202025-03-21%20at%2017.14.29_bb8cad6f.jpg?updatedAt=1742906297714"
                alt="Serwaa Akoto Academy Students"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 glass-dark p-4 rounded-xl shadow-lg rotate-3 transform hover:rotate-0 transition-all duration-300">
              <div className="text-white">
                <p className="font-heading text-5xl font-bold">10+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 glass p-4 rounded-xl shadow-lg -rotate-3 transform hover:rotate-0 transition-all duration-300 bg-school-green/20 backdrop-blur-sm border border-school-green/30">
              <div className="text-gray-800">
                <p className="font-heading text-lg font-semibold">Kodie-Kotokuom</p>
                <p className="text-xs">Ashanti Region, Ghana</p>
              </div>
            </div>
          </div>

          <div className={cn(
            "space-y-8 transition-all duration-700 delay-400",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}>
            {/* Mission */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-school-seaBlue transform hover:-translate-y-1">
              <h3 className="text-xl font-bold font-heading text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-700 text-sm md:text-base">
                To ensure that all children of school going age are provided with inclusive and 
                equitable quality formal education and training through effective and efficient 
                management of resources to make education delivery relevant to the manpower needs of the nation.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-school-yellow transform hover:-translate-y-1">
              <h3 className="text-xl font-bold font-heading text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-700 text-sm md:text-base">
                Serwaa Akoto seeks to create an enabling environment in all education institutions 
                and management positions that will facilitate effective teaching and learning 
                and efficiency in the management for the attainment of the goals of the service.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-school-green transform hover:-translate-y-1">
              <h3 className="text-xl font-bold font-heading text-gray-900 mb-3">Our Values</h3>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-school-seaBlue"></div>
                  <p className="text-gray-700">Excellence</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-school-yellow"></div>
                  <p className="text-gray-700">Integrity</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-school-green"></div>
                  <p className="text-gray-700">Inclusivity</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-school-seaBlue"></div>
                  <p className="text-gray-700">Innovation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

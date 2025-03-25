
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import ImageWithLoader from './ImageWithLoader';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
}

const Gallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const galleryImages: GalleryItem[] = [
    {
      id: 1,
      src: "https://ik.imagekit.io/humbling/creche/WhatsApp%20Image%202025-03-21%20at%2018.12.27_964ef960.jpg?updatedAt=1742906298570",
      alt: "Happy students at Serwaa Akoto Academy"
    },
    {
      id: 2,
      src: "https://ik.imagekit.io/humbling/creche/WhatsApp%20Image%202025-03-21%20at%2018.12.33_79e96afc.jpg?updatedAt=1742906298307",
      alt: "Students learning together"
    },
    {
      id: 3,
      src: "https://ik.imagekit.io/humbling/creche/WhatsApp%20Image%202025-03-21%20at%2018.24.15_fa414c3c.jpg?updatedAt=1742906297874",
      alt: "Children in the classroom"
    },
    {
      id: 4,
      src: "https://ik.imagekit.io/humbling/creche/WhatsApp%20Image%202025-03-21%20at%2017.14.29_bb8cad6f.jpg?updatedAt=1742906297714",
      alt: "Students engaged in activities"
    }
  ];

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
        threshold: 0.1,
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
      id="gallery" 
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      <div className="content-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-4 text-gray-900 transition-all duration-700",
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          )}>
            Our Gallery
          </h2>
          <div className={cn(
            "h-1 w-20 bg-school-seaBlue mx-auto mb-6 transition-all duration-700 delay-100",
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          )}></div>
          <p className={cn(
            "text-gray-600 transition-all duration-700 delay-200",
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          )}>
            Take a glimpse into the joyful learning environment at Serwaa Akoto Academy,
            where our students thrive in a nurturing and stimulating atmosphere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className={cn(
                "group overflow-hidden rounded-2xl glass transform hover:-translate-y-2 transition-all duration-500 aspect-[3/4]",
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-20",
                isVisible && `transition-all duration-700 delay-${(index + 1) * 100}`
              )}
            >
              <div className="relative h-full overflow-hidden">
                <ImageWithLoader
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={cn(
          "mt-16 text-center transition-all duration-700 delay-600",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <p className="text-gray-700 mb-6">
            Experience the vibrant community and educational excellence at Serwaa Akoto Academy.
          </p>
          <a 
            href="#contact" 
            className="btn-primary"
          >
            Contact Us for a Visit
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

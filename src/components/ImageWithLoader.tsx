
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
}

const ImageWithLoader = ({ 
  src, 
  alt, 
  className = '', 
  containerClassName = '',
  priority = false
}: ImageWithLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Reset state when src changes
    setIsLoading(true);
    setIsLoaded(false);
    
    if (priority) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setIsLoading(false);
        setIsLoaded(true);
      };
      img.onerror = () => {
        setIsLoading(false);
      };
    }
  }, [src, priority]);

  return (
    <div className={cn('relative overflow-hidden', containerClassName)}>
      {isLoading && !priority && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        className={cn(
          'w-full h-full object-cover transition-all duration-500 ease-out',
          isLoading && !isLoaded ? 'scale-105 blur-md' : 'scale-100 blur-0',
          className
        )}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => {
          setIsLoading(false);
          setIsLoaded(true);
        }}
      />
    </div>
  );
};

export default ImageWithLoader;

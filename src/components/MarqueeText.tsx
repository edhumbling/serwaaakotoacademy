import React, { useEffect, useRef, useState } from 'react';

interface MarqueeTextProps {
  text: string;
  speed?: number; // pixels per second
  className?: string;
}

const MarqueeText: React.FC<MarqueeTextProps> = ({
  text,
  speed = 50,
  className = ""
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [animationDuration, setAnimationDuration] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  // Calculate the animation duration based on content width and speed
  useEffect(() => {
    const updateWidths = () => {
      if (containerRef.current && contentRef.current) {
        const newContainerWidth = containerRef.current.offsetWidth;
        const newContentWidth = contentRef.current.offsetWidth;

        setContainerWidth(newContainerWidth);
        setContentWidth(newContentWidth);

        // Calculate duration based on content width and speed (pixels per second)
        // We want the animation to move the entire content width plus the container width
        // This ensures the text completely exits the container before resetting
        const totalDistance = newContentWidth;
        const newDuration = totalDistance / speed;
        setAnimationDuration(newDuration);
      }
    };

    updateWidths();

    // Update on window resize
    window.addEventListener('resize', updateWidths);
    return () => window.removeEventListener('resize', updateWidths);
  }, [speed, text]);

  // Duplicate the text to ensure continuous scrolling
  const repeatedText = `${text} ${text} ${text}`;

  return (
    <div
      ref={containerRef}
      className="overflow-hidden relative"
      style={{ width: '100%' }}
    >
      <div
        className="flex whitespace-nowrap"
        style={{
          width: 'fit-content',
          animation: animationDuration > 0 ? `marquee ${animationDuration}s linear infinite` : 'none',
        }}
      >
        <div
          ref={contentRef}
          className={`inline-block whitespace-nowrap ${className}`}
        >
          {repeatedText}
        </div>
      </div>

      {/* The keyframes are defined in index.css */}
    </div>
  );
};

export default MarqueeText;

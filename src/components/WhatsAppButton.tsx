
import React, { useState, useEffect } from 'react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message = '' }) => {
  // Remove any non-numeric characters from the phone number
  const formattedNumber = phoneNumber.replace(/\D/g, '');
  const [showNotification, setShowNotification] = useState(false);

  // Show notification after a delay when the component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Notification Badge */}
      <div
        className={`absolute -top-12 right-0 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg transform transition-all duration-500 flex items-center ${showNotification ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
      >
        <span className="font-medium">Chat with Us!</span>
        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45"></div>
      </div>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${formattedNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] shadow-lg hover:bg-[#20BA5C] transition-all duration-300 hover:scale-110 group shadow-[0_0_15px_rgba(37,211,102,0.5)] hover:shadow-[0_0_25px_rgba(37,211,102,0.7)]"
        aria-label="Chat on WhatsApp"
        onClick={() => setShowNotification(false)}
      >
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-8 h-8 group-hover:animate-pulse"
          >
            <path
              d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.288.131.332.202.043.72.043.433-.101.823z"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>

          {/* Notification Dot */}
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
        </div>
      </a>
    </div>
  );
};

export default WhatsAppButton;


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
      {/* WhatsApp Button with integrated notification */}
      <div className="relative">
        {/* Chat with Us notification bubble */}
        <div
          className={`absolute -top-8 -left-14 bg-white text-xs font-medium text-gray-800 px-2.5 py-1 rounded-full shadow-md transform transition-all duration-500 ${showNotification ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
        >
          <span>Chat with Us!</span>
          <div className="absolute bottom-0 right-3 w-2 h-2 bg-white transform rotate-45 translate-y-1"></div>
        </div>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${formattedNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] shadow-md hover:bg-[#20BA5C] transition-all duration-300 hover:scale-110 group shadow-[0_0_10px_rgba(37,211,102,0.4)] hover:shadow-[0_0_15px_rgba(37,211,102,0.6)]"
          aria-label="Chat on WhatsApp"
          onClick={() => setShowNotification(false)}
        >
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-6 h-6 group-hover:animate-pulse"
            >
              <path
                d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.288.131.332.202.043.72.043.433-.101.823z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>

            {/* Cute animated heart notification */}
            <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500 items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-2 h-2">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              </span>
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default WhatsAppButton;

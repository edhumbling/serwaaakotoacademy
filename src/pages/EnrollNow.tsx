import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const EnrollNow = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-4 text-gray-900">Enroll Now</h1>
            <div className="h-1 w-20 bg-school-seaBlue mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              This page is under construction. Please check back soon for our enrollment form.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 text-center">
            <p className="text-lg mb-4">In the meantime, you can contact us directly:</p>
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-school-seaBlue" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-gray-700">+233 54 779 8816</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-school-seaBlue" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-gray-700">serwaaakotoacademygh@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EnrollNow;
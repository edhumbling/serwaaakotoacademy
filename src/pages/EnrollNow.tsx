import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const EnrollNow = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello! I'm interested in enrolling at Serwaa Akoto Academy.\n\nDetails:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nProgram: ${formData.program}\nAdditional Info: ${formData.message}`;
    const whatsappUrl = `https://wa.me/233547798816?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-4 text-gray-900">Enroll Now</h1>
            <div className="h-1 w-20 bg-school-seaBlue mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fill out the form below to start your enrollment process. We'll connect with you via WhatsApp.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-school-seaBlue focus:border-school-seaBlue transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-school-seaBlue focus:border-school-seaBlue transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-school-seaBlue focus:border-school-seaBlue transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">Desired Program</label>
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-school-seaBlue focus:border-school-seaBlue transition-colors"
                    required
                  >
                    <option value="">Select a program</option>
                    <option value="creche">Creche</option>
                    <option value="nursery">Nursery</option>
                    <option value="kindergarten">Kindergarten</option>
                    <option value="primary">Primary Education</option>
                    <option value="junior">Junior High School</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-school-seaBlue focus:border-school-seaBlue transition-colors"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full btn-primary py-3"
                >
                  Submit Enrollment Request
                </button>
                <p className="text-sm text-gray-500 mt-2 text-center">We'll connect with you via WhatsApp after receiving your information.</p>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EnrollNow;
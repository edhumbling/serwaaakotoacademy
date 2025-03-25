import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

const EnrollNow = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    studentDOB: '',
    gender: '',
    previousSchool: '',
    gradeLevel: '',
    parentName: '',
    relationship: '',
    phoneNumber: '',
    email: '',
    address: '',
    emergencyContact: '',
    medicalConditions: '',
    additionalNotes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const message = `New Enrollment Application:\n\n` +
      `Student Information:\n` +
      `Name: ${formData.studentName}\n` +
      `Date of Birth: ${formData.studentDOB}\n` +
      `Gender: ${formData.gender}\n` +
      `Previous School: ${formData.previousSchool}\n` +
      `Grade Level: ${formData.gradeLevel}\n\n` +
      `Parent/Guardian Information:\n` +
      `Name: ${formData.parentName}\n` +
      `Relationship: ${formData.relationship}\n` +
      `Phone: ${formData.phoneNumber}\n` +
      `Email: ${formData.email}\n` +
      `Address: ${formData.address}\n\n` +
      `Emergency Contact: ${formData.emergencyContact}\n` +
      `Medical Conditions: ${formData.medicalConditions}\n` +
      `Additional Notes: ${formData.additionalNotes}`;

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '+233547798816'; // School's WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Enroll at Serwaa Akoto Academy</h1>
            <div className="h-1 w-20 bg-school-seaBlue mx-auto mt-4"></div>
            <p className="mt-4 text-gray-600">
              Take the first step towards your child's bright future. Fill out the form below to begin the enrollment process.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm">
            {/* Student Information Section */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-school-seaBlue">Student Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    required
                    value={formData.studentName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-school-seaBlue focus:border-school-seaBlue"
                  />
                </div>

                <div>
                  <label htmlFor="studentDOB" className="block text-sm font-medium text-gray-700 mb-1">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    id="studentDOB"
                    name="studentDOB"
                    required
                    value={formData.studentDOB}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-school-seaBlue focus:border-school-seaBlue"
                  />
                </div>

                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                    Gender *
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    required
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-school-seaBlue focus:border-school-seaBlue"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="previousSchool" className="block text-sm font-medium text-gray-700 mb-1">
                    Previous School (if any)
                  </label>
                  <input
                    type="text"
                    id="previousSchool"
                    name="previousSchool"
                    value={formData.previousSchool}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-school-seaBlue focus:border-school-seaBlue"
                  />
                </div>

                <div>
                  <label htmlFor="gradeLevel" className="block text-sm font-medium text-gray-700 mb-1">
                    Grade Level *
                  </label>
                  <select
                    id="gradeLevel"
                    name="gradeLevel"
                    required
                    value={formData.gradeLevel}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-school-seaBlue focus:border-school-seaBlue"
                  >
                    <option value="">Select Grade Level</option>
                    <option value="creche">Creche</option>
                    <option value="nursery">Nursery</option>
                    <option value="kg1">KG 1</option>
                    <option value="kg2">KG 2</option>
                    <option value="primary1">Primary 1</option>
                    <option value="primary2">Primary 2</option>
                    <option value="primary3">Primary 3</option>
                    <option value="primary4">Primary 4</option>
                    <option value="primary5">Primary 5</option>
                    <option value="primary6">Primary 6</option>
                    <option value="jhs1">JHS 1</option>
                    <option value="jhs2">JHS 2</option>
                    <option value="jhs3">JHS 3</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Parent/Guardian Information Section */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-school-seaBlue">Parent/Guardian Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    required
                    value={formData.parentName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-school-seaBlue focus:border-school-seaBlue"
                  />
                </div>

                <div>
                  <label htmlFor="relationship" className="block text-sm font-medium text-gray-700 mb-1">
                    Relationship to Student *
                  </label>
                  <input
                    type="text"
                    id="relationship"
                    name="relationship"
                    required
                    value={formData.relationship}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-school-seaBlue focus:border-school-seaBlue"
                  />
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    required
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-school-seaBlue focus:border-school-seaBlue"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-school-seaBlue focus:border-school-seaBlue"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Residential Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-school-seaBlue focus:border-school-seaBlue"
                  />
                </div>
              </div>
            </section>

            {/* Additional Information Section */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-school-seaBlue">Additional Information</h2>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700 mb-1">
                    Emergency Contact (Name and Phone) *
                  </label>
                  <input
                    type="text"
                    id="emergencyContact"
                    name="emergencyContact"
                    required
                    value={formData.emergencyContact}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-school-seaBlue focus:border-school-seaBlue"
                  />
                </div>

                <div>
                  <label htmlFor="medicalConditions" className="block text-sm font-medium text-gray-700 mb-1">
                    Medical Conditions or Allergies
                  </label>
                  <textarea
                    id="medicalConditions"
                    name="medicalConditions"
                    value={formData.medicalConditions}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-school-seaBlue focus:border-school-seaBlue"
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Notes
                  </label>
                  <textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-school-seaBlue focus:border-school-seaBlue"
                  ></textarea>
                </div>
              </div>
            </section>

            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="px-8 py-3 bg-school-seaBlue text-white rounded-md hover:bg-school-seaBlue/90 transition-colors"
              >
                Submit Enrollment Application
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EnrollNow;
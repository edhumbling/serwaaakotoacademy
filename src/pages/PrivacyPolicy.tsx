
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2>Introduction</h2>
            <p>
              At Serwaa Akoto Academy, we respect the privacy of our students, parents, staff, and visitors to our school and website. This Privacy Policy outlines how we collect, use, store, and protect your personal information in accordance with the Ghana Data Protection Act, 2012 (Act 843).
            </p>
            
            <h2>Information We Collect</h2>
            <p>
              We collect personal information for legitimate educational purposes including:
            </p>
            <ul>
              <li>Student and parent/guardian contact details</li>
              <li>Academic records and assessment information</li>
              <li>Medical information relevant to student welfare</li>
              <li>Attendance records</li>
              <li>Behavioral information</li>
              <li>Information required for Ghana Education Service reports</li>
              <li>Photographs and videos for school documentation and promotional materials (with consent)</li>
            </ul>
            
            <h2>How We Use Your Information</h2>
            <p>
              We use the information collected for the following purposes:
            </p>
            <ul>
              <li>To provide educational services to our students</li>
              <li>To communicate with parents/guardians about student progress</li>
              <li>To ensure the safety and welfare of students</li>
              <li>To comply with our legal obligations to the Ghana Education Service</li>
              <li>To administer the school efficiently</li>
              <li>To maintain historical records of student achievement</li>
            </ul>
            
            <h2>Data Protection</h2>
            <p>
              We are committed to ensuring that your personal information is secure. We have implemented appropriate physical, electronic, and managerial procedures to safeguard the information we collect.
            </p>
            
            <h2>Data Sharing</h2>
            <p>
              We may share personal information with:
            </p>
            <ul>
              <li>Ghana Education Service and other governmental bodies as required by law</li>
              <li>Educational examination bodies</li>
              <li>Health authorities when necessary for student welfare</li>
              <li>Third-party service providers who help us operate our school (these providers are bound by contractual obligations to keep personal information confidential)</li>
            </ul>
            
            <h2>Your Rights</h2>
            <p>
              Under the Ghana Data Protection Act, you have the right to:
            </p>
            <ul>
              <li>Access the personal information we hold about you or your child</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information in certain circumstances</li>
              <li>Object to certain processing of your information</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
            
            <h2>Cookies and Website Usage</h2>
            <p>
              Our website may use cookies to enhance your browsing experience. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.
            </p>
            
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on our website, and significant changes will be communicated directly to parents/guardians.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or how we handle your personal information, please contact us at:
            </p>
            <p>
              Serwaa Akoto Academy<br />
              Kodie-Kotokuom, Ashanti Region<br />
              Ghana<br />
              Email: serwaaakotoacademygh@gmail.com<br />
              Phone: +233 54 779 8816
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

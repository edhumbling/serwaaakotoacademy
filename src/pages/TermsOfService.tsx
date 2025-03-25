
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8 text-center">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2>Introduction</h2>
            <p>
              Welcome to Serwaa Akoto Academy. These Terms of Service govern your relationship with our school and the use of our services. By enrolling your child in our institution or using our website, you agree to these terms.
            </p>
            
            <h2>Educational Services</h2>
            <p>
              Serwaa Akoto Academy provides educational services from Creche to Junior High School following the Ghana Education Service curriculum and guidelines. We are committed to maintaining high educational standards and creating a nurturing learning environment for all students.
            </p>
            
            <h2>Enrollment and Admission</h2>
            <p>
              Enrollment is subject to available space, meeting age requirements, and submission of all required documentation. The school reserves the right to make final decisions regarding admission and placement of students in appropriate classes.
            </p>
            
            <h2>Fee Payment</h2>
            <p>
              School fees must be paid according to the schedule provided at the beginning of each academic year. Late payments may incur additional charges, and the school reserves the right to refuse attendance if fees remain unpaid after multiple reminders.
            </p>
            
            <h2>Attendance and Conduct</h2>
            <p>
              Regular attendance is essential for academic progress. Students are expected to:
            </p>
            <ul>
              <li>Attend school regularly and punctually</li>
              <li>Follow the school's code of conduct</li>
              <li>Wear the prescribed school uniform</li>
              <li>Complete assignments and participate in class activities</li>
              <li>Treat staff and fellow students with respect</li>
            </ul>
            
            <h2>Parental Responsibilities</h2>
            <p>
              Parents/guardians are expected to:
            </p>
            <ul>
              <li>Support their child's education at home</li>
              <li>Attend parent-teacher meetings</li>
              <li>Communicate with the school about matters affecting their child's education</li>
              <li>Provide accurate contact and medical information</li>
              <li>Ensure timely payment of school fees</li>
              <li>Respect school policies and procedures</li>
            </ul>
            
            <h2>Health and Safety</h2>
            <p>
              The school prioritizes the health and safety of all students. Parents must inform the school of any medical conditions or special needs. Students should not attend school when ill, particularly if they have contagious conditions.
            </p>
            
            <h2>Photography and Media</h2>
            <p>
              The school may take photographs or videos of students for educational purposes, school records, and promotional materials. Parents have the right to opt out by submitting a written request.
            </p>
            
            <h2>Website Usage</h2>
            <p>
              Users of our website agree not to:
            </p>
            <ul>
              <li>Use the website in any way that causes damage to the site or impairs availability</li>
              <li>Use the website for any fraudulent or unlawful purpose</li>
              <li>Harvest or collect information about other users without consent</li>
              <li>Upload viruses or malicious code</li>
            </ul>
            
            <h2>Termination of Enrollment</h2>
            <p>
              The school reserves the right to terminate enrollment if:
            </p>
            <ul>
              <li>School fees remain unpaid despite multiple reminders</li>
              <li>A student consistently violates the code of conduct</li>
              <li>The school determines it cannot adequately meet a student's educational needs</li>
              <li>There is a breakdown in the relationship between the school and parents</li>
            </ul>
            
            <h2>Changes to Terms</h2>
            <p>
              The school may modify these terms from time to time. Significant changes will be communicated to parents through official channels.
            </p>
            
            <h2>Governing Law</h2>
            <p>
              These Terms of Service are governed by the laws of Ghana.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have questions about these Terms of Service, please contact us at:
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

export default TermsOfService;

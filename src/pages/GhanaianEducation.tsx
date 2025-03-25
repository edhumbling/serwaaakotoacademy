
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Splite from '@/components/Splite';
import ImageWithLoader from '@/components/ImageWithLoader';

const GhanaianEducation = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8 text-center">Ghanaian Education System</h1>
          
          <Splite 
            title="Ghana's Educational Structure" 
            subtitle="Understanding the Foundation"
            description="The Ghanaian education system has evolved significantly since independence, with reforms aimed at creating a comprehensive structure that addresses the needs of all Ghanaian children. At Serwaa Akoto Academy, we follow this established structure while incorporating innovative teaching methodologies."
          >
            <div className="rounded-xl overflow-hidden shadow-lg">
              <ImageWithLoader 
                src="/images/school-activities.jpg" 
                alt="Ghanaian education system" 
                className="w-full h-64 object-cover"
              />
            </div>
          </Splite>
          
          <div className="prose prose-lg max-w-none mt-12">
            <h2>Overview of the Ghanaian Education System</h2>
            <p>
              Ghana's education system is structured into three main levels: Basic Education, Secondary Education, and Tertiary Education. The Ministry of Education and the Ghana Education Service oversee the implementation of educational policies and curriculum development.
            </p>
            
            <h3>Basic Education</h3>
            <p>
              Basic Education in Ghana consists of:
            </p>
            <ul>
              <li><strong>Early Childhood Education (2 years)</strong>: Includes Creche and Nursery for children from ages 0-4.</li>
              <li><strong>Kindergarten (2 years)</strong>: For children aged 4-6, focusing on foundational skills.</li>
              <li><strong>Primary School (6 years)</strong>: From Primary 1 to Primary 6, for children aged 6-12.</li>
              <li><strong>Junior High School (3 years)</strong>: From JHS 1 to JHS 3, for students aged 12-15.</li>
            </ul>
            
            <p>
              At the end of JHS 3, students take the Basic Education Certificate Examination (BECE), which determines their eligibility for Senior High School.
            </p>
            
            <h3>Secondary Education</h3>
            <p>
              Secondary Education consists of:
            </p>
            <ul>
              <li><strong>Senior High School (3 years)</strong>: Offers programs in General Arts, Business, Home Economics, Visual Arts, General Science, and Technical/Vocational studies.</li>
            </ul>
            
            <p>
              Students complete their secondary education by taking the West African Senior School Certificate Examination (WASSCE).
            </p>
            
            <h3>Tertiary Education</h3>
            <p>
              After completing secondary education, students can proceed to:
            </p>
            <ul>
              <li>Universities (4 years for most degree programs)</li>
              <li>Polytechnics (now Technical Universities)</li>
              <li>Colleges of Education</li>
              <li>Professional Institutes</li>
            </ul>
            
            <h2>The Ghanaian Curriculum</h2>
            <p>
              The curriculum in Ghana has undergone several reforms, with the most recent being the introduction of the Standards-Based Curriculum in 2019. This curriculum emphasizes:
            </p>
            <ul>
              <li>Foundational skills in literacy and numeracy</li>
              <li>Creative arts and design</li>
              <li>Science, technology, engineering, and mathematics (STEM)</li>
              <li>Social studies and religious and moral education</li>
              <li>Career technology and physical education</li>
            </ul>
            
            <p>
              The curriculum aims to develop critical thinking, problem-solving skills, creativity, and civic responsibility among students.
            </p>
            
            <h2>Language Policy</h2>
            <p>
              Ghana's language policy in education recognizes both English and Ghanaian languages:
            </p>
            <ul>
              <li>English is the official language of instruction from Primary 4 onwards</li>
              <li>From Kindergarten to Primary 3, the local Ghanaian language is used alongside English</li>
              <li>Ghanaian languages are taught as subjects throughout basic education</li>
            </ul>
            
            <h2>Challenges in Ghanaian Education</h2>
            <p>
              Despite significant progress, Ghana's education system faces several challenges:
            </p>
            <ul>
              <li>Inadequate infrastructure in many schools</li>
              <li>Teacher shortages, particularly in rural areas</li>
              <li>Limited learning resources</li>
              <li>High student-teacher ratios</li>
              <li>Gender disparities in some regions</li>
              <li>Access issues for children with disabilities</li>
            </ul>
            
            <h2>How Serwaa Akoto Academy Builds Upon the Ghanaian Education System</h2>
            <p>
              At Serwaa Akoto Academy, we follow the Ghanaian curriculum while enhancing it in the following ways:
            </p>
            <ul>
              <li><strong>Holistic Education</strong>: We focus on the intellectual, social, emotional, and physical development of each child.</li>
              <li><strong>Small Class Sizes</strong>: Our smaller teacher-to-student ratio allows for more personalized attention.</li>
              <li><strong>Modern Teaching Methods</strong>: We incorporate student-centered, activity-based learning approaches.</li>
              <li><strong>Technology Integration</strong>: We use educational technology to enhance learning experiences.</li>
              <li><strong>Languages</strong>: Strong emphasis on both English and local language development.</li>
              <li><strong>Arts and Culture</strong>: We place importance on Ghanaian arts, culture, and values.</li>
              <li><strong>Character Development</strong>: We instill discipline, respect, integrity, and responsibility.</li>
              <li><strong>Community Engagement</strong>: We involve parents and the community in the educational process.</li>
            </ul>
            
            <h2>Our Commitment</h2>
            <p>
              Serwaa Akoto Academy is committed to providing quality education that adheres to the Ghana Education Service standards while addressing the unique needs of each student. We prepare our students not only to excel academically but also to become responsible citizens who contribute positively to society.
            </p>
            
            <h2>Educational Resources</h2>
            <p>
              For more information about the Ghanaian education system, you can visit:
            </p>
            <ul>
              <li><a href="https://moe.gov.gh/" target="_blank" rel="noopener noreferrer">Ministry of Education</a></li>
              <li><a href="https://ges.gov.gh/" target="_blank" rel="noopener noreferrer">Ghana Education Service</a></li>
              <li><a href="https://nacca.gov.gh/" target="_blank" rel="noopener noreferrer">National Council for Curriculum and Assessment</a></li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GhanaianEducation;

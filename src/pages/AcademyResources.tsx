import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const AcademyResources = () => {
  const resources = [
    { 
      id: 'audiobooks', 
      name: 'Audiobooks', 
      url: '/academy-resources/audiobooks',
      description: 'Access a vast collection of audiobooks for all ages and interests.',
      icon: '📚'
    },
    { 
      id: 'poetry', 
      name: 'Poetry Archive', 
      url: '/academy-resources/poetry',
      description: 'Explore a rich collection of children\'s poetry from various authors.',
      icon: '📝'
    },
    { 
      id: 'bece-pasco', 
      name: 'BECE PASCO', 
      url: '/academy-resources/bece-pasco',
      description: 'Access past questions and solutions for BECE examination preparation.',
      icon: '📋'
    },
    { 
      id: 'jhs-mocks', 
      name: 'JHS MOCKS', 
      url: '/academy-resources/jhs-mocks',
      description: 'Practice with mock examinations designed for JHS students.',
      icon: '✏️'
    },
    { 
      id: 'qwen-math', 
      name: 'QWEN Maths Solver', 
      url: '/academy-resources/qwen-math',
      description: 'Get help solving complex mathematics problems with AI assistance.',
      icon: '🧮'
    },
    { 
      id: 'khaya-ai', 
      name: 'KHAYA AI Translator', 
      url: '/academy-resources/khaya-ai',
      description: 'Translate text between English and Ghanaian languages.',
      icon: '🌍'
    },
    { 
      id: 'kiddlepedia', 
      name: 'Kiddlepedia', 
      url: '/academy-resources/kiddlepedia',
      description: 'A safe, kid-friendly encyclopedia for young learners.',
      icon: '📖'
    },
    { 
      id: 'numberblocks', 
      name: 'Number Blocks for Kids', 
      url: '/academy-resources/numberblocks',
      description: 'Fun educational videos teaching number concepts to young children.',
      icon: '🔢'
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h1 className="text-3xl font-bold mb-8 text-center">Academy Resources</h1>
          
          <div className="mb-8">
            <p className="text-lg text-center max-w-2xl mx-auto">
              Explore these educational resources to enhance your learning experience. 
              These tools are designed to support students, teachers, and parents in various educational activities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {resources.map((resource) => (
              <Link
                key={resource.id}
                to={resource.url}
                className="bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all border border-gray-200 rounded-xl shadow-md overflow-hidden flex flex-col"
              >
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-4xl mb-3">{resource.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{resource.name}</h3>
                  <p className="text-gray-600 mb-4">
                    {resource.description}
                  </p>
                  <div className="mt-auto pt-4">
                    <span className="inline-flex items-center text-school-seaBlue font-medium">
                      Open Resource
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">How These Resources Support Education</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Literacy Development:</strong> Audiobooks and poetry resources enhance reading and listening skills</li>
              <li>• <strong>Exam Preparation:</strong> BECE PASCO and JHS MOCKS help students prepare for important examinations</li>
              <li>• <strong>Mathematics Support:</strong> QWEN Maths Solver and Number Blocks provide assistance with mathematical concepts</li>
              <li>• <strong>Language Learning:</strong> KHAYA AI Translator supports multilingual education</li>
              <li>• <strong>Research Skills:</strong> Kiddlepedia encourages safe exploration and research for young learners</li>
            </ul>
            <p className="mt-4 text-sm text-gray-500">
              Note: These resources are provided to supplement classroom learning. We encourage supervised usage for younger students.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AcademyResources;

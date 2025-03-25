
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AISearch = () => {
  const [selectedTool, setSelectedTool] = useState('index');

  const tools = [
    { id: 'index', name: 'Index.Globe', url: 'https://index.globe.engineer/' },
    { id: 'farfalle', name: 'Farfalle', url: 'https://www.farfalle.dev' },
    { id: 'turboseek', name: 'TurboSeek', url: 'https://www.turboseek.io' },
    { id: 'omniplex', name: 'Omniplex AI', url: 'https://omniplex.ai' },
    { id: 'andisearch', name: 'Andi Search', url: 'https://andisearch.com' },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <h1 className="text-3xl font-bold mb-8 text-center">SAA AI Search Tools</h1>
          
          <div className="mb-8">
            <p className="text-lg text-center max-w-2xl mx-auto">
              Explore these cutting-edge AI search tools to enhance your research and learning experience. 
              These tools can help students, teachers, and parents find information more efficiently.
            </p>
          </div>
          
          {/* Tool selection tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {tools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => setSelectedTool(tool.id)}
                className={`px-4 py-2 rounded-md transition-all ${
                  selectedTool === tool.id 
                    ? 'bg-school-seaBlue text-white shadow-md' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {tool.name}
              </button>
            ))}
          </div>

          {/* Embedded tool */}
          <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative w-full" style={{ height: 'calc(100vh - 320px)', minHeight: '600px' }}>
              {tools.map((tool) => (
                <iframe
                  key={tool.id}
                  src={tool.url}
                  className={`absolute inset-0 w-full h-full border-0 ${selectedTool === tool.id ? 'block' : 'hidden'}`}
                  title={`${tool.name} Search Tool`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ))}
            </div>
          </div>
          
          <div className="mt-8 bg-gray-50 rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">How AI Search Tools Can Help Education</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Enhanced Research:</strong> Find relevant academic resources more efficiently</li>
              <li>• <strong>Homework Assistance:</strong> Get help understanding difficult concepts</li>
              <li>• <strong>Fact Checking:</strong> Verify information from multiple sources</li>
              <li>• <strong>Learning Support:</strong> Access educational content tailored to specific needs</li>
              <li>• <strong>Project Development:</strong> Gather comprehensive information for school projects</li>
            </ul>
            <p className="mt-4 text-sm text-gray-500">
              Note: While these AI tools are helpful, we encourage critical thinking and verification of information from multiple sources.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AISearch;

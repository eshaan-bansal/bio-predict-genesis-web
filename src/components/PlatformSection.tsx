
import React from 'react';
import { Brain, Database, Target } from 'lucide-react';
import { useContent } from '../hooks/useContent';

const PlatformSection = () => {
  const { content, loading } = useContent();

  if (loading || !content) {
    return (
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto container-padding">
          <div className="animate-pulse text-center">
            <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  const platformContent = content.platform;

  return (
    <section id="platform" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="font-sans text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
            {platformContent.title}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {platformContent.subtitle}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            {platformContent.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto mb-20">
          {platformContent.coreCapabilities.map((capability, index) => (
            <div 
              key={capability.title} 
              className="flex items-start space-x-6"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Brain className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-sans text-xl font-bold text-gray-900 mb-3">
                  {capability.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto mb-20">
          <h3 className="font-sans text-3xl font-bold text-gray-900 mb-8 col-span-full text-center">
            Technical Edge
          </h3>
          {content.science.technicalEdge.map((edge, index) => (
            <div 
              key={edge.title} 
              className="flex items-start space-x-6"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-sans text-xl font-bold text-gray-900 mb-3">
                  {edge.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {edge.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PlatformSection;

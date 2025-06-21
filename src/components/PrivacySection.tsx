import React from 'react';
import { Shield, Lock, Database, Server, Users } from 'lucide-react';
import { useContent } from '../hooks/useContent';

const PrivacySection = () => {
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

  const privacyContent = content.privacy;

  return (
    <section id="privacy" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">

        {/* Deployment Options */}
        <div className="max-w-6xl mx-auto">
          <h3 className="font-sans text-3xl font-bold text-gray-900 mb-8 text-center">
            Deployment Options
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {privacyContent.deploymentOptions.map((option, index) => (
              <div 
                key={option.title}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
              >
                <h4 className="font-sans text-xl font-bold text-gray-900 mb-4">
                  {option.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
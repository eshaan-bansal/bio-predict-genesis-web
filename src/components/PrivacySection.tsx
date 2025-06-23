
import React from 'react';
import { Shield, Lock, Database, Server, Users, Search, Settings, TrendingUp, Maximize } from 'lucide-react';
import { useContent } from '../hooks/useContent';

const PrivacySection = () => {
  const { content, loading } = useContent();

  if (loading || !content) {
    return (
      <section className="py-16 bg-gray-50">
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
  const pilotContent = content.pilot;

  const iconMap = {
    'Search': Search,
    'Settings': Settings,
    'TrendingUp': TrendingUp,
    'Maximize': Maximize
  };

  return (
    <section id="privacy" className="py-16 bg-gray-50">
      <div className="container mx-auto container-padding">
        
        {/* Implementation Steps */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="font-sans text-4xl font-bold text-gray-900 mb-8 text-center">
            {pilotContent.title}
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            {pilotContent.subtitle}
          </p>
          <p className="text-lg text-gray-700 mb-12 text-center font-semibold">
            {pilotContent.question}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pilotContent.steps.map((step, index) => {
              const IconComponent = iconMap[step.icon as keyof typeof iconMap] || Search;
              return (
                <div 
                  key={step.title}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-sans text-lg font-bold text-gray-900 mb-3">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Deployment Options */}
        <div className="max-w-6xl mx-auto mb-16">
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

        {/* Privacy Features */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="font-sans text-3xl font-bold text-gray-900 mb-8 text-center">
            Enterprise-Grade Privacy & Security
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {privacyContent.features.map((feature, index) => (
              <div 
                key={feature.title}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-sans text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What You Get */}
        <div className="max-w-6xl mx-auto">
          <h3 className="font-sans text-3xl font-bold text-gray-900 mb-8 text-center">
            What You Get
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pilotContent.whatYouGet.map((item, index) => (
              <div 
                key={item.title}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
              >
                <h4 className="font-sans text-lg font-bold text-gray-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
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

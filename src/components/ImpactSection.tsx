import React from 'react';
import { BarChart, Bell, TrendingUp, Zap } from 'lucide-react';
import { useContent } from '../hooks/useContent';

const ImpactSection = () => {
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

  const impactContent = content.impact;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BarChart':
        return <BarChart className="h-6 w-6 text-blue-600" />;
      case 'Bell':
        return <Bell className="h-6 w-6 text-blue-600" />;
      case 'TrendingUp':
        return <TrendingUp className="h-6 w-6 text-blue-600" />;
      case 'Zap':
        return <Zap className="h-6 w-6 text-blue-600" />;
      default:
        return <BarChart className="h-6 w-6 text-blue-600" />;
    }
  };

  return (
    <section id="impact" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-sans text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
            {impactContent.title}
          </h2>
          <h3 className="font-sans text-2xl font-medium text-blue-600 mb-6">
            {impactContent.subtitle}
          </h3>
          <p className="text-xl text-gray-600 leading-relaxed">
            {impactContent.description}
          </p>
        </div>

        {/* Capabilities */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactContent.capabilities.map((capability, index) => (
              <div 
                key={capability.title}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    {getIcon(capability.icon)}
                  </div>
                  <div>
                    <h4 className="font-sans text-lg font-semibold text-gray-900 mb-3">
                      {capability.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Measurable Outcomes */}
        <div className="max-w-6xl mx-auto">
          <h3 className="font-sans text-3xl font-bold text-gray-900 mb-12 text-center">
            Measurable Outcomes
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {impactContent.outcomes.map((outcome, index) => (
              <div 
                key={outcome.title}
                className="flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <h4 className="font-sans text-xl font-semibold text-gray-900 mb-3">
                    {outcome.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {outcome.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
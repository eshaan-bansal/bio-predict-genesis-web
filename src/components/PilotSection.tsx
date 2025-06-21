import React from 'react';
import { Search, Settings, TrendingUp, Maximize } from 'lucide-react';
import { useContent } from '../hooks/useContent';

const PilotSection = () => {
  const { content, loading } = useContent();

  if (loading || !content) {
    return (
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="animate-pulse text-center">
            <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  const pilotContent = content.pilot;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="h-6 w-6 text-white" />;
      case 'Settings':
        return <Settings className="h-6 w-6 text-white" />;
      case 'TrendingUp':
        return <TrendingUp className="h-6 w-6 text-white" />;
      case 'Maximize':
        return <Maximize className="h-6 w-6 text-white" />;
      default:
        return <Search className="h-6 w-6 text-white" />;
    }
  };

  return (
    <section id="pilot" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-sans text-4xl lg:text-5xl font-bold text-blue-600 mb-6 text-balance">
            {pilotContent.title}
          </h2>
          <h3 className="font-sans text-2xl font-medium text-gray-900 mb-6">
            {pilotContent.subtitle}
          </h3>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            {pilotContent.question}
          </p>
        </div>

        {/* Pilot Steps */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pilotContent.steps.map((step, index) => (
              <div 
                key={step.title}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  {getIcon(step.icon)}
                </div>
                <h4 className="font-sans text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PilotSection;
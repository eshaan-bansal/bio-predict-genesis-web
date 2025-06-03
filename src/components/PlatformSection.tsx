import React from 'react';
import { Brain, BarChart3, Shield, Zap } from 'lucide-react';

const PlatformSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Predictive AI Models",
      description: "Advanced machine learning algorithms that analyze manufacturing data with 98.7% accuracy to predict outcomes and optimize processes."
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Comprehensive dashboards providing instant visibility into process parameters, quality metrics, and efficiency indicators."
    },
    {
      icon: Zap,
      title: "Process Optimization",
      description: "Automated parameter adjustments based on real-time data analysis to maximize yield and maintain quality standards."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Proactive identification of potential batch failures before they occur, enabling timely interventions and resource protection."
    }
  ];

  return (
    <section id="platform" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-gray-900 mb-6 text-balance">
            Manufacturing Intelligence Platform
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Transform complex manufacturing data into actionable insights with our 
            AI-powered platform designed specifically for biopharmaceutical production.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className="flex items-start space-x-6"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
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

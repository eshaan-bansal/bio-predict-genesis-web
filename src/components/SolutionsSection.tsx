
import React from 'react';
import { CheckCircle } from 'lucide-react';

const SolutionsSection = () => {
  const solutions = [
    {
      title: "Raw Material Optimization",
      description: "Predict optimal raw material usage based on Certificate of Analysis data and historical performance patterns.",
      benefits: ["Reduce material waste by 25%", "Improve batch consistency", "Lower procurement costs"]
    },
    {
      title: "Process Control",
      description: "Real-time monitoring and automated adjustments to maintain optimal manufacturing conditions throughout production.",
      benefits: ["Increase yield by 30%", "Reduce process variability", "Minimize human error"]
    },
    {
      title: "Quality Assurance",
      description: "Predictive quality models that identify potential issues before they impact final product specifications.",
      benefits: ["Prevent batch failures", "Reduce testing costs", "Accelerate release times"]
    }
  ];

  return (
    <section id="solutions" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-gray-900 mb-6 text-balance">
            Solutions for Every Stage
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Comprehensive AI-driven solutions that optimize your entire biomanufacturing process 
            from raw materials to final product release.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <div 
              key={solution.title}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-200"
            >
              <h3 className="font-serif text-xl font-medium text-gray-900 mb-4">
                {solution.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {solution.description}
              </p>
              <div className="space-y-3">
                {solution.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;

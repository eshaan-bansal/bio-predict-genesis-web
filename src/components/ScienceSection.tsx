
import React from 'react';
import { TrendingUp, Target, Award } from 'lucide-react';

const ScienceSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "$100B+",
      label: "Market Opportunity",
      description: "Total addressable market in biopharmaceutical manufacturing optimization"
    },
    {
      icon: Target,
      value: "98.7%",
      label: "Prediction Accuracy",
      description: "Validated performance across diverse therapeutic modalities and processes"
    },
    {
      icon: Award,
      value: "30%",
      label: "Yield Improvement",
      description: "Average expected increase in manufacturing efficiency achieved by our clients"
    }
  ];

  return (
    <section id="science" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-6 text-balance">
            Proven Science, Measurable Impact
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Our proprietary algorithms are trained on extensive datasets from leading 
            biomanufacturing facilities, delivering validated improvements across all metrics.
          </p>
        </div>
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-16 sm:mb-20">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className={`text-center ${index === 0 ? 'sm:col-span-2 lg:col-span-1 sm:justify-self-center' : ''}`}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <stat.icon className="h-7 w-7 sm:h-8 sm:w-8 text-gray-700" />
              </div>
              <div className="text-3xl sm:text-4xl font-serif font-medium text-gray-900 mb-2">{stat.value}</div>
              <div className="font-medium text-gray-900 mb-3">{stat.label}</div>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
        
        {/* Methodology */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 lg:p-12">
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-gray-900 mb-8 sm:mb-12 text-center">
              Our Methodology
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3 text-base sm:text-lg">
                    Advanced Machine Learning
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Deep learning architectures specifically designed for biomanufacturing data, 
                    incorporating domain expertise from process engineering and quality science.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-3 text-base sm:text-lg">
                    Continuous Learning
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Each production cycle provides new training data, enabling continuous 
                    improvement in accuracy and adaptation to changing conditions.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3 text-base sm:text-lg">
                    Multi-Modal Integration
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Integration of diverse data sources including Certificate of Analysis data, 
                    in-process measurements, and historical batch records.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-3 text-base sm:text-lg">
                    Regulatory Compliance
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    All models developed with GxP principles, ensuring full traceability 
                    and validation for regulated environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;

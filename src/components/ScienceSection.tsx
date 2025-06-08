import React, { useState } from 'react';
import { TrendingUp, Target, Award, Database, Brain, Zap, Shield } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ScienceSection = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

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

  const processSteps = [
    {
      icon: Database,
      title: "Data Ingestion",
      oneLine: "Multi-source data collection and harmonization",
      description: "Our platform seamlessly integrates Certificate of Analysis (COA) data, real-time process parameter monitoring, and historical batch record analysis. This multi-source data harmonization creates a unified foundation for predictive analytics, ensuring no critical information is overlooked in the manufacturing optimization process.",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-600"
    },
    {
      icon: Brain,
      title: "AI Analysis",
      oneLine: "Pattern recognition and statistical correlation",
      description: "Sophisticated machine learning algorithms perform deep pattern recognition and statistical correlation analysis across your manufacturing data. Our AI identifies key quality indicators, detects anomalies before they impact production, and uncovers hidden relationships between raw material characteristics and final product outcomes.",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      iconBg: "bg-gradient-to-br from-purple-500 to-pink-600"
    },
    {
      icon: Zap,
      title: "Predictive Modeling",
      oneLine: "Real-time manufacturing outcome predictions",
      description: "Our validated predictive models generate real-time manufacturing outcome predictions with industry-leading 98.7% accuracy. The system supports multiple therapeutic modalities and continuously refines its predictions through ongoing learning, enabling proactive decision-making throughout the manufacturing process.",
      color: "from-yellow-500 to-orange-600",
      bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50",
      iconBg: "bg-gradient-to-br from-yellow-500 to-orange-600"
    },
    {
      icon: Shield,
      title: "Output Generation",
      oneLine: "Actionable optimization recommendations",
      description: "Transform complex analytical insights into clear, actionable recommendations for your manufacturing team. Our platform delivers specific process optimization strategies, yield improvement guidance, quality enhancement insights, and comprehensive regulatory compliance reports that drive measurable manufacturing improvements.",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      iconBg: "bg-gradient-to-br from-green-500 to-emerald-600"
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
        
        <div ref={elementRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-16 sm:mb-20">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className={`text-center ${index === 0 ? 'sm:col-span-2 lg:col-span-1 sm:justify-self-center' : ''} transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6 hover:bg-gray-200 transition-colors duration-300">
                <stat.icon className="h-7 w-7 sm:h-8 sm:w-8 text-gray-700" />
              </div>
              <div className="text-3xl sm:text-4xl font-serif font-medium text-gray-900 mb-2">
                <AnimatedCounter value={stat.value} isVisible={isVisible} />
              </div>
              <div className="font-medium text-gray-900 mb-3">{stat.label}</div>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Process Flow Steps */}
        <div className="mb-16 sm:mb-20">
          <h3 className="font-serif text-2xl sm:text-3xl font-medium text-gray-900 mb-8 sm:mb-12 text-center">
            How It Works
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative">
                <div 
                  className="bg-white border border-gray-200 rounded-lg p-10 text-center hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  <div className={`absolute top-4 right-4 text-xs text-gray-400 transition-opacity duration-300 ${hoveredStep === index ? 'opacity-100' : 'opacity-0'}`}>
                    hover for details
                  </div>
                  
                  <div className={`w-16 h-16 ${step.iconBg} rounded-lg flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h4 className="font-medium text-gray-900 mb-4 text-xl">
                    {step.title}
                  </h4>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.oneLine}
                  </p>
                </div>

                {/* Expanded Content Below - Matches box size */}
                <div className={`overflow-hidden transition-all duration-300 ${
                  hoveredStep === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-xl p-10">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-16 h-16 ${step.iconBg} rounded-lg flex items-center justify-center shadow-lg`}>
                          <step.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 text-xl">
                            {step.title}
                          </h4>
                          <div className="text-sm text-gray-500">
                            Step {index + 1} of {processSteps.length}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-sm font-medium text-blue-600 border-l-2 border-blue-200 pl-3">
                        {step.oneLine}
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
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

import React, { useState } from 'react';
import { TrendingUp, Target, Award, Database, Brain, Zap, Shield, ChevronDown, ChevronUp } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ScienceSection = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

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
      description: "Collect and integrate raw material data from multiple sources including COA data, in-process measurements, and historical batch records.",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-600",
      details: [
        "Certificate of Analysis (COA) data integration",
        "Real-time process parameter monitoring",
        "Historical batch record analysis",
        "Multi-source data harmonization"
      ]
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: "Advanced machine learning algorithms analyze patterns and correlations in the data to identify key quality indicators and risk factors.",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      iconBg: "bg-gradient-to-br from-purple-500 to-pink-600",
      details: [
        "Deep learning pattern recognition",
        "Statistical correlation analysis",
        "Quality risk factor identification",
        "Anomaly detection algorithms"
      ]
    },
    {
      icon: Zap,
      title: "Predictive Modeling",
      description: "Generate real-time predictions for manufacturing outcomes with 98.7% accuracy across diverse therapeutic modalities.",
      color: "from-yellow-500 to-orange-600",
      bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50",
      iconBg: "bg-gradient-to-br from-yellow-500 to-orange-600",
      details: [
        "Real-time outcome predictions",
        "98.7% accuracy validation",
        "Multi-modal therapeutic support",
        "Continuous model refinement"
      ]
    },
    {
      icon: Shield,
      title: "Output Generation",
      description: "Deliver actionable insights and recommendations to optimize manufacturing processes and improve yield efficiency.",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      iconBg: "bg-gradient-to-br from-green-500 to-emerald-600",
      details: [
        "Actionable process recommendations",
        "Yield optimization strategies",
        "Quality improvement insights",
        "Regulatory compliance reports"
      ]
    }
  ];

  const toggleStep = (index: number) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

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
        
        {/* Statistics Grid with Animation */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={step.title}
                className={`${step.bgColor} rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer border border-white/50`}
                onClick={() => toggleStep(index)}
              >
                <div className={`w-12 h-12 ${step.iconBg} rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <step.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-medium text-gray-900 mb-3 flex items-center justify-center gap-2">
                  {step.title}
                  {expandedStep === index ? (
                    <ChevronUp className="h-4 w-4 text-gray-600" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-gray-600" />
                  )}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{step.description}</p>
                
                {expandedStep === index && (
                  <div className="mt-4 space-y-2 animate-fade-in">
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-3"></div>
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="text-xs text-gray-600 bg-white/60 rounded-lg px-3 py-2 backdrop-blur-sm">
                        • {detail}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
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

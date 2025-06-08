
import React, { useState } from 'react';
import { FlaskConical, Brain, Settings, TrendingUp } from 'lucide-react';

const InteractiveProcessFlow = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      icon: FlaskConical,
      title: "Raw Material Analysis",
      description: "AI analyzes molecular profiles and batch characteristics",
      details: "Our system examines over 200+ molecular markers, identifying subtle variations that traditional methods miss. Machine learning algorithms process spectroscopic data, chemical compositions, and historical performance metrics.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Brain,
      title: "Predictive Modeling",
      description: "Advanced algorithms predict manufacturing outcomes", 
      details: "Deep neural networks trained on 10,000+ historical batches simulate how material variations will impact your specific manufacturing process. Real-time risk assessment with 98.7% accuracy.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Settings,
      title: "Process Optimization",
      description: "System generates optimized parameters in real-time",
      details: "AI automatically adjusts temperature, pH, timing, and other critical parameters to compensate for raw material variability. Continuous optimization throughout the manufacturing cycle.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: TrendingUp,
      title: "Quality Assurance",
      description: "Continuous monitoring ensures consistent results",
      details: "Real-time quality monitoring with predictive alerts. Early warning system detects potential issues before they impact batch quality, reducing waste by up to 50%.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h3 className="font-serif text-2xl sm:text-3xl font-medium text-gray-900 mb-4">
          Interactive Process Flow
        </h3>
        <p className="text-gray-600">Click on each step to learn more about our AI-driven optimization process</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = activeStep === index;
          
          return (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-6 h-0.5 bg-gray-200 z-0" />
              )}
              
              <div 
                className={`relative z-10 bg-white rounded-xl border-2 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                  isActive ? 'border-blue-500 shadow-xl' : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setActiveStep(isActive ? null : index)}
              >
                <div className="p-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-4 transition-transform duration-300 ${isActive ? 'scale-110' : ''}`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="text-center">
                    <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm mb-4">
                      {step.description}
                    </p>
                    
                    <div className={`text-xs text-blue-600 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                      Click to {isActive ? 'collapse' : 'expand'}
                    </div>
                  </div>
                </div>
                
                {/* Expanded details */}
                <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <p className="text-gray-700 text-sm leading-relaxed mt-4">
                      {step.details}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InteractiveProcessFlow;

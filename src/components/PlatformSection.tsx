
import React from 'react';
import { Brain, BarChart3, Shield, Zap } from 'lucide-react';

const PlatformSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Predictive AI Models",
      description: "Advanced machine learning algorithms analyze raw material variations and predict manufacturing outcomes with 98.7% accuracy."
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Monitor process parameters, quality metrics, and efficiency indicators through comprehensive dashboards and alerts."
    },
    {
      icon: Zap,
      title: "Process Optimization",
      description: "Automatically adjust manufacturing parameters based on raw material characteristics to maximize yield and quality."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Identify potential batch failures before they occur, enabling proactive interventions and resource protection."
    }
  ];

  return (
    <section id="platform" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            The Future of Biomanufacturing Intelligence
          </h2>
          <p className="text-xl text-slate-600 text-balance">
            Our AI platform transforms complex manufacturing data into actionable insights, 
            enabling unprecedented control over biopharmaceutical production processes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Platform Demo */}
        <div className="mt-20 animate-fade-up">
          <div className="card-clean max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                See BioPredict in Action
              </h3>
              <p className="text-slate-600">
                Experience how our platform transforms raw material analysis into manufacturing excellence.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Input Analysis */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-blue-600 rounded"></div>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Raw Material Input</h4>
                  <p className="text-sm text-slate-600">Upload CoA data and specifications</p>
                </div>
                
                {/* AI Processing */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">AI Analysis</h4>
                  <p className="text-sm text-slate-600">Process through predictive models</p>
                </div>
                
                {/* Output Recommendations */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Optimized Parameters</h4>
                  <p className="text-sm text-slate-600">Receive tailored process settings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;

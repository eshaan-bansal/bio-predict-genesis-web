
import React from 'react';
import { TrendingUp, Target, Award } from 'lucide-react';

const ScienceSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "$100B+",
      label: "Industry Impact",
      description: "Total annual inefficiencies in biopharmaceutical manufacturing"
    },
    {
      icon: Target,
      value: "98.7%",
      label: "Prediction Accuracy",
      description: "Validated across diverse therapeutic modalities"
    },
    {
      icon: Award,
      value: "30%",
      label: "Yield Improvement",
      description: "Average increase in manufacturing efficiency"
    }
  ];

  return (
    <section id="science" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Proven Science, Measurable Results
          </h2>
          <p className="text-xl text-slate-600 text-balance">
            Our proprietary algorithms are trained on extensive datasets from leading 
            biomanufacturing facilities, delivering validated improvements across all process metrics.
          </p>
        </div>
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="card-clean text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <stat.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-slate-700 mb-3">{stat.label}</div>
              <p className="text-slate-600 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
        
        {/* Methodology */}
        <div className="max-w-4xl mx-auto animate-fade-up">
          <div className="card-clean">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">
              Our Methodology
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-4">
                  Advanced Machine Learning
                </h4>
                <p className="text-slate-600 mb-6">
                  Our models leverage deep learning architectures specifically designed for 
                  biomanufacturing data, incorporating domain expertise from process engineering 
                  and quality science.
                </p>
                
                <h4 className="text-lg font-semibold text-slate-900 mb-4">
                  Continuous Learning
                </h4>
                <p className="text-slate-600">
                  Each production cycle provides new training data, enabling our algorithms 
                  to continuously improve accuracy and adapt to changing conditions.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-4">
                  Multi-Modal Integration
                </h4>
                <p className="text-slate-600 mb-6">
                  We integrate diverse data sources including Certificate of Analysis (CoA) 
                  data, in-process measurements, and historical batch records for comprehensive insights.
                </p>
                
                <h4 className="text-lg font-semibold text-slate-900 mb-4">
                  Regulatory Compliance
                </h4>
                <p className="text-slate-600">
                  All models are developed with GxP principles in mind, ensuring full 
                  traceability and validation for regulated environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;

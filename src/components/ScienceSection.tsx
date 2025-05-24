
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
    <section id="science" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-up">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Proven Science, Measurable Results
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our proprietary algorithms are trained on extensive datasets from leading 
            biomanufacturing facilities, delivering validated improvements across all metrics.
          </p>
        </div>
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="glass rounded-2xl p-8 text-center animate-fade-up hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="font-display text-lg font-semibold text-foreground mb-3">{stat.label}</div>
              <p className="text-muted-foreground text-sm leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
        
        {/* Methodology */}
        <div className="max-w-6xl mx-auto animate-fade-up">
          <div className="glass rounded-2xl p-12">
            <h3 className="font-display text-3xl font-semibold text-foreground mb-12 text-center">
              Our Methodology
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h4 className="font-display text-xl font-semibold text-foreground mb-4">
                    Advanced Machine Learning
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Our models leverage deep learning architectures specifically designed for 
                    biomanufacturing data, incorporating domain expertise from process engineering 
                    and quality science.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-display text-xl font-semibold text-foreground mb-4">
                    Continuous Learning
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Each production cycle provides new training data, enabling our algorithms 
                    to continuously improve accuracy and adapt to changing conditions.
                  </p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-display text-xl font-semibold text-foreground mb-4">
                    Multi-Modal Integration
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We integrate diverse data sources including Certificate of Analysis (CoA) 
                    data, in-process measurements, and historical batch records for comprehensive insights.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-display text-xl font-semibold text-foreground mb-4">
                    Regulatory Compliance
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    All models are developed with GxP principles in mind, ensuring full 
                    traceability and validation for regulated environments.
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

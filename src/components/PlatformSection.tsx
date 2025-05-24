
import React from 'react';
import { Brain, BarChart3, Shield, Zap, CheckCircle } from 'lucide-react';

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

  const benefits = [
    "30% increase in manufacturing yields",
    "50% reduction in production costs",
    "98.7% prediction accuracy",
    "Real-time process optimization"
  ];

  return (
    <section id="platform" className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-up">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The Future of Manufacturing Intelligence
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Transform complex manufacturing data into actionable insights with our 
            AI-powered platform designed specifically for biopharmaceutical production.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Features Grid */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title} 
                className="flex items-start space-x-4 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits List */}
          <div className="animate-fade-up">
            <div className="glass rounded-2xl p-8">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-8">
                Proven Results
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-accent/10 rounded-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">$100B+</div>
                  <div className="text-sm text-muted-foreground">
                    Total addressable market opportunity
                  </div>
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


import React from 'react';
import { CheckCircle, ArrowRight, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const SolutionsSection = () => {
  const solutions = [
    {
      title: "Raw Material Optimization",
      problems: [
        "Unpredictable batch-to-batch variability",
        "Material qualification bottlenecks",
        "Supply chain disruption risks"
      ],
      benefits: [
        "Predictive material performance scoring",
        "Automated qualification protocols",
        "Alternative supplier validation"
      ]
    },
    {
      title: "Process Parameter Control",
      problems: [
        "Manual parameter adjustment",
        "Suboptimal process conditions",
        "Reactive quality management"
      ],
      benefits: [
        "AI-driven parameter optimization",
        "Real-time process adaptation",
        "Proactive quality assurance"
      ]
    },
    {
      title: "Yield Maximization",
      problems: [
        "Inconsistent production yields",
        "Resource waste and inefficiency",
        "Limited production capacity"
      ],
      benefits: [
        "30% average yield improvement",
        "Optimized resource utilization",
        "Enhanced facility throughput"
      ]
    }
  ];

  return (
    <section id="solutions" className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-up">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Solutions for Every Challenge
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From raw material variability to process optimization, our platform addresses 
            the most critical pain points in biopharmaceutical manufacturing.
          </p>
        </div>
        
        <div className="space-y-12">
          {solutions.map((solution, index) => (
            <div 
              key={solution.title}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass rounded-2xl p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Problems */}
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-8">
                      {solution.title}
                    </h3>
                    <div className="mb-6">
                      <h4 className="font-display text-lg font-medium text-destructive mb-4 flex items-center">
                        <X className="w-5 h-5 mr-2" />
                        Current Challenges
                      </h4>
                      <ul className="space-y-3">
                        {solution.problems.map((problem, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{problem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Solutions */}
                  <div>
                    <div className="h-16 lg:h-20" /> {/* Spacer for alignment */}
                    <div>
                      <h4 className="font-display text-lg font-medium text-accent mb-4 flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        BioPredict Solutions
                      </h4>
                      <ul className="space-y-3 mb-8">
                        {solution.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" className="group hover:bg-muted/50 transition-all duration-200">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-20 text-center animate-fade-up">
          <div className="glass rounded-2xl p-12 max-w-3xl mx-auto">
            <h3 className="font-display text-3xl font-semibold text-foreground mb-4">
              Ready to Transform Your Manufacturing?
            </h3>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              See how BioPredict can optimize your specific manufacturing challenges 
              with a personalized demonstration.
            </p>
            <Button className="gradient-primary text-white border-0 hover:opacity-90 transition-all duration-200 text-lg px-8 py-4">
              Schedule Consultation
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;

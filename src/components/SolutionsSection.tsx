
import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
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
    <section id="solutions" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Solutions for Every Manufacturing Challenge
          </h2>
          <p className="text-xl text-slate-600 text-balance">
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
              <div className="card-clean">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Problems */}
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-6">
                      {solution.title}
                    </h3>
                    <h4 className="text-lg font-medium text-red-600 mb-4">Current Challenges</h4>
                    <ul className="space-y-3">
                      {solution.problems.map((problem, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-600">{problem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Solutions */}
                  <div>
                    <div className="h-6 lg:h-12"></div> {/* Spacer for alignment */}
                    <h4 className="text-lg font-medium text-green-600 mb-4">BioPredict Solutions</h4>
                    <ul className="space-y-3 mb-6">
                      {solution.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="group">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-20 text-center animate-fade-up">
          <div className="card-clean max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              Ready to Transform Your Manufacturing?
            </h3>
            <p className="text-slate-600 mb-8">
              See how BioPredict can optimize your specific manufacturing challenges 
              with a personalized demonstration.
            </p>
            <Button className="btn-primary gap-2">
              Schedule Consultation
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;

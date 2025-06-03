
import React from 'react';
import { Brain, Database, Shield, Zap, FileText, Target } from 'lucide-react';

const PlatformSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI That Understands Biomanufacturing",
      description: "RawMaterialPredict AI leverages established machine learning techniques—multivariate data analysis, regression modeling, ensemble methods like Random Forests—specifically applied to the unique challenges of biomanufacturing. Our models are trained to identify statistically significant correlations between raw material attributes and critical process outcomes. This isn't generic AI; it's purpose-built intelligence that understands the complex relationships between Certificate of Analysis data and your manufacturing success."
    },
    {
      icon: Database,
      title: "Intelligent Data Integration & Digitization",
      description: "Transform your siloed data into integrated intelligence. Our platform automatically digitizes PDF Certificates of Analysis using advanced OCR and Large Language Model technology, extracting critical parameters like batch numbers, test specifications, and quantitative results. This structured data integrates seamlessly with your existing LIMS, MES, and process historians, creating a unified dataset that reveals hidden patterns affecting your process performance."
    },
    {
      icon: Shield,
      title: "GxP-Ready, Scalable Architecture",
      description: "Built for regulated biomanufacturing environments, RawMaterialPredict AI adheres to GAMP 5 software validation principles and supports 21 CFR Part 11 compliance requirements including audit trails, access controls, and data integrity (ALCOA+). Our cloud-native architecture scales from pilot projects to multi-site commercial manufacturing, with robust API connectors for seamless integration into your existing digital infrastructure. Security and compliance aren't afterthoughts—they're core design principles."
    },
    {
      icon: Target,
      title: "Proactive Risk Assessment & Prevention",
      description: "Flag high-risk material lots, optimize material selection, prevent costly failures, and accelerate root cause analysis by 20-50%. Our predictive models identify potential quality deviations before they occur, enabling proactive interventions that save millions in batch failures and manufacturing delays."
    }
  ];

  return (
    <section id="platform" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-gray-900 mb-6 text-balance">
            Proven Technology, Specialized Application
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Purpose-built AI platform that transforms raw material data into predictive intelligence 
            for advanced therapy manufacturing success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className="flex items-start space-x-6"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;

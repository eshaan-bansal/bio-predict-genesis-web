import React, { useState } from 'react';
import { Brain, Database, Target, CheckCircle, BarChart, TrendingUp, Award, Zap, Shield } from 'lucide-react';
import { useContent } from '../hooks/useContent';

const PlatformSection = () => {
  const { content, loading } = useContent();
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  if (loading || !content) {
    return (
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto container-padding">
          <div className="animate-pulse text-center">
            <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  const platformContent = content.platform;
  const advantagesContent = content.advantages;
  const impactContent = content.impact;

  // How It Works process steps
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
    <section id="platform" className="py-16 bg-white">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-sans text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
            {platformContent.title}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {platformContent.subtitle}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            {platformContent.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {platformContent.coreCapabilities.map((capability, index) => (
            <div 
              key={capability.title} 
              className="flex items-start space-x-6"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Brain className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-sans text-xl font-bold text-gray-900 mb-3">
                  {capability.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works Section */}
        <div className="mb-16 sm:mb-20">
          <h3 className="font-serif text-2xl sm:text-3xl font-medium text-gray-900 mb-8 sm:mb-12 text-center">
            How It Works
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    ? 'max-h-[500px] opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-xl p-6">
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

        {/* Technical Edge Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          <h3 className="font-sans text-3xl font-bold text-gray-900 mb-8 col-span-full text-center">
            Technical Edge
          </h3>
          {content.science.technicalEdge.map((edge, index) => (
            <div 
              key={edge.title} 
              className="flex items-start space-x-6"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-sans text-xl font-bold text-gray-900 mb-3">
                  {edge.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {edge.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Measurable Outcomes Section */}
        <div className="mb-16">
          <h3 className="font-sans text-3xl font-bold text-gray-900 mb-12 text-center">
            Measurable Outcomes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {impactContent.outcomes.map((outcome, index) => (
              <div key={outcome.title} className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-sans text-lg font-bold text-gray-900 mb-3">
                  {outcome.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Not Build It Yourself Section */}
        <div className="mb-16">
          <h3 className="font-sans text-3xl font-bold text-gray-900 mb-12 text-center">
            {advantagesContent.title}
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Our Advantages */}
            <div>
              <h4 className="font-sans text-2xl font-bold text-blue-600 mb-8">
                Our Unique Advantages
              </h4>
              <div className="space-y-6">
                {advantagesContent.ourAdvantages.map((advantage, index) => (
                  <div key={advantage.title} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 mt-1">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h5 className="font-sans text-lg font-semibold text-gray-900 mb-2">
                        {advantage.title}
                      </h5>
                      <p className="text-gray-600 leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Your Resource Reality */}
            <div>
              <h4 className="font-sans text-2xl font-bold text-gray-600 mb-8">
                Your Resource Reality
              </h4>
              <div className="space-y-6">
                {advantagesContent.yourReality.map((reality, index) => (
                  <div key={reality.title} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 mt-1">
                      <CheckCircle className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h5 className="font-sans text-lg font-semibold text-gray-900 mb-2">
                        {reality.title}
                      </h5>
                      <p className="text-gray-600 leading-relaxed">
                        {reality.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;

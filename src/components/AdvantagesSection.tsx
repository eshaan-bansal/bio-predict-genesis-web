import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { useContent } from '../hooks/useContent';

const AdvantagesSection = () => {
  const { content, loading } = useContent();

  if (loading || !content) {
    return (
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="animate-pulse text-center">
            <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  const advantagesContent = content.advantages;

  return (
    <section id="advantages" className="section-padding bg-white">
      <div className="container mx-auto container-padding">

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Our Advantages */}
            <div>
              <h3 className="font-sans text-2xl font-bold text-blue-600 mb-8">
                Our Unique Advantages
              </h3>
              <div className="space-y-6">
                {advantagesContent.ourAdvantages.map((advantage, index) => (
                  <div key={advantage.title} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 mt-1">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-sans text-lg font-semibold text-gray-900 mb-2">
                        {advantage.title}
                      </h4>
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
              <h3 className="font-sans text-2xl font-bold text-gray-600 mb-8">
                Your Resource Reality
              </h3>
              <div className="space-y-6">
                {advantagesContent.yourReality.map((reality, index) => (
                  <div key={reality.title} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 mt-1">
                      <CheckCircle className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-sans text-lg font-semibold text-gray-900 mb-2">
                        {reality.title}
                      </h4>
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

export default AdvantagesSection;
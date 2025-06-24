import React, { useState } from 'react';
import { TrendingUp, Target, Award, Database, Brain, Zap, Shield } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useContent } from '../hooks/useContent';

const ScienceSection = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
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

  const scienceContent = content.science;

  return (
    <section id="science" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 lg:p-12">
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-gray-900 mb-8 sm:mb-12 text-center">
              Our Methodology
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3 text-base sm:text-lg">
                    Advanced Machine Learning
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Deep learning architectures specifically designed for biomanufacturing data, 
                    incorporating domain expertise from process engineering and quality science.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-3 text-base sm:text-lg">
                    Continuous Learning
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Each production cycle provides new training data, enabling continuous 
                    improvement in accuracy and adaptation to changing conditions.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3 text-base sm:text-lg">
                    Multi-Modal Integration
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Integration of diverse data sources including Certificate of Analysis data, 
                    in-process measurements, and historical batch records.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-3 text-base sm:text-lg">
                    Regulatory Compliance
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    All models developed with GxP principles, ensuring full traceability 
                    and validation for regulated environments.
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

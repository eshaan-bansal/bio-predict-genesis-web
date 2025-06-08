
import React from 'react';
import ROICalculator from './ROICalculator';

const ROISection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-6 text-balance">
            Calculate Your Potential Savings
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            See how RMPredictive can transform your manufacturing economics with our interactive ROI calculator
          </p>
        </div>
        
        <ROICalculator />
      </div>
    </section>
  );
};

export default ROISection;

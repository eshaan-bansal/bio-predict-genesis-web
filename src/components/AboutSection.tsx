
import React from 'react';
import { Textarea } from '@/components/ui/textarea';

const AboutSection = () => {
  const founders = [{
    name: "Jamie Levitan",
    email: "jamie@rawmaterialpredictive.com",
    bio: ""
  }, {
    name: "Eshaan Bansal",
    email: "eshaan@rawmaterialpredictive.com", 
    bio: ""
  }];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-gray-900 mb-6 text-balance">
            Meet Our Biopharmaceutical Manufacturing AI Experts
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Meet the co-founders revolutionizing biopharmaceutical manufacturing efficiency through advanced predictive analytics and raw material optimization technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <div key={founder.name} className="text-center">
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-medium text-gray-900 mb-2">
                  {founder.name}
                </h3>
                <p className="text-blue-600 mb-4">Co-Founder & Biotech AI Specialist</p>
                <a 
                  href={`mailto:${founder.email}`} 
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label={`Email ${founder.name}`}
                >
                  {founder.email}
                </a>
              </div>
              <div className="mt-6">
                {/* Bio area for future content */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

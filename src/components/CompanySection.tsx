
import React from 'react';
import { Users, Award, Globe, TrendingUp } from 'lucide-react';

const CompanySection = () => {
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Co-Founder",
      background: "Former VP of Process Development at Genentech. PhD in Chemical Engineering from MIT.",
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "CTO & Co-Founder", 
      background: "AI Research Lead at Google DeepMind. PhD in Machine Learning from Stanford.",
    },
    {
      name: "Dr. Emily Watson",
      role: "Chief Science Officer",
      background: "20+ years in biomanufacturing at Amgen and Biogen. PhD in Biotechnology from UC Berkeley.",
    }
  ];

  const metrics = [
    { icon: Users, value: "50+", label: "Team Members" },
    { icon: Award, value: "15+", label: "Patents Filed" },
    { icon: Globe, value: "12", label: "Countries Served" },
    { icon: TrendingUp, value: "$25M", label: "Series A Funding" }
  ];

  return (
    <section id="company" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-gray-900 mb-6 text-balance">
            Leading the Future of Biomanufacturing
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Founded by industry veterans and AI pioneers, BioPredict combines decades of 
            biomanufacturing expertise with cutting-edge artificial intelligence.
          </p>
        </div>
        
        {/* Company Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <div 
              key={metric.label}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <metric.icon className="h-8 w-8 text-gray-700" />
              </div>
              <div className="text-3xl font-serif font-medium text-gray-900 mb-2">{metric.value}</div>
              <div className="text-sm text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>
        
        {/* Leadership Team */}
        <div className="mb-20">
          <h3 className="font-serif text-3xl font-medium text-gray-900 text-center mb-12">
            Leadership Team
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div 
                key={member.name}
                className="text-center"
              >
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6"></div>
                <h4 className="font-medium text-gray-900 mb-2 text-lg">{member.name}</h4>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{member.background}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-12 text-center">
            <h3 className="font-serif text-3xl font-medium text-gray-900 mb-8">
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              To accelerate the delivery of life-saving therapies by eliminating unpredictability 
              in biopharmaceutical manufacturing. Through AI-driven insights and process optimization, 
              we enable manufacturers to achieve consistent, high-quality production while reducing 
              costs and time-to-market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;

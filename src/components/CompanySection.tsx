
import React from 'react';
import { Users, Award, Globe, TrendingUp } from 'lucide-react';

const CompanySection = () => {
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Co-Founder",
      background: "Former VP of Process Development at Genentech. PhD in Chemical Engineering from MIT.",
      image: "/api/placeholder/120/120"
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "CTO & Co-Founder", 
      background: "AI Research Lead at Google DeepMind. PhD in Machine Learning from Stanford.",
      image: "/api/placeholder/120/120"
    },
    {
      name: "Dr. Emily Watson",
      role: "Chief Science Officer",
      background: "20+ years in biomanufacturing at Amgen and Biogen. PhD in Biotechnology from UC Berkeley.",
      image: "/api/placeholder/120/120"
    }
  ];

  const metrics = [
    { icon: Users, value: "50+", label: "Team Members" },
    { icon: Award, value: "15+", label: "Patents Filed" },
    { icon: Globe, value: "12", label: "Countries Served" },
    { icon: TrendingUp, value: "$25M", label: "Series A Funding" }
  ];

  return (
    <section id="company" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Leading the Future of Biomanufacturing
          </h2>
          <p className="text-xl text-slate-600 text-balance">
            Founded by industry veterans and AI pioneers, BioPredict combines decades of 
            biomanufacturing expertise with cutting-edge artificial intelligence.
          </p>
        </div>
        
        {/* Company Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <div 
              key={metric.label}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <metric.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-slate-900 mb-1">{metric.value}</div>
              <div className="text-sm text-slate-600">{metric.label}</div>
            </div>
          ))}
        </div>
        
        {/* Leadership Team */}
        <div className="mb-20 animate-fade-up">
          <h3 className="text-2xl font-semibold text-slate-900 text-center mb-12">
            Leadership Team
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={member.name}
                className="card-clean text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-6"></div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">{member.name}</h4>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-sm text-slate-600">{member.background}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto animate-fade-up">
          <div className="card-clean text-center">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
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

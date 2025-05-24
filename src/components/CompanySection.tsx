
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
    <section id="company" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-up">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Leading the Future of Biomanufacturing
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
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
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <metric.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{metric.value}</div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>
        
        {/* Leadership Team */}
        <div className="mb-20 animate-fade-up">
          <h3 className="font-display text-3xl font-semibold text-foreground text-center mb-12">
            Leadership Team
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={member.name}
                className="glass rounded-2xl p-8 text-center animate-fade-up hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6"></div>
                <h4 className="font-display text-xl font-semibold text-foreground mb-2">{member.name}</h4>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.background}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto animate-fade-up">
          <div className="glass rounded-2xl p-12 text-center">
            <h3 className="font-display text-3xl font-semibold text-foreground mb-8">
              Our Mission
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
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

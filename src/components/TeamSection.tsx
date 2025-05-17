
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { MicrochipIcon, Users } from "lucide-react";

const TeamSection = () => {
  return (
    <section id="team" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-biopredict-light-purple/5 rounded-full blur-3xl -z-5"></div>
      <div className="absolute right-0 top-0 w-72 h-72 bg-biopredict-purple/5 rounded-full blur-3xl -z-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-biopredict-purple/30 bg-biopredict-purple/10 backdrop-blur-md text-biopredict-purple text-xs font-medium mb-6">
            <Users className="h-3.5 w-3.5 mr-2" />
            <span>Our Visionary Team</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Meet the Innovators Engineering the Future of Biomanufacturing
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Passionate experts committed to revolutionizing biomanufacturing through cutting-edge AI solutions.
          </p>
        </div>
        
        {/* Team grid - placeholder for team members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[1, 2, 3].map((index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-24 w-24 border-2 border-biopredict-purple/30 mb-4">
                    <AvatarFallback className="bg-biopredict-purple/20 text-biopredict-light-purple">
                      <Users />
                    </AvatarFallback>
                  </Avatar>
                  
                  <h4 className="text-xl font-semibold mb-1">Team Member {index}</h4>
                  <p className="text-sm text-biopredict-light-purple mb-3">Position / Role</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Placeholder for team member bio. This space will be used to highlight expertise, experience, and passion for biomanufacturing innovation.
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Vision Statement */}
        <div className="max-w-4xl mx-auto">
          <Card className="neo-glass border-biopredict-purple/20 relative overflow-hidden">
            <CardContent className="p-8">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <MicrochipIcon className="h-24 w-24" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 gradient-text">Our Collective Vision</h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                At BioPredict, our diverse team unites around a shared mission: to solve the most critical challenges in biomanufacturing through innovative AI. Our collective expertise spans bioprocess engineering, machine learning, and pharmaceutical manufacturing—creating a unique interdisciplinary approach to transformation.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300">
                We are passionate about unlocking the tremendous potential of data-driven insights to create more efficient, predictable, and sustainable biomanufacturing processes. Our vision extends beyond technology; we aim to accelerate the delivery of life-saving therapies to patients worldwide by eliminating the bottlenecks that have historically constrained the industry.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Custom shape divider */}
      <div className="custom-shape-divider-bottom mt-24">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-biopredict-light-purple/30 to-transparent"></div>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="fill-background h-[60px] w-full">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default TeamSection;

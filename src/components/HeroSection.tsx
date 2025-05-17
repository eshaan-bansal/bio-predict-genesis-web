
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, RocketIcon, Atom, FlaskConical } from "lucide-react";
import DataWaveBackground from "./DataWaveBackground";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <DataWaveBackground />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-biopredict-purple/30 bg-biopredict-purple/10 backdrop-blur-md text-biopredict-purple text-xs font-medium mb-6 animate-fade-in">
            <FlaskConical className="h-3.5 w-3.5 mr-2" />
            <span className="animate-gradient-x bg-gradient-to-r from-biopredict-light-purple to-biopredict-purple bg-clip-text text-transparent">
              AI-Powered Biomanufacturing
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in">
            Unlocking <span className="gradient-text">$100 Billion</span> in Biopharma Manufacturing Efficiency
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 animate-fade-in-slow">
            AI-Powered Process Optimization Delivering 30% Higher Yields and 50% Lower Costs
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-slow">
            <Button size="lg" className="gap-2 font-medium bg-gradient-to-r from-biopredict-purple to-biopredict-light-purple hover:opacity-90 transition-opacity shadow-lg shadow-biopredict-purple/20">
              Get Started <ChevronRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="font-medium border-biopredict-purple/30 backdrop-blur-sm hover:bg-biopredict-purple/10">
              See How It Works
            </Button>
          </div>
        </div>

        {/* Futuristic Data Visualization */}
        <div className="relative mt-20 md:mt-32 h-72 max-w-5xl mx-auto rounded-lg overflow-hidden animate-fade-in-slow">
          <div className="absolute inset-0 bg-gradient-to-r from-biopredict-purple/90 to-biopredict-light-purple/90 opacity-90 z-10 rounded-lg"></div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
          
          {/* Digital particles effect */}
          <div className="absolute inset-0 z-5">
            {Array.from({ length: 30 }).map((_, i) => (
              <div 
                key={i}
                className="absolute bg-white/50 rounded-full animate-pulse-glow"
                style={{
                  width: Math.random() * 3 + 1 + 'px',
                  height: Math.random() * 3 + 1 + 'px',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  opacity: Math.random() * 0.7,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 10 + 5}s`
                }}
              />
            ))}
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="w-full max-w-2xl">
              {/* Binary/hexadecimal codes scrolling in background */}
              <div className="absolute top-0 right-4 text-xs text-white/20 font-mono animate-float opacity-40" style={{animationDuration: '20s'}}>
                {Array.from({length: 10}).map((_, i) => (
                  <div key={i}>0x{Math.floor(Math.random()*16777215).toString(16)}</div>
                ))}
              </div>
              
              {/* Data visualization */}
              <div className="flex justify-between items-center mb-6">
                <div className="h-3 bg-white/30 rounded-full w-1/4 animate-pulse-glow" style={{animationDelay: '0.5s'}}></div>
                <div className="h-3 bg-white/30 rounded-full w-1/5 animate-pulse-glow" style={{animationDelay: '1.2s'}}></div>
                <div className="h-3 bg-white/50 rounded-full w-1/6 animate-pulse-glow" style={{animationDelay: '0.8s'}}></div>
                <div className="h-3 bg-white/70 rounded-full w-1/3 animate-pulse-glow" style={{animationDelay: '1.5s'}}></div>
              </div>
              <div className="flex justify-between items-center mb-6">
                <div className="h-3 bg-white/20 rounded-full w-1/6 animate-pulse-glow" style={{animationDelay: '2s'}}></div>
                <div className="h-3 bg-white/40 rounded-full w-1/4 animate-pulse-glow" style={{animationDelay: '1s'}}></div>
                <div className="h-3 bg-white/60 rounded-full w-1/5 animate-pulse-glow" style={{animationDelay: '1.7s'}}></div>
                <div className="h-3 bg-white/30 rounded-full w-1/6 animate-pulse-glow" style={{animationDelay: '0.3s'}}></div>
              </div>
              <div className="flex justify-between items-center">
                <div className="h-3 bg-white/50 rounded-full w-1/3 animate-pulse-glow" style={{animationDelay: '1.1s'}}></div>
                <div className="h-3 bg-white/40 rounded-full w-1/4 animate-pulse-glow" style={{animationDelay: '0.6s'}}></div>
                <div className="h-3 bg-white/20 rounded-full w-1/5 animate-pulse-glow" style={{animationDelay: '1.9s'}}></div>
                <div className="h-3 bg-white/40 rounded-full w-1/4 animate-pulse-glow" style={{animationDelay: '1.3s'}}></div>
              </div>
              
              {/* DNA helix visualization */}
              <div className="mt-8 relative h-12 flex items-center">
                <div className="absolute w-full h-0.5 bg-white/10"></div>
                {Array.from({length: 12}).map((_, i) => (
                  <React.Fragment key={i}>
                    <div 
                      className="absolute h-3 w-3 bg-white/50 rounded-full animate-float"
                      style={{
                        left: `${i * 8}%`, 
                        top: Math.sin(i * 0.5) * 10 + 12 + 'px',
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: '4s'
                      }}
                    ></div>
                    <div 
                      className="absolute h-3 w-3 bg-white/30 rounded-full animate-float"
                      style={{
                        left: `${i * 8}%`, 
                        bottom: Math.sin(i * 0.5) * 10 + 12 + 'px',
                        animationDelay: `${i * 0.2 + 2}s`,
                        animationDuration: '4s'
                      }}
                    ></div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          
          {/* Animated molecule icon */}
          <div className="absolute right-8 bottom-8 z-30">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-white/10 animate-ping" style={{animationDuration: '3s'}}></div>
              <div className="relative bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm p-3 rounded-full">
                <Atom className="h-6 w-6 text-white animate-spin" style={{animationDuration: '10s'}} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom shape divider with glowing effect */}
      <div className="custom-shape-divider-bottom">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-biopredict-light-purple/30 to-transparent"></div>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="fill-background h-[60px] w-full">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;

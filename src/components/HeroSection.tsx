
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, RocketIcon, Atom, FlaskConical, BookOpenIcon, Activity, Brain } from "lucide-react";
import DataWaveBackground from "./DataWaveBackground";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-16 overflow-hidden cyber-grid">
      <DataWaveBackground />
      
      {/* Floating particles */}
      <div className="particles">
        {Array.from({ length: 15 }).map((_, i) => (
          <div 
            key={i}
            className="particle"
            style={{
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 8 + 's',
              animationDuration: (Math.random() * 10 + 8) + 's',
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-morphism text-biopredict-purple text-sm font-medium mb-8 animate-fade-in">
            <Brain className="h-4 w-4 mr-2 animate-pulse-glow" />
            <span className="gradient-text font-bold">
              Next-Generation AI Biomanufacturing
            </span>
            <div className="ml-2 w-2 h-2 bg-biopredict-accent rounded-full animate-pulse-glow"></div>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 animate-fade-in">
            <span className="holographic-text">Revolutionizing</span>
            <br />
            <span className="gradient-text">Biopharmaceutical</span>
            <br />
            <span className="text-white">Manufacturing</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 animate-fade-in-slow max-w-4xl mx-auto leading-relaxed">
            Harness the power of <span className="text-biopredict-accent font-semibold">artificial intelligence</span> to optimize 
            biomanufacturing processes, predict outcomes with <span className="text-biopredict-purple font-semibold">98.7% accuracy</span>, 
            and unlock <span className="gradient-text font-bold">$100 billion</span> in industry efficiency
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-slow">
            <Button size="lg" className="cyber-button gap-3 font-semibold text-lg px-8 py-4 h-auto">
              <BookOpenIcon className="h-6 w-6" />
              Schedule AI Demo
              <ChevronRight className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="glass-morphism border-biopredict-purple/50 hover:bg-biopredict-purple/10 font-semibold text-lg px-8 py-4 h-auto text-white">
              <Activity className="h-5 w-5 mr-2" />
              View Live Analytics
            </Button>
          </div>
        </div>

        {/* Advanced AI Dashboard Visualization */}
        <div className="relative mt-24 md:mt-32 h-96 max-w-6xl mx-auto rounded-2xl overflow-hidden animate-fade-in-slow glass-morphism neural-network">
          <div className="absolute inset-0 bg-gradient-to-br from-biopredict-purple/20 to-biopredict-accent/10 z-10"></div>
          
          {/* Scanning line effect */}
          <div className="absolute inset-0 z-20">
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-biopredict-accent to-transparent animate-cyber-scan"></div>
          </div>
          
          {/* Data streams */}
          <div className="absolute inset-0 z-5">
            {Array.from({ length: 8 }).map((_, i) => (
              <div 
                key={i}
                className="absolute h-1 bg-gradient-to-r from-transparent via-biopredict-purple/60 to-transparent animate-data-stream"
                style={{
                  top: `${20 + i * 10}%`,
                  width: '200px',
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: '4s'
                }}
              />
            ))}
          </div>
          
          {/* Hexagonal data nodes */}
          <div className="absolute inset-0 z-15">
            {Array.from({ length: 20 }).map((_, i) => (
              <div 
                key={i}
                className="absolute w-3 h-3 border border-biopredict-accent/50 bg-biopredict-purple/30 animate-pulse-glow"
                style={{
                  left: Math.random() * 90 + 5 + '%',
                  top: Math.random() * 80 + 10 + '%',
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center z-30 p-8">
            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Real-time Metrics */}
              <div className="glass-morphism p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-biopredict-accent uppercase tracking-wider">Process Efficiency</h3>
                  <Atom className="h-5 w-5 text-biopredict-purple animate-spin" style={{animationDuration: '8s'}} />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-300">Yield Optimization</span>
                    <span className="text-sm font-bold text-biopredict-accent">+34.7%</span>
                  </div>
                  <div className="loading-bar h-2"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-300">Quality Score</span>
                    <span className="text-sm font-bold text-emerald-400">9.8/10</span>
                  </div>
                  <div className="loading-bar h-2"></div>
                </div>
              </div>
              
              {/* Predictive Analytics */}
              <div className="glass-morphism p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-biopredict-accent uppercase tracking-wider">AI Predictions</h3>
                  <Brain className="h-5 w-5 text-biopredict-purple animate-pulse-glow" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-300">Success Probability</span>
                    <span className="text-sm font-bold text-emerald-400">98.7%</span>
                  </div>
                  <div className="loading-bar h-2"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-300">Risk Assessment</span>
                    <span className="text-sm font-bold text-biopredict-accent">Low</span>
                  </div>
                  <div className="loading-bar h-2"></div>
                </div>
              </div>
              
              {/* Cost Optimization */}
              <div className="glass-morphism p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-biopredict-accent uppercase tracking-wider">Cost Reduction</h3>
                  <FlaskConical className="h-5 w-5 text-biopredict-purple animate-float" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-300">Material Savings</span>
                    <span className="text-sm font-bold text-emerald-400">$2.3M</span>
                  </div>
                  <div className="loading-bar h-2"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-300">Time Efficiency</span>
                    <span className="text-sm font-bold text-biopredict-accent">-47%</span>
                  </div>
                  <div className="loading-bar h-2"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Central holographic element */}
          <div className="absolute right-8 bottom-8 z-40">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-biopredict-purple/20 animate-ping" style={{animationDuration: '4s'}}></div>
              <div className="relative glass-morphism p-4 rounded-full animate-hologram">
                <RocketIcon className="h-8 w-8 text-biopredict-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced custom shape divider */}
      <div className="custom-shape-divider-bottom">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="divider-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0.1)" />
              <stop offset="50%" stopColor="rgba(99, 102, 241, 0.2)" />
              <stop offset="100%" stopColor="rgba(139, 92, 246, 0.1)" />
            </linearGradient>
          </defs>
          <path fill="url(#divider-gradient)" d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;

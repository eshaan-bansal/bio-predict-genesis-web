
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, RocketIcon, Atom, FlaskConical, BookOpenIcon, Activity, Brain, ArrowRight } from "lucide-react";
import DataWaveBackground from "./DataWaveBackground";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <DataWaveBackground />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full glass-morphism text-biopredict-purple text-sm font-medium mb-12 animate-fade-in">
              <Brain className="h-4 w-4 mr-3 text-biopredict-accent" />
              <span className="text-slate-300">
                Next-Generation AI Biomanufacturing Platform
              </span>
              <div className="ml-3 w-2 h-2 bg-biopredict-accent rounded-full animate-pulse"></div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-light leading-[0.9] mb-12 animate-fade-in tracking-tight">
              <span className="text-white font-extralight">Revolutionizing</span>
              <br />
              <span className="gradient-text font-medium">Biopharmaceutical</span>
              <br />
              <span className="text-white font-extralight">Manufacturing</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 mb-16 animate-fade-in-slow max-w-4xl mx-auto leading-relaxed font-light">
              Harness artificial intelligence to optimize biomanufacturing processes, 
              predict outcomes with <span className="text-white font-medium">98.7% accuracy</span>, 
              and unlock <span className="text-biopredict-accent font-medium">$100B+</span> in industry efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-slow">
              <Button size="lg" className="cyber-button gap-3 font-medium text-lg px-10 py-6 h-auto rounded-full">
                <BookOpenIcon className="h-5 w-5" />
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="glass-morphism border-slate-600 hover:bg-white/5 font-medium text-lg px-10 py-6 h-auto text-slate-300 rounded-full">
                <Activity className="h-5 w-5 mr-2" />
                View Platform
              </Button>
            </div>
          </div>

          {/* Clean metrics dashboard */}
          <div className="relative max-w-5xl mx-auto animate-fade-in-slow">
            <div className="glass-morphism rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Process Efficiency */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-biopredict-purple/20 mb-6">
                    <Atom className="h-8 w-8 text-biopredict-accent" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">Process Efficiency</h3>
                  <div className="text-3xl font-light text-biopredict-accent mb-2">+34.7%</div>
                  <p className="text-sm text-slate-400">Yield optimization increase</p>
                </div>
                
                {/* AI Predictions */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-biopredict-accent/20 mb-6">
                    <Brain className="h-8 w-8 text-biopredict-purple" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">Success Rate</h3>
                  <div className="text-3xl font-light text-emerald-400 mb-2">98.7%</div>
                  <p className="text-sm text-slate-400">Prediction accuracy</p>
                </div>
                
                {/* Cost Reduction */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/20 mb-6">
                    <FlaskConical className="h-8 w-8 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">Cost Savings</h3>
                  <div className="text-3xl font-light text-emerald-400 mb-2">$2.3M</div>
                  <p className="text-sm text-slate-400">Per facility annually</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

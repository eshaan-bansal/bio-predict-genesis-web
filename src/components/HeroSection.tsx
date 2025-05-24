
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-slate-50/50 -z-10" />
      
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 mb-8">
            AI-Powered Biomanufacturing Platform
          </div>
          
          {/* Headlines */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 text-balance">
            Predictive Intelligence for{' '}
            <span className="gradient-text">Biopharmaceutical</span>{' '}
            Manufacturing
          </h1>
          
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto text-balance">
            Transform raw material variability from a liability into a competitive advantage. 
            Achieve <strong>98.7% prediction accuracy</strong> and unlock <strong>$2.3M+ annual savings</strong> per facility.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button className="btn-primary gap-2 text-base px-8 py-4 h-auto">
              Schedule Demo
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="gap-2 text-base px-8 py-4 h-auto">
              <Play className="h-4 w-4" />
              Watch Platform Overview
            </Button>
          </div>
          
          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 mb-2">98.7%</div>
              <div className="text-sm text-slate-600">Prediction Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 mb-2">$2.3M+</div>
              <div className="text-sm text-slate-600">Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 mb-2">30%</div>
              <div className="text-sm text-slate-600">Yield Improvement</div>
            </div>
          </div>
        </div>
        
        {/* Platform Preview */}
        <div className="max-w-5xl mx-auto mt-16 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl">
            <div className="rounded-xl bg-slate-50 p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left side - Dashboard preview */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-slate-500 ml-4">BioPredict Dashboard</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                    <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                    <div className="h-32 bg-blue-100 rounded-lg flex items-center justify-center">
                      <div className="text-blue-600 font-medium">Real-time Analytics</div>
                    </div>
                  </div>
                </div>
                
                {/* Right side - Metrics */}
                <div className="space-y-6">
                  <div className="card-clean">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-700">Batch Success Rate</span>
                      <span className="text-sm font-bold text-green-600">98.7%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '98.7%' }}></div>
                    </div>
                  </div>
                  
                  <div className="card-clean">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-700">Process Efficiency</span>
                      <span className="text-sm font-bold text-blue-600">+34%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '82%' }}></div>
                    </div>
                  </div>
                  
                  <div className="card-clean">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-700">Cost Reduction</span>
                      <span className="text-sm font-bold text-purple-600">$2.3M</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '76%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

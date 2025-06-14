
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { MicrochipIcon, Target, BrainCircuit, Shield, Rocket, Database } from "lucide-react";

const MarketSection = () => {
  return (
    <section id="market" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            The Massive Market Reality: Where Efficiency Meets Profitability
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Capturing unprecedented value in the rapidly expanding advanced therapy manufacturing market
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <Card className="border border-gray-200 shadow-lg bg-white overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-bl-full"></div>
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <BrainCircuit className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Multi-Billion Dollar Advanced Therapy Manufacturing Market</h3>
              <ul className="space-y-3 mt-4 text-sm">
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-700">ADC market projected to exceed $16 billion in 2025, growing at greater than 20% CAGR to reach $38 billion by 2029</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-700">RLT market forecast to surpass $13 billion by 2030, with blockbuster drugs like Pluvicto generating $1B+ in just 9 months</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-700">CGT CDMO market expected to grow from ~$8 billion in 2025 to ~$74 billion by 2034 (28% CAGR)</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Global pharmaceutical CDMO market approaching ~$369 billion by 2034, with advanced therapies representing the highest-growth, highest-margin segment</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-lg bg-white overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-green-100 rounded-bl-full"></div>
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Massive Addressable Market with Critical Pain Points</h3>
              <ul className="space-y-3 mt-4 text-sm">
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Manufacturing cost of goods represents 40-70% of advanced therapy pricing—efficiency improvements directly translate to competitive advantages</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Single batch failures can cost $4-10M+ due to material costs, patient delays, and regulatory implications</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Complex supply chains with 100+ critical raw materials per process create unprecedented variability management challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-700">First-in-class therapies command premium pricing, making manufacturing optimization a key competitive differentiator</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-lg bg-white overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-100 rounded-bl-full"></div>
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <Rocket className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Our Competitive Positioning & Value Capture Strategy</h3>
              <ul className="space-y-3 mt-4 text-sm">
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Target initial TAM of $2B+ representing advanced therapy CDMOs and innovator companies with complex manufacturing operations</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-700">First-mover advantage in predictive raw material intelligence—no direct competitors with our specific focus and technical approach</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Value-based pricing model: capture 10-25% of realized savings from prevented batch failures and optimization gains</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Expanding to adjacent markets: traditional biologics, small molecules, and emerging therapeutic modalities</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;

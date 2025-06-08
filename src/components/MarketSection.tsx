
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { MicrochipIcon, Target, BrainCircuit, Shield, Rocket, Database } from "lucide-react";

const MarketSection = () => {
  return (
    <section id="market" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sand-beige/10 to-ivory -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-brown">
            The Massive Market Reality: Where Efficiency Meets Profitability
          </h2>
          <p className="text-lg text-dark-brown/80 max-w-3xl mx-auto">
            Capturing unprecedented value in the rapidly expanding advanced therapy manufacturing market
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <Card className="border border-sand-beige/30 shadow-lg bg-ivory overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-olive-green/10 rounded-bl-full"></div>
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-olive-green/10 flex items-center justify-center mb-4">
                <BrainCircuit className="h-6 w-6 text-olive-green" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-dark-brown">Multi-Billion Dollar Advanced Therapy Manufacturing Market</h3>
              <ul className="space-y-3 mt-4 text-sm">
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-olive-green mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-dark-brown/80">ADC market projected to exceed $16 billion in 2025, growing at greater than 20% CAGR to reach $38 billion by 2029</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-olive-green mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-dark-brown/80">RLT market forecast to surpass $13 billion by 2030, with blockbuster drugs like Pluvicto generating $1B+ in just 9 months</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-olive-green mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-dark-brown/80">CGT CDMO market expected to grow from ~$8 billion in 2025 to ~$74 billion by 2034 (28% CAGR)</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-olive-green mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-dark-brown/80">Global pharmaceutical CDMO market approaching ~$369 billion by 2034, with advanced therapies representing the highest-growth, highest-margin segment</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border border-sand-beige/30 shadow-lg bg-ivory overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-sand-beige/20 rounded-bl-full"></div>
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-sand-beige/20 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-olive-green" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-dark-brown">Massive Addressable Market with Critical Pain Points</h3>
              <ul className="space-y-3 mt-4 text-sm">
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-olive-green mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-dark-brown/80">Manufacturing cost of goods represents 40-70% of advanced therapy pricing—efficiency improvements directly translate to competitive advantages</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-olive-green mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-dark-brown/80">Single batch failures can cost $4-10M+ due to material costs, patient delays, and regulatory implications</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-olive-green mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-dark-brown/80">Complex supply chains with 100+ critical raw materials per process create unprecedented variability management challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-olive-green mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-dark-brown/80">First-in-class therapies command premium pricing, making manufacturing optimization a key competitive differentiator</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border border-sand-beige/30 shadow-lg bg-ivory overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-olive-green/20 rounded-bl-full"></div>
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-olive-green/20 flex items-center justify-center mb-4">
                <Rocket className="h-6 w-6 text-olive-green" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-dark-brown">Our Competitive Positioning & Value Capture Strategy</h3>
              <ul className="space-y-3 mt-4 text-sm">
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-olive-green mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-dark-brown/80">Target initial TAM of $2B+ representing advanced therapy CDMOs and innovator companies with complex manufacturing operations</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-olive-green mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-dark-brown/80">First-mover advantage in predictive raw material intelligence—no direct competitors with our specific focus and technical approach</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-olive-green mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-dark-brown/80">Value-based pricing model: capture 10-25% of realized savings from prevented batch failures and optimization gains</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-olive-green mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-dark-brown/80">Expanding to adjacent markets: traditional biologics, small molecules, and emerging therapeutic modalities</span>
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

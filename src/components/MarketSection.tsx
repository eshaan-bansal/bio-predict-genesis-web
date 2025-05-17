
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { MicrochipIcon, Target, BrainCircuit } from "lucide-react";

const MarketSection = () => {
  return (
    <section id="market" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-biopredict-light-purple/5 to-biopredict-purple/5 -z-10"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 -z-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute bg-biopredict-purple/30 rounded-full animate-float"
            style={{
              width: Math.random() * 5 + 2 + 'px',
              height: Math.random() * 5 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5 + 0.1,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 15 + 10}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Science Behind the Savings: Our AI Powerhouse
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transforming biomanufacturing through advanced predictive analytics and AI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm neo-glass overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-biopredict-purple/20 rounded-bl-full"></div>
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-biopredict-purple/20 flex items-center justify-center mb-4">
                <BrainCircuit className="h-6 w-6 text-biopredict-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2 gradient-text">$100 Billion Industry Impact</h3>
              <ul className="space-y-3 mt-4 text-sm">
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-biopredict-light-purple mt-1.5 mr-2 flex-shrink-0"></span>
                  <span>Quantifies total industry inefficiencies in biopharmaceutical manufacturing operations.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-biopredict-light-purple mt-1.5 mr-2 flex-shrink-0"></span>
                  <span>Includes costs lost to batch failures, material waste, quality deviations, and suboptimal process performance industry-wide.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-biopredict-light-purple mt-1.5 mr-2 flex-shrink-0"></span>
                  <span>Highlights the enormous untapped value AI can unlock by optimizing these complex, high-value operations.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm neo-glass overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-biopredict-purple/20 rounded-bl-full"></div>
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-biopredict-purple/20 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-biopredict-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2 gradient-text">$20 Billion Serviceable Addressable Market</h3>
              <ul className="space-y-3 mt-4 text-sm">
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-biopredict-light-purple mt-1.5 mr-2 flex-shrink-0"></span>
                  <span>Targeting advanced therapy (ADC, RLT, CGT) and complex biologic manufacturers where raw material impact and costs are highest.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-biopredict-light-purple mt-1.5 mr-2 flex-shrink-0"></span>
                  <span>Focus on innovative CDMOs and biotech/pharma companies actively seeking digital transformation and AI-driven efficiency gains.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-biopredict-light-purple mt-1.5 mr-2 flex-shrink-0"></span>
                  <span>Segments producing high-value therapeutics where even marginal improvements in yield and failure reduction translate to millions in ROI.</span>
                </li>
              </ul>
              <div className="mt-4 text-xs text-gray-400">
                <p>ADC market >$16B by 2025, RLT market >$13B by 2030, CGT CDMO market to grow from ~$8B in 2025 to ~$74B by 2034</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm neo-glass overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-biopredict-purple/20 rounded-bl-full"></div>
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-biopredict-purple/20 flex items-center justify-center mb-4">
                <MicrochipIcon className="h-6 w-6 text-biopredict-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2 gradient-text">30% Yield Improvement Potential</h3>
              <ul className="space-y-3 mt-4 text-sm">
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-biopredict-light-purple mt-1.5 mr-2 flex-shrink-0"></span>
                  <span>Directly translates to significantly more product from existing resources, drastically improving revenue potential.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-biopredict-light-purple mt-1.5 mr-2 flex-shrink-0"></span>
                  <span>Substantially reduces Cost of Goods Sold (COGS), boosting profit margins per batch.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-biopredict-light-purple mt-1.5 mr-2 flex-shrink-0"></span>
                  <span>Increases overall production capacity and throughput without the need for costly facility expansions or new capital equipment.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="tech-panel p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center justify-center">
              <MicrochipIcon className="h-6 w-6 text-biopredict-light-purple mr-2" />
              Our Technological Edge
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-biopredict-light-purple">Proprietary AI Models</h4>
                <p className="text-gray-300">
                  Our AI isn't off-the-shelf. RawMaterialPredict AI is built on sophisticated machine learning algorithms specifically trained on diverse biomanufacturing datasets. These models are uniquely designed to understand the intricate, often non-obvious correlations between hundreds of raw material parameters (from CoAs and internal tests) and critical process outcomes (like yield, purity, and deviations). This deep learning approach allows for highly accurate predictions of how specific material lots will behave in your unique processes, far exceeding the capabilities of general statistical tools or existing MES/LIMS functionalities.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-biopredict-light-purple">Real-Time Optimization & Prediction</h4>
                <p className="text-gray-300">
                  Beyond just analyzing data, our platform delivers actionable process parameter adjustments in real-time. As new raw material lots enter your facility, our AI immediately evaluates their molecular fingerprint, predicts how they'll perform in your specific manufacturing process, and recommends precise adjustments to critical process parameters to maximize yield and quality. This ensures consistent results despite natural raw material variability.
                </p>
              </div>
            </div>
          </div>
          
          {/* Futuristic visualization */}
          <div className="relative h-48 w-full rounded-lg overflow-hidden mb-8">
            <div className="absolute inset-0 bg-biopredict-purple/10"></div>
            
            {/* Grid lines */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            
            {/* Data points */}
            {Array.from({ length: 40 }).map((_, i) => (
              <div 
                key={i}
                className="absolute bg-biopredict-light-purple/70 rounded-full animate-pulse-glow"
                style={{
                  width: Math.random() * 4 + 2 + 'px',
                  height: Math.random() * 4 + 2 + 'px',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  opacity: Math.random() * 0.7 + 0.3,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
            
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full">
              {Array.from({ length: 10 }).map((_, i) => {
                const x1 = Math.random() * 100;
                const y1 = Math.random() * 100;
                const x2 = Math.random() * 100;
                const y2 = Math.random() * 100;
                
                return (
                  <line 
                    key={i}
                    x1={`${x1}%`} 
                    y1={`${y1}%`} 
                    x2={`${x2}%`} 
                    y2={`${y2}%`}
                    stroke="rgba(214, 188, 250, 0.2)"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                    style={{ animationDelay: `${Math.random() * 2}s` }}
                  />
                );
              })}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;

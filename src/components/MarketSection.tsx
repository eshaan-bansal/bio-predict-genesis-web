
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
            The Multi-Billion Dollar Horizon: Your Stake in the Future
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Unlocking unprecedented value in biopharmaceutical manufacturing through AI-driven optimization
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <Card className="border border-gray-200 shadow-lg bg-white overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-bl-full"></div>
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <BrainCircuit className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">$100 Billion Total Addressable Market (TAM)</h3>
              <ul className="space-y-3 mt-4 text-sm">
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Represents the global biopharmaceutical manufacturing sector's vast expenditure and the immense financial burden of current inefficiencies.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Includes costs lost to batch failures, material waste, quality deviations, and suboptimal process performance industry-wide.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Highlights the enormous untapped value AI can unlock by optimizing these complex, high-value operations.</span>
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
              <h3 className="text-xl font-bold mb-2 text-gray-900">$20 Billion Serviceable Addressable Market (SAM)</h3>
              <ul className="space-y-3 mt-4 text-sm">
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Targeting advanced therapy (ADC, RLT, CGT) and complex biologic manufacturers where raw material impact and costs are highest.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Focus on innovative CDMOs and biotech/pharma companies actively seeking digital transformation and AI-driven efficiency gains.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Segments producing high-value therapeutics where even marginal improvements in yield and failure reduction translate to millions in ROI.</span>
                </li>
              </ul>
              <div className="mt-4 text-xs text-gray-500 bg-gray-50 p-2 rounded">
                <p>ADC market {'>'}$16B by 2025, RLT market {'>'}$13B by 2030, CGT CDMO market from ~$8B in 2025 to ~$74B by 2034</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-lg bg-white overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-100 rounded-bl-full"></div>
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <MicrochipIcon className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">30% Yield Improvement Potential</h3>
              <ul className="space-y-3 mt-4 text-sm">
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Directly translates to significantly more product from existing resources, drastically improving revenue potential.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Substantially reduces Cost of Goods Sold (COGS), boosting profit margins per batch.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Increases overall production capacity and throughput without the need for costly facility expansions or new capital equipment.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center justify-center text-gray-900">
              <MicrochipIcon className="h-6 w-6 text-blue-600 mr-2" />
              The Science Behind the Savings: Our AI Powerhouse
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-blue-600 flex items-center">
                  <BrainCircuit className="h-5 w-5 mr-2" />
                  Proprietary AI Models
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Our AI isn't off-the-shelf. RawMaterialPredict AI is built on sophisticated machine learning algorithms specifically trained on diverse biomanufacturing datasets. These models are uniquely designed to understand the intricate, often non-obvious correlations between hundreds of raw material parameters (from CoAs and internal tests) and critical process outcomes (like yield, purity, and deviations). This deep learning approach allows for highly accurate predictions of how specific material lots will behave in your unique processes, far exceeding the capabilities of general statistical tools or existing MES/LIMS functionalities.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-green-600 flex items-center">
                  <Rocket className="h-5 w-5 mr-2" />
                  Real-Time Optimization & Prediction
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Gain foresight, not just hindsight. RawMaterialPredict AI integrates with your existing systems to analyze data as it's generated. This means you can receive predictive risk alerts for incoming raw material lots before they are even committed to production, or identify potential issues in the early stages of a batch. This real-time capability allows for timely interventions, such as material swapping, process parameter adjustments, or heightened monitoring, actively preventing failures and optimizing outcomes on the fly.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-purple-600 flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Scalable & Secure Architecture
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Built for the future of biotech, RawMaterialPredict AI features a robust, cloud-native architecture. This ensures seamless scalability to handle vast data volumes from multiple production lines, sites, or diverse therapeutic programs. Our platform is designed for secure integration with your existing LIMS, MES, and data historians, adhering to stringent data integrity and GxP compliance considerations (e.g., 21 CFR Part 11). Whether you're at pilot scale or full commercial manufacturing, our solution adapts to your needs, ensuring reliable performance and data security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;


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
                  <span className="text-gray-700">ADC market projected to exceed $16 billion in 2025, growing at >20% CAGR to reach $38 billion by 2029</span>
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
              <h3 className="text-xl font-bold mb-2 text-gray-900">Proven ROI: Industry-Validated Cost Savings</h3>
              <ul className="space-y-3 mt-4 text-sm">
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-700">AI applications in biomanufacturing deliver documented savings of $4-10M+ annually per manufacturing site</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Single batch failure prevention can save millions in lost materials, labor, and facility time for advanced therapies</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Yield improvements of 3-12% documented from related AI applications—translating to millions in additional revenue for high-value products</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Root cause analysis time reduction of 20-50%, saving hundreds of hours of expert time per year</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-lg bg-white overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-100 rounded-bl-full"></div>
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <MicrochipIcon className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Target Market: High-Value, Innovation-Ready Customers</h3>
              <ul className="space-y-3 mt-4 text-sm">
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Primary focus: CDMOs specializing in advanced therapies (Lonza, Catalent, Fujifilm Diosynth, Thermo Fisher Patheon, WuXi Biologics, Samsung Biologics)</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Secondary market: Mid-to-large biotech/pharma with internal advanced therapy manufacturing capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-1.5 mr-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Companies experiencing batch-to-batch inconsistency, yield variability, or frequent raw material-related process deviations</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center justify-center text-gray-900">
              <MicrochipIcon className="h-6 w-6 text-blue-600 mr-2" />
              Why Now? The Perfect Storm for Predictive Manufacturing
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-blue-600 flex items-center">
                  <BrainCircuit className="h-5 w-5 mr-2" />
                  Market Maturity & Regulatory Push
                </h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span>
                    <span>2025 biotech funding environment rewards solutions with clear ROI and operational efficiency gains—exactly what RawMaterialPredict AI delivers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span>
                    <span>FDA's emphasis on Quality by Design (QbD) and Process Analytical Technology (PAT) aligns perfectly with our predictive approach</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-green-600 flex items-center">
                  <Rocket className="h-5 w-5 mr-2" />
                  Economic & Supply Chain Resilience
                </h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></span>
                    <span>As a software solution, we help companies optimize existing resources rather than requiring new capital investments—critical in uncertain economic times</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></span>
                    <span>Global trade uncertainties make optimizing material utilization and reducing waste more valuable than ever</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-800 mb-3">Competitive Differentiation</h4>
              <p className="text-blue-700 font-medium mb-2">
                "Unlike generic AI platforms, existing LIMS/MES, or broad analytics tools—RawMaterialPredict AI is the only solution purpose-built for predictive raw material quality management in biomanufacturing."
              </p>
              <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400">
                <p className="text-yellow-800 font-medium">
                  <strong>Urgency/Timing Element:</strong> "The 2025 market rewards early adopters of operational AI. Position your organization ahead of the curve while competitors struggle with reactive quality management."
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

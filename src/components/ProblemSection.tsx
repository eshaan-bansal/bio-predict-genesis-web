import { DnaIcon, FlaskRoundIcon, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const ProblemSection = () => {
  return <section id="problem" className="py-16 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold mb-4">
            Raw Material Challenges & AI Solutions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            2025 Biotech: Opportunities amidst challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute -left-2 sm:-left-4 -top-2 sm:-top-4 bg-red-100/20 rounded-full p-2 sm:p-3">
              <FlaskRoundIcon className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />
            </div>
            <Card className="overflow-hidden border-0 shadow-lg h-full bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl font-sans font-bold mb-4">Manufacturing Challenges</h3>
                
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5">
                      <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-red-500"></span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      <strong className="font-medium">Raw material inconsistencies lead to costly production issues.</strong> Subtle variations cause unpredictable batch failures, costing millions per incident in advanced therapy manufacturing
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5">
                      <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-red-500"></span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      <strong className="font-medium">Current systems are reactive:</strong> LIMS track what happened, MES manage what's happening, but nothing predicts what will happen
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5">
                      <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-red-500"></span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      <strong className="font-medium">Data sits isolated:</strong> Critical information in PDFs and separate systems, making integrated analysis impossible
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5">
                      <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-red-500"></span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      <strong className="font-medium">Manual processes consume 80%</strong> of engineers' time, delaying critical decisions
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5">
                      <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-red-500"></span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      <strong className="font-medium">Advanced therapies face amplified challenges:</strong> Patient-specific processes where failure isn't an option
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div className="absolute -left-2 sm:-left-4 -top-2 sm:-top-4 bg-green-100/20 rounded-full p-2 sm:p-3">
              <DnaIcon className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
            </div>
            <Card className="overflow-hidden border-0 shadow-lg h-full bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl font-sans font-bold mb-4">RM Predictive: AI for Smarter Manufacturing</h3>
                
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                      <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-500"></span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      <strong className="font-medium">RMPredictive uses AI to predict and prevent production issues</strong> by integrating data from multiple sources
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                      <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-500"></span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      <strong className="font-medium">Our models identify hidden patterns</strong> between material attributes and process outcomes
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                      <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-500"></span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      <strong className="font-medium">The platform prevents batch failures, optimizes materials, speeds up RCA, and enhances consistency</strong>
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                      <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-500"></span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      <strong className="font-medium">Purpose-built for complex biologics</strong> where process sensitivity is highest
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                      <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-500"></span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      <strong className="font-medium">Upstream Focus:</strong> Unlike LIMS and MES, RMPredictive uniquely predicts quality outcomes based on raw material variability
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                      <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-500"></span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      <strong className="font-medium">CoA Intelligence:</strong> Automatically digitizes and analyzes Certificates of Analysis
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default ProblemSection;
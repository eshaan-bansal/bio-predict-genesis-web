
import { DnaIcon, FlaskRoundIcon, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProblemSection = () => {
  return (
    <section id="problem" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Hidden Manufacturing Crisis & Our AI Solution
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transforming biomanufacturing through advanced predictive analytics and AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto mb-16">
          <div className="relative">
            <div className="absolute -left-4 -top-4 bg-red-100/20 rounded-full p-3">
              <FlaskRoundIcon className="h-6 w-6 text-red-600" />
            </div>
            <Card className="overflow-hidden border-0 shadow-lg h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-4">The Multi-Million Dollar Impact of Raw Material Variability</h3>
                
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mr-3">
                      <span className="h-2 w-2 rounded-full bg-red-500"></span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong className="font-medium">Variations in raw materials can cause quality issues and costly production failures.</strong> Subtle variations—often within acceptable specifications—cause unpredictable batch failures, costing millions per incident in advanced therapy manufacturing (ADCs, RLTs, CGTs)
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mr-3">
                      <span className="h-2 w-2 rounded-full bg-red-500"></span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong className="font-medium">Current systems are reactive:</strong> LIMS track what happened, MES manage what's happening, but nothing predicts what will happen based on your specific raw material lots
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mr-3">
                      <span className="h-2 w-2 rounded-full bg-red-500"></span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong className="font-medium">Critical data sits isolated:</strong> Certificates of Analysis (CoAs) in PDFs, test results in LIMS, process data in MES—making integrated predictive analysis impossible
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mr-3">
                      <span className="h-2 w-2 rounded-full bg-red-500"></span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong className="font-medium">Manual data wrangling consumes up to 80%</strong> of process engineers' time, delaying critical insights when batch decisions need to be made
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mr-3">
                      <span className="h-2 w-2 rounded-full bg-red-500"></span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong className="font-medium">Advanced therapies face amplified challenges:</strong> patient-specific processes, radioactive materials, complex conjugation chemistry, and million-dollar treatment costs where failure isn't an option
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div className="absolute -left-4 -top-4 bg-green-100/20 rounded-full p-3">
              <DnaIcon className="h-6 w-6 text-green-600" />
            </div>
            <Card className="overflow-hidden border-0 shadow-lg h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-4">RawMaterialPredict AI: From Reactive to Predictive Manufacturing</h3>
                
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong className="font-medium">RawMaterialPredict AI breaks down data silos</strong> by digitizing CoAs using advanced OCR and LLM technology, then integrating this with your LIMS, MES, and process data
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong className="font-medium">Our machine learning models identify hidden correlations</strong> between specific raw material attributes and downstream process outcomes—predicting batch success probability before production begins
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong className="font-medium">Proactive risk assessment:</strong> Flag high-risk material lots, optimize material selection, prevent costly failures, and accelerate root cause analysis by 20-50%
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong className="font-medium">Purpose-built for complex biologics and advanced therapies</strong> where process sensitivity to inputs is highest and failure costs are most severe
                    </p>
                  </li>
                </ul>

                <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">The RawMaterialPredict AI Advantage</h4>
                  <div className="space-y-2 text-sm text-blue-700 dark:text-blue-200">
                    <p><strong>Upstream Focus:</strong> Unlike LIMS and MES, RawMaterialPredict AI uniquely predicts quality outcomes based on raw material variability—the critical but poorly managed factor in biomanufacturing</p>
                    <p><strong>CoA Intelligence:</strong> We're the only platform that automatically digitizes and analyzes Certificates of Analysis, transforming this rich but underutilized data source into predictive insights</p>
                    <p><strong>Process-Specific Models:</strong> Our AI understands the unique sensitivities of advanced therapy manufacturing (mAb production, ADC conjugation, CGT processing) and their specific raw material dependencies</p>
                    <p><strong>Proactive Prevention:</strong> We shift from 'detect and react' to 'predict and prevent'—identifying problems at their source before they propagate through expensive manufacturing processes</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;


import { DnaIcon, FlaskRoundIcon, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProblemSection = () => {
  return (
    <section id="problem" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Biopharma Bottleneck & Our AI Revolution
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
                <h3 className="text-xl font-bold mb-4">The High Stakes of Biomanufacturing Inefficiency</h3>
                
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mr-3">
                      <span className="h-2 w-2 rounded-full bg-red-500"></span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong className="font-medium">Subtle raw material variations</strong> wreak havoc, leading to unpredictable batch quality, devastatingly costly failures (often millions per batch), and reduced yields.
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mr-3">
                      <span className="h-2 w-2 rounded-full bg-red-500"></span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong className="font-medium">Traditional systems (LIMS, MES)</strong> are reactive, not predictive. They track what went wrong, not what <em>will</em> go wrong based on inputs.
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mr-3">
                      <span className="h-2 w-2 rounded-full bg-red-500"></span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong className="font-medium">Data exists in silos</strong>, making integrated, proactive analysis nearly impossible, consuming up to 80% of engineering time in manual data wrangling.
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mr-3">
                      <span className="h-2 w-2 rounded-full bg-red-500"></span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong className="font-medium">High costs, complexity, stringent quality control</strong>, and supply chain vulnerabilities plague advanced therapies (ADCs, RLTs, CGTs).
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
                <h3 className="text-xl font-bold mb-4">Introducing RawMaterialPredict AI: Predictive Power for Peak Performance</h3>
                
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong className="font-medium">RawMaterialPredict AI</strong> leverages proprietary AI and machine learning to analyze integrated data from raw material testing (digitized CoAs) and real-time process monitoring.
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong className="font-medium">Our platform predicts</strong> the likelihood of quality deviations and suboptimal yields <em>before</em> a batch starts or in its early stages, based on specific raw material attributes.
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong className="font-medium">This enables proactive intervention</strong>: prevent batch failures, optimize material selection, slash root cause analysis time, and ensure consistent quality.
                    </p>
                  </li>
                </ul>

                <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">The RawMaterialPredict AI Edge</h4>
                  <div className="space-y-2 text-sm text-blue-700 dark:text-blue-200">
                    <p><strong>Deep Specialization:</strong> Unlike generic AI or existing manufacturing software, our core focus is on predictive quality intelligence derived specifically from upstream raw material variability and its downstream impact.</p>
                    <p><strong>Proactive, Not Reactive:</strong> We shift the paradigm from fixing problems to preventing them, turning raw material data into a predictive asset.</p>
                    <p><strong>Integrated Intelligence:</strong> We break down data silos, connecting CoA data, LIMS, and MES insights for a holistic, predictive view unavailable elsewhere.</p>
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

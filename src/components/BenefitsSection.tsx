
import { ArrowUpRightIcon } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-biopredict-blue/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transformative Benefits
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our AI-driven solution delivers measurable improvements across key performance metrics
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Yield Improvement */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg">Yield Improvement</h3>
              <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-medium px-3 py-1 rounded-full flex items-center">
                <ArrowUpRightIcon className="h-3.5 w-3.5 mr-1" />
                +30%
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
              Optimize manufacturing conditions based on raw material profiles to maximize product output.
            </p>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1 text-xs">
                  <span>Traditional Process</span>
                  <span>68%</span>
                </div>
                <Progress value={68} className="h-2 bg-gray-100 dark:bg-gray-700" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1 text-xs">
                  <span>With BioPredict</span>
                  <span>98%</span>
                </div>
                <Progress value={98} className="h-2" />
              </div>
            </div>
          </div>

          {/* Cost Reduction */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg">Cost Reduction</h3>
              <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-medium px-3 py-1 rounded-full flex items-center">
                <ArrowUpRightIcon className="h-3.5 w-3.5 mr-1" />
                -50%
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
              Eliminate batch failures and reduce waste through predictive quality assurance.
            </p>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1 text-xs">
                  <span>Traditional Cost</span>
                  <span>$1.2M per batch</span>
                </div>
                <Progress value={100} className="h-2 bg-gray-100 dark:bg-gray-700" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1 text-xs">
                  <span>With BioPredict</span>
                  <span>$600K per batch</span>
                </div>
                <Progress value={50} className="h-2" />
              </div>
            </div>
          </div>

          {/* Time to Market */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg">Time to Market</h3>
              <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-medium px-3 py-1 rounded-full flex items-center">
                <ArrowUpRightIcon className="h-3.5 w-3.5 mr-1" />
                -40%
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
              Accelerate development cycles through consistent, reliable manufacturing processes.
            </p>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1 text-xs">
                  <span>Traditional Timeline</span>
                  <span>14 months</span>
                </div>
                <Progress value={100} className="h-2 bg-gray-100 dark:bg-gray-700" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1 text-xs">
                  <span>With BioPredict</span>
                  <span>8.4 months</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

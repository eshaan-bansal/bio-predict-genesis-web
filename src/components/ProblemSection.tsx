
import { DnaIcon, FlaskRoundIcon } from "lucide-react";
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

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute -left-4 -top-4 bg-biopredict-purple/10 rounded-full p-3">
              <FlaskRoundIcon className="h-6 w-6 text-biopredict-purple" />
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
                      <strong className="font-medium">Subtle raw material variations</strong> wreak havoc, leading to unpredictable batch quality and devastatingly costly failures (often millions per batch).
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
                      <strong className="font-medium">Reduced yields</strong> and inconsistent output quality limit production capacity and increase operational costs.
                    </p>
                  </li>
                </ul>

                <div className="mt-8 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <p className="text-sm text-red-800 dark:text-red-300">
                    <strong>Industry Impact:</strong> These inefficiencies cost the biopharma industry an estimated $100 billion annually in lost productivity and failed batches.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div className="absolute -left-4 -top-4 bg-biopredict-light-purple/10 rounded-full p-3">
              <DnaIcon className="h-6 w-6 text-biopredict-light-purple" />
            </div>
            <Card className="overflow-hidden border-0 shadow-lg h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-4">Our Breakthrough Solution</h3>
                
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong className="font-medium">Predictive AI modeling</strong> analyzes raw material variations before production begins, identifying potential issues proactively.
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong className="font-medium">Real-time adjustments</strong> optimize process parameters based on incoming materials, ensuring consistent quality and maximum yield.
                    </p>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong className="font-medium">Continuous learning</strong> from each production cycle improves future predictions, creating a constantly improving manufacturing system.
                    </p>
                  </li>
                </ul>

                <div className="mt-8 p-4 bg-biopredict-purple/10 dark:bg-biopredict-purple/20 rounded-lg">
                  <p className="text-sm text-biopredict-purple dark:text-biopredict-accent">
                    <strong>Our Innovation:</strong> Advanced algorithms that turn raw material variability from a liability into a manageable variable, eliminating unpredictability in biomanufacturing.
                  </p>
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

import { CircuitBoard, Atom } from "lucide-react";
import { Card } from "@/components/ui/card";

const SolutionSection = () => {
  return (
    <section id="solution" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How BioPredict Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our AI platform transforms raw material variability from an obstacle into a controlled variable
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-20 max-w-5xl mx-auto">
          {/* Left side - Visualization */}
          <div className="relative">
            <div className="absolute -z-10 w-[200px] h-[200px] bg-primary/30 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
              
              {/* Top "screen" with data visualization */}
              <div className="absolute top-0 left-0 right-0 h-1/2 p-4">
                <div className="bg-gray-900 rounded-lg h-full w-full overflow-hidden p-3">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <div className="text-xs text-gray-400">BioPredict Analysis</div>
                  </div>
                  
                  {/* Data visualization representation */}
                  <div className="grid grid-cols-2 gap-2 h-[calc(100%-24px)]">
                    <div className="bg-gray-800 rounded-md p-2">
                      <div className="h-3 w-2/3 bg-accent/40 rounded-sm mb-2"></div>
                      <div className="flex items-end h-[calc(100%-20px)] space-x-1">
                        {[40, 65, 35, 80, 55, 70, 90].map((height, i) => (
                          <div 
                            key={i}
                            className="flex-grow bg-accent/60 rounded-sm"
                            style={{ height: `${height}%` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-gray-800 rounded-md p-2">
                      <div className="h-3 w-2/3 bg-primary/40 rounded-sm mb-2"></div>
                      <div className="relative h-[calc(100%-20px)] flex items-center justify-center">
                        <div className="absolute h-[80%] w-[80%] border-2 border-primary/30 rounded-full"></div>
                        <div className="absolute h-[60%] w-[60%] border-2 border-primary/40 rounded-full"></div>
                        <div className="absolute h-[40%] w-[40%] border-2 border-primary/50 rounded-full"></div>
                        <div className="absolute h-[20%] w-[20%] bg-primary/60 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom part with "prediction results" */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2 p-4">
                <div className="bg-white dark:bg-gray-900 rounded-lg h-full w-full shadow-md p-3">
                  <div className="text-xs font-medium mb-3 flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></div>
                    Prediction Results
                  </div>
                  
                  {/* Prediction metrics */}
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Batch Success Probability</span>
                        <span className="text-secondary font-medium">98.7%</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-700 rounded-full">
                        <div className="h-1.5 rounded-full bg-secondary" style={{width: "98.7%"}}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Expected Yield</span>
                        <span className="text-accent font-medium">94.2%</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-700 rounded-full">
                        <div className="h-1.5 rounded-full bg-accent" style={{width: "94.2%"}}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Quality Score</span>
                        <span className="text-primary font-medium">8.9/10</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-700 rounded-full">
                        <div className="h-1.5 rounded-full bg-primary" style={{width: "89%"}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Connecting element */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-accent rounded-full flex items-center justify-center z-10 shadow-lg">
                <Atom className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>

          {/* Right side - Text explanation */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <CircuitBoard className="h-6 w-6 text-accent mr-2" />
              Predictive Process Optimization
            </h3>
            
            <div className="space-y-6">
              <div className="border-l-2 border-primary/30 pl-4">
                <h4 className="font-medium mb-2">1. Raw Material Analysis</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Our system analyzes the unique molecular profile of each raw material batch, identifying subtle variations that could impact production.
                </p>
              </div>
              
              <div className="border-l-2 border-primary/50 pl-4">
                <h4 className="font-medium mb-2">2. Advanced Predictive Modeling</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Proprietary AI algorithms simulate how these variations will affect manufacturing outcomes, predicting potential issues before they occur.
                </p>
              </div>
              
              <div className="border-l-2 border-primary/70 pl-4">
                <h4 className="font-medium mb-2">3. Process Parameter Optimization</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  The system generates optimized process parameters, adjusting in real-time to compensate for raw material variability.
                </p>
              </div>
              
              <div className="border-l-2 border-primary/90 pl-4">
                <h4 className="font-medium mb-2">4. Continuous Learning</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Each production cycle feeds back into our models, continuously improving accuracy and extending capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;

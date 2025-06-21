
import { DnaIcon, FlaskRoundIcon, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useContent } from '../hooks/useContent';

const ProblemSection = () => {
  const { content, loading } = useContent();

  if (loading || !content) {
    return (
      <section className="py-16 sm:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  const problemContent = content.problem;

  return (
    <section id="problem" className="py-16 sm:py-20 relative bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold mb-4 text-black">
            {problemContent.title}
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-sans font-medium mb-6 text-blue-600">
            {problemContent.subtitle}
          </h3>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            {problemContent.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {problemContent.problems.map((problem, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-2 sm:-left-4 -top-2 sm:-top-4 bg-black/10 rounded-full p-2 sm:p-3">
                <FlaskRoundIcon className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
              </div>
              <Card className="overflow-hidden border-0 shadow-lg h-full bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="flex">
                    <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5">
                      <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-red-500"></span>
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-medium text-gray-900 mb-2">
                        {problem.title}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;


import React from 'react';
import { Brain, Database, Target } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const PlatformSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI That Understands Biomanufacturing",
      description: "RawMaterialPredict AI leverages established machine learning techniques—multivariate data analysis, regression modeling, ensemble methods like Random Forests—specifically applied to the unique challenges of biomanufacturing. Our models are trained to identify statistically significant correlations between raw material attributes and critical process outcomes. This isn't generic AI; it's purpose-built intelligence that understands the complex relationships between Certificate of Analysis data and your manufacturing success."
    },
    {
      icon: Database,
      title: "Intelligent Data Integration & Digitization",
      description: "Transform your siloed data into integrated intelligence. Our platform automatically digitizes PDF Certificates of Analysis using advanced OCR and Large Language Model technology, extracting critical parameters like batch numbers, test specifications, and quantitative results. This structured data integrates seamlessly with your existing LIMS, MES, and process historians, creating a unified dataset that reveals hidden patterns affecting your process performance."
    },
    {
      icon: Target,
      title: "Proactive Risk Assessment & Prevention",
      description: "Flag high-risk material lots, optimize material selection, prevent costly failures, and accelerate root cause analysis by 20-50%. Our predictive models identify potential quality deviations before they occur, enabling proactive interventions that save millions in batch failures and manufacturing delays."
    }
  ];

  const comparisonData = [
    { feature: "Focus", rawMaterialPredict: "Raw material variability prediction", competitors: "General process optimization or broad data analytics" },
    { feature: "Data Sources", rawMaterialPredict: "CoA digitization + LIMS + MES integration", competitors: "Limited to existing structured data" },
    { feature: "AI Specialization", rawMaterialPredict: "Purpose-built for biomanufacturing sensitivities", competitors: "Generic ML models adapted for pharma" },
    { feature: "Predictive Capability", rawMaterialPredict: "Batch success probability before production", competitors: "Reactive monitoring or generic predictions" },
    { feature: "Implementation", rawMaterialPredict: "Rapid deployment with existing systems", competitors: "Complex enterprise-wide transformations" },
    { feature: "ROI Timeline", rawMaterialPredict: "Immediate value from first prevented failure", competitors: "Long-term value requiring full adoption" }
  ];

  return (
    <section id="platform" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-gray-900 mb-6 text-balance">
            Proven Technology, Specialized Application
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Purpose-built AI platform that transforms raw material data into predictive intelligence 
            for advanced therapy manufacturing success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto mb-20">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className="flex items-start space-x-6"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Competitive Advantage Table */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl font-medium text-gray-900 mb-4">
              Why RawMaterialPredict AI Leads the Market
            </h3>
            <p className="text-lg text-gray-600">
              Our focused approach delivers superior value compared to generic solutions
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-blue-50">
                  <TableHead className="font-semibold text-gray-900 py-4 px-6">Feature</TableHead>
                  <TableHead className="font-semibold text-blue-700 py-4 px-6">RawMaterialPredict AI</TableHead>
                  <TableHead className="font-semibold text-gray-700 py-4 px-6">Traditional Competitors</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row, index) => (
                  <TableRow key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <TableCell className="font-medium text-gray-900 py-4 px-6">{row.feature}</TableCell>
                    <TableCell className="text-blue-700 py-4 px-6 font-medium">{row.rawMaterialPredict}</TableCell>
                    <TableCell className="text-gray-600 py-4 px-6">{row.competitors}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;

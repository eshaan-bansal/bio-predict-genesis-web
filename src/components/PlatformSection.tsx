import React from 'react';
import { Brain, Database, Target, Check, X, AlertTriangle } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const PlatformSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI That Understands Biomanufacturing",
      description: "Using proven AI techniques, RawMaterialPredict AI is both feasible and impactful. Our models leverage established machine learning techniques—multivariate data analysis, regression modeling, ensemble methods like Random Forests—specifically applied to the unique challenges of biomanufacturing. Our models are trained to identify statistically significant correlations between raw material attributes and critical process outcomes. This isn't generic AI; it's purpose-built intelligence that understands the complex relationships between Certificate of Analysis data and your manufacturing success."
    },
    {
      icon: Database,
      title: "Intelligent Data Integration & Digitization",
      description: "Transform your siloed data into integrated intelligence. Our platform automatically digitizes PDF Certificates of Analysis using advanced OCR and Large Language Model technology, extracting critical parameters like batch numbers, test specifications, and quantitative results. This structured data integrates seamlessly with your existing LIMS, MES, and process historians, creating a unified dataset that reveals hidden patterns affecting your process performance."
    },
    {
      icon: Target,
      title: "Proactive Risk Assessment & Prevention",
      description: "RawMaterialPredict AI offers substantial cost savings and efficiency improvements. Our predictive models identify potential quality deviations before they occur, enabling proactive interventions that save millions in batch failures and manufacturing delays."
    }
  ];

  const comparisonData = [
    { 
      capability: "Predictive Material Risk Scoring", 
      rawMaterialPredict: { text: "Core Feature", status: "success" },
      traditionalLIMS: { text: "None", status: "error" },
      manufacturingExecution: { text: "None", status: "error" },
      genericAI: { text: "Requires Custom Development", status: "error" }
    },
    { 
      capability: "Automated CoA Data Extraction", 
      rawMaterialPredict: { text: "AI-Powered OCR/LLM", status: "success" },
      traditionalLIMS: { text: "Manual Entry", status: "error" },
      manufacturingExecution: { text: "Not Applicable", status: "error" },
      genericAI: { text: "Custom Development Needed", status: "error" }
    },
    { 
      capability: "Process Outcome Prediction", 
      rawMaterialPredict: { text: "Material-to-Outcome Modeling", status: "success" },
      traditionalLIMS: { text: "Limited", status: "error" },
      manufacturingExecution: { text: "Process Tracking Only", status: "error" },
      genericAI: { text: "Generic Analytics", status: "error" }
    },
    { 
      capability: "Proactive Risk Alerts", 
      rawMaterialPredict: { text: "Before Batch Starts", status: "success" },
      traditionalLIMS: { text: "After Testing", status: "error" },
      manufacturingExecution: { text: "During Production", status: "error" },
      genericAI: { text: "Reactive Reporting", status: "error" }
    },
    { 
      capability: "Root Cause Analysis Speed", 
      rawMaterialPredict: { text: "Instant Material Linking", status: "success" },
      traditionalLIMS: { text: "Manual Investigation", status: "warning" },
      manufacturingExecution: { text: "Process-Only View", status: "warning" },
      genericAI: { text: "No Context", status: "error" }
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <Check className="h-4 w-4 text-green-600" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      case 'error':
        return <X className="h-4 w-4 text-red-600" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'text-green-700 bg-green-50';
      case 'warning':
        return 'text-yellow-700 bg-yellow-50';
      case 'error':
        return 'text-red-700 bg-red-50';
      default:
        return 'text-gray-700';
    }
  };

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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl font-medium text-gray-900 mb-4">
              Why RawMaterialPredict AI Leads the Market
            </h3>
            <p className="text-lg text-gray-600">
              Our focused approach delivers superior value compared to traditional solutions
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-blue-50">
                  <TableHead className="font-semibold text-gray-900 py-4 px-6 w-1/5">Capability</TableHead>
                  <TableHead className="font-semibold text-blue-700 py-4 px-6 text-center w-1/5">RawMaterialPredict AI</TableHead>
                  <TableHead className="font-semibold text-gray-700 py-4 px-6 text-center w-1/5">Traditional LIMS</TableHead>
                  <TableHead className="font-semibold text-gray-700 py-4 px-6 text-center w-1/5">Manufacturing Execution Systems</TableHead>
                  <TableHead className="font-semibold text-gray-700 py-4 px-6 text-center w-1/5">Generic AI Platforms</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row, index) => (
                  <TableRow key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <TableCell className="font-medium text-gray-900 py-4 px-6">{row.capability}</TableCell>
                    <TableCell className={`py-4 px-6 text-center ${getStatusColor(row.rawMaterialPredict.status)} rounded-lg mx-2`}>
                      <div className="flex items-center justify-center space-x-2">
                        {getStatusIcon(row.rawMaterialPredict.status)}
                        <span className="font-medium">{row.rawMaterialPredict.text}</span>
                      </div>
                    </TableCell>
                    <TableCell className={`py-4 px-6 text-center ${getStatusColor(row.traditionalLIMS.status)} rounded-lg mx-2`}>
                      <div className="flex items-center justify-center space-x-2">
                        {getStatusIcon(row.traditionalLIMS.status)}
                        <span>{row.traditionalLIMS.text}</span>
                      </div>
                    </TableCell>
                    <TableCell className={`py-4 px-6 text-center ${getStatusColor(row.manufacturingExecution.status)} rounded-lg mx-2`}>
                      <div className="flex items-center justify-center space-x-2">
                        {getStatusIcon(row.manufacturingExecution.status)}
                        <span>{row.manufacturingExecution.text}</span>
                      </div>
                    </TableCell>
                    <TableCell className={`py-4 px-6 text-center ${getStatusColor(row.genericAI.status)} rounded-lg mx-2`}>
                      <div className="flex items-center justify-center space-x-2">
                        {getStatusIcon(row.genericAI.status)}
                        <span>{row.genericAI.text}</span>
                      </div>
                    </TableCell>
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


import React, { useState, useEffect } from 'react';
import { Database, Brain, Target, TrendingUp, ArrowDown, Play, Pause } from 'lucide-react';

const AnimatedFlowDiagram = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      id: 'ingestion',
      icon: Database,
      title: "Data Ingestion",
      subtitle: "Raw Material Analysis",
      description: "AI analyzes molecular profiles and batch characteristics",
      details: "Automated extraction from Certificates of Analysis (CoA), spectroscopic data, and historical batch records. Processing 200+ molecular markers with 99.9% accuracy.",
      color: "from-blue-500 to-blue-600",
      position: { x: 20, y: 20 }
    },
    {
      id: 'analysis',
      icon: Brain,
      title: "AI Analysis",
      subtitle: "Pattern Recognition",
      description: "Advanced algorithms identify critical correlations",
      details: "Deep neural networks trained on 10,000+ historical batches identify subtle patterns that traditional methods miss. Real-time processing of complex molecular interactions.",
      color: "from-purple-500 to-purple-600",
      position: { x: 80, y: 20 }
    },
    {
      id: 'prediction',
      icon: Target,
      title: "Predictive Modeling",
      subtitle: "Outcome Forecasting",
      description: "System predicts manufacturing outcomes with 98.7% accuracy",
      details: "Advanced machine learning models simulate how material variations will impact your specific manufacturing process. Risk assessment with continuous learning capabilities.",
      color: "from-green-500 to-green-600",
      position: { x: 20, y: 70 }
    },
    {
      id: 'optimization',
      icon: TrendingUp,
      title: "Process Optimization",
      subtitle: "Real-time Adjustments",
      description: "Automated parameter optimization and quality assurance",
      details: "AI automatically adjusts temperature, pH, timing, and other critical parameters. Continuous monitoring with predictive alerts reduces waste by up to 50%.",
      color: "from-orange-500 to-orange-600",
      position: { x: 80, y: 70 }
    }
  ];

  const connections = [
    { from: 0, to: 1, path: "M 35 30 Q 50 25 65 30" },
    { from: 1, to: 2, path: "M 80 35 Q 75 50 35 65" },
    { from: 2, to: 3, path: "M 35 75 Q 50 80 65 75" }
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying, steps.length]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="font-serif text-2xl sm:text-3xl font-medium text-gray-900 mb-4">
          AI Methodology Flow
        </h3>
        <p className="text-gray-600 mb-6">
          Interactive visualization of our complete AI-driven optimization process
        </p>
        
        {/* Play/Pause Control */}
        <button
          onClick={togglePlayPause}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          aria-label={isPlaying ? "Pause animation" : "Play animation"}
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          {isPlaying ? "Pause" : "Play"} Animation
        </button>
      </div>

      {/* Flow Diagram Container */}
      <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 min-h-[500px] overflow-hidden">
        
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }} />
        </div>

        {/* Connection Lines with Animation */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
          {connections.map((connection, index) => {
            const isActive = activeStep === connection.from || activeStep === connection.to;
            return (
              <g key={index}>
                <path
                  d={connection.path}
                  stroke={isActive ? "#3B82F6" : "#E5E7EB"}
                  strokeWidth="3"
                  fill="none"
                  className="transition-all duration-500"
                  strokeDasharray={isActive ? "0" : "5,5"}
                />
                {isActive && (
                  <circle r="3" fill="#3B82F6" className="animate-pulse">
                    <animateMotion dur="2s" repeatCount="indefinite">
                      <path d={connection.path} />
                    </animateMotion>
                  </circle>
                )}
              </g>
            );
          })}
        </svg>

        {/* Step Nodes */}
        <div className="relative grid grid-cols-2 gap-8 h-full" style={{ zIndex: 2 }}>
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;
            const isHovered = hoveredStep === index;
            
            return (
              <div
                key={step.id}
                className={`relative cursor-pointer transform transition-all duration-500 ${
                  isActive ? 'scale-110 z-10' : isHovered ? 'scale-105' : 'scale-100'
                }`}
                onClick={() => handleStepClick(index)}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
                style={{
                  gridColumn: index % 2 === 0 ? 1 : 2,
                  gridRow: Math.floor(index / 2) + 1
                }}
              >
                {/* Step Card */}
                <div className={`
                  relative bg-white rounded-xl border-2 shadow-lg transition-all duration-500
                  ${isActive ? 'border-blue-500 shadow-2xl' : 'border-gray-200 hover:border-gray-300'}
                `}>
                  
                  {/* Animated Border Glow */}
                  {isActive && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-30 animate-pulse" />
                  )}
                  
                  <div className="relative p-6">
                    {/* Icon with Animation */}
                    <div className={`
                      w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} 
                      flex items-center justify-center mx-auto mb-4 
                      transition-transform duration-300
                      ${isActive ? 'scale-110 animate-pulse' : ''}
                    `}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="text-center">
                      <h4 className="font-medium text-gray-900 mb-1 text-lg">
                        {step.title}
                      </h4>
                      <p className="text-blue-600 text-sm font-medium mb-2">
                        {step.subtitle}
                      </p>
                      <p className="text-gray-600 text-sm mb-4">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Step Number */}
                    <div className={`
                      absolute -top-3 -right-3 w-8 h-8 rounded-full 
                      bg-gradient-to-r ${step.color} text-white 
                      flex items-center justify-center text-sm font-bold
                      ${isActive ? 'animate-bounce' : ''}
                    `}>
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Expanded Details */}
                  <div className={`
                    overflow-hidden transition-all duration-500
                    ${isActive || isHovered ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                  `}>
                    <div className="px-6 pb-6 border-t border-gray-100">
                      <p className="text-gray-700 text-sm leading-relaxed mt-4">
                        {step.details}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => handleStepClick(index)}
              className={`
                w-3 h-3 rounded-full transition-all duration-300
                ${activeStep === index ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'}
              `}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
          <div className="text-2xl font-bold text-blue-600 mb-2">200+</div>
          <div className="text-gray-600">Molecular Markers Analyzed</div>
        </div>
        <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
          <div className="text-2xl font-bold text-green-600 mb-2">98.7%</div>
          <div className="text-gray-600">Prediction Accuracy</div>
        </div>
        <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
          <div className="text-2xl font-bold text-orange-600 mb-2">50%</div>
          <div className="text-gray-600">Waste Reduction</div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedFlowDiagram;

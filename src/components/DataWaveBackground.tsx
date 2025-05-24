
import React from 'react';

const DataWaveBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="absolute w-full h-full">
        {/* Advanced cyber grid */}
        <div className="absolute inset-0 cyber-grid opacity-30"></div>
        
        {/* Futuristic floating orbs */}
        <div className="absolute top-1/4 left-1/6 w-64 h-64 rounded-full bg-gradient-to-r from-biopredict-purple/20 to-biopredict-accent/15 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 rounded-full bg-gradient-to-r from-biopredict-accent/15 to-biopredict-cyan/10 blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-2/3 left-1/2 w-80 h-80 rounded-full bg-gradient-to-r from-biopredict-cyan/10 to-biopredict-purple/15 blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Matrix-style digital rain */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 50 }).map((_, i) => (
            <div 
              key={i}
              className="absolute bg-biopredict-accent/40 rounded-full animate-matrix-rain"
              style={{
                width: Math.random() * 2 + 1 + 'px',
                height: Math.random() * 20 + 10 + 'px',
                left: Math.random() * 100 + '%',
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${Math.random() * 3 + 6}s`
              }}
            />
          ))}
        </div>
        
        {/* Neural network connections */}
        <div className="absolute inset-0 opacity-15">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(139, 92, 246, 0.8)" />
                <stop offset="50%" stopColor="rgba(99, 102, 241, 0.6)" />
                <stop offset="100%" stopColor="rgba(6, 182, 212, 0.4)" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Dynamic neural pathways */}
            <path d="M0,20 Q25,10 50,30 T100,25" stroke="url(#neural-gradient)" fill="none" strokeWidth="1" filter="url(#glow)" opacity="0.6">
              <animate attributeName="stroke-dasharray" values="0,100;50,50;100,0;0,100" dur="4s" repeatCount="indefinite"/>
            </path>
            <path d="M0,40 Q50,20 100,45" stroke="url(#neural-gradient)" fill="none" strokeWidth="1" filter="url(#glow)" opacity="0.8">
              <animate attributeName="stroke-dasharray" values="0,100;50,50;100,0;0,100" dur="5s" repeatCount="indefinite"/>
            </path>
            <path d="M0,60 Q30,80 60,60 T100,65" stroke="url(#neural-gradient)" fill="none" strokeWidth="1" filter="url(#glow)" opacity="0.4">
              <animate attributeName="stroke-dasharray" values="0,100;50,50;100,0;0,100" dur="6s" repeatCount="indefinite"/>
            </path>
            <path d="M0,80 Q70,60 100,85" stroke="url(#neural-gradient)" fill="none" strokeWidth="1" filter="url(#glow)" opacity="0.7">
              <animate attributeName="stroke-dasharray" values="0,100;50,50;100,0;0,100" dur="3.5s" repeatCount="indefinite"/>
            </path>
          </svg>
        </div>
        
        {/* Hexagonal data nodes */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <div 
              key={i}
              className="absolute border border-biopredict-accent/30 bg-biopredict-purple/10 animate-pulse-glow"
              style={{
                width: Math.random() * 6 + 4 + 'px',
                height: Math.random() * 6 + 4 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 4 + 3}s`
              }}
            />
          ))}
        </div>
        
        {/* Data streams */}
        <div className="absolute inset-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <div 
              key={i}
              className="absolute h-0.5 bg-gradient-to-r from-transparent via-biopredict-accent/60 to-transparent animate-data-stream"
              style={{
                top: Math.random() * 100 + '%',
                width: '300px',
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 2 + 3}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataWaveBackground;


import React from 'react';

const DataWaveBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="absolute w-full h-full">
        {/* Futuristic grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_70%_80%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        {/* Futuristic particles/orbs */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-gradient-to-r from-biopredict-purple/30 to-biopredict-light-purple/20 blur-xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-biopredict-light-purple/20 to-biopredict-accent/10 blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 left-1/2 w-56 h-56 rounded-full bg-gradient-to-r from-blue-300/10 to-biopredict-purple/20 blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        {/* Digital particles effect */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="absolute bg-white/30 rounded-full animate-pulse-glow"
              style={{
                width: Math.random() * 4 + 1 + 'px',
                height: Math.random() * 4 + 1 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                opacity: Math.random() * 0.5,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 5}s`
              }}
            />
          ))}
        </div>
        
        {/* Futuristic circuit lines */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(155, 135, 245, 0.8)" />
                <stop offset="100%" stopColor="rgba(126, 105, 171, 0.2)" />
              </linearGradient>
            </defs>
            <path d="M0,50 Q25,25 50,50 T100,50" stroke="url(#circuit-gradient)" fill="none" strokeWidth="0.5" />
            <path d="M0,25 Q50,0 100,25" stroke="url(#circuit-gradient)" fill="none" strokeWidth="0.5" />
            <path d="M0,75 Q50,100 100,75" stroke="url(#circuit-gradient)" fill="none" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DataWaveBackground;

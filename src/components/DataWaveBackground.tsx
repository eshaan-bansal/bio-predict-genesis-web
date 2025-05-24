
import React from 'react';

const DataWaveBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="absolute w-full h-full">
        {/* Subtle floating orbs */}
        <div className="absolute top-1/4 left-1/6 w-96 h-96 rounded-full bg-gradient-to-r from-biopredict-purple/10 to-biopredict-accent/5 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 rounded-full bg-gradient-to-r from-biopredict-accent/8 to-biopredict-cyan/5 blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        
        {/* Minimal grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}></div>
        
        {/* Clean gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
      </div>
    </div>
  );
};

export default DataWaveBackground;

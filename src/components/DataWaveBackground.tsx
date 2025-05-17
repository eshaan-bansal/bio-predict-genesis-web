
import React from 'react';

const DataWaveBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="absolute w-full h-full">
        {/* Abstract data visualization elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-biopredict-purple/20 to-biopredict-light-purple/10 blur-xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-biopredict-light-purple/20 to-biopredict-accent/10 blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 left-1/2 w-48 h-48 rounded-full bg-gradient-to-r from-blue-300/10 to-biopredict-purple/10 blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>
    </div>
  );
};

export default DataWaveBackground;

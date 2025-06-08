
const FuturisticCube = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative">
        {/* Main geometric shape with optimized animations */}
        <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-2xl transform rotate-12 will-change-transform animate-pulse">
          <div className="absolute inset-4 bg-gradient-to-tr from-blue-400 to-blue-300 rounded-xl opacity-80"></div>
          <div className="absolute inset-8 bg-gradient-to-bl from-blue-300 to-blue-200 rounded-lg opacity-60"></div>
        </div>
        
        {/* Floating elements with optimized transforms */}
        <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full shadow-lg will-change-transform animate-bounce"></div>
        <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full shadow-lg will-change-transform animate-pulse"></div>
        <div className="absolute top-1/2 -right-8 w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full shadow-lg will-change-transform"></div>
      </div>
    </div>
  );
};

export default FuturisticCube;

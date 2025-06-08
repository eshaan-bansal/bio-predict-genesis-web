
import { lazy, Suspense } from 'react';

const FuturisticCube = lazy(() => import('./FuturisticCube'));

const CubeFallback = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="w-64 h-64 bg-gray-200 rounded-2xl animate-pulse"></div>
  </div>
);

const LazyFuturisticCube = () => {
  return (
    <Suspense fallback={<CubeFallback />}>
      <FuturisticCube />
    </Suspense>
  );
};

export default LazyFuturisticCube;

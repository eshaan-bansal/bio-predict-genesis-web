
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Ring, Float } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const AnimatedCube = () => {
  const cubeRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      cubeRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <>
      {/* Main rotating cube */}
      <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
        <Box ref={cubeRef} args={[1.5, 1.5, 1.5]} position={[0, 0, 0]}>
          <meshStandardMaterial 
            color="#3b82f6" 
            transparent 
            opacity={0.8}
            roughness={0.1}
            metalness={0.9}
          />
        </Box>
      </Float>

      {/* Floating spheres */}
      <Sphere ref={sphereRef} args={[0.3]} position={[2, 1, 0]}>
        <meshStandardMaterial 
          color="#06b6d4" 
          emissive="#06b6d4"
          emissiveIntensity={0.2}
        />
      </Sphere>

      <Sphere args={[0.2]} position={[-2, -1, 1]}>
        <meshStandardMaterial 
          color="#8b5cf6" 
          emissive="#8b5cf6"
          emissiveIntensity={0.3}
        />
      </Sphere>

      {/* Rotating rings */}
      <Ring ref={ringRef} args={[1.8, 2, 32]} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial 
          color="#10b981" 
          transparent 
          opacity={0.6}
          side={THREE.DoubleSide}
        />
      </Ring>

      <Ring args={[2.2, 2.4, 32]} position={[0, 0, 0]} rotation={[0, Math.PI / 4, 0]}>
        <meshStandardMaterial 
          color="#f59e0b" 
          transparent 
          opacity={0.4}
          side={THREE.DoubleSide}
        />
      </Ring>
    </>
  );
};

const FuturisticCube = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#3b82f6" />
        
        <AnimatedCube />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default FuturisticCube;

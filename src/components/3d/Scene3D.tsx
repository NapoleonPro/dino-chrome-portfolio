import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { Suspense, ReactNode } from 'react';

interface Scene3DProps {
  children: ReactNode;
  cameraPosition?: [number, number, number];
  enableControls?: boolean;
  className?: string;
  floatIntensity?: number;
}

export function Scene3D({ 
  children, 
  cameraPosition = [0, 0, 5],
  enableControls = false,
  className = "",
  floatIntensity = 1
}: Scene3DProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: cameraPosition, fov: 45 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <directionalLight position={[-10, -10, -5]} intensity={0.3} />
          <Float 
            speed={2} 
            rotationIntensity={0.5} 
            floatIntensity={floatIntensity}
          >
            {children}
          </Float>
          {enableControls && <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />}
        </Suspense>
      </Canvas>
    </div>
  );
}

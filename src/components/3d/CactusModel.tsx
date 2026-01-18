import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface CactusModelProps {
  position?: [number, number, number];
  scale?: number;
  rotate?: boolean;
  color?: string;
}

export function CactusModel({ 
  position = [0, 0, 0], 
  scale = 1, 
  rotate = false,
  color = '#2a2a2a'
}: CactusModelProps) {
  const meshRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/models/Cactus.gltf');

  useFrame((state) => {
    if (meshRef.current && rotate) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  // Clone scene and apply color
  const clonedScene = scene.clone();
  clonedScene.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material = new THREE.MeshStandardMaterial({ 
        color: color,
        metalness: 0.1,
        roughness: 0.9 
      });
    }
  });

  return (
    <group ref={meshRef} position={position} scale={scale}>
      <primitive object={clonedScene} />
    </group>
  );
}

useGLTF.preload('/models/Cactus.gltf');

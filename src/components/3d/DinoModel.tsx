import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface DinoModelProps {
  position?: [number, number, number];
  scale?: number;
  animate?: boolean;
  color?: string;
}

export function DinoModel({ 
  position = [0, 0, 0], 
  scale = 1, 
  animate = true,
  color = '#1a1a1a'
}: DinoModelProps) {
  const meshRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/models/Chrome_Dino.gltf');

  useFrame((state) => {
    if (meshRef.current && animate) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  // Clone scene and apply color
  const clonedScene = scene.clone();
  clonedScene.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material = new THREE.MeshStandardMaterial({ 
        color: color,
        metalness: 0.1,
        roughness: 0.8 
      });
    }
  });

  return (
    <group ref={meshRef} position={position} scale={scale}>
      <primitive object={clonedScene} />
    </group>
  );
}

useGLTF.preload('/models/Chrome_Dino.gltf');

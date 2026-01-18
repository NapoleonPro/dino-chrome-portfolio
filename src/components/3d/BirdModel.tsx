import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface BirdModelProps {
  position?: [number, number, number];
  scale?: number;
  speed?: number;
  color?: string;
}

export function BirdModel({ 
  position = [0, 0, 0], 
  scale = 1, 
  speed = 1,
  color = '#333333'
}: BirdModelProps) {
  const meshRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/models/Bird.gltf');

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 1.5) * 0.2;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * speed * 2) * 0.1;
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

useGLTF.preload('/models/Bird.gltf');

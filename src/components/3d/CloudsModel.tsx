import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface CloudsModelProps {
  position?: [number, number, number];
  scale?: number;
  speed?: number;
  color?: string;
}

export function CloudsModel({ 
  position = [0, 0, 0], 
  scale = 0.005, 
  speed = 0.3,
  color = '#888888'
}: CloudsModelProps) {
  const meshRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/models/Clouds.gltf');

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.2;
    }
  });

  // Clone scene and apply color
  const clonedScene = scene.clone();
  clonedScene.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material = new THREE.MeshStandardMaterial({ 
        color: color,
        metalness: 0,
        roughness: 1,
        transparent: true,
        opacity: 0.9
      });
    }
  });

  return (
    <group ref={meshRef} position={position} scale={scale}>
      <primitive object={clonedScene} />
    </group>
  );
}

useGLTF.preload('/models/Clouds.gltf');

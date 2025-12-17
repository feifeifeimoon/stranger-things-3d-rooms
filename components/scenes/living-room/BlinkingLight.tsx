import React, {JSX, useRef} from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function BlinkingLight(props: JSX.IntrinsicElements['mesh']) {
  const lightRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame((state) => {
    if (materialRef.current) {
      // Use a sine wave to create a smooth blinking effect
      const time = state.clock.getElapsedTime();
      const intensity = (Math.sin(time * 2) + 1.2) / 2; // oscillates between 0 and 1
      materialRef.current.emissiveIntensity = intensity * 2; // Make it a bit brighter
    }
  });

  return (
    <mesh {...props} ref={lightRef}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshStandardMaterial
        ref={materialRef}
        color="yellow"
        emissive="yellow"
        emissiveIntensity={0}
      />
    </mesh>
  );
}

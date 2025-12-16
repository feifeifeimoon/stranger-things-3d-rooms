'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Experience from '@/components/Experience'; // We will create this component

export default function Home() {
  return (
    <main style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <Canvas
        shadows // Enable shadows for the scene
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [ -4, 3, 6 ] // Initial camera position
        }}
      >
        <color attach="background" args={[ '#171717' ]} /> {/* Dark background */}
        <Experience />
        <OrbitControls makeDefault /> {/* Default camera controls */}
      </Canvas>
    </main>
  );
}
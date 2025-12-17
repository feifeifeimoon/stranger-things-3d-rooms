'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import LivingRoom from './living-room';

interface SceneContainerProps {
  room: string;
}

const renderRoom = (roomName: string) => {
  switch (roomName) {
    case 'living-room':
      return <LivingRoom />;
    // Add other rooms here in the future
    // case 'wheelers-basement':
    //   return <WheelersBasement />;
    default:
      return null;
  }
};

export default function SceneContainer({ room }: SceneContainerProps) {
  return (
    <main style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <color attach="background" args={['#171717']} />
        {renderRoom(room)}
        <OrbitControls makeDefault />
      </Canvas>
    </main>
  );
}

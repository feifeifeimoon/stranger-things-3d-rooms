import React from 'react';
import { Box } from '@react-three/drei';
import BlinkingLight from './BlinkingLight';
import { useControls } from 'leva';

export default function LivingRoom() {
  const { intensity: ambientIntensity } = useControls('Ambient Light', {
    intensity: { value: 0.5, min: 0, max: 2, step: 0.1 },
  });

  const { intensity: dirIntensity, color: dirColor } = useControls(
    'Directional Light',
    {
      intensity: { value: 1.5, min: 0, max: 5, step: 0.1 },
      color: '#ffffff',
    }
  );

  const { color: boxColor } = useControls('Box', {
    color: 'hotpink',
  });

  return (
    <>
      {/* Lights */}
      <ambientLight intensity={ambientIntensity} />
      <directionalLight
        position={[1, 2, 3]}
        intensity={dirIntensity}
        color={dirColor}
        castShadow
      />

      <BlinkingLight position={[0, 3, 0]} />

      {/* A simple box to test the scene */}
      <Box args={[1, 1, 1]} position={[0, 0.5, 0]} castShadow receiveShadow>
        <meshStandardMaterial color={boxColor} />
      </Box>

      {/* Floor */}
      <mesh rotation-x={-Math.PI * 0.5} position-y={0} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="lightgray" />
      </mesh>

      {/* Back Wall */}
      <mesh position-z={-5} position-y={3} receiveShadow>
        <planeGeometry args={[10, 6]} />
        <meshStandardMaterial color="ivory" />
      </mesh>

      {/* Left Wall */}
      <mesh position-x={-5} position-y={3} rotation-y={Math.PI * 0.5} receiveShadow>
        <planeGeometry args={[10, 6]} />
        <meshStandardMaterial color="ivory" />
      </mesh>
    </>
  );
}

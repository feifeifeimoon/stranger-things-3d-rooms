import React from 'react';
import { useThree } from '@react-three/fiber';
import { Box } from '@react-three/drei';

export default function Experience() {
  const { gl, camera } = useThree();

  return (
    <>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 2, 3]} intensity={1.5} castShadow />

      {/* A simple box to test the scene */}
      <Box args={[1, 1, 1]} position={[0, 0.5, 0]} castShadow receiveShadow>
        <meshStandardMaterial color="hotpink" />
      </Box>

      {/* Floor */}
      <mesh rotation-x={-Math.PI * 0.5} position-y={0} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="lightgray" />
      </mesh>
    </>
  );
}

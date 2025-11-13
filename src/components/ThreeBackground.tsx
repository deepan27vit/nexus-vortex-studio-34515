import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Torus, Box, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function FloatingShape({ position, geometry }: { position: [number, number, number]; geometry: "sphere" | "torus" | "box" }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.001;
    meshRef.current.rotation.y += 0.002;
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
  });

  const renderGeometry = () => {
    switch (geometry) {
      case "sphere":
        return (
          <Sphere ref={meshRef} args={[1, 32, 32]} position={position}>
            <MeshDistortMaterial
              color="#0096FF"
              attach="material"
              distort={0.3}
              speed={2}
              opacity={0.3}
              transparent
            />
          </Sphere>
        );
      case "torus":
        return (
          <Torus ref={meshRef} args={[1, 0.4, 16, 100]} position={position}>
            <MeshDistortMaterial
              color="#10B981"
              attach="material"
              distort={0.2}
              speed={1.5}
              opacity={0.3}
              transparent
            />
          </Torus>
        );
      case "box":
        return (
          <Box ref={meshRef} args={[1.5, 1.5, 1.5]} position={position}>
            <MeshDistortMaterial
              color="#0096FF"
              attach="material"
              distort={0.2}
              speed={1}
              opacity={0.25}
              transparent
            />
          </Box>
        );
    }
  };

  return renderGeometry();
}

export const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        
        <FloatingShape position={[-4, 2, 0]} geometry="sphere" />
        <FloatingShape position={[4, -2, -2]} geometry="torus" />
        <FloatingShape position={[0, 3, -3]} geometry="box" />
        <FloatingShape position={[-3, -3, -1]} geometry="sphere" />
        <FloatingShape position={[3, 1, -4]} geometry="torus" />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

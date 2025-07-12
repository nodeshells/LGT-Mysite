"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Box, Float } from "@react-three/drei"
import { Suspense, useRef } from "react"
import type { Mesh } from "three"

function AnimatedBox() {
  const meshRef = useRef<Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Box ref={meshRef} args={[2, 2, 2]}>
        <meshStandardMaterial 
          color="#ffffff" 
          metalness={0.4} 
          roughness={0.3}
          wireframe
          emissive="#ffffff"
          emissiveIntensity={0.1}
        />
      </Box>
    </Float>
  )
}

export function LogoScene() {
  return (
    <div className="w-full h-full">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        <Suspense fallback={null}>
          <AnimatedBox />
        </Suspense>
      </Canvas>
    </div>
  )
}
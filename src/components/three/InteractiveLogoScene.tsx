"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Box, Float } from "@react-three/drei"
import { Suspense, useRef } from "react"
import type { Mesh } from "three"
import { useScrollProgress } from "@/hooks/useScrollProgress"

interface AnimatedBoxProps {
  scrollProgress: number
}

function AnimatedBox({ scrollProgress }: AnimatedBoxProps) {
  const meshRef = useRef<Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      // Base rotation
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
      
      // Scroll-based additional rotation (slower)
      meshRef.current.rotation.z = scrollProgress * Math.PI * 0.5
      
      // Scale based on scroll (smaller change)
      const scale = 1 + scrollProgress * 0.2
      meshRef.current.scale.set(scale, scale, scale)
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Box ref={meshRef} args={[4, 4, 4]}>
        <meshStandardMaterial 
          color="#ffffff" 
          metalness={0.4} 
          roughness={0.3}
          wireframe
          emissive="#ffffff"
          emissiveIntensity={0.1 + scrollProgress * 0.1}
        />
      </Box>
    </Float>
  )
}

export function InteractiveLogoScene() {
  const scrollProgress = useScrollProgress()

  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
      <Canvas 
        camera={{ position: [0, 0, 17], fov: 45 }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        <Suspense fallback={null}>
          <AnimatedBox scrollProgress={scrollProgress} />
        </Suspense>
      </Canvas>
    </div>
  )
}
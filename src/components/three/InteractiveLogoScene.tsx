"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Box, Float } from "@react-three/drei"
import { Suspense, useRef, useState, useEffect } from "react"
import type { Mesh, MeshStandardMaterial } from "three"

interface AnimatedBoxProps {
  activeContent: 'menu' | 'credits' | 'profile'
}

function AnimatedBox({ activeContent }: AnimatedBoxProps) {
  const meshRef = useRef<Mesh>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const transitionStartTime = useRef(0)
  const previousContent = useRef(activeContent)
  
  // コンテンツ切り替えを検知
  useEffect(() => {
    if (previousContent.current !== activeContent) {
      setIsTransitioning(true)
      transitionStartTime.current = Date.now()
      
      const timer = setTimeout(() => {
        setIsTransitioning(false)
      }, 1000)
      
      previousContent.current = activeContent
      return () => clearTimeout(timer)
    }
  }, [activeContent])
  
  useFrame((state) => {
    if (meshRef.current) {
      // Base rotation
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
      
      // Transition animation
      if (isTransitioning) {
        const progress = Math.min((Date.now() - transitionStartTime.current) / 1000, 1)
        const easeOut = 1 - Math.pow(1 - progress, 3)
        
        // 追加の回転
        meshRef.current.rotation.z = Math.sin(progress * Math.PI) * 2
        
        // スケールアニメーション
        const scale = 1 + Math.sin(progress * Math.PI) * 0.3
        meshRef.current.scale.set(scale, scale, scale)
        
        // エミッシブ強度の変化
        if (meshRef.current.material && 'emissiveIntensity' in meshRef.current.material) {
          const material = meshRef.current.material as MeshStandardMaterial
          material.emissiveIntensity = 0.1 + easeOut * 0.4
        }
      } else {
        // 通常時のアニメーション
        meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
        const breathScale = 1 + Math.sin(state.clock.elapsedTime) * 0.05
        meshRef.current.scale.set(breathScale, breathScale, breathScale)
      }
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
          emissiveIntensity={0.1}
        />
      </Box>
    </Float>
  )
}

interface InteractiveLogoSceneProps {
  activeContent?: 'menu' | 'credits' | 'profile'
}

export function InteractiveLogoScene({ activeContent = 'menu' }: InteractiveLogoSceneProps) {
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
          <AnimatedBox activeContent={activeContent} />
        </Suspense>
      </Canvas>
    </div>
  )
}
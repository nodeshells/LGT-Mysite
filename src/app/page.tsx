"use client"

import dynamic from 'next/dynamic'
import { MuiMaterialList } from "@/components/ui/MuiMaterialList"
import { Box } from "@mui/material"
import { useScrollProgress } from "@/hooks/useScrollProgress"

const InteractiveLogoScene = dynamic(
  () => import("@/components/three/InteractiveLogoScene").then(mod => mod.InteractiveLogoScene),
  { 
    ssr: false,
    loading: () => <Box sx={{ width: '100%', height: '100%', bgcolor: 'transparent' }} />
  }
)

export default function Home() {
  const scrollProgress = useScrollProgress()
  
  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      {/* Three.js Logo Area - Fixed */}
      <Box sx={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '60vh', 
        bgcolor: '#0a0a0a',
        background: 'radial-gradient(circle at center, #1a1a1a 0%, #0a0a0a 100%)',
        zIndex: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <InteractiveLogoScene />
        {/* Scroll-based overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: 'black',
            opacity: scrollProgress * 0.4,
            pointerEvents: 'none',
          }}
        />
      </Box>
      
      {/* Menu and Shortcuts Area - Scrollable */}
      <Box sx={{ 
        position: 'relative',
        bgcolor: 'transparent',
        pt: '50vh',
        zIndex: 1,
      }}>
        <Box sx={{
          minHeight: '60vh',
          bgcolor: 'rgba(23, 23, 23, 0.1) !important',
          backdropFilter: 'blur(1px) !important',
          WebkitBackdropFilter: 'blur(1px) !important',
          borderRadius: '24px 24px 0 0',
          pt: { xs: 3, sm: 4, md: 6 }, // 24px, 32px, 48px
          pb: { xs: 4, sm: 6, md: 8 }, // 32px, 48px, 64px
          px: { xs: 2, sm: 3, md: 4 }, // 16px, 24px, 32px
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          borderTop: 'none',
        }}>
          <MuiMaterialList />
        </Box>
      </Box>
    </Box>
  )
}
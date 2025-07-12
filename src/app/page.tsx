import { LogoScene } from "@/components/three/LogoScene"
import { MuiMaterialList } from "@/components/ui/MuiMaterialList"
import { Box } from "@mui/material"

export default function Home() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', pt: 8 }}>
      {/* Three.js Logo Area - 40% */}
      <Box sx={{ 
        height: '40vh', 
        position: 'relative',
        bgcolor: '#000000',
      }}>
        <LogoScene />
      </Box>
      
      {/* Menu and Shortcuts Area - 60% */}
      <Box sx={{ 
        height: '60vh', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: { xs: 4, md: 6 },
        bgcolor: '#171717',
      }}>
        <MuiMaterialList />
      </Box>
    </Box>
  )
}
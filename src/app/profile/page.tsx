"use client"

import { Box, Container } from "@mui/material"
import { ProfileContent } from "@/components/ui/ProfileContent"
import { useRouter } from 'next/navigation'

export default function ProfilePage() {
  const router = useRouter()

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#0a0a0a' }}>
      <Container 
        maxWidth="md" 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: '100vh',
          py: 4
        }}
      >
        <ProfileContent onBack={() => router.back()} />
      </Container>
    </Box>
  )
}
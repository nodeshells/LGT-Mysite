"use client"

import { Box, Container, IconButton, Typography } from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useRouter } from 'next/navigation'

export default function ProfilePage() {
  const router = useRouter()

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#0a0a0a' }}>
      <Container maxWidth="lg">
        <Box sx={{ pt: 2 }}>
          <IconButton 
            onClick={() => router.back()}
            sx={{ 
              color: 'white',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.1)'
              }
            }}
          >
            <ArrowBackIcon />
          </IconButton>
        </Box>
        
        <Box sx={{ 
          py: 4, 
          textAlign: 'center',
          color: 'white'
        }}>
          <Typography variant="h2" component="h1" gutterBottom>
            My Profile
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.7 }}>
            プロフィールコンテンツをここに追加
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
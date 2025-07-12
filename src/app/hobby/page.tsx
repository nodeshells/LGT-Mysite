"use client"

import { Box, Container, IconButton, Typography, Paper } from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ConstructionIcon from '@mui/icons-material/Construction'
import { useRouter } from 'next/navigation'

export default function HobbyPage() {
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
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4
        }}>
          <Typography variant="h2" component="h1" gutterBottom>
            My Hobby
          </Typography>
          
          <Paper sx={{ 
            p: 4, 
            bgcolor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2
          }}>
            <ConstructionIcon sx={{ fontSize: 60, color: 'orange' }} />
            <Typography variant="h5" sx={{ opacity: 0.9 }}>
              Under Construction
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.7 }}>
              このページは現在準備中です
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  )
}
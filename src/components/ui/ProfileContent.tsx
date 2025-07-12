"use client"

import { Box, Typography, Paper, IconButton, Chip, Avatar } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import WorkIcon from '@mui/icons-material/Work'
import SchoolIcon from '@mui/icons-material/School'

interface ProfileContentProps {
  onBack: () => void
}

export function ProfileContent({ onBack }: ProfileContentProps) {
  return (
    <Box sx={{ width: '100%', maxWidth: 540 }}>
      <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
        <IconButton 
          onClick={onBack}
          sx={{ 
            color: 'white',
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.1)'
            }
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h5" sx={{ color: 'white', fontWeight: 300 }}>
          My Profile
        </Typography>
      </Box>

      <Paper sx={{
        bgcolor: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: 2,
        p: 3,
        mb: 2
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3 }}>
          <Avatar 
            sx={{ 
              width: 80, 
              height: 80,
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              border: '2px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <Typography variant="h3" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              👤
            </Typography>
          </Avatar>
          <Box>
            <Typography variant="h5" sx={{ color: 'white', mb: 0.5 }}>
              Developer
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
              フルスタックエンジニアを目指してる
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LocationOnIcon sx={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: 20 }} />
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Tokyo, Japan
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <WorkIcon sx={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: 20 }} />
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Software Engineer
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SchoolIcon sx={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: 20 }} />
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Computer Science
            </Typography>
          </Box>
        </Box>
      </Paper>

      <Paper sx={{
        bgcolor: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: 2,
        p: 3
      }}>
        <Typography variant="subtitle1" sx={{ color: 'white', mb: 2 }}>
          興味のある分野
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          <Chip label="Web Development" sx={{ 
            bgcolor: 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            borderColor: 'rgba(255, 255, 255, 0.2)',
            '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.15)' }
          }} variant="outlined" />
          <Chip label="AI/ML" sx={{ 
            bgcolor: 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            borderColor: 'rgba(255, 255, 255, 0.2)',
            '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.15)' }
          }} variant="outlined" />
          <Chip label="UI/UX Design" sx={{ 
            bgcolor: 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            borderColor: 'rgba(255, 255, 255, 0.2)',
            '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.15)' }
          }} variant="outlined" />
          <Chip label="3D Graphics" sx={{ 
            bgcolor: 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            borderColor: 'rgba(255, 255, 255, 0.2)',
            '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.15)' }
          }} variant="outlined" />
          <Chip label="Cloud Architecture" sx={{ 
            bgcolor: 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            borderColor: 'rgba(255, 255, 255, 0.2)',
            '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.15)' }
          }} variant="outlined" />
        </Box>
      </Paper>
    </Box>
  )
}
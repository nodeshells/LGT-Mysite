"use client"

import { Box, Container, IconButton, Typography, Card, CardContent, Chip } from "@mui/material"
import Grid from '@mui/material/Grid'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useRouter } from 'next/navigation'
import { useHobbies, useMeta } from '@/hooks/useContent'


export default function HobbyPage() {
  const router = useRouter()
  const hobbies = useHobbies()
  const meta = useMeta()

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#0a0a0a', pt: 2 }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 4 }}>
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
        
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ color: 'white' }}>
            {meta.hobbyPageTitle}
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            {meta.hobbyPageDescription}
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {hobbies.map((hobby, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card sx={{
                bgcolor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                height: '100%',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: hobby.color,
                  transform: 'translateY(-4px)',
                  boxShadow: '0 4px 20px rgba(255, 255, 255, 0.1)',
                },
              }}>
                <CardContent>
                  <Box sx={{ textAlign: 'center', mb: 2 }}>
                    <Typography variant="h1" sx={{ fontSize: '4rem', mb: 1 }}>
                      {hobby.icon}
                    </Typography>
                    <Typography variant="h5" sx={{ color: 'white', mb: 1 }}>
                      {hobby.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      {hobby.description}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, justifyContent: 'center' }}>
                    {hobby.tags.map((tag, tagIndex) => (
                      <Chip 
                        key={tagIndex}
                        label={tag}
                        size="small"
                        sx={{
                          bgcolor: 'rgba(255, 255, 255, 0.1)',
                          color: 'rgba(255, 255, 255, 0.8)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          '&:hover': {
                            bgcolor: 'rgba(255, 255, 255, 0.15)',
                          }
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
"use client"

import { Box, Container, IconButton, Typography } from "@mui/material"
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import WorkIcon from '@mui/icons-material/Work'
import SchoolIcon from '@mui/icons-material/School'
import CodeIcon from '@mui/icons-material/Code'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import { useRouter } from 'next/navigation'
import { useTimeline, useMeta } from '@/hooks/useContent'

const iconMap = {
  RocketLaunchIcon: <RocketLaunchIcon />,
  CodeIcon: <CodeIcon />,
  WorkIcon: <WorkIcon />,
  SchoolIcon: <SchoolIcon />
}

export default function TimelinePage() {
  const router = useRouter()
  const timelineData = useTimeline()
  const meta = useMeta()

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#0a0a0a', pt: 2 }}>
      <Container maxWidth="md">
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
            {meta.timelinePageTitle}
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            {meta.timelinePageDescription}
          </Typography>
        </Box>

        <Timeline position="alternate">
          {timelineData.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent color="text.secondary">
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  {item.date}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color={item.color as 'primary' | 'secondary' | 'success' | 'info'} variant="outlined">
                  {iconMap[item.icon as keyof typeof iconMap]}
                </TimelineDot>
                {index < timelineData.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Box sx={{
                  p: 2,
                  bgcolor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 2,
                }}>
                  <Typography variant="h6" component="h3" sx={{ color: 'white', mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    {item.description}
                  </Typography>
                </Box>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  )
}
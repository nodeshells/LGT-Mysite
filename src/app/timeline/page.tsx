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

const timelineData = [
  {
    date: '2024年',
    title: 'フルスタックエンジニアへの挑戦',
    description: 'フロントエンド・バックエンド両方のスキルを磨く',
    icon: <RocketLaunchIcon />,
    color: 'primary'
  },
  {
    date: '2023年',
    title: 'AIとの共創開始',
    description: 'Claude、ChatGPTなどのAIツールを活用した開発',
    icon: <CodeIcon />,
    color: 'secondary'
  },
  {
    date: '2022年',
    title: 'Webエンジニアとしてキャリアスタート',
    description: 'React、Next.jsを使ったモダンな開発を学ぶ',
    icon: <WorkIcon />,
    color: 'success'
  },
  {
    date: '2020年',
    title: 'プログラミング学習開始',
    description: 'HTML/CSS/JavaScriptの基礎から学習',
    icon: <SchoolIcon />,
    color: 'info'
  }
]

export default function TimelinePage() {
  const router = useRouter()

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
            My Timeline
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            私の歩みを時系列で
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
                  {item.icon}
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
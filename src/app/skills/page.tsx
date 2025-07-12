"use client"

import { useState } from 'react'
import { Box, Container, IconButton, Typography, Card, CardContent, LinearProgress, Chip, ToggleButton, ToggleButtonGroup } from "@mui/material"
import Grid from '@mui/material/Grid'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useRouter } from 'next/navigation'

interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'tools' | 'other'
  level: number
  icon: string
}

const skillsData: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend', level: 85, icon: '⚛️' },
  { name: 'Next.js', category: 'frontend', level: 80, icon: '▲' },
  { name: 'TypeScript', category: 'frontend', level: 75, icon: '🔷' },
  { name: 'HTML/CSS', category: 'frontend', level: 90, icon: '🎨' },
  { name: 'Tailwind CSS', category: 'frontend', level: 70, icon: '🌊' },
  { name: 'Material-UI', category: 'frontend', level: 75, icon: '🎯' },
  
  // Backend
  { name: 'Node.js', category: 'backend', level: 70, icon: '🟢' },
  { name: 'Python', category: 'backend', level: 65, icon: '🐍' },
  { name: 'PostgreSQL', category: 'backend', level: 60, icon: '🐘' },
  { name: 'REST API', category: 'backend', level: 75, icon: '🔌' },
  
  // Tools
  { name: 'Git/GitHub', category: 'tools', level: 80, icon: '🐙' },
  { name: 'VS Code', category: 'tools', level: 90, icon: '💻' },
  { name: 'Docker', category: 'tools', level: 55, icon: '🐳' },
  { name: 'Figma', category: 'tools', level: 60, icon: '🎨' },
  
  // Other
  { name: 'AI Tools', category: 'other', level: 85, icon: '🤖' },
  { name: 'English', category: 'other', level: 70, icon: '🌐' },
]

const categoryLabels = {
  all: 'すべて',
  frontend: 'フロントエンド',
  backend: 'バックエンド',
  tools: 'ツール',
  other: 'その他'
}

export default function SkillsPage() {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const handleCategoryChange = (_: React.MouseEvent<HTMLElement>, newCategory: string | null) => {
    if (newCategory !== null) {
      setSelectedCategory(newCategory)
    }
  }

  const filteredSkills = selectedCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === selectedCategory)

  const getLevelColor = (level: number) => {
    if (level >= 80) return 'primary'
    if (level >= 60) return 'secondary'
    return 'warning'
  }

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
            My Skills
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            技術スタックとスキルレベル
          </Typography>
        </Box>

        <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
          <ToggleButtonGroup
            value={selectedCategory}
            exclusive
            onChange={handleCategoryChange}
            sx={{
              '& .MuiToggleButton-root': {
                color: 'rgba(255, 255, 255, 0.7)',
                borderColor: 'rgba(255, 255, 255, 0.2)',
                '&.Mui-selected': {
                  color: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                },
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.05)',
                },
              },
            }}
          >
            <ToggleButton value="all">すべて</ToggleButton>
            <ToggleButton value="frontend">フロントエンド</ToggleButton>
            <ToggleButton value="backend">バックエンド</ToggleButton>
            <ToggleButton value="tools">ツール</ToggleButton>
            <ToggleButton value="other">その他</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <Grid container spacing={3}>
          {filteredSkills.map((skill, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card sx={{
                bgcolor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.08)',
                  transform: 'translateY(-4px)',
                  boxShadow: '0 4px 20px rgba(255, 255, 255, 0.1)',
                },
              }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h4" sx={{ mr: 2 }}>
                      {skill.icon}
                    </Typography>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" sx={{ color: 'white' }}>
                        {skill.name}
                      </Typography>
                      <Chip 
                        label={categoryLabels[skill.category]} 
                        size="small"
                        sx={{ 
                          bgcolor: 'rgba(255, 255, 255, 0.1)',
                          color: 'rgba(255, 255, 255, 0.7)',
                          fontSize: '0.75rem',
                        }}
                      />
                    </Box>
                  </Box>
                  <Box sx={{ mb: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        レベル
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'white' }}>
                        {skill.level}%
                      </Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={skill.level} 
                      color={getLevelColor(skill.level) as 'primary' | 'secondary' | 'warning'}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        '& .MuiLinearProgress-bar': {
                          borderRadius: 4,
                        },
                      }}
                    />
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
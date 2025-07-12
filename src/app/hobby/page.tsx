"use client"

import { Box, Container, IconButton, Typography, Grid, Card, CardContent, Chip } from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useRouter } from 'next/navigation'

const hobbies = [
  {
    title: 'ゲーム',
    icon: '🎮',
    description: 'RPGやストラテジーゲームが好き',
    tags: ['Steam', 'PS5', 'インディーゲーム'],
    color: 'rgba(139, 92, 246, 0.2)'
  },
  {
    title: '読書',
    icon: '📚',
    description: '技術書やSF小説をよく読みます',
    tags: ['技術書', 'SF', 'ビジネス書'],
    color: 'rgba(59, 130, 246, 0.2)'
  },
  {
    title: 'アニメ・映画',
    icon: '🎬',
    description: 'SFやファンタジー作品が特に好き',
    tags: ['Netflix', 'Amazon Prime', 'アニメ'],
    color: 'rgba(236, 72, 153, 0.2)'
  },
  {
    title: '音楽',
    icon: '🎵',
    description: 'Lo-fiやChillな音楽を聴きながら作業',
    tags: ['Lo-fi', 'Jazz', 'Game OST'],
    color: 'rgba(16, 185, 129, 0.2)'
  },
  {
    title: 'カフェ巡り',
    icon: '☕',
    description: '落ち着いた雰囲気のカフェで作業するのが好き',
    tags: ['コーヒー', 'ノマドワーク', '東京カフェ'],
    color: 'rgba(245, 158, 11, 0.2)'
  },
  {
    title: '技術記事',
    icon: '✍️',
    description: 'Qiitaやnoteで技術記事を書いています',
    tags: ['Qiita', 'note', 'ブログ'],
    color: 'rgba(239, 68, 68, 0.2)'
  }
]

export default function HobbyPage() {
  const router = useRouter()

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
            My Hobby
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            趣味と興味のあること
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {hobbies.map((hobby, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
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
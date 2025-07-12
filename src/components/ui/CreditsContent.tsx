"use client"

import { Box, Typography, Link, Paper, IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import GitHubIcon from '@mui/icons-material/GitHub'
import CodeIcon from '@mui/icons-material/Code'

interface CreditsContentProps {
  onBack: () => void
}

export function CreditsContent({ onBack }: CreditsContentProps) {
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
          Credits
        </Typography>
      </Box>

      <Paper sx={{
        bgcolor: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: 2,
        p: 3,
        mb: 2
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <CodeIcon sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />
          <Box>
            <Typography variant="subtitle2" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
              実装者
            </Typography>
            <Typography variant="h6" sx={{ color: 'white' }}>
              Claude Code
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <GitHubIcon sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />
          <Box>
            <Typography variant="subtitle2" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
              協力者
            </Typography>
            <Link 
              href="https://github.com/nodeshells" 
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                color: '#58a6ff',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              <Typography variant="h6">
                nodeshells
              </Typography>
            </Link>
          </Box>
        </Box>
      </Paper>

      <Typography 
        variant="body2" 
        sx={{ 
          color: 'rgba(255, 255, 255, 0.5)',
          textAlign: 'center',
          mt: 3
        }}
      >
        Made with 💙 by AI and Human collaboration
      </Typography>
    </Box>
  )
}
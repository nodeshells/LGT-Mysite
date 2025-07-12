"use client"

import { ReactNode } from 'react'
import { Box, Fade } from '@mui/material'

interface ContentSwitcherProps {
  isContentVisible: boolean
  mainContent: ReactNode
  alternativeContent: ReactNode
}

export function ContentSwitcher({ 
  isContentVisible, 
  mainContent, 
  alternativeContent 
}: ContentSwitcherProps) {
  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <Fade in={!isContentVisible} timeout={300}>
        <Box sx={{ 
          display: isContentVisible ? 'none' : 'block',
          width: '100%'
        }}>
          {mainContent}
        </Box>
      </Fade>
      
      <Fade in={isContentVisible} timeout={300}>
        <Box sx={{ 
          display: !isContentVisible ? 'none' : 'block',
          width: '100%'
        }}>
          {alternativeContent}
        </Box>
      </Fade>
    </Box>
  )
}
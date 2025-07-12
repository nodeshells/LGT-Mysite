"use client"

import { AppBar, Box, Typography } from '@mui/material'
import Link from "next/link"

export function MuiHeader() {
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        background: 'rgba(10, 10, 10, 0.1) !important',
        backgroundColor: 'transparent !important',
        backdropFilter: 'blur(1px) !important',
        WebkitBackdropFilter: 'blur(1px) !important',
        boxShadow: 'none !important',
        p: 0,
        px: 3,
        height: 'auto',
        borderBottom: 'none',
        top: 0,
        zIndex: 1100,
      }}
    >
      <Box sx={{ py: 2 }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Box>
            <Typography 
              variant="h5" 
              component="h1" 
              sx={{ 
                fontWeight: 300,
                color: 'white',
                fontSize: { xs: '1.5rem', md: '1.875rem' },
              }}
            >
              LGT-MySite
            </Typography>
            <Typography 
              variant="caption" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.7)',
                mt: 0.25,
                display: 'block',
              }}
            >
              Claudeコードが作りました
            </Typography>
          </Box>
        </Link>
      </Box>
    </AppBar>
  )
}
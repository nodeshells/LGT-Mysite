"use client"

import { useState } from "react"
import { AppBar, Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import TimelineIcon from '@mui/icons-material/Timeline'
import CodeIcon from '@mui/icons-material/Code'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import { MuiHamburgerMenu } from "@/components/ui/mui-hamburger-menu"
import Link from "next/link"
import { useRouter } from 'next/navigation'

const menuItems = [
  { href: "/profile", label: "Profile", icon: AccountCircleIcon },
  { href: "/timeline", label: "Timeline", icon: TimelineIcon },
  { href: "/skills", label: "Skills", icon: CodeIcon },
  { href: "/hobby", label: "Hobby", icon: SportsEsportsIcon },
]

export function MuiHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const handleDrawerToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
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
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', py: 2 }}>
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
          
          <MuiHamburgerMenu 
            isOpen={isMenuOpen}
            onClick={handleDrawerToggle}
          />
        </Box>
      </AppBar>

      <Drawer
        anchor="left"
        open={isMenuOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: 320,
            bgcolor: '#0a0a0a',
            color: 'white',
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
            <IconButton 
              onClick={handleDrawerToggle}
              sx={{ 
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          
          <List>
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <ListItem key={item.href} disablePadding sx={{ mb: 1 }}>
                  <ListItemButton
                    onClick={() => {
                      router.push(item.href)
                      setIsMenuOpen(false)
                    }}
                    sx={{
                      borderRadius: 1,
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.08)',
                      },
                    }}
                  >
                    <ListItemIcon>
                      <Icon sx={{ color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: '1.25rem',
                        fontWeight: 300,
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              )
            })}
          </List>
        </Box>
      </Drawer>
    </>
  )
}
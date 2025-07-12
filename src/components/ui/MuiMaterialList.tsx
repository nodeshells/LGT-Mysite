"use client"

import { useState } from 'react'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Box, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import TimelineIcon from '@mui/icons-material/Timeline'
import CodeIcon from '@mui/icons-material/Code'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import InfoIcon from '@mui/icons-material/Info'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { useRouter } from 'next/navigation'
import { ContentSwitcher } from './ContentSwitcher'
import { CreditsContent } from './CreditsContent'
import { ProfileContent } from './ProfileContent'

const navigationItems = [
  { 
    href: "/timeline", 
    label: "My Timeline", 
    icon: TimelineIcon,
    description: "時系列でみる私の歩み"
  },
  { 
    href: "/skills", 
    label: "My Skills", 
    icon: CodeIcon,
    description: "技術スタックとスキルセット"
  },
  { 
    href: "/hobby", 
    label: "My Hobby", 
    icon: SportsEsportsIcon,
    description: "趣味と興味のあること"
  },
]

interface MuiMaterialListProps {
  onContentChange?: (content: 'menu' | 'credits' | 'profile') => void
}

export function MuiMaterialList({ onContentChange }: MuiMaterialListProps = {}) {
  const router = useRouter()
  const [activeContent, setActiveContent] = useState<'menu' | 'credits' | 'profile'>('menu')
  
  const handleContentChange = (content: 'menu' | 'credits' | 'profile') => {
    setActiveContent(content)
    onContentChange?.(content)
  }

  const menuList = (
    <Box>
      <List sx={{ 
        width: '100%', 
        maxWidth: 540,
        bgcolor: 'transparent',
      }}>
        {/* Profile - Content Switch */}
        <ListItem disablePadding sx={{ mb: 1 }}>
          <ListItemButton
            onClick={() => handleContentChange('profile')}
            sx={{
              borderRadius: 2,
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.05)',
              },
            }}
          >
            <ListItemIcon>
              <AccountCircleIcon sx={{ 
                color: 'rgba(255, 255, 255, 0.7)', 
                fontSize: 28,
                mr: 1
              }} />
            </ListItemIcon>
            <ListItemText 
              primary="My Profile"
              secondary="私のプロフィールを見る"
              primaryTypographyProps={{
                fontSize: '1rem',
                fontWeight: 400,
                color: 'white',
              }}
              secondaryTypographyProps={{
                fontSize: '0.875rem',
                color: 'rgba(255, 255, 255, 0.6)',
              }}
              sx={{ ml: 2 }}
            />
            <ChevronRightIcon sx={{ color: 'rgba(255, 255, 255, 0.4)' }} />
          </ListItemButton>
        </ListItem>

        {/* Navigation Items */}
        {navigationItems.map((item) => {
          const Icon = item.icon
          return (
            <ListItem 
              key={item.href} 
              disablePadding
              sx={{ mb: 1 }}
            >
              <ListItemButton
                onClick={() => router.push(item.href)}
                sx={{
                  borderRadius: 2,
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                  },
                }}
              >
                <ListItemIcon>
                  <Icon sx={{ 
                    color: 'rgba(255, 255, 255, 0.7)', 
                    fontSize: 28,
                    mr: 1
                  }} />
                </ListItemIcon>
                <ListItemText 
                  primary={item.label}
                  secondary={item.description}
                  primaryTypographyProps={{
                    fontSize: '1rem',
                    fontWeight: 400,
                    color: 'white',
                  }}
                  secondaryTypographyProps={{
                    fontSize: '0.875rem',
                    color: 'rgba(255, 255, 255, 0.6)',
                  }}
                  sx={{ ml: 2 }}
                />
                <ChevronRightIcon sx={{ color: 'rgba(255, 255, 255, 0.4)' }} />
              </ListItemButton>
            </ListItem>
          )
        })}

        {/* Credits - Content Switch */}
        <ListItem disablePadding sx={{ mb: 1 }}>
          <ListItemButton
            onClick={() => handleContentChange('credits')}
            sx={{
              borderRadius: 2,
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.05)',
              },
            }}
          >
            <ListItemIcon>
              <InfoIcon sx={{ 
                color: 'rgba(255, 255, 255, 0.7)', 
                fontSize: 28,
                mr: 1
              }} />
            </ListItemIcon>
            <ListItemText 
              primary="Credits"
              secondary="このサイトを作った人たち"
              primaryTypographyProps={{
                fontSize: '1rem',
                fontWeight: 400,
                color: 'white',
              }}
              secondaryTypographyProps={{
                fontSize: '0.875rem',
                color: 'rgba(255, 255, 255, 0.6)',
              }}
              sx={{ ml: 2 }}
            />
            <ChevronRightIcon sx={{ color: 'rgba(255, 255, 255, 0.4)' }} />
          </ListItemButton>
        </ListItem>
        
        <Divider sx={{ 
          my: 2, 
          bgcolor: 'rgba(255, 255, 255, 0.1)',
          width: '100%',
          maxWidth: 540
        }} />
        
        {/* Technology Badges */}
        <Box sx={{ px: 2, py: 1 }}>
          <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.5)', display: 'block', mb: 1 }}>
            Powered by
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Box sx={{ textAlign: 'center' }}>
              <Box sx={{ 
                width: 40, 
                height: 40, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                bgcolor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: 1,
                mb: 0.5
              }}>
                <Typography sx={{ fontSize: 20 }}>⚛️</Typography>
              </Box>
              <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.4)' }}>
                React
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Box sx={{ 
                width: 40, 
                height: 40, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                bgcolor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: 1,
                mb: 0.5
              }}>
                <Typography sx={{ fontSize: 20 }}>▲</Typography>
              </Box>
              <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.4)' }}>
                Next.js
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Box sx={{ 
                width: 40, 
                height: 40, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                bgcolor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: 1,
                mb: 0.5
              }}>
                <Typography sx={{ fontSize: 20 }}>🎨</Typography>
              </Box>
              <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.4)' }}>
                MUI
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Box sx={{ 
                width: 40, 
                height: 40, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                bgcolor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: 1,
                mb: 0.5
              }}>
                <Typography sx={{ fontSize: 20 }}>🎮</Typography>
              </Box>
              <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.4)' }}>
                Three.js
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Box sx={{ 
                width: 40, 
                height: 40, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                bgcolor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: 1,
                mb: 0.5
              }}>
                <Typography sx={{ fontSize: 20 }}>🤖</Typography>
              </Box>
              <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.4)' }}>
                Claude
              </Typography>
            </Box>
          </Box>
        </Box>
      </List>
    </Box>
  )

  const getActiveContent = () => {
    switch (activeContent) {
      case 'credits':
        return <CreditsContent onBack={() => handleContentChange('menu')} />
      case 'profile':
        return <ProfileContent onBack={() => handleContentChange('menu')} />
      default:
        return menuList
    }
  }

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      {getActiveContent()}
    </Box>
  )
}
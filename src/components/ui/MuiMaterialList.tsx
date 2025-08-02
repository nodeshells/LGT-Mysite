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
import { CreditsContent } from './CreditsContent'
import { ProfileContent } from './ProfileContent'
import { useNavigation } from '@/hooks/useContent'

const iconComponentMap = {
  AccountCircleIcon: AccountCircleIcon,
  TimelineIcon: TimelineIcon,
  CodeIcon: CodeIcon,
  SportsEsportsIcon: SportsEsportsIcon,
  InfoIcon: InfoIcon
}

interface MuiMaterialListProps {
  onContentChange?: (content: 'menu' | 'credits' | 'profile') => void
}

export function MuiMaterialList({ onContentChange }: MuiMaterialListProps = {}) {
  const router = useRouter()
  const navigation = useNavigation()
  const [activeContent, setActiveContent] = useState<'menu' | 'credits' | 'profile'>('menu')
  
  // Filter navigation items for page navigation (not content switches)
  const pageNavigationItems = navigation.filter(item => !item.isContentSwitch && item.label !== 'My Profile')
  const profileItem = navigation.find(item => item.label === 'My Profile')
  const creditsItem = navigation.find(item => item.label === 'Credits')
  
  const handleContentChange = (content: 'menu' | 'credits' | 'profile') => {
    setActiveContent(content)
    onContentChange?.(content)
  }

  const menuList = (
    <Box sx={{ width: '100%' }}>
      <List sx={{ 
        width: '100%',
        maxWidth: 540,
        mx: 'auto',
        bgcolor: 'transparent',
      }}>
        {/* Profile - Content Switch */}
        {profileItem && (
          <ListItem disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              onClick={() => handleContentChange('profile')}
              sx={{
                borderRadius: 2,
                px: 0,
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.05)',
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                {(() => {
                  const Icon = iconComponentMap[profileItem.icon as keyof typeof iconComponentMap]
                  return Icon ? <Icon sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: 28 }} /> : null
                })()}
              </ListItemIcon>
              <ListItemText 
                primary={profileItem.label}
                secondary={profileItem.description}
                primaryTypographyProps={{
                  fontSize: '1rem',
                  fontWeight: 400,
                  color: 'white',
                }}
                secondaryTypographyProps={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.6)',
                }}
                sx={{ ml: 1, flex: 1 }}
              />
              <ChevronRightIcon sx={{ color: 'rgba(255, 255, 255, 0.4)', ml: 'auto' }} />
            </ListItemButton>
          </ListItem>
        )}

        {/* Navigation Items */}
        {pageNavigationItems.map((item) => {
          const Icon = iconComponentMap[item.icon as keyof typeof iconComponentMap]
          return Icon ? (
            <ListItem 
              key={item.href} 
              disablePadding
              sx={{ mb: 0.5 }}
            >
              <ListItemButton
                onClick={() => router.push(item.href)}
                sx={{
                  borderRadius: 2,
                  px: 0,
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <Icon sx={{ 
                    color: 'rgba(255, 255, 255, 0.7)', 
                    fontSize: 28,
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
                  sx={{ ml: 1, flex: 1 }}
                />
                <ChevronRightIcon sx={{ color: 'rgba(255, 255, 255, 0.4)', ml: 'auto' }} />
              </ListItemButton>
            </ListItem>
          ) : null
        })}

        {/* Credits - Content Switch */}
        {creditsItem && (
          <ListItem disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              onClick={() => handleContentChange('credits')}
              sx={{
                borderRadius: 2,
                px: 0,
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.05)',
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                {(() => {
                  const Icon = iconComponentMap[creditsItem.icon as keyof typeof iconComponentMap]
                  return Icon ? <Icon sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: 28 }} /> : null
                })()}
              </ListItemIcon>
              <ListItemText 
                primary={creditsItem.label}
                secondary={creditsItem.description}
                primaryTypographyProps={{
                  fontSize: '1rem',
                  fontWeight: 400,
                  color: 'white',
                }}
                secondaryTypographyProps={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.6)',
                }}
                sx={{ ml: 1, flex: 1 }}
              />
              <ChevronRightIcon sx={{ color: 'rgba(255, 255, 255, 0.4)', ml: 'auto' }} />
            </ListItemButton>
          </ListItem>
        )}
        
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
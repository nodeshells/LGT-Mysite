"use client"

import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Avatar } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import WorkIcon from '@mui/icons-material/Work'
import EmailIcon from '@mui/icons-material/Email'
import ArticleIcon from '@mui/icons-material/Article'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { useRouter } from 'next/navigation'

const menuItems = [
  { 
    href: "/about", 
    label: "About", 
    icon: PersonIcon,
    description: "Learn more about me"
  },
  { 
    href: "/work", 
    label: "Work", 
    icon: WorkIcon,
    description: "View my portfolio and projects"
  },
  { 
    href: "/contact", 
    label: "Contact", 
    icon: EmailIcon,
    description: "Get in touch with me"
  },
  { 
    href: "/blog", 
    label: "Blog", 
    icon: ArticleIcon,
    description: "Read my thoughts and articles"
  },
]

export function MuiMaterialList() {
  const router = useRouter()

  return (
    <List sx={{ 
      width: '100%', 
      maxWidth: 600,
      bgcolor: 'transparent',
    }}>
      {menuItems.map((item) => {
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
                <Avatar
                  sx={{
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    width: 48,
                    height: 48,
                  }}
                >
                  <Icon sx={{ color: 'white' }} />
                </Avatar>
              </ListItemIcon>
              <ListItemText 
                primary={item.label}
                secondary={item.description}
                primaryTypographyProps={{
                  fontSize: '1.125rem',
                  fontWeight: 500,
                  color: 'white',
                }}
                secondaryTypographyProps={{
                  color: 'rgba(255, 255, 255, 0.6)',
                }}
                sx={{ ml: 2 }}
              />
              <ChevronRightIcon sx={{ color: 'rgba(255, 255, 255, 0.4)' }} />
            </ListItemButton>
          </ListItem>
        )
      })}
    </List>
  )
}
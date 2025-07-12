"use client"

import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

interface MuiHamburgerMenuProps {
  isOpen: boolean
  onClick: () => void
}

export function MuiHamburgerMenu({ isOpen, onClick }: MuiHamburgerMenuProps) {
  return (
    <IconButton
      onClick={onClick}
      color="primary"
      aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
      sx={{
        color: 'rgba(255, 255, 255, 0.7)',
        padding: '6px',
        mt: '-6px',
        transition: 'all 0.2s ease',
        '&:hover': {
          backgroundColor: 'transparent',
          color: 'rgba(255, 255, 255, 1)',
        },
      }}
    >
      {isOpen ? <CloseIcon sx={{ fontSize: 28 }} /> : <MenuIcon sx={{ fontSize: 28 }} />}
    </IconButton>
  )
}
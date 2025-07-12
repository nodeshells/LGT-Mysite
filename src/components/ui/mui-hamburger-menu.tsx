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
        color: 'white',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
        },
      }}
    >
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </IconButton>
  )
}
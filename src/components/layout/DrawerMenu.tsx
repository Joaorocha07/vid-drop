import React from 'react'

import {
  List,
  Drawer,
  ListItemText,
  Box,
  Typography,
  ListItemIcon,
  ListItemButton
} from '@mui/material'

import Link from 'next/link'
import AudiotrackIcon from '@mui/icons-material/Audiotrack'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'

interface DrawerMenuProps {
  drawerOpen: boolean
  selectedButton: string
  setDrawerOpen: (open: boolean) => void
  handleButtonClick: (type: string) => void
  setIconRotated: (rotated: boolean) => void
  toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void
}

export default function DrawerMenu ({
  drawerOpen,
  toggleDrawer,
  setDrawerOpen,
  selectedButton,
  setIconRotated,
  handleButtonClick
}: DrawerMenuProps): JSX.Element {
  const menuItems = [
    {
      href: '/tik-tok-video',
      text: 'Baixar vídeo TikTok',
      icon: <VideoLibraryIcon />,
      value: 'video'
    },
    {
      href: '/tik-tok-audio',
      text: 'Baixar áudio TikTok',
      icon: <AudiotrackIcon />,
      value: 'audio'
    }
  ]

  return (
    <Drawer
      anchor="left"
      open={drawerOpen}
      onClose={toggleDrawer(false)}
      sx={{
        '& .MuiDrawer-paper': {
          width: 250,
          backgroundColor: '#f5f5f5',
          color: 'black'
        }
      }}
    >
      <Box
        sx={{
          padding: 2,
          textAlign: 'center',
          fontWeight: 'bold',
          borderBottom: '1px solid #ddd'
        }}
      >
        <Typography>Menu</Typography>
      </Box>
      <List>
        {menuItems.map(({ href, text, icon, value }) => (
          <Link
            key={value}
            style={{ textDecoration: 'none', color: 'black' }}
            href={href}
            passHref
          >
            <ListItemButton
              selected={selectedButton === value}
              onClick={() => {
                handleButtonClick(value)
                setDrawerOpen(false)
                setIconRotated(false)
              }}
              sx={{
                '&.Mui-selected': {
                  backgroundColor: '#ccc',
                  fontWeight: 'bold'
                },
                '&.Mui-selected:hover': {
                  backgroundColor: '#bbb'
                }
              }}
            >
              <ListItemIcon>
                {icon}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </Link>
        ))}
      </List>
    </Drawer>
  )
}

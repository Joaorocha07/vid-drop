'use client'
import React, { useEffect, useState } from 'react'

import {
  Logo,
  NavMenu,
  StyledButton,
  StyledToolbar
} from './styles/header'

import {
  AppBar,
  styled,
  Container,
  IconButton,
  type SvgIconProps
} from '@mui/material'

import { usePathname } from 'next/navigation'

import Link from 'next/link'
import DrawerMenu from './DrawerMenu'
import logo from '@/../public/logo-branco.png'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
interface RotatingMenuIconProps extends SvgIconProps {
  open: boolean
}

export default function Header (): JSX.Element {
  const pathname = usePathname()

  const [drawerOpen, setDrawerOpen] = useState(false)
  const [iconRotated, setIconRotated] = useState(false)
  const [selectedButton, setSelectedButton] = useState('')

  const handleButtonClick = (button: string): void => {
    setSelectedButton(button)
  }

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setDrawerOpen(open)
    setIconRotated(open)
  }

  const MenuToggleIcon = styled(({ open, ...props }: { open: boolean } & RotatingMenuIconProps) => (
    open ? <CloseIcon {...props} /> : <MenuIcon {...props} />
  ))(({ open }) => ({
    transition: 'transform 0.3s ease-in-out',
    transform: open ? 'rotate(0deg)' : 'rotate(0deg)'
  }))

  useEffect(() => {
    if (pathname === '/tik-tok-video') {
      setSelectedButton('video')
    } else if (pathname === '/tik-tok-audio') {
      setSelectedButton('audio')
    }
  }, [pathname])

  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Container>
        <StyledToolbar>
          <Link href='/tik-tok-video'>
            <Logo src={logo.src} alt="Logo" />
          </Link>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className="icon-button"
            sx={{ display: { xs: 'block', sm: 'none' } }}
            onClick={() => {
              setDrawerOpen(!drawerOpen)
              setIconRotated(!drawerOpen)
            }}
          >
            <MenuToggleIcon open={iconRotated} />
          </IconButton>
          <NavMenu>
            <StyledButton
              color="inherit"
              href="/tik-tok-video"
              onClick={() => { handleButtonClick('video') }}
              isSelected={selectedButton === 'video'}
            >
              Baixar Vídeo TikTok
            </StyledButton>
            <StyledButton
              color="inherit"
              href="/tik-tok-audio"
              onClick={() => { handleButtonClick('audio') }}
              isSelected={selectedButton === 'audio'}
            >
              Baixar audio TikTok
            </StyledButton>
          </NavMenu>
          <DrawerMenu
            drawerOpen={drawerOpen}
            toggleDrawer={toggleDrawer}
            handleButtonClick={handleButtonClick}
            setDrawerOpen={setDrawerOpen}
            setIconRotated={setIconRotated}
            selectedButton={selectedButton}
          />
        </StyledToolbar>
      </Container>
    </AppBar>
  )
}

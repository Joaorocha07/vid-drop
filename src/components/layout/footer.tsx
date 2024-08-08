import React from 'react'

import { FooterContainer } from './styles/footer'
import { Box, Container, Typography } from '@mui/material'

import Link from 'next/link'

export default function Footer (): JSX.Element {
  const currentYear = new Date().getFullYear()

  return (
    <FooterContainer>
      <Container>
        {/* <LogoInstagram /> */}
        <Typography variant="body2" component="span">
          Desenvolvido em {currentYear}
        </Typography>
        <Box>
          <Typography variant="body2" component="span" sx={{ display: 'block', mt: 1 }}>
            <Link href="/sobre" style={{ color: 'white', textDecoration: 'none' }}>
              Sobre
            </Link>
            {' | '}
            <Link href="/politicas-de-privacidade" style={{ color: 'white', textDecoration: 'none' }}>
              Políticas de Privacidade
            </Link>
            {' | '}
            <Link href="/contato" style={{ color: 'white', textDecoration: 'none' }}>
              Contato
            </Link>
          </Typography>
        </Box>
        {/* <TradutorSelect /> */}
      </Container>
    </FooterContainer>
  )
}

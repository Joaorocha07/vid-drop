'use client'
import React from 'react'

import { type IRootLayout } from '@/types/global'

import CustomHead from '@/app/head'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { Box } from '@mui/material'

export default function ContatoLayout ({
  children
}: IRootLayout): JSX.Element {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CustomHead title="Vid Drop - Contato" />
        <Header />
        <main style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
      </Box>
    </>
  )
}

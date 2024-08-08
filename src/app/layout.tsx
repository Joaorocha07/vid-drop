import React from 'react'

import { type IRootLayout } from '@/types/global'

import '../styles/globals.css'

export default function RootLayout ({ children }: IRootLayout): JSX.Element {
  return (
    <html lang="pt-BR">
      <body suppressHydrationWarning={true}>
        <>{children}</>
      </body>
    </html>
  )
}

'use client'

import { Link } from '@mui/material'
// import { useRouter } from 'next/navigation'
import React from 'react'

export default function Home (): JSX.Element {
  // const router = useRouter()

  // useEffect(() => {
  //   router.push('/tik-tok-video')
  // }, [router])

  return (
    <>
      <h1>Página principal</h1>
      <Link href='/tik-tok-video'>acesse aqui o site</Link>
    </>
  )
}

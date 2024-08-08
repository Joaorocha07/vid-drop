'use client'

import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function Home (): JSX.Element {
  const router = useRouter()

  useEffect(() => {
    router.push('/tik-tok-video')
  }, [router])

  return (
    <></>
  )
}

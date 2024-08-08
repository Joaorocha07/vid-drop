'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function NotFound (): JSX.Element {
  const router = useRouter()

  useEffect(() => {
    router.push('/tik-tok-video')
  }, [router])

  return (
    <></>
  )
}

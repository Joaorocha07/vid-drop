import React from 'react'

import { type CustomHeadProps } from '@/types/global'

import icon from '@/../public/favicon.ico'

export default function CustomHead ({ title }: CustomHeadProps): JSX.Element {
  return (
    <>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={'Baixe vídeos do TikTok sem marca d\'água com o Vid Drop. Rápido, fácil e gratuito!'} />
      <link
        rel="icon"
        href={icon.src}
        type="image/svg+xml"
        sizes="any"
      />
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={'Baixe vídeos do TikTok sem marca d\'água com o Vid Drop. Rápido, fácil e gratuito!'} />
      <meta property="og:url" content={'https://viddrop.netlify.app/tik-tok-video'} />
      <meta property="og:image" content={'@/../public/favicon-32x32.png'} />
      <meta property="og:type" content="website" />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={'Baixe vídeos do TikTok sem marca d\'água com o Vid Drop. Rápido, fácil e gratuito!'} />
      <meta name="twitter:image" content={'@/../public/favicon-32x32.png'} />
    </>
  )
}

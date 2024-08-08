'use server'

import { type ITikTokResponse } from '@/types/tik-tok/tik-tok'

export interface IDownloadVideosProps {
  videoUrl: string
  jwt: string
}

export default async function DownloadVideos ({
  videoUrl,
  jwt
}: IDownloadVideosProps): Promise<ITikTokResponse | any> {
  try {
    const dados = new FormData()
    dados.append('url', videoUrl)
    dados.append('hd', '1')

    const apiUrl = process.env.NEXT_PUBLIC_API ?? ''

    const headersKey = process.env.NEXT_HEADER_KEY ?? ''
    const headersHost = process.env.NEXT_HEADER_HOST ?? ''

    const requestOptions: RequestInit = {
      method: 'POST',
      headers: {
        [headersKey]: process.env.NEXT_JWT_USER ?? '',
        [headersHost]: process.env.NEXT_JWT_HOST ?? '',
        Authorization: `Bearer ${jwt}`
      },
      body: dados,
      redirect: 'follow',
      cache: 'no-cache'
    }

    const data = await fetch(apiUrl, requestOptions)
    const jsonData: ITikTokResponse = await data.json()

    return jsonData
  } catch (e: any) {
    return null
  }
}

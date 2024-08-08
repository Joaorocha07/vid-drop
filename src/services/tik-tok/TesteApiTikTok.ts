'use server'

import { type ITikTokResponse } from '@/types/tik-tok/tik-tok'

interface ITesteApiTikTokArgs {
  videoUrl: string
  jwt: string
}

export default async function TesteApiTikTok ({
  videoUrl,
  jwt
}: ITesteApiTikTokArgs): Promise<ITikTokResponse | null> {
  try {
    const headersKey = process.env.NEXT_HEADER_KEY_GOLD ?? ''
    const headersHost = process.env.NEXT_HEADER_HOST_GOLD ?? ''

    const apiUrl = `${
      process.env.NEXT_PUBLIC_API_GOLD ?? ''
    }/analysis?url=${videoUrl}`

    const headers = new Headers()
    headers.append('Authorization', `Bearer ${jwt}`)

    const requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        [headersKey]: process.env.NEXT_JWT_USER_GOLD ?? '',
        [headersHost]: process.env.NEXT_JWT_HOST_GOLD ?? '',
        Authorization: `Bearer ${jwt}`
      },
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

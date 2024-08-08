import { useState } from 'react'

import { notifyError, notifySuccess } from '@/components/modals'

import TesteApiTikTok from '@/services/tik-tok/TesteApiTikTok'

interface IUseDowloadAudio {
  videoUrl: string
  loading: boolean
  handleClear: () => void
  showClearButton: boolean
  handlePaste: () => Promise<void>
  handleDownload: () => Promise<void>
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const UseDownloadAudio = (): IUseDowloadAudio => {
  const [videoUrl, setVideoUrl] = useState('')
  const [isValidUrl, setIsValidUrl] = useState(true)
  const [loading, setLoading] = useState<boolean>(false)
  const [showClearButton, setShowClearButton] = useState<boolean>(false)

  const validateUrl = (url: string): boolean => {
    const regexStandard = /^https:\/\/www\.tiktok\.com\/@[\w.-]+\/video\/\d+$/
    const regexMobile = /^https:\/\/vm\.tiktok\.com\/[\w\d]+\/?$/
    const regex = /^https:\/\/www\.tiktok\.com\/@[\w.-]+\/video\/\d+\?[\w=&-]+$/

    return regexStandard.test(url) || regexMobile.test(url) || regex.test(url)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const url = e.target.value
    setVideoUrl(url)
    const valid = validateUrl(url)
    setIsValidUrl(valid)
    setShowClearButton(valid && url.length > 0)
  }

  const handlePaste = async (): Promise<void> => {
    const text = await navigator.clipboard.readText()

    if (validateUrl(text)) {
      const event = new Event('input', { bubbles: true }) as unknown as React.ChangeEvent<HTMLInputElement>

      Object.defineProperty(event, 'target', {
        writable: false,
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        value: { value: text, type: 'text' } as HTMLInputElement
      })

      handleChange(event)
    } else {
      notifyError('Cole um link válido do TikTok!')
    }
  }

  const handleClear = (): void => {
    setVideoUrl('')
    setIsValidUrl(true)
    setShowClearButton(false)
  }

  const downloadAudio = async (url: string, data: any): Promise<void> => {
    const response = await fetch(url)
    const blob = await response.blob()

    const nameAudio = data?.data.music_info.author.toLowerCase().replace(/\s+/g, '-')
    const fileName = `viddrop-audio-${nameAudio}.mp3`

    const anchor = document.createElement('a')
    anchor.href = URL.createObjectURL(blob)
    anchor.download = fileName
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)

    notifySuccess('Download de áudio concluído!')
    setLoading(false)
    setVideoUrl('')
  }

  const handleDownload = async (): Promise<void> => {
    setLoading(true)

    if (videoUrl === '') {
      notifyError('O campo está vazio!')
      setLoading(false)
      return
    }

    if (!isValidUrl) {
      notifyError('Insira um link válido do TikTok!')
      setLoading(false)
      setVideoUrl('')
      return
    }

    const jwt = process.env.NEXT_JWT_USER_GOLD ?? ''
    const response = await TesteApiTikTok({ videoUrl, jwt })

    if (response?.msg === 'success') {
      const downloadUrl: string = response?.data.music_info.play
      await downloadAudio(downloadUrl, response)
    } else {
      notifyError('Falha ao baixar o audio. Tente novamente mais tarde!')
      setLoading(false)
    }
  }

  return {
    loading,
    videoUrl,
    handleClear,
    handlePaste,
    handleChange,
    handleDownload,
    showClearButton
  }
}

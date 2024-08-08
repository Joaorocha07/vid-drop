'use client'
import React from 'react'

import 'react-toastify/dist/ReactToastify.css'

import {
  Title,
  CustomButton,
  ContainerBox,
  CustomTextField,
  ContentContainer
} from './components/styles'

import { ToastContainer } from 'react-toastify'
import { CircularProgress, IconButton } from '@mui/material'
import { UseDownloadVideo } from '@/hooks/tik-tok/useDownloadVideo'

import ClearIcon from '@mui/icons-material/Clear'
import CardTutorial from './components/CardTutorial'
import ContentPasteIcon from '@mui/icons-material/ContentPaste'

export default function TikTokVideoPage (): JSX.Element {
  const {
    loading,
    videoUrl,
    handleClear,
    handlePaste,
    handleChange,
    handleDownload,
    showClearButton
  } = UseDownloadVideo()

  const handlePasteClick = (): any => {
    void handlePaste()
  }

  return (
    <ContentContainer>
      <ContainerBox>
        <Title>Baixar vídeo tik tok</Title>
        <CustomTextField
          fullWidth
          label="Insira o link do vídeo TikTok"
          variant="outlined"
          value={videoUrl}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <>
                {showClearButton
                  ? (
                  <IconButton
                    edge="end"
                    disabled={loading}
                    onClick={handleClear}
                  >
                    <ClearIcon />
                  </IconButton>
                    )
                  : (
                  <IconButton onClick={handlePasteClick} edge="end">
                    <ContentPasteIcon />
                  </IconButton>
                    )}
              </>
            )
          }}
        />
        <CustomButton
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => {
            handleDownload().catch((err) => {
              console.error(err)
            })
          }}
          disabled={loading}
        >
          {loading
            ? (
                <CircularProgress size={24} />
              )
            : (
                'Baixar'
              )
          }
        </CustomButton>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <CardTutorial text={'Como baixar vídeo do tik tok sem marca d\'água?'} />
      </ContainerBox>
    </ContentContainer>
  )
}

import { styled, Typography } from '@mui/material'

import one from '@/../public/tutorial-imagens/1.png'
import two from '@/../public/tutorial-imagens/2.png'
import three from '@/../public/tutorial-imagens/3.png'
import four from '@/../public/tutorial-imagens/4.png'
import five from '@/../public/tutorial-imagens/5.png'
import six from '@/../public/tutorial-imagens/6.png'

export const TutorialContainer = styled('div')(({ theme }) => ({
  textAlign: 'center'
}))

export const TitleTutorial = styled(Typography)(({ theme }) => ({
  color: '#B90BFC',
  fontWeight: 'bold',
  fontSize: '2.5rem',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.7rem',
    fontWeight: 700
  }
}))

export const TutorialCard = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  margin: '30px 0',
  [theme.breakpoints.down('sm')]: {
    margin: '20px 0'
  }
}))

export const steps = [
  {
    imgBefore: one,
    imgAfter: two,
    text: 'Pesquisar vídeo - abra o vídeo que deseja salvar o audio ou o vídeo no seu dispositivo móvel (Android ou iOS), use o aplicativo TT'
  },
  {
    imgBefore: three,
    imgAfter: four,
    text: 'Copie o link do vídeo - pressione Share (o botão de seta no topo de um vídeo escolhido), em seguida, pressione Cópia'
  },
  {
    imgBefore: five,
    imgAfter: six,
    text: 'TikTok download - volte ao site do vid drop e cole o link no campo de texto da página e clique em Baixar'
  }
]

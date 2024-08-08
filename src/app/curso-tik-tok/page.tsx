'use client'
import React from 'react'

import {
  Box,
  List,
  Grid,
  Paper,
  Divider,
  useTheme,
  ListItem,
  Container,
  Typography,
  ListItemText,
  useMediaQuery
} from '@mui/material'

import { CustomButton } from '@/components/button/CustomButtonPrimary'

export default function CursoTikTok (): JSX.Element {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Container sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        {/* Introdução */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{ fontSize: isMobile ? '2.1rem' : '2.5rem' }}
          >
            Aprenda a ganhar dinheiro com o tik tok!
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            Descubra as estratégias mais eficazes para monetizar seu conteúdo no TikTok e transformar sua paixão em lucro.
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Benefícios do Curso */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Benefícios do curso
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <Typography variant="h6" component="h3">
                  📈 Estratégias Testadas
                </Typography>
                <Typography variant="body2">
                  Aprenda técnicas comprovadas para aumentar seu alcance e engajamento no TikTok.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <Typography variant="h6" component="h3">
                  💡 Dicas Exclusivas
                </Typography>
                <Typography variant="body2">
                  Receba insights e truques que não estão disponíveis em nenhum outro lugar.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <Typography variant="h6" component="h3">
                  🛠️ Ferramentas Úteis
                </Typography>
                <Typography variant="body2">
                  Acesse recursos e ferramentas que facilitarão a criação e promoção do seu conteúdo.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Conteúdo do Curso */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            O que você vai aprender
          </Typography>
          <Typography variant="body1" component="p">
            Nosso curso cobre todos os aspectos essenciais para ter sucesso no TikTok, incluindo:
          </Typography>
          <List>
            <ListItem>
                <ListItemText
                primary="✔️ Como criar conteúdo que se destaca"
                />
            </ListItem>
            <ListItem>
                <ListItemText
                primary="✔️ Estratégias para ganhar seguidores"
                />
            </ListItem>
            <ListItem>
                <ListItemText
                primary="✔️ Monetização e parcerias"
                />
            </ListItem>
            <ListItem>
                <ListItemText
                primary="✔️ Como usar as ferramentas do TikTok a seu favor"
                />
            </ListItem>
            </List>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Depoimentos */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            O que nossos alunos dizem
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <Typography variant="body1">
                  {'"Este curso mudou completamente a forma como vejo o TikTok. As estratégias funcionaram e já estou vendo resultados!" - João S.'}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <Typography variant="body1">
                  {'"Ótimo curso com dicas práticas e fáceis de aplicar. Super recomendado para quem quer ganhar dinheiro com TikTok!" - Maria A.'}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Vídeo de Apresentação */}
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Veja o que espera por você
          </Typography>
          <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/4jUyc4AlthA?si=Np7q3bYySKtWzGnE"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          ></iframe>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Oferta Final */}
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Não perca esta oportunidade!
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            Inscreva-se agora e aproveite um desconto especial de lançamento. Transforme sua presença no TikTok e comece a ganhar dinheiro!
          </Typography>
          <CustomButton variant="contained" color="primary" size="large">
            Inscreva-se Agora
          </CustomButton>
        </Box>
      </Paper>
    </Container>
  )
}

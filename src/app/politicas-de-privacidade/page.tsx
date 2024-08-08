'use client'
import React from 'react'

import {
  Paper,
  Divider,
  useTheme,
  Container,
  Typography,
  useMediaQuery
} from '@mui/material'

export default function PoliticaDePrivacidade (): JSX.Element {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Container sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontSize: isMobile ? '2rem' : '2.5rem'
          }}
        >
          Política de privacidade do Vid Drop
        </Typography>
        <Typography paragraph>
          Esta Política de Privacidade descreve como suas informações
          pessoais são coletadas, usadas e compartilhadas quando você
          visita ou faz uma compra no Vid Drop.
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h5" gutterBottom>
          Informações que Coletamos
        </Typography>
        <Typography paragraph>
          Quando você visita o nosso site, coletamos automaticamente
          certas informações sobre o seu dispositivo, incluindo informações
          sobre o seu navegador, endereço IP, fuso horário, e alguns dos cookies
          que estão instalados no seu dispositivo. Além disso, à medida que você
          navega no site, coletamos informações sobre as páginas individuais da
          web ou produtos que você visualiza, quais sites ou termos de pesquisa
          o encaminharam para o site, e informações sobre como você interage com o site.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Como Usamos as Suas Informações Pessoais
        </Typography>
        <Typography paragraph>
          Usamos as informações que coletamos para melhorar e
          otimizar nosso site (por exemplo, gerando análises
          sobre como nossos clientes navegam e interagem com o
          site, e para avaliar o sucesso de nossas campanhas de
          marketing e publicidade).
        </Typography>

        <Typography variant="h5" gutterBottom>
          Compartilhamento das Suas Informações Pessoais
        </Typography>
        <Typography paragraph>
          Não compartilhamos suas informações pessoais
          com terceiros, exceto conforme descrito nesta
          política de privacidade. Podemos compartilhar
          suas informações pessoais para cumprir leis e
          regulamentos aplicáveis, para responder a uma
          intimação, mandado de busca ou outra solicitação
          legal por informações que recebemos, ou para
          proteger nossos direitos.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Segurança das Informações
        </Typography>
        <Typography paragraph>
          Levamos a segurança das informações muito a
          sério e implementamos medidas de segurança
          para proteger suas informações pessoais.
          No entanto, lembre-se de que nenhuma
          transmissão de dados pela Internet é
          completamente segura.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Alterações
        </Typography>
        <Typography paragraph>
          Podemos atualizar esta política de
          privacidade de tempos em tempos para
          refletir, por exemplo, mudanças em
          nossas práticas ou por outros motivos
          operacionais, legais ou regulamentares.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Entre em Contato
        </Typography>
        <Typography paragraph>
          Para mais informações sobre nossas
          práticas de privacidade, se você
          tiver dúvidas ou se quiser fazer uma
          reclamação, entre em contato conosco
          por e-mail no suporte@viddrop.com.
        </Typography>

        <Divider sx={{ my: 2 }} />
        <Typography variant="body2" color="text.secondary">
          &copy; {new Date().getFullYear()} Vid Drop. Todos os direitos reservados.
        </Typography>
      </Paper>
    </Container>
  )
}

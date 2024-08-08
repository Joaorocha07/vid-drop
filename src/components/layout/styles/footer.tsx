import { styled } from '@mui/material'

import InstagramIcon from '@mui/icons-material/Instagram'

export const FooterContainer = styled('footer')(({ theme }) => ({
  backgroundColor: 'black',
  color: '#fff',
  padding: theme.spacing(4, 0),
  textAlign: 'center',
  width: '100%',
  marginTop: 'auto'
}))

export const LogoInstagram = styled(InstagramIcon)(({ theme }) => ({
  color: '#fff',
  fontSize: 36,
  marginRight: theme.spacing(1),
  verticalAlign: 'middle'
}))

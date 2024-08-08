import {
  Box,
  Button,
  styled,
  TextField,
  Typography
} from '@mui/material'

export const ContentContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    minHeight: 'auto'
  },
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}))

export const ContainerBox = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '1070px',
  padding: theme.spacing(2),
  mb: theme.spacing(4)
}))

export const Title = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(2),
    fontSize: '2.0rem',
    fontWeight: 700
  },
  fontSize: '2.5rem',
  fontWeight: 800,
  marginBottom: theme.spacing(4),
  textAlign: 'center'
}))

export const CustomTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(1)
}))

export const CustomButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1.5),
  backgroundImage: 'linear-gradient(to right, #b36fff, #6b2c91)',
  color: '#FFFFFF',
  '&:hover': {
    backgroundImage: 'linear-gradient(to right, #d4a1ff, #8c5bca)'
  },
  '&.Mui-disabled': {
    backgroundImage: 'none',
    backgroundColor: '#ccc',
    color: '#888'
  }
}))

export const Image = styled('img')(({ theme }) => ({
  display: 'flex',
  maxWidth: '100%',
  justifyContent: 'center',
  height: 'auto',
  margin: '0 auto',
  alignSelf: 'center',
  objectFit: 'contain'
}))

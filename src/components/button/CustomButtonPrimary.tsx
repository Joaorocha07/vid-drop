import { Button, styled } from '@mui/material'

export const CustomButton = styled(Button)(({ theme }) => ({
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

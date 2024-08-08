import { Select, styled } from '@mui/material'

export const CustomSelect = styled(Select)<{ value: string }>(({ theme }) => ({
  color: 'white',
  backgroundColor: 'transparent',
  '& .MuiSelect-icon': {
    color: 'white'
  },
  '& .MuiSelect-select': {
    paddingRight: '30px'
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  },
  '&:hover .MuiSelect-icon': {
    display: 'none'
  }
}))

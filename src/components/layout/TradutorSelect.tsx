import React from 'react'

import {
  Box,
  MenuItem,
  FormControl,
  type SelectChangeEvent
} from '@mui/material'

import { CustomSelect } from './styles/TradutorSelect'
import { useTranslation } from 'react-i18next'

export default function TradutorSelect (): JSX.Element {
  const { i18n } = useTranslation()

  const handleLanguageChange = (event: SelectChangeEvent<string>): void => {
    void i18n.changeLanguage(event.target.value)
  }

  return (
    <Box>
        <FormControl sx={{ minWidth: 120, backgroundColor: 'transparent' }}>
          <CustomSelect
            value={i18n.language}
            onChange={() => handleLanguageChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Selecione o idioma' }}
          >
            <MenuItem value="pt">Português (Brasil)</MenuItem>
            <MenuItem value="en">Inglês</MenuItem>
            <MenuItem value="es">Espanhol</MenuItem>
          </CustomSelect>
        </FormControl>
    </Box>
  )
}

import { TextField } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';

import React from 'react'


const TextBoxWithIcon = ({icon, color}) => {
  return (
    <TextField
        id="input-with-icon-textfield"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {icon}
            </InputAdornment>
          ),
        }}
        variant="outlined"
        color = {color}
      />
  )
}

export default TextBoxWithIcon
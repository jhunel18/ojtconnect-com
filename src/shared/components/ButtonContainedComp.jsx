import React from 'react'
import { Button } from '@mui/material'

const ButtonContainedComp = ({label, click, size}) => {
  
  return (<>
      <Button variant="contained" onClick={click} size={size}
        sx={{
          color: '#ffff',
          background: '#F26822',
          fontWeight: 'bold',
          border: '2px solid #F26822',
          "&:hover": {
            background: '#ffff',
            color: '#F26822',
            border: '2px solid #F26822'
          }
        }}
      >{label}</Button> 
    </>)
}

export default ButtonContainedComp

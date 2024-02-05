import React from 'react'
import { Button } from '@mui/material'

const ButtonContainedComp = ({label, click, size, padding, width, borderRadius}) => {
  
  return (<>
      <Button variant="contained" onClick={click} size={size}
        sx={{
          color: '#ffff',
          background: '#F26822',
          fontWeight: 'bold',
          padding:{padding},
          border: '2px solid #F26822',
          width: width,
          borderRadius:{borderRadius},
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

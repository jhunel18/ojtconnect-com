import React from 'react'
import { IconButton } from '@mui/material';

const ButtonIconComp = ({logo, size, color, click}) => {
    const style = {
        borderRadius: "20px",
        border: "0.2px solid #BBB",
        background: "#FFF",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        margin: "5px"
    }
  return (
    <>
        <IconButton sx={style} size={size} color={color} onClick={click}>
            {logo}
        </IconButton>
    </>
  )
}

export default ButtonIconComp

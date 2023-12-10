import React from 'react'
import TextField from '@mui/material/TextField'


const TextBoxFullWidthComp = ({id, label, type}) => {
const style = {
    borderRadius: "8px",
    background: "#E7E8E9",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    margin: "5px",
    "& fieldset": { border: 'none' }
}
  return (
    <>
      <TextField id={id} placeholder={label} variant="outlined" sx={style} type={type} fullWidth />
    </>
  )
}

export default TextBoxFullWidthComp

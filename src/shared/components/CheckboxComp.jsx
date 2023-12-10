import React from 'react'
import CheckBox  from '@mui/icons-material/CheckBox'
import { orange } from '@mui/material/colors'

const CheckboxComp = () => {
    const label = { inputprops: { 'aria-label': 'Checkbox demo' } }
    const style = {
        color: orange[800],
        '&.Mui-checked': {
            color: orange[600]
        }
    }
    return (
    <>
        <CheckBox {...label} defaultChecked sx={style} />
    </>
    )
}

export default CheckboxComp

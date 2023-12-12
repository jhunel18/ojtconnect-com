import React, { useState } from 'react'
import CheckBox  from '@mui/icons-material/CheckBox'
import { orange } from '@mui/material/colors'

const CheckboxComp = () => {
    const [is_checked, set_is_checked] = useState(true)
    const handleChecked = (event) => {
        set_is_checked(event.target.checked)
    }

    const style = {
        color: orange[800],
        '&.Mui-checked': {
            color: orange[600]
        }
    }
    return (
    <>
        <CheckBox checked={is_checked} onChange={handleChecked} defaultChecked sx={style} />
    </>
    )
}

export default CheckboxComp

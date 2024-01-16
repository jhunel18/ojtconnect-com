import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import bg from '../assets/landingBackground1.png'
import logo from '../assets/Logo.png'
const LandingPage = () => {
  return (<>
        <Box
            sx={{
                background: `url(${bg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
                height: '1806px',
                margin: 0
            }}
        />
    </>)
}

export default LandingPage

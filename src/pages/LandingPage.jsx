import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import bg from '../assets/landingBackground1.png'
import logo from '../assets/Logo.png'
import title from '../assets/title.png'
import './LandingPage.css'
const LandingPage = () => {
  return (<>
        <Box
            sx={{
                background: `url(${bg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
                height: '1080px',
                margin: 0,
                padding: '8em 12em'
            }}
        >
            <div style={{display: 'flex', justifyContent: 'space-between' }}>
                <div style={{display: 'flex'}}>
                    <img src={logo} alt="logo" style={{width: '55px', height: '55px'}} />
                    <img src={title} alt="title" style={{margin: 'auto 20px', width: 'auto', height: '13px'}} />
                </div>
                
                <ul style={{listStyleType: 'none', margin: '0', padding: '0', float: 'right'}}>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>DISCOVER</li>
                    <li>CONTACT US</li>
                </ul>
            </div>
            
        </Box>
    </>)
}

export default LandingPage

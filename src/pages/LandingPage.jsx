import React from 'react'
import { Box, Typography, Button, Grid, Container } from '@mui/material'
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
            backgroundSize: 'cover',
            height: '70vh',
            padding: '7em',
        }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={2} alignItems="center">
                    <Grid item lg={5} md={7} xs={12}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={logo} alt="logo" style={{ width: '55px', height: '55px' }} />
                            <img src={title} alt="title" style={{ margin: 'auto 20px', width: 'auto', height: '13px' }} />
                        </div>
                        </div>
                    </Grid>
                    <Grid item lg={7} md={7} xs={12}>
                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
                            <ul className='inter-font' style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                            <li style={{ margin: '0 10px', fontWeight: '600' }}>HOME</li>
                            <li style={{ margin: '0 10px', fontWeight: '600' }}>ABOUT</li>
                            <li style={{ margin: '0 10px', fontWeight: '600' }}>DISCOVER</li>
                            <li style={{ margin: '0 10px', fontWeight: '600' }}>CONTACT US</li>
                            </ul>
                        </div>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ marginTop: '9em' }}>
                    <Grid item lg={7} md={12}>
                        <h1 className='league-spartan-font' style={{ fontSize: 'clamp(36px, 10vw, 55px)', fontWeight: '800', margin: 'auto 30px', color: '#F26822', letterSpacing: '5px' }}>
                            Get Started Your Learning & <br /> Enrich Your Future
                        </h1>
                    </Grid>
                    <Grid item lg={7} md={12}>
                        <p className='inter-font' style={{ marginLeft: '30px' }}>
                            Est Quis ipsam aut fuga magnam aut accusantium molestias est quam quidem et deleniti maiores et vitae dolore. Ex explicabo suscipit aut asperiores saepe qui vero odio sed suscipit autem a repellendus praesentium?
                        </p>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ marginTop: '3em', alignItems: 'center' }}>
                    <Grid item lg={12} md={12} sx={{ textAlign: 'right' }}>
                        <button style={{ backgroundColor: '#F26822', color: '#fff', borderRadius: '30px', border: '0', padding: '10px 30px', fontSize: '1.5rem', fontWeight: '600', width: '18%', boxShadow: '-5px 5px 10px #8b8b8b, 5px -5px 10px #ffffff', marginLeft: 'auto' }}>
                        SIGN UP
                        </button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </>)
}

export default LandingPage

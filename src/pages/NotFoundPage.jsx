import React from 'react'

import MainLayout from '../layouts/MainLayout'

import notfound from '../assets/spiltcoffee.png';

import { Box, Grid } from '@mui/material'

const NotFoundPage = () => {
  return (
    <MainLayout>
      <Grid container sx={{
          height: '100vh',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          margin: '50px 20px'
        }}>
        <Grid item lg={10}>
          <Box sx={{
            width: '100%',
            height: '80vh',
            background: '#fff',
            borderRadius: '15px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <img src={notfound} alt='not found' style={{
              objectFit: 'cover',
              width: '650px',
              height: '560px'
            }} />
          </Box>
        </Grid>
      </Grid>
    </MainLayout>
  )
}

export default NotFoundPage
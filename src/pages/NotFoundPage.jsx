import React from 'react'

import { Link } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout'

import Button from '../shared/components/ButtonContainedComp';

import notfound from '../assets/spiltcoffee.png';

import { Box, Grid, Typography } from '@mui/material'

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
            backgroundColor: '#fff',
            backgroundImage: `url(${notfound})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            borderRadius: '15px',
          }}>
            <Grid container>
              <Grid item lg={4}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingTop: '40%',
                  gap: '20px'
                }}>
                  <Typography variant='h5'>Oops...</Typography>
                  <Typography variant='subtitle1'>This page can't be found.</Typography>
                  <Link to='/'><Button label='Return Home' /></Link>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </MainLayout>
  )
}

export default NotFoundPage
import React from 'react'
import ButtonContainedComp from '../shared/components/ButtonContainedComp'
import { Typography, Box } from '@mui/material'
const LoginComp = () => {
  return (<>
    <Typography variant='h5' fontWeight={'bold'} mt={"35px"}>
      Welcome to <span style={{color: '#F26822'}}>OJT Connect</span>
    </Typography>
    <Typography variant='body2' fontWeight={'bolder'} mt={0}>
      Let's Get Started! <span style={{textDecoration: 'underline'}}>Signup here.</span>
    </Typography>

    <Box display={'flex'} alignItems={'center'} justifyContent={'space-around'} m={'50px 0 60px 0'}>
      <Box flex={1}>
        <ButtonContainedComp label={"Login"}/>
      </Box>
      <ButtonContainedComp label={"Forgot Password"}/>
    </Box>
    
    <hr />
      
    <Typography variant='body2' mt={0} textAlign={'center'}>
      Or login with
    </Typography>
    </>)
}

export default LoginComp

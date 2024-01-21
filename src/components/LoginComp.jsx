import React from 'react'
import ButtonContainedComp from '../shared/components/ButtonContainedComp'
import { Typography, Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import SignupStudentComp from './SignupComp'
import TextBoxFullWidthComp from '../shared/components/TextBoxFullWidthComp'

import { useNavigate } from 'react-router-dom'

const LoginComp = ({ setShowLogin }) => {
  const navigate = useNavigate()
  const handleSetShowLogin = () => {
    setShowLogin(false)
    navigate("/signup")
  }
  return (<>
    <Typography variant='h5' fontWeight={'bold'} mt={"35px"}>
      Welcome to <span style={{color: '#F26822'}}>OJT Connect</span>
    </Typography>
    <Typography variant='body2' fontWeight={'bolder'} mt={0} mb={3}>
      Let's Get Started! <span style={{textDecoration: 'underline', cursor: 'pointer'}} onClick={handleSetShowLogin}>Signup here.</span>
    </Typography>
    <Box>
      <form onSubmit={() => console.log("test")}>
        <TextBoxFullWidthComp id={"username"} label={"Username"} size={'small'} margin={"15px 0px"}/>
        <TextBoxFullWidthComp id={"password"} label={"Password"} size={'small'} type={'password'} margin={"15px 0px"}/>
      </form>
    </Box>
    <Box sx={{flexGrow: 1}} m={'50px 0 60px 0'}>
      <Grid container spacing={3} sx={{alignItems: 'stretch'}}>
        <Grid xs={12} sm={12} md={12} lg={6}>
          <ButtonContainedComp label={"Login"} width={"100%"}/>
        </Grid>
        <Grid xs={12} sm={12} md={12} lg={6}>
          <ButtonContainedComp label={"Forgot Password"} width={"100%"}/>
        </Grid>
      </Grid>
    </Box>
    </>)
}

export default LoginComp

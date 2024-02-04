import React from 'react'
import ButtonContainedComp from '../shared/components/ButtonContainedComp'
import { Typography, Box, Link } from '@mui/material'
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
      Let's Get Started! <span style={{textDecoration: 'underline', color:'#F26822', cursor: 'pointer'}} onClick={handleSetShowLogin}>Signup here.</span>
    </Typography>
    <Box>
      <form onSubmit={() => console.log("test")}>
        <TextBoxFullWidthComp id={"username"} label={"Username"} size={'small'} margin={"15px 0px"}/>
        <TextBoxFullWidthComp id={"password"} label={"Password"} size={'small'} type={'password'} margin={"15px 0px"}/>
      </form>
    </Box>
    <Link
      component={"button"}
      variant={"body2"}
      onClick={() => {
        console.info("I'm a button.");
      }}
      underline='none'
      sx={{
        color: '#F26822',
        fontWeight: '600',
        fontSize: '14px'
      }}
    >
      Forgot Password?
    </Link>
    <Box sx={{flexGrow: 1}} m={'20px 0 60px 0'}>
      <ButtonContainedComp label={"Login"} width={"100%"}/>
    </Box>
    </>)
}

export default LoginComp

import React from 'react'
import ButtonContainedComp from '../shared/components/ButtonContainedComp'
import { Typography, Box } from '@mui/material'
import SignupStudentComp from './SignupComp'
import TextBoxFullWidthComp from '../shared/components/TextBoxFullWidthComp'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ButtonIconComp from '../shared/components/ButtonIconComp'
const LoginComp = ({ setShowLogin }) => {
  const handleSetShowLogin = () => {
    setShowLogin(false)
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
    <Box display={'flex'} alignItems={'center'} justifyContent={'space-evenly'} mt={'20px'}>
      <ButtonIconComp logo={<FacebookOutlinedIcon />} size={"large"} color={'primary'}/>
      <ButtonIconComp logo={<GoogleIcon />} size={"large"} color={'primary'}/>
      <ButtonIconComp logo={<LinkedInIcon />} size={"large"} color={'primary'}/>
    </Box>
    
    </>)
}

export default LoginComp

import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ButtonIconComp from '../shared/components/ButtonIconComp'
import { Box, Typography } from '@mui/material';
import TextBoxFullWidthComp from '../shared/components/TextBoxFullWidthComp'
import CheckboxComp from '../shared/components/CheckboxComp';
import ButtonContainedComp from '../shared/components/ButtonContainedComp';
import { useNavigate } from 'react-router-dom';
const StudentSignupComp = ({setShowLogin}) => {
  const navigate = useNavigate()
  const handleSetShowLogin = () => {
    setShowLogin(true)
    navigate("/login")
  }
  return (
   <>
     <Typography variant='h5' fontWeight={'bold'} mt={"25px"}>
      Welcome to <span style={{color: '#F26822'}}>OJT Connect</span>
    </Typography>
    <Typography variant='body2' fontWeight={'bolder'} mt={0} mb={2}>
      Let's Get Started! <span style={{textDecoration: 'underline', cursor: 'pointer'}} onClick={handleSetShowLogin}>Login here.</span>
    </Typography>
    <Box>
        <form onSubmit={() => console.log("test")}>
          <TextBoxFullWidthComp id={"firstName"} label={"First Name"} size={'small'} margin={"10px 0px"} />
          <TextBoxFullWidthComp id={"lastName"} label={"Last Name"} size={'small'} margin={"10px 0px"} />
          <TextBoxFullWidthComp type={"email"} id={"email"} label={"Email Address"} size={'small'} margin={"10px 0px"} />
          <TextBoxFullWidthComp type={"password"} id={"password"} label={"Password"} size={'small'} margin={"10px 0px"} />
          <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'}>
            <Box sx={{flex: 1, mr: 3}}>
              <TextBoxFullWidthComp type={"password"} id={"code"} label={"Verification Code"} size={'small'} margin={"10px 0px"}/>
            </Box>
            <ButtonContainedComp label={"Send To Email"} size={'small'}/>
          </Box>
        </form>
    </Box>
    <Box display={'flex'} justifyContent={'center'} m={'5px 0 10px 0'} alignItems={'center'}>
        <CheckboxComp />
        <Typography variant='body2'>
          I have read the terms and condition.
        </Typography>
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
   </>
  )
}

export default StudentSignupComp
import React from 'react'
import { Box, Typography } from '@mui/material';
import TextBoxFullWidthComp from '../shared/components/TextBoxFullWidthComp'
import CheckboxComp from '../shared/components/CheckboxComp';
import ButtonContainedComp from '../shared/components/ButtonContainedComp';
import { useNavigate } from 'react-router-dom';


const UniversitySignupComp = ({setShowLogin}) => {

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
      <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
          <form onSubmit={() => console.log("test")}>
            <TextBoxFullWidthComp id={"firstname"} label={"First Name"} size={'small'} margin={"10px 0px"} />
            <TextBoxFullWidthComp id={"lastname"} label={"Last Name"} size={'small'} margin={"10px 0px"} />
            <TextBoxFullWidthComp type={"email"} id={"email"} label={"Email Address"} size={'small'} margin={"10px 0px"} />
            <TextBoxFullWidthComp type={"password"} id={"password"} label={"Password"} size={'small'} margin={"10px 0px"} />
            <TextBoxFullWidthComp id={"confirmPassword"} label={"Confirm Password"} size={'small'} margin={"10px 0px"} />
          </form>
          <Box display={'flex'} justifyContent={'center'} m={'5px 0 10px 0'} alignItems={'center'}>
              <CheckboxComp />
              <Typography variant='body2'>
                I have read the terms and condition.
              </Typography>
          </Box>
          <ButtonContainedComp label={"submit"} size={'small'} padding={'4px 70px'}/>
      </Box>
  </>
  )
}

export default UniversitySignupComp
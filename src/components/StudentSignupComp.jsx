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
     <Typography variant='h5' fontWeight={'bold'} mt={"20px"}>
      Welcome to <span style={{color: '#F26822'}}>OJT Connect</span>
    </Typography>
    <Typography variant='body2' fontWeight={'bolder'} mt={0} mb={2}>
      Let's Get Started! <span style={{textDecoration: 'underline', cursor: 'pointer'}} onClick={handleSetShowLogin}>Login here.</span>
    </Typography>
    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <form onSubmit={() => console.log("test")}>
          <TextBoxFullWidthComp id={"firstName"} label={"First Name"} size={'small'} margin={"10px 0px"} />
          <TextBoxFullWidthComp id={"lastName"} label={"Last Name"} size={'small'} margin={"10px 0px"} />
          <TextBoxFullWidthComp type={"email"} id={"email"} label={"Email Address"} size={'small'} margin={"10px 0px"} />
          <TextBoxFullWidthComp type={"password"} id={"password"} label={"Password"} size={'small'} margin={"10px 0px"} />
          <TextBoxFullWidthComp  id={"confirmPassword"} label={"Confirm Password"} size={'small'} margin={"10px 0px"} />
          <TextBoxFullWidthComp  id={"id_number"} label={"ID Number"} size={'small'} margin={"10px 0px"} />
          <TextBoxFullWidthComp  id={"upload_id"} label={"Upload ID"} size={'small'} margin={"10px 0px"} />
        
        </form>
        <Box display={'flex'} justifyContent={'center'} m={'5px 0 10px 0'} alignItems={'center'}>
          <CheckboxComp />
          <Typography variant='body2'>
            I have read the terms and condition.
          </Typography>
       </Box>
        <ButtonContainedComp label={"Submit"} size={'small'} padding={'4px 70px'}/>
    </Box>
   
   </>
  )
}

export default StudentSignupComp
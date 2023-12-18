import React, { useState } from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Box, Typography } from '@mui/material';
import TextBoxFullWidthComp from '../shared/components/TextBoxFullWidthComp'
import { styled } from '@mui/material/styles';
import ButtonContainedComp from '../shared/components/ButtonContainedComp'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ButtonIconComp from '../shared/components/ButtonIconComp'
import Paper from '@mui/material/Paper';
import CheckboxComp from '../shared/components/CheckboxComp';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(0.5),
    border: 0,
    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

const SignupComp = ({ setShowLogin }) => {
  const [alignment, setAlignment] = useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  
  const handleSetShowLogin = () => {
    setShowLogin(true)
  }
  return (<>
    <Paper
      elevation={0}
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        // padding: '5px 12px',
        borderRadius: "79px",
        background: "#ffffff",
        boxShadow: "inset 5px 5px 4px #F2682280, inset -5px -5px 10px #F2682280",
      }}
    >
      <StyledToggleButtonGroup
        size="small"
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="left" aria-label="left aligned" sx={{
          padding: '5px',
          margin: '0px'
        }}>
          <Typography variant='button' color={"#F26822"} fontWeight={'bold'}>Student</Typography>
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered" sx={{
          padding: '5px',
          margin: '0px'
        }}>
          <Typography variant='button' color={"#F26822"} fontWeight={'bold'}>University</Typography>
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned" sx={{
          padding: '5px',
          margin: '0px'
        }}>
          <Typography variant='button' color={"#F26822"} fontWeight={'bold'}>Company</Typography>
      </ToggleButton>
      </StyledToggleButtonGroup>
    </Paper>
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
  </>)
}

export default SignupComp

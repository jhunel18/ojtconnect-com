import React, { useState } from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {StudentSignupComp,
       UniversitySignupComp,
       CompanySignupComp} from '../components/index';
import SignupToggle from './SignupToggle';


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

const SignupComp = () => {
  const [alignment, setAlignment] = useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const [activeToggle, setActiveToggle] = useState('student');
  const [showStudent, setShowStudent] = useState(true);
  const [showUniversity, setShowUniversity] = useState(false);
  const [showCompany, setShowCompany] = useState(false);

  const handleToggle = (toggle) => {
    setShowStudent(false);
    setShowUniversity(false);
    setShowCompany(false);
    setActiveToggle(toggle);

    if (toggle === 'student') setShowStudent(true);
    else if (toggle === 'university') setShowUniversity(true);
    else if (toggle === 'company') setShowCompany(true);
  };

  

  return (<>
    <Paper
      elevation={0}
      sx={{
        display: 'flex',
        border: (theme) => `1px solid ${theme.palette.divider}`,
        flexWrap: 'wrap',
        padding: '5px 12px',
        borderRadius: "37px",
        background: "#ffffff",
        boxShadow:'inset 1px 1px 2px #F26822, inset 0px 0px 4px #F26822',
        width: '100%',
        height: '20px'
      }}
    >
      <StyledToggleButtonGroup
        size="small"
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
        sx={{
          display:'flex', 
          width:'100%',
          justifyContent:'space-around',
           marginTop:'-1px'
          }}
      >

       <SignupToggle handleToggle={handleToggle} activeToggle={activeToggle}/>
      
      </StyledToggleButtonGroup>
    </Paper>
   <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
      {showStudent && <StudentSignupComp/>}
      {showUniversity && <UniversitySignupComp/>}
      {showCompany && <CompanySignupComp/>}
   </div>
  </>)
}

export default SignupComp

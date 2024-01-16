import React, { useState, useEffect } from 'react'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import SignupToggle from './SignupToggle';
import StudentSignupComp from './StudentSignupComp';
import UniversitySignupComp from './UniversitySignupComp';
import CompanySignupComp from './CompanySignupComp'
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

const SignupComp = ({ setShowLogin, activeToggle, is_ShowStudent, is_ShowUniversity, is_ShowCompany, handleToggle }) => {
  const [alignment, setAlignment] = useState('left');
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  useEffect(() => {
    // This useEffect will run whenever activeToggle changes.
    handleToggle(activeToggle);
}, [activeToggle, handleToggle]);
  
  return (<>
    <Paper
      elevation={0}
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        padding: '3px 0px',
        borderRadius: "79px",
        background: "#ffffff",
        boxShadow: "inset 1px 3px 15px #F2682280, inset 2px 1px 1px #F2682280",
        width: '100%',
        height: '40px'
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
           marginTop:'-1px',
           padding:'4px',
          }}
      >
        <SignupToggle handleToggle={handleToggle} activeToggle={activeToggle}/>
      </StyledToggleButtonGroup>
    </Paper>
    
      {is_ShowStudent && <StudentSignupComp setShowLogin={setShowLogin}/>}
      {is_ShowUniversity && <UniversitySignupComp setShowLogin={setShowLogin}/>}
      {is_ShowCompany && <CompanySignupComp setShowLogin={setShowLogin}/>}
  </>)
}

export default SignupComp

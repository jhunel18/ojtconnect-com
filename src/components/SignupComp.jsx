import React, { useState } from 'react'
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

const SignupComp = ({ setShowLogin }) => {
  const [alignment, setAlignment] = useState('left');

  const [activeToggle, setActiveToggle] = useState('student');
  const [is_ShowStudent, setShowStudent] = useState(true);
  const [is_ShowUniversity, setShowUniversity] = useState(false);
  const [is_ShowCompany, setShowCompany] = useState(false);

  const handleToggle = (toggle) => {
    setShowStudent(false);
    setShowUniversity(false);
    setShowCompany(false);
    setActiveToggle(toggle);

    if (toggle === 'student') setShowStudent(true);
    else if (toggle === 'university') setShowUniversity(true);
    else if (toggle === 'company') setShowCompany(true);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  
  return (<>
    <Paper
      elevation={0}
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        padding: '5px 12px',
        borderRadius: "79px",
        background: "#ffffff",
        boxShadow: "inset 5px 5px 4px #F2682280, inset -5px -5px 10px #F2682280",
        width: '100%',
        height: '43px'
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
           padding:'5px'
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

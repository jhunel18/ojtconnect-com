import React, { useState } from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Box, Typography } from '@mui/material';

import { styled } from '@mui/material/styles';


import Paper from '@mui/material/Paper';

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
        boxShadow: "inset 5px 5px 12px #d3d3d3, inset -5px -5px 12px #ededed",
        width: '200px',
        height: '20px'
      }}
    >
      <StyledToggleButtonGroup
        size="small"
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        {/*<ToggleButton value="left" aria-label="left aligned" sx={{
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
      </ToggleButton>*/}
      </StyledToggleButtonGroup>
    </Paper>
  </>)
}

export default SignupComp

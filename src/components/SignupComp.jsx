import React, { useState } from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Box, Typography } from '@mui/material';

const SignupComp = () => {
  const [alignment, setAlignment] = useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  
  return (<>
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="centered">
        <Box>
          <Typography variant='button' color={"#F26822"} fontWeight={'bold'}>Student</Typography>
        </Box>
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        <Box>
          <Typography variant='button' color={"#F26822"} fontWeight={'bold'}>University</Typography>
        </Box>
      </ToggleButton>
      <ToggleButton value="right" aria-label="centered">
        <Box>
          <Typography variant='button' color={"#F26822"} fontWeight={'bold'}>Company</Typography>
        </Box>
      </ToggleButton>
    </ToggleButtonGroup>
  </>)
}

export default SignupComp

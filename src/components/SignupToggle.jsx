/* eslint-disable react/prop-types */
import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import {Typography } from '@mui/material';

const SignupToggle = ({handleToggle, activeToggle}) => {
    const toggle_button = [
        {
            label:'Student',
            toggle:'student'
        },
        {
            label:'University',
            toggle:'university'
        },
        {
            label:'Company',
            toggle:'company'
        }
    ]
  return (
  <>
  {toggle_button.map((tb, index) => (
    <React.Fragment key={index}>
         <ToggleButton value="left" aria-label="left aligned" sx={{
            padding: '5px 15px',
            margin: '0px',
            backgroundColor: activeToggle === tb.toggle ? '#F26822' : 'trasparent',
            borderRadius:'90px',
            border:'0px solid white',
            }} onClick={() => handleToggle(tb.toggle)}>
            <Typography variant='button' color={"#F26822"} fontWeight={'bold'}
            sx={{
                color: activeToggle === tb.toggle ? 'white': '#F26822',
                fontSize:'12px'
            }}
            >{tb.label}</Typography>
        </ToggleButton>
    </React.Fragment>
  ))}
  </>
  )
}

export default SignupToggle
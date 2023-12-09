import React from 'react'
import { Box } from '@mui/material'
import bg from "../assets/login.png"
const HomePage = () => {
  return (<>
        <Box display={'flex'} p={"5% 20%"} sx={{background: "linear-gradient(146deg, rgba(255,151,85,1) 0%, rgba(255,255,255,1) 54%, rgba(254,179,139,1) 100%)"}}>
            <img src={bg} width={"50%"}/>
            <Box sx={{
                borderRadius: '0 20px 20px 0',
                background: '#ffff'
            }}>
                Test
            </Box>
        </Box>
    </>)
}

export default HomePage

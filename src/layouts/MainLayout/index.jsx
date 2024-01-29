import React from 'react';
import { Box } from '@mui/material';

// Images
import bg from '../../assets/MAINBGbg.png';

const MainLayout = ({children}) => {
  return (<>
      <Box sx={{
            display:'flex', 
            height:'100vh',
            width:'100%',  
            alignItems:'center',
            justifyContent:'center',
            backgroundImage: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            {children}
        </Box>
    </>)
}

export default MainLayout

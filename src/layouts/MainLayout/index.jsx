import React from 'react';
import { Box } from '@mui/material';

// Images
import bg from '../../assets/MAINBGbg.png';

const MainLayout = ({children}) => {
  return (<>
      <Box sx={{
            display:'flex', 
            minheight:'100vh',
            width:'100%',  
            alignItems:'center',
            justifyContent:'center',
            backgroundImage: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed'
        }}>
            {children}
        </Box>
    </>)
}

export default MainLayout

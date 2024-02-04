import React from 'react';
import { Box } from '@mui/material';

import SignedInNavigation from '../../shared/components/SignedInNavigation';

// Images
import bg from '../../assets/MAINBGbg.png';

const MainLayout = ({children}) => {
  return (<>
  <SignedInNavigation />
      <Box sx={{
            display:'flex', 
            width:'100%',  
            alignItems:'center',
            justifyContent:'center',
            backgroundImage: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'fixed',
            overflow: 'scroll',
            zIndex: '-999'
        }}>
            {children}
        </Box>
    </>)
}

export default MainLayout

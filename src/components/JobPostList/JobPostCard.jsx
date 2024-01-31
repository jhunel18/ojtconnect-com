import { Box, Typography } from '@mui/material';
import React from 'react';

const JobPostCard = () => {
    return (
        <Box sx={{
            backgroundColor: '#FDFBFA',
            width: '100%',
            height: 'auto',
            borderRadius: '15px',
            boxShadow: '3px 2px 10px rgba(0, 0, 0, 0.25)',
            padding: '25px'
        }}>
            <Typography variant='h6' sx={{ fontSize: '18px', fontWeight: '600' }}>Position Placeholder</Typography>
            <Typography variant='subtitle1'>Company Name Placeholder</Typography>
            <Typography variant='subtitle2'>Company Address Placeholder</Typography>
        </Box>
    )
}

export default JobPostCard

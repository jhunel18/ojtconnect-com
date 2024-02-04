import React from 'react'
import { Box, Typography } from '@mui/material'

const JobPostDetails = () => {
    return (
        <Box sx={{
            backgroundColor: '#FDFBFA',
            width: 'auto',
            height: 'auto',
            borderRadius: '15px',
            boxShadow: '3px 2px 10px rgba(0, 0, 0, 0.25)',
            padding: '30px 0',
            margin: '10px'
        }}>
            <Box style={{
                height: 'auto',
                borderTop: '1px solid  #D5D4DF',
                borderBottom: '1px solid  #D5D4DF',
                padding: '20px'
            }}>
                <Typography variant='h6' sx={{ fontSize: '18px', fontWeight: '600' }}>Position Placeholder</Typography>
                <Typography variant='subtitle1'>Company Name Placeholder</Typography>
                <Typography variant='subtitle2' sx={{ fontWeight: '100' }}>Company Address Placeholder</Typography>
            </Box>
            <Box style={{
                height: 'auto',
                borderTop: '1px solid  #D5D4DF',
                borderBottom: '1px solid  #D5D4DF',
                padding: '20px'
            }}>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
                <p>Test</p>
            </Box>
        </Box>
    )
}

export default JobPostDetails

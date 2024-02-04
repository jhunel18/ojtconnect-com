import { Box, Typography } from '@mui/material';
import React from 'react';

const JobPostCard = () => {

    const style = ({
        card: {
            backgroundColor: '#FDFBFA',
            width: 'auto',
            height: 'auto',
            borderRadius: '15px',
            boxShadow: '3px 2px 10px rgba(0, 0, 0, 0.25)',
            padding: '10px 5px',
            margin: '10px',
            borderLeft: '15px solid transparent',
            '&:hover': {
                borderLeft: '15px solid #FFDDC3',
            }
        }
    })

    return (
        <Box sx={style.card}>
            <div style={{
                padding: '15px',
                borderBottom: '1px solid #D5D4DF'
            }}>
                <Typography variant='h6' sx={{ fontSize: '18px', fontWeight: '600' }}>Position Placeholder</Typography>
                <Typography variant='subtitle1'>Company Name Placeholder</Typography>
                <Typography variant='subtitle2' sx={{ fontWeight: '100' }}>Company Address Placeholder</Typography>
            </div>
            <div style={{ padding: '10px' }}>
                <ul className='inter-font' style={{ fontWeight: '100', fontSize: '13px' }}>
                    <li>Lorem ipsum shut</li>
                    <li>Lorem ipsum shut</li>
                    <li>Lorem ipsum shut</li>
                    <li>Lorem ipsum shut</li>
                    <li>Lorem ipsum shut</li>
                </ul>
            </div>
        </Box>
    )
}

export default JobPostCard

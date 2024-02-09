import { Box, Paper, Typography, Divider, IconButton } from '@mui/material'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import React, { useState } from 'react'

const StudentListComp = ({student = {
    name: 'Maria Luisa Nhicole Dela Cruz',
    course: 'BSIT',
    university: 'PUP Unisan Branch',

}}) => {
    const [show, setShow] = useState(false)
    return (<>
        <Paper
            sx={{
                background: '#FDFBFA',
                p: '4%',
                borderRadius: '20px',
                position: 'relative',
                width: 'auto',
                height: 'auto',
                mr: '10px'
                // '&:hover':{
                //     borderLeft: '30px solid #FFDDC3'
                // }
            }}
            elevation={7}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            <Box
                sx={{
                    background: '#FFDDC3',
                    height: '100%',
                    width: '4%',
                    left: 0,
                    position: 'absolute',
                    top: 0,
                    borderRadius: '20px 0 0 20px',
                    display: show ? undefined : 'none',
                }}
            >
            
            </Box>
            <Box 
                display={'flex'}
                justifyContent={'flex-start'}
                alignItems={'center'}
                mb={'10px'}
                p={"0 20px"}
            >
                <Typography variant='h6'
                    sx={{
                        fontWeight: 'bolder',
                        mr: '20px'
                    }}
                >
                    {student.name}
                </Typography>
                <Box>
                </Box>
                <IconButton>
                    <EmailOutlinedIcon sx={{fontSize: 37, color: '#F26822',}}/>
                </IconButton>
                <IconButton>
                    <StarOutlineRoundedIcon sx={{fontSize: 40, color: '#F26822'}}/>
                </IconButton>
            </Box>
            <Divider variant='fullWidth'/>
            <Box p={"2% 5%"}>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'flex-start'}>
                    <Box flex={1}>
                        <Typography fontWeight={'bold'}>Lorem:</Typography>
                    </Box>
                    <Box flex={2}>
                        <Typography>Lorem ipsum A. Amet</Typography>
                    </Box>
                </Box>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'flex-start'}>
                    <Box flex={1}>
                        <Typography fontWeight={'bold'}>Ipsum:</Typography>
                    </Box>
                    <Box flex={2}>
                        <Typography>Pariatur State University</Typography>
                    </Box>
                </Box>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'flex-start'}>
                    <Box flex={1}>
                        <Typography fontWeight={'bold'}>Adolor:</Typography>
                    </Box>
                    <Box flex={2}>
                        <Typography>Computer Engineering</Typography>
                    </Box>
                </Box>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'flex-start'}>
                    <Box flex={1}>
                        <Typography fontWeight={'bold'}>Sit Amet:</Typography>
                    </Box>
                    <Box flex={2}>
                        <Typography>Mollitia et repellat facilis et iure dolorem.</Typography>
                    </Box>
                </Box>
            </Box>
        </Paper>    
    </>)
}

export default StudentListComp

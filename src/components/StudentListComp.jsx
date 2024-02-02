import { Box, Paper, Typography, Divider, IconButton } from '@mui/material'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import React from 'react'

const StudentListComp = ({student = {
    name: 'Jhoberta Mapaye Erato',
    course: 'BSIT',
    university: 'PUP Unisan Branch',

}}) => {
    
    return (<>
        <Paper
            sx={{
                background: '#FDFBFA',
                p: '50px 30px',
                borderRadius: '20px',
                m: '30px',
                '&:hover':{
                    borderLeft: '30px solid #FFDDC3'
                }
            }}
            elevation={7}
        >
            <Box 
                display={'flex'}
                justifyContent={'flex-start'}
                alignItems={'center'}
                mb={'10px'}
                p={"0 20px"}
            >
                <Typography variant='h5'
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
            <Box p={"20px 80px"}>
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

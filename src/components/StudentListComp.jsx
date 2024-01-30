import { Box, Paper, Typography } from '@mui/material'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
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
                borderRadius: '30px',
                m: '30px',
                '&:hover':{
                    borderLeft: '10px solid #FFDDC3'
                }
            }}
            elevation={7}
        >
            <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} mb={'10px'}>
                <Typography variant='h5'
                    sx={{
                        fontWeight: 'bolder',
                        mr: '20px'
                    }}
                >
                    {student.name}
                </Typography>
                <EmailOutlinedIcon sx={{fontSize: 37, color: '#F26822', mr: '10px'}}/>
                <StarBorderOutlinedIcon sx={{fontSize: 40, color: '#F26822'}}/>
            </Box>
            <hr />
        </Paper>    
    </>)
}

export default StudentListComp

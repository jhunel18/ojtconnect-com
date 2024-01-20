import React from 'react'
import { Box, Typography } from '@mui/material'

const SchedulesComp = () => {
    const today = new Date()
    const dd = today.getDate()
    const month = today.toLocaleString('default', {month: 'long'})

  return (
    <>
        <Box sx={{background: '#ffffff', p: '25px', border: '1px solid #ffffff', borderRadius: '20px'}}>
            <Typography variant="h5" sx={{fontWeight: 'bold', pl: '10px', mb: '15px'}}>Schedules</Typography>
            <Box display={"flex"} justifyContent={"flex-start"} alignItems={"stretch"}>
                <Typography variant="h5"
                    sx={{
                        fontWeight: 'bold',
                        p: '15px 6px 15px 12px',
                        background: '#FFDDC3',
                        letterSpacing: '7px'
                    }}
                >
                    {`${month.toUpperCase()}`}
                </Typography>
                <Typography variant="h4"
                    sx={{
                        p: '10px',
                        fontWeight: '800',
                        color: '#F26822',
                        border: '1px solid #D5D4DF',
                    }}
                >
                    {`${dd}`}
                </Typography>
            </Box>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"}
                sx={{
                    height: '200px',
                    width: '100%'
                }}
            >
                <Typography variant="subtitle2" sx={{color: 'rgba(0, 0, 0, .76)'}}>No Found Schedule</Typography>
            </Box>
            <Typography variant="h6" sx={{fontWeight: 'bold'}}>Notes</Typography>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"}
                sx={{
                    height: '150px',
                    width: '100%'
                }}
            >
                <Typography variant="subtitle2" sx={{color: 'rgba(0, 0, 0, .76)'}}>No Found Notes</Typography>
            </Box>
        </Box>
    </>
  )
}

export default SchedulesComp
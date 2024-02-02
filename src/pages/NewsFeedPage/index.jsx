import React from 'react'
import { Box } from '@mui/material'
import MainLayout from '../../layouts/MainLayout'
import CalendarComp from '../../components/CalendarComp'
import SchedulesComp from '../../components/SchedulesComp'
import StudentListComp from '../../components/StudentListComp'

const index = () => {
    return (<>
        <MainLayout>
            <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                width={'100vh'}
            >
                <Box sx={{flex: 1}}>
                    <CalendarComp />
                    <SchedulesComp />
                </Box>
                <Box
                    sx={{
                        flex: 2,
                        background: '#fffff',
                        p: '2% 1%',
                        overflow: 'auto'
                    }}
                >
                    <StudentListComp />
                    <StudentListComp />
                    <StudentListComp />
                    <StudentListComp />
                    <StudentListComp />
                    <StudentListComp />
                </Box>
                <Box sx={{flex: 1}}>Test</Box>
            </Box>
        </MainLayout>
    </>)
}

export default index

import React from 'react'
import { Box, Container, Hidden, Grid } from '@mui/material'
import MainLayout from '../../layouts/MainLayout'
import CalendarComp from '../../components/CalendarComp'
import SchedulesComp from '../../components/SchedulesComp'
import StudentListComp from '../../components/StudentListComp'
import MessagesList from '../../components/MessageList'
import Notifications from '../../components/Notifications'
import style from "./style.module.css"

const index = () => {
    return (<>
        <MainLayout>
            <Grid container spacing={2} sx={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Grid item xs={2} lg={2} xl={2} m={2}>
                    <div style={{
                        height: "90vh",
                        overFlowY: "scroll"
                    }}>
                        <CalendarComp />
                        <br />
                        <SchedulesComp />
                    </div>
                </Grid>
                <Grid item xs={4} lg={4} xl={4} md={4} m={2}>
                    <div className={style.student_list} style={{
                        height: "90vh",
                        overflow: "auto",
                    }}>
                        <StudentListComp />
                        <br/>
                        <StudentListComp />
                        <br/>
                        <StudentListComp />
                        <br/>
                        <StudentListComp />
                        <br/>
                        <StudentListComp />
                        <br/>
                        <StudentListComp />
                        <br/>
                        <StudentListComp />
                        <br/>
                        <StudentListComp />
                        <br/>
                        <StudentListComp />
                        <br/>
                        <StudentListComp />
                        <br/>
                        <StudentListComp />
                        <br/>
                        <StudentListComp />
                        <br/>
                    </div>
                </Grid>
                <Grid item xs={2} lg={2} xl={2} m={2}>
                    <div style={{
                        height: "90vh",
                        overFlowY: "scroll"
                    }}>
                        <Notifications />
                        <br />
                        <MessagesList />
                    </div>
                </Grid>
            </Grid>
        </MainLayout>
    </>)
}

export default index

import React from 'react'

import JobPostCard from './JobPostCard'
import Grid  from '@mui/material/Grid'

const JobPostList = () => {
    return (<>
        <Grid container>
            <Grid item lg={3} md={3} sm={3} xs={10}>
                <JobPostCard />
            </Grid>
        </Grid>
    </>)
}

export default JobPostList

import React from 'react';

import JobPostCard from './JobPostCard';
import JobPostDetails from './JobPostDetails';
import Grid from '@mui/material/Grid';

import style from './index.module.css';

const JobPostList = () => {
    return (<>
        <Grid container sx={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Grid item lg={3} md={3} sm={3} xs={10} margin={5}>
                <div className={style.job_list}>
                    <JobPostCard />
                    <JobPostCard />
                    <JobPostCard />
                    <JobPostCard />
                    <JobPostCard />
                    <JobPostCard />
                    <JobPostCard />
                </div>
            </Grid>
            <Grid item lg={7} md={7} sm={7} margin={5}>
                <JobPostDetails />
                <JobPostDetails />
                <JobPostDetails />
            </Grid>
        </Grid>
    </>)
}

export default JobPostList

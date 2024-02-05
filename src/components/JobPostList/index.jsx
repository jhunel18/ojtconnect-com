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
            <Grid item lg={4} md={4} sm={4} xs={10} margin={2}>
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
            <Grid item lg={6} md={6} sm={6} margin={2}>
                <div className={style.job_details}>
                    <JobPostDetails />
                </div>
            </Grid>
        </Grid>
    </>)
}

export default JobPostList

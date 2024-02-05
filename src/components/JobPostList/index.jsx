import React from 'react';

import JobPostCard from './JobPostCard';
import JobPostDetails from './JobPostDetails';
import Grid from '@mui/material/Grid';

import style from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setIsActive } from '../../redux/actions/joblistActions';

const JobPostList = () => {

    const dispatch = useDispatch();
    const isActive = useSelector((state) => state.joblist.isActive);

    console.log(isActive);

    const handleActive = () => {
        dispatch(setIsActive(!isActive));
        console.log(isActive);
    };

    return (<>
        <Grid container sx={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Grid item lg={4} md={4} sm={4} xs={10} margin={2}>
                <div className={style.job_list}>
                    <JobPostCard isActive={isActive} click={handleActive} />
                    <JobPostCard isActive={isActive} />
                    <JobPostCard isActive={isActive} />
                    <JobPostCard isActive={isActive} />
                    <JobPostCard isActive={isActive} />
                    <JobPostCard isActive={isActive}/>
                    <JobPostCard isActive={isActive} />
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

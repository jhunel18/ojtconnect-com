import React from 'react'

// Parent Layout
import MainLayout from '../../layouts/MainLayout';

// Components
import JobPostList from '../../components/JobPostList';

const JobPostPage = () => {
  return (
    <MainLayout>
        <JobPostList />
    </MainLayout>
  )
}

export default JobPostPage

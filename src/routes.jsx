import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from "./shared/components/Header"
import HomePage from './pages/HomePage'
import ServicesComp from './components/ServicesComp'
import DiscoverComp from './components/DiscoverComp'
import LandingPage from './pages/LandingPage'
import CalendarComp from './components/CalendarComp'
import SchedulesComp from './components/SchedulesComp'
import MessageNotifTopComp from './shared/components/MessageNotifTopComp'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MessagePage from './pages/MessagePage'
import JobPostPage from './pages/JobPostPage';
import StudentListComp from './components/StudentListComp'
const AppRoutes = () => {
    return (<>
        <Routes>
            <Route path='' element={<LandingPage />} />
            <Route path='/calendar' element={<CalendarComp />} />
            <Route path='/student' element={<StudentListComp />} />
            <Route path='/schedules' element={<SchedulesComp />} />
            <Route path='/notif' element={<MessageNotifTopComp name={"Notifications"} icon={<EmailOutlinedIcon />} />} />
            <Route path='/login' element={<HomePage />} />
            <Route path='/signup' element={<HomePage />} />
            <Route path='/verified/:cat/:id' element={<HomePage />} />
            <Route path='/discover' element={<DiscoverComp />} />
            <Route path='/services' element={<ServicesComp />} />
            <Route path='/messages' element={<MessagePage />} />
            <Route path='/jobs' element={<JobPostPage />} />
        </Routes>
    </>)
}

export default AppRoutes

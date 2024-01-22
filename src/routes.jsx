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

const AppRoutes = () => {
    return (<>
        <Routes>
            <Route path='' element={<LandingPage />} />
            <Route path='/calendar' element={<CalendarComp />} />
            <Route path='/schedules' element={<SchedulesComp />} />
            <Route path='/notif' element={<MessageNotifTopComp name={"Notifications"} icon={<EmailOutlinedIcon />} />} />
            <Route path='/login' element={<HomePage />} />
            <Route path='/signup' element={<HomePage />} />
            <Route path='/discover' element={<DiscoverComp />} />
            <Route path='/services' element={<ServicesComp />} />
        </Routes>
    </>)
}

export default AppRoutes

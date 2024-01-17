import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from "../shared/components/Header"
import HomePage from './HomePage'
import ServicesComp from '../components/ServicesComp'
import DiscoverComp from '../components/DiscoverComp'
import LandingPage from './LandingPage'
import CalendarComp from '../components/CalendarComp'

const Login = () => {
  return (<>
        {/* <Header /> */}
        <Routes>
            <Route path='' element={<LandingPage />} />
            <Route path='/calendar' element={<CalendarComp />} />
            <Route path='/login' element={<HomePage />} />
            <Route path='/signup' element={<HomePage />} />
            <Route path='/discover' element={<DiscoverComp />} />
            <Route path='/services' element={<ServicesComp />} />
        </Routes>
    </>)
}

export default Login

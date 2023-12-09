import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from "../shared/components/Header"
import HomePage from './HomePage'
import ServicesComp from '../components/ServicesComp'
import DiscoverComp from '../components/DiscoverComp'

const Login = () => {
  return (<>
        <Header />
        <Routes>
            <Route path='/login' element={<HomePage />} />
            <Route path='/discover' element={<DiscoverComp />} />
            <Route path='/services' element={<ServicesComp />} />
        </Routes>
    </>)
}

export default Login

import React, { useState } from 'react'
import { Box } from '@mui/material'
import bg from "../assets/login.png"
import LoginComp from '../components/LoginComp'
import SignupComp from '../components/SignupComp'

const HomePage = () => {
    const [showLogin, setShowLogin] = useState(true)
    const handleShowLogin = () => (
        setShowLogin(false)
    )

    return (<>
        <Box display={'flex'} p={"5% 10%"} sx={{background: "linear-gradient(146deg, rgba(255,151,85,1) 0%, rgba(255,255,255,1) 54%, rgba(254,179,139,1) 100%)"}}>
            <img src={bg} width={"50%"} style={{flex: '2'}}/>
            <Box p={"25px 50px"} sx={{
                borderRadius: '0 20px 20px 0',
                background: "#F6F7F8",
                flex: '1'
            }}>
                {showLogin ? <LoginComp setShowLogin={setShowLogin}/> : <SignupComp setShowLogin={setShowLogin}/>}
                
            </Box>
        </Box>
    </>)
}

export default HomePage

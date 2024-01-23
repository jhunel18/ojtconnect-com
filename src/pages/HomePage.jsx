import React, { useState } from 'react'
import { Box } from '@mui/material'
import bg from "../assets/login.png"
import CompanyImage from '../assets/company.png'
import LoginComp from '../components/LoginComp'
import SignupComp from '../components/SignupComp'
import ImageContainer from '../shared/components/ImageContainer'

const HomePage = () => {
    const [showLogin, setShowLogin] = useState(true)
    const [activeToggle, setActiveToggle] = useState('student');
    const [is_ShowStudent, setShowStudent] = useState(false);
    const [is_ShowCompany, setShowCompany] = useState(false);

    const handleToggle = (toggle) => {
        setShowStudent(false);
        setShowCompany(false);
        setActiveToggle(toggle);
      
        if (toggle === 'student') setShowStudent(true);
        else if (toggle === 'company') setShowCompany(true);
      };

    const handleShowLogin = () => (
        setShowLogin(false)
    )


    return (<>
        <Box display={'flex'} alignItems={"stretch"}
            sx={{
                background: "linear-gradient(146deg, rgba(255,151,85,1) 0%, rgba(255,255,255,1) 54%, rgba(254,179,139,1) 100%)",
                height: '100vh'
            }}
        >
            
            {showLogin 
            ?   <img src={bg} width={"50%"} style={{flex: '2'}}/>
            :<>
                {is_ShowStudent && (<ImageContainer src={bg} />)}
                {is_ShowCompany && <ImageContainer src={CompanyImage}/>} 
            </> }
           
            <Box p={"25px 50px"} sx={{
                borderRadius: '0 20px 20px 0',
                background: "#F6F7F8",
                flex: '1',
            }}>
                {showLogin 
                ? <LoginComp setShowLogin={setShowLogin}/> 
                : <SignupComp 
                    setShowLogin={setShowLogin} 
                    activeToggle={activeToggle} 
                    is_ShowStudent={is_ShowStudent} 
                    is_ShowCompany={is_ShowCompany} 
                    handleToggle={handleToggle}
                />}
                
            </Box>
        </Box>
    </>)
}

export default HomePage

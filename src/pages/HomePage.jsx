import React, { useState } from 'react'
import { Box } from '@mui/material'
import bg from "../assets/login.png"
import UniversityImage from '../assets/university.png'
import CompanyImage from '../assets/company.png'
import LoginComp from '../components/LoginComp'
import SignupComp from '../components/SignupComp'

const HomePage = () => {
    const [showLogin, setShowLogin] = useState(true)
    const [activeToggle, setActiveToggle] = useState('student');
    const [is_ShowStudent, setShowStudent] = useState(false);
    const [is_ShowUniversity, setShowUniversity] = useState(false);
    const [is_ShowCompany, setShowCompany] = useState(false);

    const handleToggle = (toggle) => {
        setShowStudent(false);
        setShowUniversity(false);
        setShowCompany(false);
        setActiveToggle(toggle);
      
        if (toggle === 'student') setShowStudent(true);
        else if (toggle === 'university') setShowUniversity(true);
        else if (toggle === 'company') setShowCompany(true);
      };

    const handleShowLogin = () => (
        setShowLogin(false)
    )

    const styles={
        flex: '2',
        borderRadius:'20px 0 0 20px',       
        opacity: 0, transform:'scale(0.8)', 
        transition:'opacity 0.5s ease-in-out, transform 0.5s ease-in-out'
    }

    return (<>
        <Box display={'flex'} p={"5% 20%"} 
            sx={{
                background: "linear-gradient(146deg, rgba(255,151,85,1) 0%, rgba(255,255,255,1) 54%, rgba(254,179,139,1) 100%)",
            }}
        >
            <Box>
                {showLogin 
                ?   <img src={bg} width={"100%"} height={"auto"} style={styles} onLoad={(e) => {e.target.style.opacity = 1; e.target.style.transform = 'scale(1)'; }}/>
                :<>
                    {is_ShowStudent && (<img src={bg} width={"100%"}style={styles}
                        onLoad={(e) => {e.target.style.opacity = 1; e.target.style.transform = 'scale(1)';
                     }}/>)}
                    {is_ShowUniversity && <img src={UniversityImage} width={"100%"} style={styles}
                         onLoad={(e) => {e.target.style.opacity = 1; e.target.style.transform = 'scale(1)'; 
                    }}/>}
                    {is_ShowCompany && <img src={CompanyImage} width={"100%"} style={styles}
                         onLoad={(e) => {e.target.style.opacity = 1; e.target.style.transform = 'scale(1)'; 
                    }}/>} 
                </> }
            </Box>
           
            <Box p={"25px 50px"} sx={{
                borderRadius: '0 20px 20px 0',
                background: "#F6F7F8",
                flex: '1'
            }}>
                {showLogin 
                ? <LoginComp setShowLogin={setShowLogin}/> 
                : <SignupComp 
                    setShowLogin={setShowLogin} 
                    activeToggle={activeToggle} 
                    is_ShowStudent={is_ShowStudent} 
                    is_ShowCompany={is_ShowCompany} 
                    is_ShowUniversity={is_ShowUniversity}
                    handleToggle={handleToggle}
                />}
                
            </Box>
        </Box>
    </>)
}

export default HomePage

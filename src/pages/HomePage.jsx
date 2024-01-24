import React, { useEffect,useState } from 'react'
import { Box }        from '@mui/material'
import bg             from "../assets/login.png"
import CompanyImage   from '../assets/company.png'
import LoginComp      from '../components/LoginComp'
import SignupComp     from '../components/SignupComp'
import ImageContainer from '../shared/components/ImageContainer'
import './HomePage.css'
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

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const shouldShowImage = windowWidth > 800;


    return (<>
        <Box sx={{
            display:'flex', 
            height:'100vh' 
            ,width:'100%',  
            alignItems:'center',
            justifyContent:'center',
            background: "linear-gradient(146deg, rgba(255,151,85,1) 0%, rgba(255,255,255,1) 54%, rgba(254,179,139,1) 100%)"
        }}>
            <div 
                style={{
                    display:'flex',
                    padding:'5% 10%'
                }}
            >
                
                {showLogin && shouldShowImage
                ?   <img src={bg} width={"50%"} style={{flex: '2',borderRadius: '20px 0 0 20px',}}/>
                :<>
                    {is_ShowStudent && shouldShowImage && (<ImageContainer src={bg} />)}
                    {is_ShowCompany && shouldShowImage && <ImageContainer src={CompanyImage}/>} 
                </> }

                <Box className='form-container'>
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
            </div>
        </Box>
    </>)
}

export default HomePage

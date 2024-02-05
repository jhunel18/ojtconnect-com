import React from 'react'
import TextBoxWithIcon from './TextBoxWithIcon'
import SearchIcon from '@mui/icons-material/Search';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import ButtonContainedComp from './ButtonContainedComp';
import { Box } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const SignedInNavigation = () => {
  return (
    <>
    <Box sx ={{backGround:"#FFF", boxShadow:"1px 1px 5px #000", padding:"10px", display:"flex", alignItems:"center", justifyContent:"center"}}>
      <img src="/src/assets/Logo.png" alt="logo" style={{width:"25px", height:"25px", margin:"0px 40px"}}></img>
        <TextBoxWithIcon icon = {<SearchIcon sx={{ color: '#F26822'}}/>} color= "warning" />
        <TextBoxWithIcon icon = {<FmdGoodOutlinedIcon sx={{ color: '#F26822' }} />} color= "warning" />
        <ButtonContainedComp label = "Search" borderRadius="25px" size='small' />
        <HomeRoundedIcon sx={{ color: '#F26822', fontSize:"25px", margin:"0px 40px"}}/>
        <WidgetsRoundedIcon sx={{ color: '#F26822', fontSize:"25px", margin:"0px 40px"}}/>
        <MailOutlineRoundedIcon sx={{ color: '#F26822', fontSize:"25px", margin:"0px 40px"}}/>
        <MenuRoundedIcon sx={{ color: '#F26822', fontSize:"25px", margin:"0px 40px"}}/>
      </Box>
    </>
  )
}

export default SignedInNavigation
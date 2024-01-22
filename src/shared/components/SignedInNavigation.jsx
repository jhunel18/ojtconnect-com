import React from 'react'
import TextBoxWithIcon from './TextBoxWithIcon'
import SearchIcon from '@mui/icons-material/Search';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import ButtonContainedComp from './ButtonContainedComp';

const SignedInNavigation = () => {
  return (
    <>
    <img src="/src/assets/Logo.png" alt="logo" style={{width:"32px", height:"32px"}}></img>
    <TextBoxWithIcon icon = {<SearchIcon sx={{ color: '#F26822'}}/>} color= "warning"/>
    <TextBoxWithIcon icon = {<FmdGoodOutlinedIcon sx={{ color: '#F26822' }} />} color= "warning"/>
    <ButtonContainedComp label = "Search" borderRadius="25px"/>
    </>
  )
}

export default SignedInNavigation
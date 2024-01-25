import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Grid, Hidden } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem } from '@mui/material';


// Images
import bg from '../assets/landingBackground1.png';
import logo from '../assets/Logo.png';
import title from '../assets/title.png';
import thirdbg from '../assets/sec3Background.png';
import thirdperson from '../assets/sec3Person.png';
import building from '../assets/building.png';
import facebook from '../assets/icons/facebook.png';
import google from '../assets/icons/googleplus.png';
import instagram from '../assets/icons/instagram.png';
import pinterest from '../assets/icons/pinterest.png';
import twitter from '../assets/icons/twitter.png';
import verified_icon from '../assets/icons/verified_icon.png';
import laptoplist_icon from '../assets/icons/laptoplist_icon.png';
import messaging_icon from '../assets/icons/messaging_icon.png';

// CSS
import './LandingPage.css';

const LandingPage = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const buttonStyle = {
        cursor: 'pointer',
        backgroundColor: isHovered ? '#F1E5E5' : '#F26822',
        color: isHovered ? '#F26822' : '#F1E5E5',
        borderRadius: '30px',
        border: '3px solid #F26822',
        padding: '10px 30px',
        fontSize: '1.5rem',
        fontWeight: '600',
        width: '200px',
        boxShadow: '-5px 5px 10px #8b8b8b, 5px -5px 10px #ffffff',
        marginLeft: 'auto',
        transition: '0.2s ease'
    }

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleMenuClose = (event) => {
        setAnchorEl(null);
    }

    return (<>
        <Box
            className='first-section'
            sx={{
                background: `url(${bg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: 'auto',
                padding: '7em',
            }}
        >
            <Grid container spacing={2} alignItems="center">
                <Grid item xl={2} lg={4} md={3} sm={2} xs={2}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={logo} alt="logo" style={{ width: '55px', height: '55px' }} />
                            <img className='ojt-connect-title' src={title} alt="title" style={{ margin: 'auto 20px', width: 'auto', height: '13px' }} />
                        </div>
                    </div>
                </Grid>
                <Grid item xl={10} lg={8} md={9} sm={10} xs={10}>
                    <Hidden lgDown>
                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', justifyContent: 'center' }}>
                            <ul className='inter-font header'>
                                <li><a className='nav-link' href='#'>HOME</a></li>
                                <li><a className='nav-link' href='#'>ABOUT</a></li>
                                <li><a className='nav-link' href='#'>DISCOVER</a></li>
                                <li><a className='nav-link' href='#'>CONTACT US</a></li>
                            </ul>

                        </div>
                    </Hidden>
                    <Hidden lgUp>
                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', justifyContent: 'end' }}>
                            <IconButton onClick={handleMenuClick}>
                                <MenuIcon
                                    fontSize='large'
                                    sx={{ color: '#F26822' }}
                                />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}>
                                <MenuItem onClick={handleMenuClose}>HOME</MenuItem>
                                <MenuItem onClick={handleMenuClose}>ABOUT</MenuItem>
                                <MenuItem onClick={handleMenuClose}>DISCOVER</MenuItem>
                                <MenuItem onClick={handleMenuClose}>CONTACT US</MenuItem>
                            </Menu>
                        </div>
                    </Hidden>
                </Grid>
            </Grid>

            <Grid className='first-section-group' container spacing={2} sx={{ marginTop: '9em' }}>
                <Grid item lg={7.5} md={12} sm={10} xs={10}>
                    <h1 className='league-spartan-font first-section-title' style={{ fontSize: 'clamp(36px, 10vw, 55px)', fontWeight: '800', margin: 'auto 30px', color: '#F26822', letterSpacing: '5px' }}>
                        A Connection that Leads to a Foundation of Experiences
                    </h1>
                </Grid>
                <Grid item lg={8} md={12} sm={10} xs={10}>
                    <p className='inter-font first-section-subtitle' style={{ marginLeft: '30px', fontSize: '25px', fontWeight: '500' }}>
                        JOIN OJT CONNECT TODAY!
                    </p>
                </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                <Grid className='section-sign-up' item lg={12} md={12} sm={12} xs={12} sx={{ marginTop: '3em', textAlign: 'right' }}>
                    <Link to="/login"><button className='sign-up-btn' style={buttonStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        SIGN UP
                    </button></Link>
                </Grid>
            </Grid>
        </Box>

        <Box sx={{ height: '50vh', display: 'flex', alignItems: 'center' }}>
            <Grid container>
                <Grid item lg={6} md={6} sm={8} xs={8} sx={{ margin: 'auto', textAlign: 'center' }}>
                    <h2 className='tagline inter-font'>Enrich your learning and future with valuable ON THE JOB Training opportunities.</h2>
                </Grid>
            </Grid>
        </Box>

        <Box
            sx={{
                height: '100%',
                background: `url(${thirdbg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                display: 'flex',
                alignItems: 'center',
                padding: '60px 0'
            }}>

            <Grid container spacing={2}>
                <Grid item lg={8} md={10} sm={10} xs={10} sx={{ margin: 'auto' }}>
                    <div style={{ width: '100%', height: 'auto', background: '#FD9F5A', borderRadius: '25px', boxShadow: '8px 8px 16px #bebebe, -8px -8px 16px #ffffff' }}>
                        <Grid className='' container>
                            <Grid item lg={6} md={6} sm={12} xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                                <div style={{ padding: '30px' }}>
                                    <Typography variant='h5' sx={{ fontWeight: '700', margin: '20px' }}>ABOUT OJT CONNECT</Typography>
                                    <Typography variant='subtitle2' sx={{ margin: '20px', lineHeight: '20px', fontWeight: '600' }}>OJT connect is an essential platform that facilitates connections between college students and graduates from rural areas of the Philippines with companies, both locally and abroad. By providing valuable work experience opportunities, OJT Connect helps these individuals enhance their resumes and increase their chances of securing employment after graduation</Typography>
                                    <Typography variant='subtitle2' sx={{ margin: '20px', lineHeight: '20px', fontWeight: '600' }}>OJT Connect is a commendable platform that empowers individuals by providing them with the opportunities they deserve. OJT Connect plays a critical role in bridging the gap and providing equal opportunities, ensuring that those who were previously overlooked have a chance to thrive in their careers.</Typography>
                                </div>
                            </Grid>
                            <Hidden mdDown>
                                <Grid item lg={6} md={6}>
                                    <img
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: '0 25px 25px 0',
                                        }}
                                        src={thirdperson}
                                        alt="person"
                                    />
                                </Grid>
                            </Hidden>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </Box>

        <Box sx={{ height: 'auto', backgroundColor: '#FFFCF2', padding: '10vh' }}>
            <Grid container>
                <Grid item lg={10} md={10} sm={10} xs={10} sx={{ margin: 'auto' }}>
                    <Grid container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Grid className='inter-font' item lg={6} md={6} sm={10} xs={10} padding='50px'>
                            <Typography variant='h6' sx={{ color: '#F26822', fontWeight: '700', textAlign: 'center' }} >Students</Typography>
                            <Typography className='fourth-content' variant='subtitle2'>Create foundational connections with businesses and explore fantastic opportunities.</Typography>
                        </Grid>
                        <Grid className='inter-font' item lg={6} md={6} sm={10} xs={10} padding='50px'>
                            <Typography variant='h6' sx={{ color: '#F26822', fontWeight: '700', textAlign: 'center' }} >Businesses</Typography>
                            <Typography className='fourth-content' variant='subtitle2'>Post your job opportunities to our job board and connect with amazing students.</Typography>
                        </Grid>
                    </Grid>
                    <Grid container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Grid className='inter-font discover_content' item lg={4} md={4} sm={10} xs={10} padding='50px'>
                            <img src={messaging_icon} alt="logo" style={{ width: '55px', height: '55px' }} />
                            <Typography variant='h6' sx={{ color: '#F26822', fontWeight: '700', textAlign: 'center' }} >Direct Messaging</Typography>
                            <Typography className='fourth-content' variant='subtitle2'>Get in direct contact with students and businesses with our private messaging system.</Typography>
                        </Grid>
                        <Grid className='inter-font discover_content' item lg={4} md={4} sm={10} xs={10} padding='50px'>
                            <img src={laptoplist_icon} alt="logo" style={{ width: '55px', height: '55px' }} />
                            <Typography variant='h6' sx={{ color: '#F26822', fontWeight: '700', textAlign: 'center' }} >Job Board</Typography>
                            <Typography className='fourth-content' variant='subtitle2'>Post or browse job listings for OJT programs.</Typography>
                        </Grid>
                        <Grid className='inter-font discover_content' item lg={4} md={4} sm={10} xs={10} padding='50px'>
                            <img src={verified_icon} alt="logo" style={{ width: '55px', height: '55px' }} />
                            <Typography variant='h6' sx={{ color: '#F26822', fontWeight: '700', textAlign: 'center' }} >Verified Businesses</Typography>
                            <Typography className='fourth-content' variant='subtitle2'>All business accounts go through a screening process in order to verify accounts.</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item lg={8} md={6} sm={10} sx={{ margin: 'auto' }}>
                    <img
                        style={{
                            width: '100%',
                            height: 'auto'
                        }}
                        src={building}
                        alt="building"
                    />
                </Grid>
            </Grid>
        </Box>

        <Box sx={{ height: '30vh', backgroundColor: '#FFFCF2', padding: '40px' }}>
            <Grid container>
                <Grid item lg={10} md={10} sm={10} sx={{ margin: 'auto', textAlign: 'center' }}>
                    <img src={logo} alt="logo" style={{ width: '100px', height: '100px' }} />
                    <Typography variant='subtitle2' sx={{ color: '#1E1E1E', padding: '10px' }}>OJT Connect</Typography>
                </Grid>
                <Hidden mdDown>
                    <Grid item lg={10} md={10} sx={{ margin: "auto", textAlign: 'center' }}>
                        <ul className='inter-font footer'>
                            <li className='footer-link'>Home</li>
                            <li className='footer-link'>About</li>
                            <li className='footer-link'>Discover</li>
                            <li className='footer-link'>Contact Us</li>
                        </ul>
                    </Grid>
                </Hidden>
                <Grid item lg={10} md={10} sm={12} xs={12} sx={{ margin: "auto", textAlign: 'center' }}>
                    <img className='icon' src={facebook} alt="facebook" />
                    <img className='icon' src={google} alt="google" />
                    <img className='icon' src={instagram} alt="instagram" />
                    <img className='icon' src={pinterest} alt="pinterest" />
                    <img className='icon' src={twitter} alt="twitter" />
                </Grid>

            </Grid>

        </Box>
    </>)
}

export default LandingPage

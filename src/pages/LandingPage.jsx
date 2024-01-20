import React from 'react'
import { Box, Typography, Button, Grid, Container } from '@mui/material'
import bg from '../assets/landingBackground1.png'
import logo from '../assets/Logo.png'
import title from '../assets/title.png'
import thirdbg from '../assets/sec3Background.png'
import thirdperson from '../assets/sec3Person.png'
import building from '../assets/building.png'
import './LandingPage.css'
const LandingPage = () => {
    return (<>
        <Box
            sx={{
                background: `url(${bg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '70vh',
                padding: '7em',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={2} alignItems="center">
                    <Grid item lg={5} md={7} xs={12}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={logo} alt="logo" style={{ width: '55px', height: '55px' }} />
                                <img src={title} alt="title" style={{ margin: 'auto 20px', width: 'auto', height: '13px' }} />
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={7} md={7} xs={12}>
                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
                            <ul className='inter-font header'>
                                <li><a className='nav-link' href='#'>HOME</a></li>
                                <li><a className='nav-link' href='#'>ABOUT</a></li>
                                <li><a className='nav-link' href='#'>DISCOVER</a></li>
                                <li><a className='nav-link' href='#'>CONTACT US</a></li>
                            </ul>
                        </div>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ marginTop: '9em' }}>
                    <Grid item lg={7} md={12}>
                        <h1 className='league-spartan-font' style={{ fontSize: 'clamp(36px, 10vw, 55px)', fontWeight: '800', margin: 'auto 30px', color: '#F26822', letterSpacing: '5px' }}>
                            Get Started Your Learning & <br /> Enrich Your Future
                        </h1>
                    </Grid>
                    <Grid item lg={7} md={12}>
                        <p className='inter-font' style={{ marginLeft: '30px' }}>
                            Est Quis ipsam aut fuga magnam aut accusantium molestias est quam quidem et deleniti maiores et vitae dolore. Ex explicabo suscipit aut asperiores saepe qui vero odio sed suscipit autem a repellendus praesentium?
                        </p>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ marginTop: '3em', alignItems: 'center' }}>
                    <Grid item lg={12} md={12} sx={{ textAlign: 'right' }}>
                        <button style={{ backgroundColor: '#F26822', color: '#fff', borderRadius: '30px', border: '0', padding: '10px 30px', fontSize: '1.5rem', fontWeight: '600', width: '18%', boxShadow: '-5px 5px 10px #8b8b8b, 5px -5px 10px #ffffff', marginLeft: 'auto' }}>
                            SIGN UP
                        </button>
                    </Grid>
                </Grid>
            </Container>
        </Box>

        <Box sx={{ height: '50vh', display: 'flex', alignItems: 'center' }}>
            <Grid container>
                <Grid item lg={4} md={4} sm={10} sx={{ margin: 'auto', textAlign: 'center' }}>
                    <h2 className='tagline inter-font'>Ut omnis nobis et culpa recusandae ut temporibus consectetur et sunt repellendus. Aut expedita galisum non cons.</h2>
                </Grid>
            </Grid>
        </Box>

        <Box
            sx={{
                height: '90vh',
                background: `url(${thirdbg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                display: 'flex',
                alignItems: 'center'
            }}>

            <Grid container spacing={2}>
                <Grid item lg={8} md={10} sx={{ margin: 'auto' }}>
                    <div style={{ width: '100%', height: '70vh', background: '#FD9F5A', borderRadius: '25px', boxShadow: '8px 8px 16px #bebebe, -8px -8px 16px #ffffff' }}>
                        <Grid container>
                            <Grid item lg={6} md={6} style={{ display: 'flex', alignItems: 'center', color: '#fff' }}>
                                <div style={{ padding: '30px' }}>
                                    <Typography variant='h5' sx={{ fontWeight: '700', margin: '20px' }}>Lorem ipsum dolor sit amet, consectetur</Typography>
                                    <Typography variant='subtitle1' sx={{ margin: '20px', lineHeight: '20px', fontWeight: '600' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam.</Typography>
                                    <Typography variant='subtitle2' sx={{ margin: '20px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus .</Typography>
                                </div>
                            </Grid>
                            <Grid item lg={6} md={6}>
                                <img
                                    style={{
                                        width: '100%',
                                        height: '70vh',
                                        objectFit: 'cover',
                                        borderRadius: '0 25px 25px 0',
                                    }}
                                    src={thirdperson}
                                    alt="person"
                                />
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </Box>

        <Box sx={{ height: '110vh', backgroundColor: '#FD9F5A' }}>
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

            <Grid container marginTop={10}>
                <Grid item lg={8} md={8} sx={{ margin: 'auto' }}>
                    <Grid container spacing={8}>
                        <Grid className='inter-font' item lg={4} md={4}>
                            <Typography variant='h6' sx={{ color: '#fff', fontWeight: '700', textAlign: 'center' }} >Ut sint unde est commodi neque</Typography>
                            <Typography className='fourth-content' variant='subtitle2'>Lorem ipsum dolor sit amet. Sed quia nostrum ut vero unde ut laboriosam omnis est voluptas quibusdam aut iste esse ex ullam molestiae ut blanditiis doloremque. Sit nulla facilis et quam aspernatur aut mollitia voluptate ut vmodi voluptates! Et obcaecati iste qui atque dolore ut vero velit aut obcaecati repudiandae.</Typography>
                        </Grid>
                        <Grid className='inter-font' item lg={4} md={4}>
                            <Typography variant='h6' sx={{ color: '#fff', fontWeight: '700', textAlign: 'center' }} >Ut sint unde est commodi neque</Typography>
                            <Typography className='fourth-content' variant='subtitle2'>Lorem ipsum dolor sit amet. Sed quia nostrum ut vero unde ut laboriosam omnis est voluptas quibusdam aut iste esse ex ullam molestiae ut blanditiis doloremque. Sit nulla facilis et quam aspernatur aut mollitia voluptate ut vmodi voluptates! Et obcaecati iste qui atque dolore ut vero velit aut obcaecati repudiandae.</Typography>
                        </Grid>
                        <Grid className='inter-font' item lg={4} md={4}>
                            <Typography variant='h6' sx={{ color: '#fff', fontWeight: '700', textAlign: 'center' }} >Ut sint unde est commodi neque</Typography>
                            <Typography className='fourth-content' variant='subtitle2'>Lorem ipsum dolor sit amet. Sed quia nostrum ut vero unde ut laboriosam omnis est voluptas quibusdam aut iste esse ex ullam molestiae ut blanditiis doloremque. Sit nulla facilis et quam aspernatur aut mollitia voluptate ut vmodi voluptates! Et obcaecati iste qui atque dolore ut vero velit aut obcaecati repudiandae.</Typography>
                        </Grid>
                        <Grid className='inter-font' item lg={4} md={4}>
                            <Typography variant='h6' sx={{ color: '#fff', fontWeight: '700', textAlign: 'center' }} >Ut sint unde est commodi neque</Typography>
                            <Typography className='fourth-content' variant='subtitle2'>Lorem ipsum dolor sit amet. Sed quia nostrum ut vero unde ut laboriosam omnis est voluptas quibusdam aut iste esse ex ullam molestiae ut blanditiis doloremque. Sit nulla facilis et quam aspernatur aut mollitia voluptate ut vmodi voluptates! Et obcaecati iste qui atque dolore ut vero velit aut obcaecati repudiandae.</Typography>
                        </Grid>
                        <Grid className='inter-font' item lg={4} md={4}>
                            <Typography variant='h6' sx={{ color: '#fff', fontWeight: '700', textAlign: 'center' }} >Ut sint unde est commodi neque</Typography>
                            <Typography className='fourth-content' variant='subtitle2'>Lorem ipsum dolor sit amet. Sed quia nostrum ut vero unde ut laboriosam omnis est voluptas quibusdam aut iste esse ex ullam molestiae ut blanditiis doloremque. Sit nulla facilis et quam aspernatur aut mollitia voluptate ut vmodi voluptates! Et obcaecati iste qui atque dolore ut vero velit aut obcaecati repudiandae.</Typography>
                        </Grid>
                        <Grid className='inter-font' item lg={4} md={4}>
                            <Typography variant='h6' sx={{ color: '#fff', fontWeight: '700', textAlign: 'center' }} >Ut sint unde est commodi neque</Typography>
                            <Typography className='fourth-content' variant='subtitle2'>Lorem ipsum dolor sit amet. Sed quia nostrum ut vero unde ut laboriosam omnis est voluptas quibusdam aut iste esse ex ullam molestiae ut blanditiis doloremque. Sit nulla facilis et quam aspernatur aut mollitia voluptate ut vmodi voluptates! Et obcaecati iste qui atque dolore ut vero velit aut obcaecati repudiandae.</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>

        <Box sx={{ height: '40vh', backgroundColor: '#FFFCF2' }}>
            <Grid container>
                <Grid item lg={10} md={10} sx={{ margin: 'auto', textAlign: 'center', padding: '50px' }}>
                    <img src={logo} alt="logo" style={{ width: '100px', height: '100px' }} />
                    <Typography variant='subtitle2' sx={{ color: '#1E1E1E' }}>OJT Connect Tagline Here</Typography>
                </Grid>
                <Grid item lg={10} md={10}>
                    <ul className='inter-font footer'>
                        <li className='footer-link'>Home</li>
                        <li className='footer-link'>Services</li>
                        <li className='footer-link'>Article</li>
                        <li className='footer-link'>Contact</li>
                        <li className='footer-link'>About Us</li>
                    </ul>
                </Grid>
            </Grid>

        </Box>
    </>)
}

export default LandingPage

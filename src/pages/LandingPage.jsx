import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import bg from '../assets/landingBackground.png'
import logo from '../assets/Logo.png'
const LandingPage = () => {
  return (<>
        <Box p={"50px 200px"}
            sx={{
                background: `url(${bg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
                backgroundAttachment: 'fixed'
            }}
        >
            <Box display={"flex"} alignItems={"center"} justifyContent={"space-evenly"}>
                <Box p={'60px 50px'} flex={2}
                    sx={{
                        background: 'inherit',
                        backdropFilter: 'blur(10px)', 
                        borderRadius: '12px'
                    }}
                >
                    <Typography variant='h3' fontWeight={'bolder'} color={'#fff'}>Lorem ipsum dolor sit amet, consectetur</Typography>
                    <Typography variant='body2' color={'#fff'} mt={5}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
                        
                    </Typography>
                    <Button variant='contained'
                        sx={{
                            borderRadius: 10,
                            mt: '30px',
                            p: '10px 30px',
                            background: '#FF5733'
                        }}
                    >
                        Sign up
                    </Button>
                </Box>
                <Box p={'60px 50px'} flex={1} display={'flex'} justifyContent={"flex-end"}>
                    <img src={logo} width={"40%"} height={"40%"}/>
                </Box>
            </Box>
            <Box display={"flex"} alignItems={"center"} justifyContent={"space-evenly"} mt={"200px"}
                sx={{
                    background: 'inherit',
                    backdropFilter: 'blur(10px)', 
                    borderRadius: '20px'
                }}       
            >
                <Box p={'15px 80px'}>
                    <Typography variant='h6' fontWeight={'bolder'} color={'#fff'}>Lorem ipsum</Typography>
                    <Typography variant='body2' color={'#fff'}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.                        
                    </Typography>
                </Box>
                <Box p={'15px 80px'}>
                    <Typography variant='h6' fontWeight={'bolder'} color={'#fff'}>Lorem ipsum</Typography>
                    <Typography variant='body2' color={'#fff'}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.                        
                    </Typography>
                </Box>
                <Box p={'15px 80px'}>
                    <Typography variant='h6' fontWeight={'bolder'} color={'#fff'}>Lorem ipsum</Typography>
                    <Typography variant='body2' color={'#fff'}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.                        
                    </Typography>
                </Box>
                <Box p={'15px 80px'}>
                    <Typography variant='h6' fontWeight={'bolder'} color={'#fff'}>Lorem ipsum</Typography>
                    <Typography variant='body2' color={'#fff'}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.                        
                    </Typography>
                </Box>
            </Box>
        </Box>
    </>)
}

export default LandingPage

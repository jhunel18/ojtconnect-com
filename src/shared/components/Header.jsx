import React, {useState} from 'react'
import { Box, Typography } from '@mui/material'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import logo from "../../assets/Logo.png"
import { Link } from 'react-router-dom'

const Header = () => {
    const link = [
        {name: "Home", to: '/'},
        {name: "Discover", to: '/discover'},
        {name: "More Services", to: '/services'},
    ]
    const [active, setActive] = useState('Home')

    return (<>
        <Box 
            display={"flex"} 
            justifyContent={"space-between"}
            sx={{background: '#ffe0cc'}}
            alignItems={'center'}
            p={"7px 20%"}
        >
            <img src={logo} width={"50px"} height={"50px"} />
            <Box display={'flex'} justifyContent={'space-around'}>
                {link.map((l, index) => (
                    <React.Fragment key={index}>
                        <Box
                            sx={{
                                paddingLeft: '25px',
                                paddingRight: '25px',
                                cursor: 'pointer',
                                borderBottom: active === l.name ? '2px solid #F26822' : undefined
                            }}
                        >
                            <Link to={l.to} style={{textDecoration: 'none', color: '#000000'}}>
                                <Typography variant='subtitle1' fontWeight={'bold'}
                                    onClick={() => setActive(l.name)}
                                >
                                    {l.name}
                                </Typography>
                            </Link>
                        </Box>
                    </React.Fragment>
                ))}
            </Box>
            <MenuOutlinedIcon sx={{color: '#F26822', cursor: 'pointer'}}/>
        </Box>
    </>)
}

export default Header

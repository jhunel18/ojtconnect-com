import React, { useEffect, useState } from 'react'
import { Box, Typography }  from '@mui/material';
import TextBoxFullWidthComp from '../shared/components/TextBoxFullWidthComp'
import CheckboxComp         from '../shared/components/CheckboxComp';
import ButtonContainedComp  from '../shared/components/ButtonContainedComp';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import style from "./VerificationComp.module.css"
const VerificationComp = () => {
    const [text, setText] = useState(
        <p
            className={`${style["league-spartan-font"]}`}
            style={{
                textAlign: 'center',
                marginTop: '30px',
                fontWeight: 'bold',
                fontSize: '20px',
                color: '#474A4E'
            }}
        >
            Thank you for signing up for OJT Connect. You can now access the site and connect with talented students.
        </p>
    )

    useEffect(() => {
        setText(
            <>
                <p
                    className={`${style["league-spartan-font"]}`}
                    style={{
                        textAlign: 'center',
                        marginTop: '30px',
                        fontWeight: 'bold',
                        fontSize: '20px',
                        color: '#474A4E'
                    }}
                >
                    Thank you for signing up for OJT Connect.
                </p>
                <p
                    className={`${style["league-spartan-font"]}`}
                    style={{
                        textAlign: 'center',
                        marginTop: '30px',
                        fontWeight: 'bold',
                        fontSize: '20px',
                        color: '#474A4E'
                    }}
                >
                    Please allow <span style={{color: '#F26822'}}>24 hours</span> for your account to be verified before creating job listings.
                </p>
            </>
            
        )
    }, [])
    return (
        <>
        <Box
            m={'20px'}
            sx={{textAlign: 'center', width: '100%'}}
        >
            <CheckCircleOutlineOutlinedIcon sx={{color: '#F26822', fontSize: '100px'}}/>
        </Box>
        {/*<Typography
            className={`${style["league-spartan-font"]}`}
            variant='h1'
            textAlign={'center'}
            sx={{
                fontWeight: 'bolder',
                fontSize: '30px',
                mt: '40px'
            }}
        >
            Your email has been verified!
        </Typography> */}
        <h1 
            className={`${style["league-spartan-font"]}`}
            style={{
                textAlign: 'center',
                marginTop: '40px'
            }}
        >
            Your email has been verified!
        </h1>
        {text}
        <Box
            sx={{
                textAlign: 'center',
                mt: '50px'
            }}
        >
            <ButtonContainedComp label={"Continue to site"} width={"80%"} className={style['verifiedBtn']}/>
        </Box>
        
        </>
    )
}

export default VerificationComp

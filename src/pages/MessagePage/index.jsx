import { Box, Container, Grid } from "@mui/material";
import React from "react";
import MessagesList from "../../components/MessageList";
import MessageConversation from "../../components/MessageConversation";
import Notifications from "../../components/Notifications";
import bgImg from '../../assets/MAINBGbg.png'

const MessagePage = () => {
    return(
        <Box sx={{
                display: "flex",
                alignItems: "stretch",
                backgroundImage:`url(${bgImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "100vh",
                padding: "25px"
        }}>
            <Container maxWidth="lg">
                <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={3.5}>
                            <Box  sx={{display: 'flex', flexDirection: 'column', height: '100vh' }}>
                                <MessagesList />
                            </Box>
                        </Grid>
                        <Grid item xs={5.5}>
                            <Box sx={{display: 'flex', flexDirection: 'column', height: '100vh' }}>
                                <MessageConversation />
                            </Box>
                        </Grid>
                        <Grid item xs={3}> 
                            <Box sx={{display: 'flex', flexDirection: 'column', height: '100vh' }}>
                                <Notifications />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
        
        
    )
}

export default MessagePage;
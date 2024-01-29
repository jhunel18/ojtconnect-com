import { Box, Container, Grid, Hidden } from "@mui/material";
import React, { useState } from "react";
import MessagesList from "../../components/MessageList";
import MessageConversation from "../../components/MessageConversation";
import Notifications from "../../components/Notifications";
import bgImg from '../../assets/MAINBGbg.png'

const MessagePage = () => {
    const [selectedMessage, setSelectedMessage] = useState(null);

    const handleSelectedMessage = (messageId) => {
        setSelectedMessage(messageId);
    };
    return(
        <Grid container spacing={0}>
            <Hidden smDown mdDown>
                <Grid item xs={12}>
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
                </Grid>
            </Hidden>
            <Hidden mdUp smDown>
                <Grid item xs={12}>
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
                                    <Grid item xs={5}>
                                        <Box  sx={{display: 'flex', flexDirection: 'column', height: '100vh' }}>
                                            <MessagesList />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={7}>
                                        <Box sx={{display: 'flex', flexDirection: 'column', height: '100vh' }}>
                                            <MessageConversation />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Container>
                    </Box>
                </Grid>
            </Hidden>
            <Hidden smUp lgUp only={['md', 'xl']} implementation="js">
                <Grid item xs={12}>
                    <Box>
                        <Grid>
                            <Grid item xs={12}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
                                    <MessagesList onMessageClick={handleSelectedMessage} />
                                    {selectedMessage && <MessageConversation onBackButtonClick={() => handleSelectedMessage(null)} />}
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Hidden>

            
        </Grid>
    )
}

export default MessagePage;
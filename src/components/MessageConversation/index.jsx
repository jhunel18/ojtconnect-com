import { Avatar, Box, Card, CardActions, CardContent, CardHeader, Divider, Hidden, IconButton, InputAdornment, List, ListItem, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MessageBubble from './MessageBubble';
import { customScrollbar } from './style'

const BackButton = ({ onClick }) => (
    <IconButton onClick={onClick} sx={{ color: '#FD9F5A' }}>
        <ArrowBackIcon />
    </IconButton>
);

const MessageConversation = ({ onBackButtonClick }) => {
    const selectedConversationId = useSelector((state) => state.messages.selectedConversationId);
    const conversations = useSelector((state) => state.messages.conversations);
    const messages = useSelector((state) => state.messages.messages);

    // Get the messages for the selected conversation
    const selectedConversationMessages = messages[selectedConversationId] || [];
    // Find the selected conversation based on its ID
    const selectedConversation = conversations.find((conversation) => conversation.id === selectedConversationId);
    // Extract the contact name from the selected conversation
    const contactName = selectedConversation ? selectedConversation.contactName : '';

    const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 600); 
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {selectedConversationId ? (
                <Card sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    height: '100%', 
                    borderRadius: isSmallScreen ? '0' : '20px', 
                    font: "inherit" 
                }}>
                    <Hidden mdUp>
                        <Box sx={{ position: 'absolute', top: '14px', left: '10px', zIndex: 1 }}>
                            <BackButton onClick={onBackButtonClick} />
                        </Box>
                    </Hidden>
                    <CardHeader 
                        sx={{paddingLeft: isSmallScreen ? '50px' : "40px"}}
                        avatar={
                            <Avatar sx={{ bgcolor: "#D9D9D9" }} aria-label="recipe">
                                J
                            </Avatar>
                            }
                        titleTypographyProps={{
                            fontSize: "18px",
                            fontWeight: "Semi-bold",
                            color: "#FD9F5A"
                            }}
                        subheaderTypographyProps={{
                            fontSize: "10px",
                            paddingLeft: "5px",
                            color: "#FD9F5A"
                            }}
                        title={contactName}
                        subheader="Online Now"
                    />
                    <Divider sx={{boxShadow: 1,  margin: '0 25px',}}/>
                    <CardContent 
                        sx={{
                            flex: 1, 
                            overflowY: 'auto', 
                            padding: "0px",
                            ...customScrollbar
                            // '&:hover': {
                            //     backgroundColor: '#0000',
                            //     overflowY: 'scroll',
                            // },
                            // '&::-webkit-scrollbar': {
                            //     width: '12px',
                            // },
                            // '&::-webkit-scrollbar-track': {
                            //     backgroundColor: '#FFF0E7',
                            // },
                            // '&::-webkit-scrollbar-thumb': {
                            //     backgroundColor: '#FF9E6C',
                            //     borderRadius: '6px',
                            //     transition: 'overflow 0.5s ease', 
                            // },
                        }}>
                        <List>
                            {selectedConversationMessages.map((message) => (
                                <MessageBubble key={message.id} message={message} isYou={message.sender === 'You'} />
                            ))}
                        </List>
                    </CardContent>
                    <CardActions sx={{ mt: 'auto', p: 2 }}>
                        <TextField 
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                      borderColor: '#FD9F5B', // Default border color
                                    },
                                    '&:hover fieldset': {
                                      borderColor: '#FD9F5A', // Border color on hover
                                    },
                                    '&.Mui-focused fieldset': {
                                      borderColor: '#FD9F5A', // Border color on focus
                                    },
                                },
                            }}
                            fullWidth 
                            placeholder="Type your message here..." 
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton edge="end" sx={{color: "#FD9F5A"}}>
                                            <SendIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </CardActions>
                </Card>
            ) : (
                <Card sx={{display: 'flex', flexDirection: 'column', textAlign: "center", borderRadius: "20px", color: "#FD9F5A", minHeight: '100%', }}>
                    <CardHeader sx={{minHeight: "40px"}}
                        titleTypographyProps={{
                            fontWeight: "Semi-bold",
                        }}
                        title="No Conversation Selected" 
                    />
                    <Divider sx={{boxShadow: 1,  margin: '0 25px',}}/>
                    <CardContent sx={{flex: 1, display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: "center", textAlign: "center" }}>
                        <List>
                            <Box>
                                <Typography>Please select a conversation to display messages</Typography>
                            </Box>
                        </List>
                    </CardContent>
                </Card>
            )}
            
        </>
    );
}

export default MessageConversation;

import { Avatar, Box, Card, CardActions, CardContent, CardHeader, Divider, IconButton, InputAdornment, List, ListItem, TextField, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import SendIcon from '@mui/icons-material/Send';


const MessageConversation = () => {
    const selectedConversationId = useSelector((state) => state.messages.selectedConversationId);
    const conversations = useSelector((state) => state.messages.conversations);
    const messages = useSelector((state) => state.messages.messages);

    // Get the messages for the selected conversation
    const selectedConversationMessages = messages[selectedConversationId] || [];
    // Find the selected conversation based on its ID
    const selectedConversation = conversations.find((conversation) => conversation.id === selectedConversationId);
    // Extract the contact name from the selected conversation
    const contactName = selectedConversation ? selectedConversation.contactName : '';


    return (
        <>
            {selectedConversationId ? (
                <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', borderRadius: "20px", font: "inherit" }}>
                    <CardHeader 
                        sx={{paddingLeft: "40px"}}
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
                    <CardContent sx={{ flex: 1, overflowY: 'auto' }}>
                        <List>
                            <Box>
                                {selectedConversationMessages.map((message) => (
                                    <ListItem key={message.id}>
                                        <Typography variant='body1'>{message.sender}: </Typography>
                                        <Typography variant='body2'> {message.text}</Typography>
                                    </ListItem>
                                ))}
                            </Box>
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

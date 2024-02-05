import { Avatar, Badge, Box, Card, CardContent, CardHeader, Divider, List, ListItemButton, ListItemText, Stack, ToggleButton, Typography } from '@mui/material'
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectConversation, filterAllMessages, filterUnreadMessages, resetUnreadMessages } from '../../redux/actions/messagesActions'
import { Style } from './style'
import MessageConversation from '../MessageConversation'

const MessagesList = () => {
    const conversations = useSelector((state) => state.messages.conversations)
    const filter = useSelector((state) => state.messages.filter);
    const selectedConversationId = useSelector((state) => state.messages.selectedConversationId);
    const messages = useSelector((state) => state.messages.messages);
    const dispatch = useDispatch();
    const [isHovered, setIsHovered] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [selectedMessage, setSelectedMessage] = useState(null);

    const filterConversations = (conversations, filter) => {
        if (filter === 'Unread') {
            return conversations.filter((conversation) => conversation.unread > 0);
        }
        // For 'All' filter, return all conversations
        return conversations;
    };

    const handleConversationClick = (conversationId, unread) => {
        dispatch(selectConversation(conversationId));
        if (unread > 0) {
            dispatch(resetUnreadMessages(conversationId));
        }
        setSelectedMessage(conversationId); // Always set the selected message
    };

    const handleFilterAll = () => {
        dispatch(filterAllMessages());
        // Always set the selected message to the current selected conversation
        setSelectedMessage(selectedConversationId);
    };
    
    const handleFilterUnread = () => {
        dispatch(filterUnreadMessages());
        // Always set the selected message to the current selected conversation
        setSelectedMessage(selectedConversationId);
    };

    const getLastMessage = (conversationId) => {
        const conversationMessages = messages[conversationId] || [];
        const lastMessage = conversationMessages[conversationMessages.length - 1];
        return lastMessage ? lastMessage.text : '';
    };

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

    const handleSelectedMessage = (messageId) => {
        setSelectedMessage(messageId);
    };

    const filteredConversations = filterConversations(conversations, filter);

    return(
        <>
            <Card sx={{ 
                flex: "1", 
                borderRadius: isSmallScreen ? '0' : '20px',
                margin: "0", 
                overflow: "hidden",
                display: 'flex',
                flexDirection: 'column',
                height: '100%', 
            }}>
                <CardHeader 
                    sx={{...Style.CardHeader}}
                    titleTypographyProps={Style.CardHeaderTitle}
                    title="Messages" 
                />
                <Stack spacing={1} direction="row"  sx={Style.ToggleButton}>
                    <ToggleButton
                        value="All"
                        onClick={handleFilterAll}
                        selected={filter === 'All'}
                        sx={filter === 'All' ? Style.ToggleButton.primary : Style.ToggleButton.secondary}
                    >
                        All
                    </ToggleButton>
                    <ToggleButton
                        value="Unread"
                        onClick={handleFilterUnread}
                        selected={filter === 'Unread'}
                        sx={filter === 'Unread' ? Style.ToggleButton.primary : Style.ToggleButton.secondary}
                    >
                        Unread
                    </ToggleButton>
                </Stack>
                <Divider sx={{boxShadow: 1}}/>
                <CardContent sx={{padding: "0px", ...Style.cardContentScrollbarStyle}}>
                    <Box 
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {filteredConversations.length > 0 ? (
                            filteredConversations.map((conversation) => (
                                <Box key={conversation.id} sx={{display:"flex", flexDirection:"column",}}>
                                    <ListItemButton 
                                        key={conversation.id} 
                                        onClick={() => handleConversationClick(conversation.id, conversation.unread)}
                                        sx={{ backgroundColor: conversation.id === selectedConversationId ? '#f0f0f0' : 'inherit', borderBottom: "1px solid #D5D4DF"}}
                                    >
                                        {/* Render the contact name for both unread and read conversations */}
                                        <Grid container spacing={1}>
                                            <Grid item xs={2.5}>
                                                {conversation.avatar ? (
                                                    <Avatar sx={{width: "50px", height: "50px"}} alt={conversation.contactName} src={conversation.avatar} />
                                                ) : (
                                                    <Avatar sx={{width: "50px", height: "50px", bgcolor: '#FD9F5A' }}>{conversation.contactName.charAt(0).toUpperCase()}</Avatar>
                                                )}
                                            </Grid>
                                            <Grid item xs={8}>
                                                <ListItemText sx={{mb: 0}}
                                                    primary={
                                                        <Typography color={"#FD9F5A"} lineHeight={1}>
                                                            {conversation.contactName}
                                                        </Typography>} 
                                                    secondary={
                                                        <Typography sx={Style.ListItemTextSecondary}>
                                                            {getLastMessage(conversation.id)}
                                                        </Typography>
                                                    }
                                                />
                                                <ListItemText sx={{mt: 0}}
                                                    secondary={
                                                        <Typography sx={{
                                                            ...Style.ListItemTextSecondary,
                                                            fontSize: "9px",
                                                            marginLeft: "10px",
                                                            color: "#FD9F5A"
                                                        }}>
                                                            {conversation.onlineText}
                                                        </Typography>
                                                    }
                                                />
                                            </Grid>
                                            <Grid item xs={1.5} sx={{display: "flex", alignItems: "center"}}>
                                                {/* Render the unread badge for unread conversations */}
                                                {conversation.unread > 0 && (
                                                    <Badge color="primary" badgeContent={conversation.unread} sx={Style.badgeStyle}>
                                                    </Badge>
                                                )}
                                            </Grid>
                                        </Grid>
                                    </ListItemButton>
                                </Box>
                            ))
                        ) : (
                            // Display "No Unread Messages" message
                            <Box sx={{...Style.BoxNotice, minHeight: "70%"}}>
                                <Typography variant='body1'>No Unread Messages</Typography>
                            </Box>
                        )}
                    </Box>
                    
                </CardContent>
            </Card>
            {isSmallScreen && selectedMessage && (
                <MessageConversation selectedConversationId={selectedMessage} onBackButtonClick={() => handleSelectedMessage(null)} />
            )}
        </>
    )
}

export default MessagesList;

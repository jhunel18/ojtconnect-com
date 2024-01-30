import { Avatar, Badge, Box, Card, CardContent, CardHeader, Divider, Grid, List, ListItemButton, ListItemText, Stack, ToggleButton, Typography } from '@mui/material'
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

    const handleConversationClick = (conversationId, unread) => {
        dispatch(selectConversation(conversationId));
        if (unread > 0) {
            dispatch(resetUnreadMessages(conversationId));
        }
        setSelectedMessage(conversationId);
    };

    const handleFilterAll = () => {
        dispatch(filterAllMessages());
    };
    
    const handleFilterUnread = () => {
        dispatch(filterUnreadMessages());
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
    
    return(
        <>
            <Card sx={{ 
                flex: "1", 
                borderRadius: isSmallScreen ? '0' : '20px',
                margin: "0", 
                overflow: "hidden" 
            }}>
                <CardHeader 
                    sx={Style.CardHeader}
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
                <CardContent 
                    sx={{
                        ...Style.cardContentScrollbarStyle,
                        padding: 0,
                        margin: 0,
                        overflowY: "auto",
                        height: '100%'
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <List sx={{padding: "0px"}}>
                    {conversations.map((conversation) => (
                        <Box key={conversation.id} display="flex" flexDirection="column">
                            <ListItemButton 
                                key={conversation.id} 
                                onClick={() => handleConversationClick(conversation.id, conversation.unread)}
                                sx={{ backgroundColor: conversation.id === selectedConversationId ? '#f0f0f0' : 'inherit', borderBottom: "1px solid #D5D4DF"}}
                            >
                                {conversation.unread > 0 && (
                                    <Grid container spacing={1}>
                                        <Grid item xs={2.5}>
                                            <Avatar alt={conversation.contactName.substring(0, 1)} sx={{width: "50px", height: "50px"}}/>
                                        </Grid>
                                        <Grid item xs={8}>
                                        <ListItemText sx={{mb: 0}}
                                                primary={
                                                    <Typography color={"#FD9F5A"} lineHeight={1}>
                                                        {conversation.contactName}
                                                    </Typography>} 
                                                secondary={
                                                        <Typography sx={{
                                                            fontSize: "11px",
                                                            whiteSpace: 'nowrap',
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                            maxWidth: '210px',
                                                            color: "#FD9F5A"
                                                        }}>
                                                            {getLastMessage(conversation.id)}
                                                        </Typography>
                                                }
                                            />
                                             <ListItemText sx={{mt: 0}}
                                                secondary={
                                                    <Typography sx={{
                                                        fontSize: "9px",
                                                        whiteSpace: 'nowrap',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis',
                                                        maxWidth: '210px',
                                                        marginLeft: "10px",
                                                        color: "#FD9F5A"
                                                    }}>
                                                        {conversation.onlineText}
                                                    </Typography>
                                                }
                                            />
                                        </Grid>
                                        <Grid item xs={1.5} sx={{display: "flex", alignItems: "center"}}>
                                            <Badge color="primary" badgeContent={conversation.unread} sx={Style.badgeStyle}>
                                            </Badge>
                                        </Grid>
                                    </Grid>
                                )}
                                {conversation.unread === 0 && (
                                    <Grid container spacing={1}>
                                        <Grid item xs={2.5}>
                                            <Avatar alt={conversation.contactName.substring(0, 1)} sx={{width: "50px", height: "50px"}}/>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <ListItemText sx={{mb: 0}}
                                                primary={
                                                    <Typography color={"#FD9F5A"} lineHeight={1}>
                                                        {conversation.contactName}
                                                    </Typography>} 
                                                secondary={
                                                        <Typography sx={{
                                                            fontSize: "11px",
                                                            whiteSpace: 'nowrap',
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                            maxWidth: '210px',
                                                            color: "#FD9F5A"
                                                        }}>
                                                            {getLastMessage(conversation.id)}
                                                        </Typography>
                                                }
                                            />
                                             <ListItemText sx={{mt: 0}}
                                                secondary={
                                                    <Typography sx={{
                                                        fontSize: "9px",
                                                        whiteSpace: 'nowrap',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis',
                                                        maxWidth: '210px',
                                                        marginLeft: "10px",
                                                        color: "#FD9F5A"
                                                    }}>
                                                        {conversation.onlineText}
                                                    </Typography>
                                                }
                                            />
                                        </Grid>
                                        <Grid item xs={1.5}>
                                            
                                        </Grid>
                                    </Grid>
                                )}
                            </ListItemButton>
                        </Box>
                    ))}
                    </List>
                </CardContent>
            </Card>
            {isSmallScreen && selectedMessage && (
                <MessageConversation selectedConversationId={selectedMessage} onBackButtonClick={() => handleSelectedMessage(null)} />
            )}
        </>
    )
}

export default MessagesList;

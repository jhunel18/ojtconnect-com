import React from 'react';
import { Avatar, Box, ListItem, Typography } from '@mui/material';
import { MsgBblStyle } from './style';

const MessageBubble = ({ message, isYou }) => {
    return (
        <ListItem
            sx={{...MsgBblStyle.ListItem, alignItems: isYou ? 'flex-end' : 'flex-start',}}
        >
            <Box
                sx={{...MsgBblStyle.Box, flexDirection: isYou ? 'row-reverse' : 'row', justifyContent: isYou ? 'end' : 'flex-start',}}
            >
                <Box sx={{ marginRight: isYou ? '0' : '8px', marginLeft: isYou ? '8px' : '0' }}>
                    {message.avatar ? (
                        <Avatar alt={message.sender} src={message.avatar} />
                    ) : (
                        <Avatar sx={{ bgcolor: '#FD9F5A' }}>{message.sender.charAt(0).toUpperCase()}</Avatar>
                    )}
                </Box>
                <Box sx={{ flex: 1, maxWidth: '70%' }}>
                    <Typography variant='subtitle2' sx={{...MsgBblStyle.Typography, textAlign: isYou ? 'right' : 'left' }}>
                        {message.sender}
                    </Typography>
                    <Box
                        sx={{...MsgBblStyle.ChatBox, backgroundColor: isYou ? '#FD9F5A' : '#E3E3E3'}}
                    >
                        <Typography variant='body2'>{message.text}</Typography>
                    </Box>
                </Box>
            </Box>
        </ListItem>
    );
};

export default MessageBubble;

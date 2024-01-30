import React from 'react';
import { Avatar, Box, ListItem, Typography } from '@mui/material';

const MessageBubble = ({ message, isYou }) => {
    return (
        <ListItem
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: isYou ? 'flex-end' : 'flex-start',
                marginTop: '4px',
                marginBottom: '4px',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: isYou ? 'row-reverse' : 'row',
                    alignItems: 'center',
                    justifyContent: isYou ? 'end' : 'flex-start',
                }}
            >
                <Box sx={{ marginRight: isYou ? '0' : '8px', marginLeft: isYou ? '8px' : '0' }}>
                    {message.avatar ? (
                        <Avatar alt={message.sender} src={message.avatar} />
                    ) : (
                        <Avatar sx={{ bgcolor: '#FD9F5A' }}>{message.sender.charAt(0).toUpperCase()}</Avatar>
                    )}
                </Box>
                <Box sx={{ flex: 1, maxWidth: '70%' }}>
                    <Typography variant='subtitle2' sx={{ color: '#FD9F5A', fontSize: '12px', marginBottom: '4px', textAlign: isYou ? 'right' : 'left' }}>
                        {message.sender}
                    </Typography>
                    <Box
                        sx={{
                            backgroundColor: isYou ? '#FD9F5A' : '#E3E3E3',
                            padding: '8px 12px',
                            borderRadius: '8px',
                            wordBreak: 'break-word',
                            textAlign: 'left', // Always left-align the text content
                        }}
                    >
                        <Typography variant='body2'>{message.text}</Typography>
                    </Box>
                </Box>
            </Box>
        </ListItem>
    );
};

export default MessageBubble;

import React from 'react'
import { Box, Typography, Button } from '@mui/material'

const MessageNotifTopComp = ({name, icon, allClick, unreadClick}) => {
  return (
    <>
        <Box display={"flex"} justifyContent={"flex-start"} alignItems={"center"}>
            <Typography variant="h4">{name}</Typography>
            {icon}
        </Box>
        <Box display={"flex"} justifyContent={"flex-start"} alignItems={"center"}>
            
        </Box>
    </>
  )
}

export default MessageNotifTopComp
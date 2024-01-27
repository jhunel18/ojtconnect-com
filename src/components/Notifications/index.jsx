import React, { useState } from "react";
import { Card, CardHeader, Divider, Stack, ToggleButton } from "@mui/material";

const style = ({
    buttonStyle: {
        primary: {
            minWidth:"fit-content", 
            width: "fit-content", 
            fontSize:"0.7rem",
            lineHeight: "1.5",
            textTransform: "capitalize", 
            borderRadius: "20px", 
            color: "#000",
            borderColor: "#0000",
            marginRight: "10px", 
            padding: "1px 16px",
            backgroundColor: '#FD9F5A',
            '&:hover': {
                backgroundColor: '#FD9F5A',
            }
        },
        secondary: {
            minWidth:"fit-content", 
            width:"fit-content", 
            fontSize:"0.7rem",
            lineHeight: "1.5",
            textTransform: "capitalize",
            border: "1px solid #FD9F5A",
            borderRadius: "20px",
            color: '#000',
            '&:hover': {
                color: '#000',
                backgroundColor: '#FD9F5A',
                border: "1px solid #0000",
            },
            padding: "1px 16px"
        }
    }
})

const Notifications = () => {
    const [selectedValue, setSelectedValue] = useState('All');

    const handleSelection = (event, newValue) => {
        // Ensure that one button is always selected
        if (newValue === null) {
        return;
        }

        setSelectedValue(newValue);
    };
    return(
        <Card style={{display: 'flex', flexDirection: 'column', height: '50%', borderRadius: "20px" }}>
            <CardHeader
                style={{padding: "16px 16px 0px"}}
                titleTypographyProps={{
                    fontSize: "18px",
                    fontWeight: "Bold"
                    }}
                title="Notifications"
            />
            <Stack spacing={1} direction="row"  sx={{fontSize: '1rem', padding: "6px 10px 5px 16px"}}>
                    <ToggleButton
                        onChange={handleSelection}
                        value="All"
                        sx={selectedValue === 'All' ? style.buttonStyle.primary : style.buttonStyle.secondary}
                    >
                        All
                    </ToggleButton>
                    <ToggleButton
                        onChange={handleSelection}
                        value="Unread"
                        sx={selectedValue === 'Unread' ? style.buttonStyle.primary : style.buttonStyle.secondary}
                    >
                        Unread
                    </ToggleButton>
                </Stack>
            <Divider sx={{boxShadow: 1}}/>
        </Card>
    )
    
}

export default Notifications;
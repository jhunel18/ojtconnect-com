export const Style = ({
    CardHeader: {
        padding: "16px 16px 0px"
    },
    CardHeaderTitle: {
        fontSize: "18px",
        fontWeight: "Bold"
    },
    ToggleButton: {
        padding: "6px 10px 5px 16px",
        primary: {
            minWidth:"fit-content", 
            width: "fit-content", 
            fontSize:"0.7rem",
            lineHeight: "1.5",
            textTransform: "capitalize", 
            borderRadius: "20px", 
            marginRight: "10px", 
            padding: "1px 16px",
            '&:hover': {
                backgroundColor: '#FD9F5A',
            },
            '&.Mui-selected': {
                backgroundColor: '#FD9F5A',
                '&:hover': {
                    backgroundColor: '#FD9F5A',
                },
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
    },
    ListItemTextSecondary: {
      fontSize: "11px",
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '210px',
      color: "#FD9F5A"
    },
    BoxNotice: {
      color: "#FD9F5A",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      minHeight: "100%" 
    },
    // Custom Card Content Scroll bar
    cardContentScrollbarStyle: {
        flex: 1,
        p: 0,
        '&:last-child': { p: 0 },
        overflowY: 'auto',
        marginRight: '-12px',
        // '&:hover': {
        //     overflowY: 'scroll',
        //     marginRight: '-12px',
        // },
        maxHeight: '100%', // Remove or adjust this line
        height: 'auto', // Add this line to allow dynamic height
        '&::-webkit-scrollbar': {
            width: '12px',
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#0000',
            borderRadius: '6px',
            transition: 'overflow 0.5s ease',
        },
    },
    badgeStyle: {
        margin: "4px 10px",
        "& .MuiBadge-badge": {
            fontWeight: "bold",
            color: "#FFFFFF",
            backgroundColor: "#FD9F5A"
        }
    }
})
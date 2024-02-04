// styles.js
export const customScrollbar = {
  '&::-webkit-scrollbar': {
    width: '9px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#FF9E6C',
    borderRadius: '6px',
    transition: 'background-color 0.3s ease',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    backgroundColor: '#FF9E6C',
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: '#FFF0E7',
    borderRadius: '6px',
    backgroundImage: 'linear-gradient(#FFF0E7, #FFF0E7), linear-gradient(transparent, transparent)',
    backgroundSize: '9px 6px, 9px 6px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top right, bottom right',
  },
};

export const Styles = ({
  Card: {
    display: 'flex', 
    flexDirection: 'column', 
    height: '100%', 
    font: "inherit" 
  },
  CardHeaderTitle: {
    fontSize: "18px",
    fontWeight: "Semi-bold",
    color: "#FD9F5A"
  },
  CardSubHeader: {
    fontSize: "10px",
    paddingLeft: "5px",
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
  CardActionTextBox: {
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
  }
})
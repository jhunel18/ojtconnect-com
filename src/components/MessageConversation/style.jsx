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

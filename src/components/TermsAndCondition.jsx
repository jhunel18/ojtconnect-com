import * as React from 'react';
import { 
     Backdrop, 
     Box, 
     Button, 
     Fade, 
     Modal, 
     Typography}  from '@mui/material'; 



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight: '80vh', 
  overflowY: 'auto',  // Add a scrollbar when content exceeds the height
  backgroundColor: 'background.paper',
  boxShadow: 24,
  padding: '40px',
  borderRadius: '10px',

  '@media (max-width: 800px)': {
    width: '70%',
    padding: '36px 26px'
  },
  '&::-webkit-scrollbar': {
    width: '9px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#FF9E6C',
    borderRadius: '20px',
    transition: 'background-color 0.3s ease',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    backgroundColor: '#FF9E6C',
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: '#FFF0E7',
    borderRadius: '10px',
    backgroundImage: 'linear-gradient(#FFF0E7, #FFF0E7), linear-gradient(transparent, transparent)',
    backgroundSize: '8px 6px, 8px 6px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top right, bottom right',
  },
};





const TermAndCondition = ({modal,setModal}) => {

  const handleClose = () => setModal(false);
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modal}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={modal}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2" sx={{fontWeight:'700'}}>
            OJT Connect Terms and Conditions
            </Typography>
            <Typography 
           
              id="transition-modal-description" 
              sx={{ 
                mt: 2, 
                fontSize:'16px',
                display:'flex',
                flexDirection:'column',
                gap:'10px',
                '@media (max-width: 600px)': {
                    fontSize: '12px',
              },}}
            >
            
             <div>Welcome to OJT Connect, a non-profit job board dedicated to connecting students with employment opportunities. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions:</div>

            <div><span style={{fontWeight:'700'}}>1.User Responsibilities:</span>
            - Users must provide accurate and truthful information when using OJT Connect.
            - It is the user's responsibility to verify the legitimacy of job opportunities listed on the website.
            </div>

            <div><span style={{fontWeight:'700'}}>2. Job Listings:</span>
            - OJT Connect strives to provide accurate and up-to-date job listings but does not guarantee the accuracy or completeness of the information.
            - We are not responsible for the content of job listings posted by third parties.
            </div>

            <div><span style={{fontWeight:'700'}}>3. User Conduct:</span>
            - Users must adhere to ethical and legal standards when using OJT Connect.
            - Any misuse, abuse, or violation of our policies may result in the termination of access.
            </div>

            <div><span style={{fontWeight:'700'}}>4. Third-Party Links:</span>
            - OJT Connect may contain links to third-party websites. We are not responsible for the content or practices of these external sites.
            </div>

            <div><span style={{fontWeight:'700'}}>5. No Warranty:</span>
            - OJT Connect provides the website on an "as-is" basis. We do not guarantee the accuracy, reliability, or availability of the website.
            - OJT Connect is not responsible for any errors or false information on the website.
            - It is the responsibility of businesses to interview and recruit students. OJT Connect is not liable for the hiring decisions made by businesses.
            - OJT Connect is not responsible for scammers posing as students. Users are urged to exercise caution and report suspicious activity.
            </div>

            <div><span style={{fontWeight:'700'}}>6. Limitation of Liability:</span>
            - OJT Connect is not liable for any damages, direct or indirect, that may result from the use of our website.
            - Students and OJT Connect are not liable for any damages caused to businesses hiring students through the platform.
            </div>

            <div><span style={{fontWeight:'700'}}>7. Currency, Gifts, and Services:</span>
            - The exchange of currency, gifts, or services between users is strictly prohibited on OJT Connect to protect businesses from scammers.
            </div>

            <div><span style={{fontWeight:'700'}}>8. Account Termination:</span>
            - OJT Connect reserves the right to ban or terminate any accounts, whether belonging to students or businesses, that do not adhere to the terms and conditions.
            </div>

            <div><span style={{fontWeight:'700'}}>9. Intellectual Property:</span>
            - All content on OJT Connect, including logos and trademarks, is the property of OJT Connect. Unauthorized use is prohibited.
            </div>

            <div><span style={{fontWeight:'700'}}>10. Privacy:</span>
                - OJT Connect respects user privacy. Our Privacy Policy outlines how we collect, use, and protect user information.
            </div>

            <div><span style={{fontWeight:'700'}}>11. Updates to Terms:</span>
                - OJT Connect may update these terms and conditions at any time. Users are encouraged to review them periodically.
            </div>

            <div>
                By using OJT Connect, you acknowledge that you have read, understood, and agree to these terms and conditions. If you do not agree with any part of these terms, please refrain from using our website.
            </div>

            </Typography>
            <div style={{marginTop:'20px'}}>
              <Button 
                onClick={handleClose} variant="contained" 
                sx={{
                    background:'#F26822',
                    '&:hover': {
                        background: '#F26822',  // Original color
                        filter: 'brightness(-1)',        
                      },
                }}
              >
                Close
            </Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default TermAndCondition
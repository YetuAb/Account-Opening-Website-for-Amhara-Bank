import './Footer.css';
import React from 'react';
import {
  BottomNavigation,
  Paper,
  BottomNavigationAction,
} from '@mui/material';
import {
  FacebookOutlined,
  Instagram,
  LinkedIn,
  Telegram,
  Twitter,
  YouTube,
} from '@mui/icons-material';

export const FooterP = () => {
  return (
    <div className='Footer'>
      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
        }}
        elevation={3}
      >
        <BottomNavigation
          className='bottomNav'
          showLabels
        >
          <BottomNavigationAction
            label='Facebook'
            href='https://www.facebook.com/amharabanksc1'
            icon={<FacebookOutlined sx={{ color: '#FFCE03' }} />}
          />
          <BottomNavigationAction
            label='Linkedin'
            href='https://www.linkedin.com/company/amharabank/'
            icon={<LinkedIn sx={{ color: '#FFCE03' }} />}
          />
          <BottomNavigationAction
            label='Telegram'
            href='https://t.me/Amhara_Banksc'
            icon={<Telegram sx={{ color: 'rgb(246, 235, 29)' }} />}
          />
          <BottomNavigationAction
            label='Twitter'
            href='https://twitter.com/Amharabanksc'
            icon={<Twitter sx={{ color: 'rgb(246, 235, 29)' }} />}
          />
          <BottomNavigationAction
            label='Instagram'
            href='https://instagram.com/amhara_bank'
            icon={<Instagram sx={{ color: '#FFCE03' }} />}
          />
          <BottomNavigationAction
            label='Youtube'
            href='https://youtube.com/channel/UC73x9uuGYV0Uxw0EkpVZN8g'
            icon={<YouTube sx={{ color: '#FFCE03' }} />}
          />
          <div className='copyright'>
            <span style={{ fontSize: 'small', marginRight: 0 }}>
              <br />
              <br />
              Copyright© 2022 Amhara Bank S.C. | All rights reserved
            </span>
          </div>
        </BottomNavigation>
      </Paper>
    </div>
  );
};

export default FooterP;

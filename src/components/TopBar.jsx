import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import '../styles/TopBar.css';

const TopBar = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <MailOutlineIcon fontSize="small" />
        <span>admin@kidroot.in</span>
        <PhoneIcon fontSize="small" />
        <span>+91 8237883928</span>
      </div>
      <div className="top-bar-center">Welcome to our store</div>
      <div className="top-bar-right">
        <TwitterIcon className="social-icon" />
        <FacebookIcon className="social-icon" />
        <InstagramIcon className="social-icon" />
        <PinterestIcon className="social-icon" />
        <CloseIcon onClick={() => setVisible(false)} className="close-btn" />
      </div>
    </div>
  );
};

export default TopBar;

// Header.js
import React from 'react';
import MarsImage from './MarsImage';
import '../styles.css';

const Header = () => {
  const marsImageUrl = 'https://source.unsplash.com/random/800x600/?mars'; 

  return (
    <div className="header">
      <div className="logo-and-heading">
        <MarsImage imageUrl={marsImageUrl}  />
        <div className="Mission MARS">
          Mission MARS<br />
          Explore the Red Planet with Us!<br />         
        </div>       
      </div>
    </div>
  );
};

export default Header;

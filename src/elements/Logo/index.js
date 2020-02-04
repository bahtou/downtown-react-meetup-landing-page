import React from 'react';
import logo from 'Images/react-meetup-logo_300x268.png';


const Logo = ({ className='', styles={} }) => {
  return (
    <img className={className} style={styles} src={logo} alt="react-meetup-logo" width="300px" />
  );
};


export default Logo;

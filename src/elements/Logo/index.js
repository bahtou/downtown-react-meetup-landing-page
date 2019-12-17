import React from 'react';
import logo from 'Images/react-meetup-logo_300x268.png';


const Logo = ({ className='' }) => {
  return (
    <img className={className} src={logo} alt="react-meetup-logo" width="300px" />
  );
};


export default Logo;

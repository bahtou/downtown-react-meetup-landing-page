import React from 'react';
import logo from 'Images/gitter_135x135.jpg';


const GitterLogo = ({ className='' }) => {
  return (
    <img className={className} src={logo} alt="gitter-logo" width="135px" />
  );
};


export default GitterLogo;
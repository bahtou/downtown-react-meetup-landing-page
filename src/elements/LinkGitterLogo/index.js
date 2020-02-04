import React from 'react';
import logo from 'Images/gitter_135x135.jpg';


const LinkGitterLogo = ({ className='', styles={} }) => {
  return (
    <a href="https://gitter.im/downtown-reactjs-atx">
      <img className={className} style={styles} src={logo} alt="gitter-logo" width="135px" />
    </a>
  );
};


export default LinkGitterLogo;

import { hot } from 'react-hot-loader/root';
import React from 'react';

import {
  Splash,
  Join,
  Partnerships,
  Speakers,
  AboutUs
} from 'Sections';


const LandingPage = () => {
  return (
    <>
      <Splash />

      <Join />

      <Partnerships />

      <Speakers />

      <AboutUs />
    </>
  );
};


export default hot(LandingPage);

import { hot } from 'react-hot-loader/root';
import React from 'react';

import {
  Splash,
  Community,
  Join,
  Partnerships,
  Speakers,
  AboutUs
} from 'Sections';


const LandingPage = () => (
  <>
    <Splash />

    <Community />

    <Join />

    <Partnerships />

    <Speakers />

    <AboutUs />
  </>
);


export default hot(LandingPage);

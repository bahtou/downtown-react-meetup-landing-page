import './rhlConfig';

import 'Styles/normalizer.css';
import 'Styles/mediaQueries.css';
import 'Styles/global.css';

import React from 'react';
import { render } from 'react-dom';
import LandingPage from './landingPage.js';


render(
  <LandingPage />,
  document.getElementById('root-entry')
);

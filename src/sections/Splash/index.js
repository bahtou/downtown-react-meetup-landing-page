import React from 'react';

import Logo from 'Elements/Logo';
import {
  splashLayout, heroBlock,
  title, logo, location,
  navBlock, navList, listItem
} from './styles.css';


const Splash = () => (
  <section className={splashLayout}>
    <div className={heroBlock}>
      <h1 className={title}>Downtown ReactJS</h1>
      <Logo className={logo} />
      <h2 className={location}>Austin, TX</h2>
    </div>

    <nav className={navBlock}>
      <ul className={navList}>
        <li className={listItem}>
          <a href="#community">Community</a>
        </li>
        <li className={listItem}>
          <a href="#join">Join</a>
        </li>
        <li className={listItem}>
          <a href="#partnership">Partnership</a>
        </li>
        <li className={listItem}>
          <a href="#speakers">Speakers</a>
        </li>
        <li className={listItem}>
          <a href="#aboutus">About Us</a>
        </li>
      </ul>
    </nav>
  </section>
);


export default Splash;

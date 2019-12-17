import React from 'react';

import Logo from 'Elements/Logo';
import {
  sectionLayout,
  heroBlock, title, logo, location,
  navBlock, navList
} from './styles.css';


const Splash = () => {
  return (
    <section className={sectionLayout}>
      <div className={heroBlock}>
        <h1 className={title}>Downtown ReactJS</h1>
        <Logo className={logo}/>
        <h2 className={location}>Austin, TX</h2>
      </div>

      <nav className={navBlock}>
        <ul className={navList}>
          <li>
            <a href="#community"><h3>Community</h3></a>
          </li>
          <li>
            <a href="#join">Join</a>
          </li>
          <li>
            <a href="#partnership">Partnership</a>
          </li>
          <li>
            <a href="#speakers">Speakers</a>
          </li>
          <li>
            <a href="#aboutus">About Us</a>
          </li>
        </ul>
      </nav>
    </section>
  );
};


export default Splash;

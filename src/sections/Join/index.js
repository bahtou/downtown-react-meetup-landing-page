import React, { useState } from 'react';

import { FormSubmitButton } from 'Elements';
import {
  joinLayout, formBlock,
  formTitle, formSubtitle, formButton,
  joinForm, cta, ctaText, ctaLogo
} from './style.css';

import GitterLogo from 'Elements/GitterLogo';

const Join = () => {
  const [email, setEmail] = useState('');
  
  function handleSubmit(event) {
    alert('form submitted');
    event.preventDefault();
  }

  return (
    <section id="join" className={joinLayout}>
      <div className={formBlock}>
        <h1 className={formTitle}>Join</h1>
        <span className={formSubtitle}>Subscribe to monthly meetup events & get notified of upcoming events like community workshops, hackathons, presentations and recordings.</span>

        <form id="joinForm" className={joinForm} onSubmit={handleSubmit}>          
          <input id='joinEmail' type="text" value={email} onChange={ev => setEmail(ev.target.value)} required />          
          <FormSubmitButton className={formButton}>Subscribe</FormSubmitButton>
        </form>
        <div className={cta}>
          <span className={ctaText}>Have ReactJS questions? Seeking resources? Want to help others? Join our Gitter group!</span>
        </div>
        <div className={ctaLogo}>
          <a href='https://google.com'>
            <GitterLogo/>
          </a>
        </div>
      </div>
    </section>
  );
};


export default Join;

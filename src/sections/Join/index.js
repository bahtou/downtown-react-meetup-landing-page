import React, { useState } from 'react';

import { LinkGitterLogo, FormSubmitButton } from 'Elements';
import {
  sectionLayout, sectionBlock,
  sectionTitle, sectionSubtitle,
  joinForm, formSubmitButton, cta, ctaText
} from './style.css';


const Join = () => {
  const [email, setEmail] = useState('');

  function handleSubmit(event) {
    alert('form submitted');
    event.preventDefault();
  }

  return (
    <section id="join" className={sectionLayout}>
      <div className={sectionBlock}>
        <h1 className={sectionTitle}>Join</h1>
        <span className={sectionSubtitle}>Subscribe to monthly meetup events & get notified of upcoming events like community workshops, hackathons, presentations and recordings.</span>

        <form id="joinForm" className={joinForm} onSubmit={handleSubmit}>
          <input id="joinEmail" type="text" value={email} onChange={ev => setEmail(ev.target.value)} required />
          <FormSubmitButton className={formSubmitButton}>Subscribe</FormSubmitButton>
        </form>

        <div className={cta}>
          <span className={ctaText}>Have ReactJS questions? Seeking resources? Want to help others? Join our Gitter group!</span>
          <LinkGitterLogo />
        </div>
      </div>
    </section>
  );
};


export default Join;

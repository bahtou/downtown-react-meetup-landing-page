import React, { useState } from 'react';

import { FormButton, FormTextField } from 'Elements';
import {
  sectionLayout, block,
  title, partnershipForm,
  checkboxList
} from './style.css';


const Partnerships = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(event) {
    alert('form submitted');
    event.preventDefault();
  }

  return (
    <section id="partnership" className={sectionLayout}>
      <div className={block}>
        <h1 className={title}>Partnership</h1>
        <span>Interested in sponsoring?</span>

        <form
          id="partnershipForm"
          className={partnershipForm}
          onSubmit={handleSubmit}>

          <fieldset>
            <FormTextField
              name="Name"
              value={name}
              onChange={ev => setName(ev.target.value)}
              required />

            <FormTextField
              name="Email"
              value={email}
              onChange={ev => setEmail(ev.target.value)}
              required />

            <div>
              <label htmlFor="name">Job Title *</label>
              <input type="text" />
            </div>

            <div>
              <label htmlFor="name">Company *</label>
              <input type="text" />
            </div>

          </fieldset>
          <fieldset>
            <legend>How would you like to partner up? *</legend>
            <ul className={checkboxList}>
              <li>
                <label htmlFor="venue">Venue</label>
                <input id="venue" type="checkbox" value="venue" />
              </li>
              <li>
                <input id="food" type="checkbox" value="food" />
                <label htmlFor="food">Food</label>
              </li>
              <li>
                <input id="drinks" type="checkbox" value="drinks" />
                <label htmlFor="drinks">Drinks</label>
              </li>
              <li>
                <input id="speakers" type="checkbox" value="speakers" />
                <label htmlFor="speakers">Speakers</label>
              </li>
              <li>
                <input id="workshop" type="checkbox" value="workshop" />
                <label htmlFor="workshop">Workshop</label>
              </li>
              <li>
                <input id="hackathon" type="checkbox" value="hackathon" />
                <label htmlFor="hackathon">Hackathon</label>
              </li>
            </ul>
          </fieldset>

          <FormButton styles={{ alignSelf: 'center' }}>Submit</FormButton>
        </form>
      </div>

    </section>
  );
};


export default Partnerships;

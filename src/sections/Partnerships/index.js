import React, { useState } from 'react';

import { FormButton, FormCheckbox, FormTextInput } from 'Elements';
import {
  partnershipLayout, formBlock,
  formTitle, formSubtitle, formButton,
  partnershipForm, inputFields, checkboxFields,
  checkboxList
} from './style.css';


const Partnerships = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');

  function handleSubmit(event) {
    alert('form submitted');
    event.preventDefault();
  }

  return (
    <section id="partnership" className={partnershipLayout}>
      <div className={formBlock}>
        <h1 className={formTitle}>Partnership</h1>
        <span className={formSubtitle}>Interested in sponsoring?</span>

        <form id="partnershipForm" className={partnershipForm} onSubmit={handleSubmit}>
          <fieldset className={inputFields}>
            <FormTextInput
              name="Name *"
              value={name}
              onChange={ev => setName(ev.target.value)}
              required />

            <FormTextInput
              name="Email *"
              value={email}
              onChange={ev => setEmail(ev.target.value)}
              required />

            <FormTextInput
              name="Job Title *"
              value={jobTitle}
              onChange={ev => setJobTitle(ev.target.value)}
              required />

            <FormTextInput
              name="Company Name *"
              value={companyName}
              onChange={ev => setCompanyName(ev.target.value)}
              required />
          </fieldset>

          <fieldset className={checkboxFields}>
            <legend>How would you like to partner up? *</legend>
            <ul className={checkboxList}>
              <FormCheckbox
                name="Venue"
                value="venue" />

              <FormCheckbox
                name="Food"
                value="food" />

              <FormCheckbox
                name="Drinks"
                value="drinks" />

              <FormCheckbox
                name="Speakers"
                value="speakers" />

              <FormCheckbox
                name="Workshop"
                value="workshop" />

              <FormCheckbox
                name="Hackathon"
                value="hackathon" />
            </ul>
          </fieldset>

          <FormButton className={formButton}>Submit</FormButton>
        </form>
      </div>

    </section>
  );
};


export default Partnerships;

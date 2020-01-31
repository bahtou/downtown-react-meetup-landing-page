import React, { useState } from 'react';

import { FormSubmitButton, FormCheckbox, FormTextInput } from 'Elements';
import {
  sectionLayout, sectionBlock,
  sectionTitle, sectionSubtitle, formButton,
  partnershipForm, inputFields, checkboxFields,
  checkboxList
} from './style.css';

// ['venue', 'food', 'drinks', 'speakers', 'workshop', 'hackathon']

const Partnerships = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [checkedboxes, setCheckedboxes] = useState([]);

  function handleCheckboxChange(ev) {
    const { checked, value } = ev.target;

    const newCheckedboxes = checked
      ? [...checkedboxes, value]
      : checkedboxes.filter(el => el !== value);

    setCheckedboxes(newCheckedboxes);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`form submitted ${JSON.stringify({ name, email, jobTitle, companyName, checkedboxes })}`);
  }

  return (
    <section id="partnership" className={sectionLayout}>
      <div className={sectionBlock}>
        <h1 className={sectionTitle}>Partnership</h1>
        <span className={sectionSubtitle}>Interested in sponsoring?</span>

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
                value="venue"
                onChange={handleCheckboxChange} />

              <FormCheckbox
                name="Food"
                value="food"
                onChange={handleCheckboxChange} />

              <FormCheckbox
                name="Drinks"
                value="drinks"
                onChange={handleCheckboxChange} />

              <FormCheckbox
                name="Speakers"
                value="speakers"
                onChange={handleCheckboxChange} />

              <FormCheckbox
                name="Workshop"
                value="workshop"
                onChange={handleCheckboxChange} />

              <FormCheckbox
                name="Hackathon"
                value="hackathon"
                onChange={handleCheckboxChange} />
            </ul>
          </fieldset>

          <div className={formButton}>
            <FormSubmitButton>Submit</FormSubmitButton>
          </div>
        </form>
      </div>

    </section>
  );
};


export default Partnerships;

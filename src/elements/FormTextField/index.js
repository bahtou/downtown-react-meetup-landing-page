import React from 'react';
import { formText } from './styles.css';


function FormTextField({
  name='form text',
  required=false,
  value='',
  onChange,
  styles={}
}) {
  if (required) {
    name = `${name} *`;
  }

  return (
    <div className={formText}>
      <label htmlFor={name}>{name}</label>
      <input id={name} type="text" value={value} onChange={onChange} required={required} />
    </div>
  );
}


export default FormTextField;

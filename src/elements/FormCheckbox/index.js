import React from 'react';
import { formCheckbox } from './styles.css';


function FormCheckbox({
  name='form checkbox',
  value='',
  onChange,
  className='',
  styles={}
}) {
  return (
    <li className={`${formCheckbox} ${className}`} style={styles}>
      <label htmlFor={name}>
        <input id={name} type="checkbox" value={value} onChange={onChange} />
        <span>{name}</span>
      </label>
    </li>
  );
}


export default FormCheckbox;

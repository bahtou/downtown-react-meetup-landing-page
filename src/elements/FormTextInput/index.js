import React from 'react';
import { formText } from './styles.css';


function FormTextInput({
  name='form text',
  required=false,
  value='',
  onChange,
  className='',
  styles={}
}) {
  return (
    <div className={`${formText} ${className}`} style={styles}>
      <label htmlFor={name}>{name}</label>
      <input id={name} type="text" value={value} onChange={onChange} required={required} />
    </div>
  );
}


export default FormTextInput;

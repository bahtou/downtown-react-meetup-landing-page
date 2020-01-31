import React from 'react';
import { formButton } from './styles.css';


function FormButton({ children='form button', className='', styles={} }) {
  return (
    <input
      className={`${formButton} ${className}`}
      style={styles}
      type="submit"
      value={children} />
  );
}


export default FormButton;

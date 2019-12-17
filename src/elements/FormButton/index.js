import React from 'react';
import { formButton } from './styles.css';


function FormButton({ children="form button", styles={} }) {
  return (
    <input className={formButton}
      style={styles}
      type="submit"
      value={children} />
  );
}


export default FormButton;

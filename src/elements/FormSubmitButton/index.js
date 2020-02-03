import React from 'react';
import { formSubmitButton } from './styles.css';


function FormSubmitButton({ children='form button', className='', styles={} }) {
  return (
    <button
      className={`${formSubmitButton} ${className}`}
      style={styles}
      type="submit">
      { children }
    </button>
  );
}


export default FormSubmitButton;


const modifiers = {
  light: {
    color: '#777',
    '--pressed-color': '#333'
  }
};

const behaviours = {
  pressed: {
    color: 'var(--pressed-color, #777)'
  }
};

const style = ({ modifier, behaviour }) => {
  return {
    fontSize: '1em', // Default Styles
    ...modifiers[modifier], // Apply Modifiers
    ...behaviours[behaviour] // Apply Behaviours
  };
};

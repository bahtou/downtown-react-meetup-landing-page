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

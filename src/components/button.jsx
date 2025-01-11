import React from 'react';
import '../pages/App.css';

const Button = ({ label, onClick, image }) => {
  return <button className='ComponentButton' onClick={onClick}>{image}{label}</button>;
};

export default Button;

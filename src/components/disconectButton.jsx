import React from 'react';
import '../pages/App.css';

const DisButton = ({ label, onClick, image }) => {
  return <button className='ComponentButton2' onClick={onClick}>{image}{label}</button>;
};

export default DisButton;
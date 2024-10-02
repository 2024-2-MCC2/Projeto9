import React from 'react';
import backgroundImage from '../assets/BackGround.png';

const Background = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1
  };

  return <div style={backgroundStyle}></div>;
};

export default Background;  

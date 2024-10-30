import React from 'react';
import backgroundImage from '../assets/BackGround.png';

const Background = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: -1,
  };

  return <div style={backgroundStyle}></div>;
};

export default Background;




import React from 'react';
import logo from './logo.svg';
import './splash-screen.css';

function SplashScreen() {
  return (
    <div className="SplashScreen">
      <img src={logo} className="SplashScreen-logo" alt="logo" />
    </div>
  );
}

export default SplashScreen;

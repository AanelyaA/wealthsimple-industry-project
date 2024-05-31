import React from 'react';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom'; 
import animationData from '../../../public/animation/Animation.json'; 
import './IntroPage.scss';

const AnimatedPage = () => {
  return (
    <div className="animated-page">
      <div className="animation-section">
        <Lottie animationData={animationData} loop={true} autoplay={true} className="animation" />
      </div>
      <div className="button-section">
        <Link to="/login" className="login-button">Login</Link>
        <button className="signup-button">Signup</button>
      </div>
    </div>
  );
};

export default AnimatedPage;

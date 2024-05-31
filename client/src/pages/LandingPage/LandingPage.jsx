import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.scss'; 
import videoSrc from '../../assets/Flex-Logo.mp4'; // Make sure the path is correct

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/intro');
    }, 7000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="landing-page">
      <div className="video-container">
        <video src={videoSrc} autoPlay loop muted />
      </div>
      <h1>Grow your money</h1>
      <p>Build long-term wealth with smart investing tools and personalized advice. Trusted by millions of Canadians.</p>
      <div className="buttons">
        <button className="sign-up">Sign up</button>
        <button className="log-in">Log in</button>
      </div>
      <div className="pagination">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default LandingPage;

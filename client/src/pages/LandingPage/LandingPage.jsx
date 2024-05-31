import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.scss';
import videoSrc from '../../../public/images/FlexLogo.mp4'; // Make sure the path is correct
import logoImage from '../../../public/images/logo.png'
const LandingPage = () => {
  const navigate = useNavigate();
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       navigate('/intro');
//     }, 7000);
//     return () => clearTimeout(timer);
//   }, [navigate]);

  const handleLogin = () => {
    navigate('/login');
  };
  return (
    <div className="landing-page">
      <div className="video-container">
        <video src={videoSrc} autoPlay loop muted />
      </div>
      <h1>Grow your money</h1>
      <p>Build long-term wealth with smart investing tools and personalized advice. Trusted by millions of Canadians.</p>
      <div className="buttons">
        <button className="sign-up">Sign up</button>
        <button className="log-in" onClick={handleLogin}>Log in</button>
      </div>
      <div className="logo-container">
        <img src={logoImage} alt="Logo" className="logo" />
        {/* <p>Powered by Wealthsimple</p> */}
      </div>
    </div>
  );
};
export default LandingPage;


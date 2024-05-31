import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.scss'; 
import loadingImage from '../../../public/images/hero.png'; 

const LoadingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/intro');
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="loading-container">
      <img src={loadingImage} alt="Loading" className="loading-image" />
      <h1 className="loading-text">Your financial booklet</h1>
    </div>
  );
};

export default LoadingPage;

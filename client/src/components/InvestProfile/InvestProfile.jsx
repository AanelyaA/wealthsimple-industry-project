import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InvestProfile.scss';
import coinIcon from '../../assets/coin.mp4';
import timeIcon from '../../assets/time.mp4';
import profileIcon from '../../assets/profile-icon.png'; // Ensure you have this icon
import quizIcon from '../../assets/quiz-icon.png'; // Ensure you have this icon
import investIcon from '../../assets/invest-icon.png'; // Ensure you have this icon
import savingsIcon from '../../assets/savings-icon.png'; // Ensure you have this icon

const InvestProfile = () => {
    const navigate = useNavigate();

    const handleBackToProfile = () => {
        navigate('/profile');
    };

    return (
        <div className="invest-profile">
            <header className="header">
                <button className="back-button" onClick={handleBackToProfile}>&larr;</button>
                <h1>Rewards</h1>
                <div className="header-icons">
                    <div className="icon-button">
                        <video src={coinIcon} autoPlay loop muted />
                        <span className="icon-badge">120</span>
                    </div>
                    <div className="icon-button">
                        <video src={timeIcon} autoPlay loop muted />
                        <span className="icon-badge">45</span>
                    </div>
                </div>
            </header>
            <div className="balance">
                <h2>$5.00</h2>
            </div>
            <div className="summary-cards">
                <div className="summary-card">
                    <h3>Rewards Earned</h3>
                    <p>30 Min</p>
                    <span>Expert Time</span>
                    <span className="badge">30 Min</span>
                </div>
                <div className="summary-card">
                    <h3>Rewards Spent</h3>
                    <p>$0.00</p>
                    <span>This month</span>
                    <span className="badge">2% cashback</span>
                </div>
            </div>
            <div className="actions">
                <button className="action-button">Add funds</button>
                <button className="action-button">Pay a bill</button>
                <button className="action-button">Transfer Money</button>
                <button className="action-button">Explore Stocks</button>
            </div>
            <div className="offer-banner">
                <p>
                Earn extra rewards by referring friends to FLEX. Unlock an additional 0.5% interest when your referrals sign up and make a deposit of $500 or more.Terms Apply.
                </p>
                <button className="banner-button">&rarr;</button>
            </div>
            <footer className="footer">
                <nav className="nav-bar">
                    <button className="nav-button" onClick={() => navigate('/profile')}>
                        <img src={profileIcon} alt="Profile" />
                    </button>
                    <button className="nav-button" onClick={() => navigate('/quiz')}>
                        <img src={quizIcon} alt="Quiz" />
                    </button>
                    <button className="nav-button" onClick={() => navigate('/invest')}>
                        <img src={investIcon} alt="Invest" />
                    </button>
                    <button className="nav-button" onClick={() => navigate('/savings')}>
                        <img src={savingsIcon} alt="Savings" />
                    </button>
                </nav>
            </footer>
        </div>
    );
};

export default InvestProfile;

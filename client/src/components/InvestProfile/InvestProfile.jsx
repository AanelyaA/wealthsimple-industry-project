import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './InvestProfile.scss';
import ReferralModal from '../ReferralModal/ReferralModal'; // Import the modal component
import coinIcon from '../../assets/coin.mp4';
import timeIcon from '../../assets/time.mp4';
import profileIcon from '../../assets/profile-icon.png';
import quizIcon from '../../assets/quiz-icon.png';
import investIcon from '../../assets/invest-icon.png';
import savingsIcon from '../../assets/savings-icon.png';

const InvestProfile = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleBackToProfile = () => {
        navigate('/profile');
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
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
                <p>Your current rewards balance</p>
            </div>
            <div className="summary-cards">
                <div className="summary-card">
                    <h3>Rewards Earned</h3>
                    <p>30 min</p>
                    <p>Expert Time</p>
                    <span className="badge">30 min</span>
                </div>
                <div className="summary-card">
                    <h3>Rewards Spent</h3>
                    <p>$0.00</p>
                    <span>This month</span>
                    <span className="badge">1% Cashback</span>
                </div>
            </div>
            <div className="actions">
                <button className="action-button">Deposit Funds</button>
                <button className="action-button">Settle Bills</button>
                <button className="action-button">Transfer Money</button>
                <button className="action-button">Explore Options</button>
            </div>
            <div className="offer-banner">
                <p>
                    Earn extra rewards by referring friends to FLEX. Unlock an additional 0.5% interest when your referrals sign up and make a deposit of $500 or more.
                </p>
                <button className="banner-button" onClick={openModal}>&rarr;</button>
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
            <ReferralModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default InvestProfile;

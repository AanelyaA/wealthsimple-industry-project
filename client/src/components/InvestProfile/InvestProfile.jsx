import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InvestProfile.scss';

const InvestProfile = () => {
    const navigate = useNavigate();

    const handleBackToProfile = () => {
        navigate('/profile');
    };

    return (
        <div className="invest-profile">
            <header className="header">
                <button className="back-button" onClick={handleBackToProfile}>&larr;</button>
                <h1>Cash</h1>
                <div className="header-icons">
                    <button className="icon-button">
                        <img src="card-icon.svg" alt="Card" />
                    </button>
                    <button className="icon-button">
                        <img src="settings-icon.svg" alt="Settings" />
                    </button>
                </div>
            </header>
            <div className="balance">
                <h2>$5.00</h2>
            </div>
            <div className="summary-cards">
                <div className="summary-card">
                    <h3>Earned interest</h3>
                    <p>$0.01</p>
                    <span>This month</span>
                    <span className="badge">4% interest</span>
                </div>
                <div className="summary-card">
                    <h3>Spend rewards</h3>
                    <p>$0.00</p>
                    <span>This month</span>
                    <span className="badge">1% cash</span>
                </div>
            </div>
            <div className="actions">
                <button className="action-button">Add funds</button>
                <button className="action-button">Pay a bill</button>
                <button className="action-button">Send or request</button>
                <button className="action-button">More</button>
            </div>
            <div className="offer-banner">
                <p>
                    Earn up to 4.5% interest with your paycheque. Unlock an extra 0.5% interest when you direct deposit at least $2,000 a month. Terms apply.
                </p>
                <button className="banner-button">&rarr;</button>
            </div>
            <footer className="footer">
                <button className="footer-button">Activity</button>
                <button className="footer-button">Requests</button>
            </footer>
        </div>
    );
};

export default InvestProfile;

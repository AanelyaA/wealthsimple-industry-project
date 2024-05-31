import React from 'react';
import './ReferralModal.scss';

const ReferralModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>&times;</button>
                <div className="modal-header">
                    <img src="referral-icon.png" alt="Referral Image" />
                    <h2>Refer Friends and Earn More</h2>
                </div>
                <div className="modal-body">
                    <p>Refer your friends to FLEX and earn extra rewards. For each friend who signs up and makes a deposit of $500 or more, you’ll earn an additional 0.5% interest.</p>
                    <p><strong>May earnings so far: $5.00</strong></p>
                </div>
                <div className="modal-footer">
                    <button className="learn-more-button">Learn More &rarr;</button>
                </div>
            </div>
        </div>
    );
};

export default ReferralModal;

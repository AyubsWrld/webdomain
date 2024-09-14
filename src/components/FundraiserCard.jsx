import React from 'react';
import './FundraiserCard.css';

const FundraiserCard = ({ 
  title = "Fundraiser Title", 
  description = "This is a default description for the fundraiser. Please provide a custom description to replace this text.",
  imageUrl, 
  goal = 10000, 
  currentAmount = 0 
}) => {
  const progressPercentage = (currentAmount / goal) * 100;

  return (
    <div className="fundraiser-card">
      {imageUrl ? (
        <img src={imageUrl} alt={title} className="fundraiser-image" />
      ) : (
        <div className="fundraiser-image default-image"></div>
      )}
      <h2 className="fundraiser-title">{title}</h2>
      <p className="fundraiser-description">{description}</p>
      <div className="fundraiser-progress">
        <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
      </div>
      <div className="fundraiser-details">
        <div>
          <span className="fundraiser-goal">Raised: ${currentAmount.toLocaleString()}</span>
          <br />
          <span className="fundraiser-goal">Goal: ${goal.toLocaleString()}</span>
        </div>
        <button className="donate-button">Donate</button>
      </div>
    </div>
  );
};

export default FundraiserCard;

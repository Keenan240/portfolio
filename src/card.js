import React from 'react';
import './Card.css'; // We'll put our styles in this separate CSS file for better readability
import arrow from './images/arrow-narrow-right.png';

function Card() {
  return (
    <div className="card-container">
      <div className="card-background" />
      <div className="card-image-container" />
      <div className="card-title">Title</div>
      <div className="card-subtitle">Learn More</div>
      <div className="card-icon-container">
        <img src={arrow} alt="card icon" className="card-icon" />
      </div>
    </div>
  );
}

export default Card;

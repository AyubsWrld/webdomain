import React from 'react';
import './Landing.css';

export default function Landing() {
  return (
    <div className="landing-container">
      <header className="header">
        <div className="logo">
          <div className="logo-circle"></div>
          <span>Sahaba Mosque.</span>
        </div>
      </header>
      <main className="main-content">
        <div className="left-section">
          <p className="welcome-text">Welcome to Sahaba Mosque</p>
          <h1 className="main-heading">
            Welcome to<br />
            Sahaba Mosque, a<br />
            <span className="highlight">sanctuary of unity.</span>
          </h1>
          <button className="join-button">Join Us</button>
        </div>
        <div className="right-section">
          {/* Placeholder for right side content or image */}
        </div>
      </main>
    </div>
  );
}

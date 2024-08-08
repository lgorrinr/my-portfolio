import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
import robotChefLogo from '../image/Robot-Chef.png';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-logo">
          <img src={robotChefLogo} alt="Robot Chef Logo" />
        </div>
        <div className="home-text">
          <h1><b>Lissette Gorrin</b></h1>
          <p>
          Expert Digital Marketer specializing in Social Media and Video Production.
          </p>
          <div className="home-buttons">
            <button onClick={() => navigate('/register')} className="btn">Register</button>
            <button onClick={() => navigate('/login')} className="btn">Log In</button>
          </div>
        </div>
      </div>
    <div className="home"></div>
      <div className="hero">
        <h1>Lissette Gorrin</h1>
        <p>Expert Digital Marketer specializing in Social Media and Video Production.</p>
        <Link to="/about" className="cta">Learn More</Link>
      </div>
    </div>
  );
}

export default Home;

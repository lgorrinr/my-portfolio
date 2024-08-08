import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Lissette Gorrin</h1>
        <p>Expert Digital Marketer specializing in Social Media and Video Production.</p>
        <Link to="/about" className="cta">Learn More</Link>
      </div>
    </div>
  );
}

export default Home;

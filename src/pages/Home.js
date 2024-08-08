import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Welcome to My Portfolio</h2>
      <p>Mission Statement</p>
      <Link to="/about">About Me</Link>
    </div>
  );
}

export default Home;

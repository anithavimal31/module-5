
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to TaskMaster</h1>
      <p>Your personal task management solution.</p>
      <div className="cta-buttons">
        <Link to="/login">Log In</Link>
        <Link to="/register">Sign Up</Link>
      </div>
    </div>
  );
};

export default HomePage;

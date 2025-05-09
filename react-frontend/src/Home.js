import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css';
import logo from './logo.jpg';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in
    const token = localStorage.getItem('token');
    if (token) {
      // If logged in, redirect to the products page
      navigate('/products');
    }
  }, [navigate]);

  return (
    <div className="home-wrapper">
      <div className="auth-container">
        <img src={logo} alt="Logo" className="logo" />
        <h3>Welcome to ShopEasy<br/><br/>Find It Fast, Love It Forever </h3>
        <div className="btn-group">
          <button onClick={() => navigate('/register')}>Create Account</button>
          <br/>
          <button onClick={() => navigate('/login')}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Home;

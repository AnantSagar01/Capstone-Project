import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css';
import logo from './logo.jpg';
 
function Home() {
  const navigate = useNavigate();
 
  return (
    <div className="home-wrapper">
      <div className="auth-container">
        <img src={logo} alt="Logo" className="logo" />
        <h2>Welcome to Our Online Store - SHOPEASY</h2>
        <div className="btn-group">
          <button onClick={() => navigate('/register')}>Create Account</button>
          <button onClick={() => navigate('/login')}>Login (Already Have an Account)</button>
        </div>
      </div>
     
    </div>
  );
}
 
export default Home;
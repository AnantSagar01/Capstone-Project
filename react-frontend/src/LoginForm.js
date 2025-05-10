import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AuthPage.css';
 
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
 
  const validateEmail = email => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const validatePassword = password =>
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/.test(password);
 
  const handleLogin = async() => {
    if (!validateEmail(email)) return alert('Invalid Email Format');
    if (!validatePassword(password)) return alert('Password must be 8+ chars, 1 capital, 1 number, 1 symbol');
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
          email: email,
          password: password
      });

      // Handle success response
      let token=response.data.token;
      localStorage.setItem("token",token);
      let name=response.data.name;
      localStorage.setItem("name",name);
      setSuccess('Successfully Logged In!');
      navigate("/products");
      // You can also handle additional data returned from the API if needed
      console.log('Logged in', response.data);
  } catch (error) {
      if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          alert(`Login failed: ${error.response.data.message}`);
          console.error('Error response:', error.response.data);
      } else if (error.request) {
          // The request was made but no response was received
          alert('No response received from the server. Please try again later.');
          console.error('Error request:', error.request);
      } else {
          // Something happened in setting up the request that triggered an Error
          alert('An error occurred during login. Please try again later.');
          console.error('Error:', error.message);
      }
  }
};
  
 
  return (
    <div className="page-wrapper">
      <div className="auth-container">
        <h2>Login</h2>
        <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <div className="password-container">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
          <button className="view-password-btn" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? 'Hide' : 'Show'}
            <span className="eye-icon">{showPassword ? '🙈' : '👁️'}</span>
          </button>
        </div>
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label htmlFor="rememberMe">Remember me</label>
        </div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={() => navigate('/register')}>Sign up</button>
        <p>{success}</p>
      </div>
    </div>
  );
}


 
export default LoginForm;

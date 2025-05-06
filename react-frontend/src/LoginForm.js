import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
 
  const handleLogin = () => {
    if (!validateEmail(email)) return alert('Invalid Email Format');
    if (!validatePassword(password)) return alert('Password must be 8+ chars, 1 capital, 1 number, 1 symbol');
 
    setSuccess('Successfully Logged In!');
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
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={() => navigate(-1)}>Back</button>
        <p>{success}</p>
      </div>
    </div>
  );
}
 
export default LoginForm;
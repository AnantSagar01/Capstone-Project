import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AuthPage.css';
 
function RegisterForm() {
  const [form, setForm] = useState({ first: '', last: '', email: '', password: '', confirm: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
 
  const validateEmail = email => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const validatePassword = password =>
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/.test(password);
 
  const handleRegister = async() => {
    if (!validateEmail(form.email)) return alert('Invalid Email');
    if (!validatePassword(form.password)) return alert('Weak Password');
    if (form.password !== form.confirm) return alert('Passwords do not match');

    try{
        //const response = 
        await axios.post('http://localhost:5000/api/register', {
          firstName: form.first,
          lastName: form.last,
          email: form.email,
          password: form.password,
          confirm_password:form.password
        });
       // console.log(response.data);
        setSuccess('Successfully Registered!');
        setError('');
        
        navigate('/login'); // Navigate to another page if needed
      } 
      catch (error) 
      {
        setError(error.response?.data?.message || 'Registration failed');
        setSuccess('');
      }
};

  
    //setSuccess('Successfully Registered!');

    return (
    <div className="page-wrapper">
      <div className="auth-container">
        <h2>Register</h2>
        <input placeholder="First Name" onChange={e => setForm({ ...form, first: e.target.value })} />
        <input placeholder="Last Name" onChange={e => setForm({ ...form, last: e.target.value })} />
        <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
        <div className="password-container">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            onChange={e => setForm({ ...form, password: e.target.value })}
          />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirm Password"
            onChange={e => setForm({ ...form, confirm: e.target.value })}
          />
          <button className="view-password-btn" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? 'Hide' : 'Show'}
            <span className="eye-icon">{showPassword ? '🙈' : '👁️'}</span>
          </button>
        </div>
        <button onClick={handleRegister}>Sign Up</button>
        <button onClick={() => navigate('/login')}>login</button>
        <p>{success}</p>
      </div>
    </div>
  );

}
export default RegisterForm;

import React from 'react';
import { Link, useLocation ,useNavigate } from 'react-router-dom';
import './ShopEasy.css'; // Ensure this file includes any necessary styles for the navbar
import logo from './logo.jpg'; // Adjust the path to point to the correct logo file


function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
 
  const isActive = (path) => location.pathname === path;
  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem('token');
    console.log('Token removed from localStorage.');

    // Navigate to the home page or login page
    navigate('/login');
  };

 
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="ShopEasy Logo" className="logo-image" />
        <h1 className="logo-text">ShopEasy</h1>
      </div>
      <div className="nav-links">
        <Link to="/" className={isActive('/') ? 'active-link' : ''}>Home</Link>
        <Link to="/products" className={isActive('/products') ? 'active-link' : ''}>Products</Link>
        <Link to="/cart" className={isActive('/cart') ? 'active-link' : ''}>Cart</Link>
        <Link to="/feedback" className={isActive('/feedback') ? 'active-link' : ''}>Feedback</Link>
        <button onClick={handleLogout} className={isActive('/logout') ? 'active-link' : ''}>Logout</button>
      </div>
    </nav>
  );
}
 
export default Navbar;
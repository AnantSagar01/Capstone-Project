import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
 
function Logout() {
  const navigate = useNavigate();
 
  useEffect(() => {
    // Clear the token from localStorage to log out the user
    localStorage.removeItem('token');
 
    // Clear the cart from localStorage when logging out
    localStorage.removeItem('cart');
 
    // Redirect to the login page
    navigate('/login');
  }, [navigate]);
 
  return null; // No UI needed for the logout component
}

export default Logout;
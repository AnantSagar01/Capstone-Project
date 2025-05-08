import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import ProductsPage from './ProductsPage';
import CartPage from './CartPage';
import CheckoutPage from './CheckoutPage';
import FeedbackPage from './FeedbackPage';
import Navbar from './Navbar';
import Footer from './Footer';
import Logout from './LogoutForm'; 
import './ShopEasy.css';

const isAuthenticated = () => {
  return localStorage.getItem('token') !== null;
};

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="/checkout"
            element={isAuthenticated() ? <CheckoutPage /> : <Navigate to="/login" />}
         
          />
        
          <Route path="/feedback" element={<FeedbackPage />} />
          {/* Uncomment the NotFoundPage route if you have a component for handling 404 errors */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

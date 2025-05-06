import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import ProductsPage from './ProductsPage';
import CartPage from './CartPage';
import CheckoutPage from './CheckoutPage';
import FeedbackPage from './FeedbackPage';
import Navbar from './Navbar';
import Footer from './Footer';
import './ShopEasy.css';
 
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
 
export default App;
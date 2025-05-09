
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import ProductsPage from './ProductsPage';
import CartPage from './CartPage';
import CheckoutPage from './CheckoutPage';

import Navbar from './Navbar';
import Footer from './Footer';
import Logout from './LogoutForm';

import ProductDetailsPage from './ProductDetailsPage';

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
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/products/:productId" element={<ProductDetailsPage />} /> {/* New route */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
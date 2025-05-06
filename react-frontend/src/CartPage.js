import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ShopEasy.css';
 
function CartPage() {
  const navigate = useNavigate();
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
 
  const removeItem = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };
 
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
 
  return (
    <div className="page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h4>{item.name}</h4>
              <p>Quantity: {item.quantity}</p>
              <p>Price per item: ₹{item.price}</p>
              <p>Subtotal: ₹{item.price * item.quantity}</p>
              <button onClick={() => removeItem(index)} className="remove-button">Remove Item</button>
            </div>
          </div>
        ))
      )}
      <h3>Total: ₹{total}</h3>
      <button onClick={() => navigate('/checkout')} className="checkout-button">Proceed to Checkout</button>
    </div>
  );
}
 
export default CartPage;
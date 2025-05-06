import React, { useState } from 'react';
import './ShopEasy.css';
 
function CheckoutPage() {
  const [address, setAddress] = useState({
    houseNumber: '',
    colony: '',
    landmark: '',
    pincode: '',
    state: '',
    country: '',
    mobile: '',
  });
 
  const [errors, setErrors] = useState({});
 
  const validate = () => {
    let errors = {};
    if (!address.houseNumber) errors.houseNumber = 'House number is required';
    if (!address.colony) errors.colony = 'Colony name is required';
    if (!address.landmark) errors.landmark = 'Landmark is required';
    if (!address.pincode || !/^\d{6}$/.test(address.pincode)) errors.pincode = 'Valid 6-digit pincode is required';
    if (!address.state) errors.state = 'State is required';
    if (!address.country) errors.country = 'Country is required';
    if (!address.mobile || !/^\d{10}$/.test(address.mobile)) errors.mobile = 'Valid 10-digit mobile number is required';
    return errors;
  };
 
  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert('Order placed successfully!');
      localStorage.removeItem('cart');
      // You can redirect the user to a confirmation page or home page here
    } else {
      setErrors(validationErrors);
    }
  };
 
  return (
    <div className="page checkout-page">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="houseNumber"
            placeholder="House Number"
            value={address.houseNumber}
            onChange={handleChange}
          />
          {errors.houseNumber && <span className="error">{errors.houseNumber}</span>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="colony"
            placeholder="Colony Name"
            value={address.colony}
            onChange={handleChange}
          />
          {errors.colony && <span className="error">{errors.colony}</span>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="landmark"
            placeholder="Landmark"
            value={address.landmark}
            onChange={handleChange}
          />
          {errors.landmark && <span className="error">{errors.landmark}</span>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={address.pincode}
            onChange={handleChange}
          />
          {errors.pincode && <span className="error">{errors.pincode}</span>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="state"
            placeholder="State"
            value={address.state}
            onChange={handleChange}
          />
          {errors.state && <span className="error">{errors.state}</span>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={address.country}
            onChange={handleChange}
          />
          {errors.country && <span className="error">{errors.country}</span>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={address.mobile}
            onChange={handleChange}
          />
          {errors.mobile && <span className="error">{errors.mobile}</span>}
        </div>
        <button type="submit" className="checkout-button">Place Order</button>
      </form>
    </div>
  );
}
 
export default CheckoutPage;
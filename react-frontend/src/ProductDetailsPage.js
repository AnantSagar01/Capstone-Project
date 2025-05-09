import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetailsPage.css';
import Papa from 'papaparse'; // A library to parse CSV files easily


function ProductDetailsPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [newRating, setNewRating] = useState(0);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    const fetchReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/feedback/${productId}`);
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    const fetchFeedbackCSV = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/feedback-csv`, { responseType: 'blob' });
        const text = await response.data.text();
        const parsedData = Papa.parse(text, { header: true });
        console.log(parsedData.data); // Log parsed data to verify
      } catch (error) {
        console.error("Error fetching feedback CSV:", error);
      }
    };

    fetchProductDetails();
    fetchReviews();
    fetchFeedbackCSV();
  }, [productId]);

  const handleReviewSubmit = async () => {
    if (!token) {
      alert("You must have a token to submit a review.");
      return;
    }

    try {
      await axios.post(`http://localhost:8000/api/feedback`, {
        product_id: productId,
        user_name: "Anonymous", // Using a default name since user details are not fetched
        review: newReview,
        rating: newRating,
      });
      setReviews([...reviews, { user_name: "Anonymous", review: newReview, rating: newRating }]);
      setNewReview('');
      setNewRating(0);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    let newCart;

    if (existingProduct) {
      newCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      newCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    alert(`${product.title} added to cart!`);
  };

  const toggleImagePopup = () => {
    setIsImagePopupOpen(!isImagePopupOpen);
  };

  const calculateRatingDistribution = (reviews) => {
    const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    reviews.forEach(review => {
      distribution[review.rating]++;
    });
    return distribution;
  };
  
  const ratingDistribution = calculateRatingDistribution(reviews);
  const totalReviews = reviews.length;

  if (!product) return <div className="loading">Loading...</div>;


  return (
    <div className="product-details-container">
      <div className="product-details-left">
        <h1 className="product-title">{product.title}</h1>
        <img className="product-image" src={product.image} alt={product.title} onClick={toggleImagePopup} />
        <p className="product-description">{product.description}</p>
        <strong className="product-price">Price: ₹{product.price}</strong>
        <div className="product-rating">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={`star ${i < product.rating ? 'filled' : ''}`}>★</span>
          ))}
        </div>
        <button className="add-to-cart-button" onClick={() => addToCart(product)}>Add to Cart</button>
      </div>

      

      <div className="product-details-right">
        <div className="customer-reviews">
        <h2>Customer Reviews</h2>
        {Object.entries(ratingDistribution).map(([rating, count]) => (
          <div key={rating} className="review-bar">
            <span>{rating} star</span>
            <div className="bar-container">
              <div className="bar" style={{ width: `${(count / totalReviews) * 100}%` }}></div>
            </div>
            <span>{((count / totalReviews) * 100).toFixed(1)}%</span>
          </div>
          ))}
        </div>
        <div className="reviews-section">
          <h2>Reviews</h2>
          <ul className="reviews-list">
            {reviews.map((review, index) => (
              <li key={index} className="review-item">
                <strong>{review.user_name}</strong>: {review.review} - 
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className={`star ${i < review.rating ? 'filled' : ''}`}>★</span>
                ))}
              </li>
            ))}
          </ul>

          {token ? (
            <div className="review-form">
              <h2>Write a Review</h2>
              <textarea
                className="review-textarea"
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
                placeholder="Write your review here..."
              />
              <div className="rating-select">
                <label>Rating: </label>
                <select value={newRating} onChange={(e) => setNewRating(Number(e.target.value))}>
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <option key={rating} value={rating}>{rating}</option>
                  ))}
                </select>
              </div>
              <button className="submit-review-button" onClick={handleReviewSubmit}>Submit Review</button>
            </div>
          ) : (
            <p>Please log in to write a review.</p>
          )}
        </div>
      </div>

      {isImagePopupOpen && (
        <div className="image-popup" onClick={toggleImagePopup}>
          <img className="image-popup-content" src={product.image} alt={product.title} />
        </div>
      )}
    </div>
  );
}

export default ProductDetailsPage;
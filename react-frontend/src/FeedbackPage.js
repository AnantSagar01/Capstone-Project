import React, { useState } from 'react';
import './ShopEasy.css';
 
function FeedbackPage() {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
 
  const submitFeedback = () => {
    alert(`Thank you for your feedback and rating of ${rating} stars!`);
    setFeedback('');
    setRating(0);
  };
 
  const handleStarClick = (index) => {
    setRating(index);
  };
 
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`star ${i < rating ? 'filled' : ''}`}
        onClick={() => handleStarClick(i + 1)}
      >
        ★
      </span>
    ));
  };
 
  return (
    <div className="page feedback-page">
      <h2>Feedback</h2>
      <div className="form-group">
        <textarea
          className="feedback-textarea"
          placeholder="Share your experience..."
          value={feedback}
          onChange={e => setFeedback(e.target.value)}
        />
        <div className="progress-bar" style={{ width: `${feedback.length > 100 ? 100 : feedback.length}%` }} />
      </div>
      <div className="rating">
        {renderStars()}
      </div>
      <button className="feedback-button" onClick={submitFeedback}>Submit Feedback</button>
    </div>
  );
}
 
export default FeedbackPage;
 
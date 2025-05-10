const mongoose = require('mongoose');
 
const UserSchema = new mongoose.Schema({
  purchaseHistory: [
    {
      productId: { type: String },
      purchaseDate: { type: Date, default: Date.now }
    }
  ]
});

module.exports = mongoose.model('User', UserSchema);  

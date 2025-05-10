const mongoose = require('mongoose');
 
const UserSchema = new mongoose.Schema({
 firstname: { type: String},
 lastname: { type: String},
 email: { type: String, required: true, unique: true },
 password: { type: String},
 confirm_password: {type: String}
});

// module.exports = mongoose.model('User', UserSchema);
const User = mongoose.model('User', UserSchema);

module.exports = User;

const User = require('../models/regitser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

exports.registerUser = async (req, res) => {
 const { firstName, email, password } = req.body;
 console.log(firstName);
 try {
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ firstname: firstName, email, password: hashedPassword });
  res.status(201).json(newUser);
 } catch (error) {
  res.status(400).json({ message: error.message });
 }
};

exports.loginUser = async (req, res) => {
 const { email, password } = req.body;
 try {
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: 'User not found' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
  const uname = user.firstname;
  console.log(user);
  console.log(uname);
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ uname,token });
 } catch (error) {
  res.status(400).json({ message: error.message });
 }
};

exports.deleteUser = async (req, res) => {
  const token = jwt.sign({ email: user._email }, process.env.JWT_SECRET, { expiresIn: '1h' });
  const { email } = req.body; // Accessing the email from request body
  try {
    const user = await User.findOneAndDelete({ email }); // Find by email
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.updateUser = async (req, res) => {
  const { email, name } = req.body; // Accessing the email and name from request body
  try {
    const updatedUser = await User.findOneAndUpdate(
      { email }, // Find by email
      { name },  // Update name
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
   const users = await User.find().select('-password'); // Exclude the password field
   res.json(users);
  } catch (error) {
   res.status(500).json({ message: error.message });
  }
 };



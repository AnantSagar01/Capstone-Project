const express = require('express');
const connectDB = require('./config/customerdb');
const userRoutes = require('./routes/userRoute');
const cors = require('cors');
 
require('dotenv').config();
 
const app = express();
 
 // Enable CORS for all routes
 app.use(cors());
 
    // Or, configure CORS for specific origins and methods:
    const corsOptions = {
        origin: '*', // Replace with your React app's origin
        methods: 'GET,POST,DELETE,PUT',
        credentials: true, // Allow cookies and authorization headers
        optionsSuccessStatus: 204,
      };
      app.use(cors(corsOptions));
 
// Connect to the database
connectDB();
 
// Middleware
app.use(express.json());
 
// Routes
app.use('/api', userRoutes);
 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
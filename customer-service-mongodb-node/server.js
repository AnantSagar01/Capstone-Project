const express = require('express');
const connectDB = require('./config/customerdb');
const userRoutes = require('./routes/userRoute');
const cors = require('cors');
const Eureka = require("eureka-js-client").Eureka;
 
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
app.get("/status", (req, res) => {
  res.send("Node.js is running");
});
app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});
// Configure Eureka client
const client = new Eureka({
  instance: {
    app: "customer-service",
    hostName: "localhost",
    ipAddr: "127.0.0.1",
    port: {
      $: 5000,
      "@enabled": "true",
    },
    vipAddress: "customer-service",
    statusPageUrl: "http://localhost:5000/status",
    healthCheckUrl: "http://localhost:5000/health",
    dataCenterInfo: {
      "@class": "com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo",
      name: "MyOwn",
    },
  },
  eureka: {
    host: "localhost",
    port: 8761,
    servicePath: "/eureka/apps",
  },
});
// Start Eureka client
client.start((error) => {
  console.log("Eureka client started with error:", error);
});
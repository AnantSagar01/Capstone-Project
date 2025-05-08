// server.js
const express = require('express');
const app = express();
const port = 3000;

// In-memory store for registered services
const services = {};

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to register a service
app.post('/register', (req, res) => {
  const { name, host, port } = req.body;
  if (!name || !host || !port) {
    return res.status(400).send('Missing required fields: name, host, port');
  }
  
  services[name] = { host, port };
  console.log(`Registered service: ${name} at ${host}:${port}`);
  res.status(200).send(`Service ${name} registered successfully`);
});

// Endpoint to get all registered services
app.get('/services', (req, res) => {
  res.json(services);
});

// Endpoint to get a specific service
app.get('/services/:name', (req, res) => {
  const { name } = req.params;
  const service = services[name];
  if (!service) {
    return res.status(404).send('Service not found');
  }
  res.json(service);
});

// Start the server
app.listen(port, () => {
  console.log(`Service Registry running at http://localhost:${port}`);
});

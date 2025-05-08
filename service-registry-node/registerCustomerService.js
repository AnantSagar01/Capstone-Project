// registerCustomerService.js
const axios = require('axios');

const registerService = async () => {
  try {
    const response = await axios.post('http://localhost:3000/register', {
      name: 'customer-service',
      host: 'localhost',
      port: 4000
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error registering service:', error.response ? error.response.data : error.message);
  }
};

registerService();

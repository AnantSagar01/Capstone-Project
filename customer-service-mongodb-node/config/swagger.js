const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
 swaggerDefinition: {
  openapi: '3.0.0',
  info: {
   title: 'Customer Service API',
   version: '1.0.0',
   description: 'API documentation for the Customer Service',
 //  contact: {
 //   name: 'Your Name',
 //   email: 'your_email@example.com',
 //  },
  },
  servers: [
   {
    url: 'http://localhost:5000/api',
   
   },
  ],
 },
 apis: ['./routes/*.js'], // Path to your API docs (relative to project root)
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
//module.exports = { swaggerDocs, swaggerUi };

module.exports = function (app) {
 app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

}

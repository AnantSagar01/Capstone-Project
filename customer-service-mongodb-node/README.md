# 🧑‍💼 Customer Service - Capstone E-commerce Project

This repository contains the **Customer Service** microservice of the `ShopEasy` Capstone E-commerce Project. It is developed using **Node.js**, **Express**, and **MongoDB**, and is responsible for managing customer-related operations such as registration, login, authentication, and profile handling.

> 🔗 Part of the main Capstone Project: [Capstone E-commerce Project](https://github.com/AnantSagar01/Capstone-Project)

---

## 📌 Features

- 📝 Customer registration and login with JWT-based authentication
- 🔒 Password encryption using bcrypt
- 🧾 CRUD operations for customer profiles
- 🌐 RESTful API with Express.js
- 🗃️ MongoDB database integration using Mongoose
- ⚙️ Environment configuration using `dotenv`
- 🚦 Robust error handling and validation

---

## 🏗️ Technologies Used

- **Node.js** (JavaScript runtime)
- **Express.js** (Web framework)
- **MongoDB** with **Mongoose** (Database & ODM)
- **JWT (jsonwebtoken)** for secure token-based authentication
- **bcrypt** for password hashing
- **dotenv** for managing environment variables
- **Nodemon** for development

---

## 🗃️ Project Structure

```
customer-service-mongodb-node/
│
├── config/               # MongoDB connection config
├── controllers/          # Logic for API endpoints
├── models/               # Mongoose schemas
├── routes/               # Express route definitions
├── middleware/           # Custom middleware (auth, error handling)
├── utils/                # Utility functions (e.g., token generation)
├── .env                  # Environment variables
├── .gitignore
├── package.json
├── server.js             # Entry point
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- MongoDB installed and running
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/AnantSagar01/Capstone-Project.git
cd Capstone-Project/customer-service-mongodb-node

# Install dependencies
npm install

# Create a .env file
cp .env.example .env
```

### .env Configuration

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/customerDB
JWT_SECRET=your_jwt_secret
```

### Run the Server

```bash
npm run dev
```

Server will start at `http://localhost:5000`.

---

## 📮 API Endpoints

| Method | Endpoint             | Description                   |
|--------|----------------------|-------------------------------|
| POST   | `/api/customers/register` | Register a new customer     |
| POST   | `/api/customers/login`    | Login and get JWT token     |
| GET    | `/api/customers/profile`  | Get customer profile (Auth) |
| PUT    | `/api/customers/profile`  | Update profile (Auth)       |
| DELETE | `/api/customers/:id`      | Delete customer (Admin)     |

> Authentication required: Add `Authorization: Bearer <token>` in the headers for protected routes.

---

## 🧪 Sample Request

### Register

```http
POST /api/customers/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "secure123"
}
```

### Login

```http
POST /api/customers/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "secure123"
}
```

---

## 📸 Screenshots

> Place your working screenshots here:

### ✅ Registration & Login Success

![Registration Screenshot](./screenshots/registration-success.png)

### 🔐 JWT Token Response

![JWT Token Screenshot](./screenshots/jwt-token.png)

### 👤 Profile Fetch

![Profile Screenshot](./screenshots/profile-fetch.png)

---

## 📦 Deployment (Optional)

If you're deploying this service:

- Use **Render**, **Railway**, or **Heroku** for easy deployment.
- Set environment variables securely.
- Configure CORS if calling from front-end.

---

## 🧠 Future Enhancements

- 🛡️ Rate limiting and security headers
- 📧 Email verification and password reset
- 🧑‍💼 Admin role for user management
- 📊 Logging and monitoring (e.g., using Winston or Morgan)

---

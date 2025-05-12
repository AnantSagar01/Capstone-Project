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

## 📸 Screenshots

### Swagger UI

![Swagger UI](https://github.com/user-attachments/assets/159e375c-ae66-4394-a9e2-b9d63cdc728a)



| ✅ Registration | 🔐 Login Success | 👤 Profile Fetch |
|----------------------------|------------------------------------|------------------------------------|
| ![POST Screenshot](https://github.com/user-attachments/assets/9c1ccceb-a62e-41cd-be26-8bcc15500390)

 | ![POST](https://github.com/user-attachments/assets/087bf2da-4101-490b-8305-4c352328e5b5)
 | ![GET Screenshot](https://github.com/user-attachments/assets/cf03ddbd-460e-4aa3-8d11-32521e0c9973)) |


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

## 📦 Deployment (Optional)

If you're deploying this service:

- Use **Render**, **Railway**, or **Heroku** for easy deployment.
- Set environment variables securely.
- Configure CORS if calling from front-end.

---

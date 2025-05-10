# 🛍️ ShopEasy — React Frontend

Welcome to the frontend of **ShopEasy**, an e-commerce platform built using microservices. This React application serves as the user interface for browsing products, managing user accounts, placing orders, and interacting with feedback services.

---

## 📁 Project Structure

```
react-frontend/
│
├── public/                # Static files and HTML template
│
├── src/
│   ├── assets/            # Images, icons, and design assets
│   ├── components/        # Reusable UI components (e.g., Navbar, ProductCard)
│   ├── pages/             # Route-level components (Home, Login, Signup, etc.)
│   ├── services/          # API interaction files for microservices
│   ├── App.js             # Main component for routing and layout
│   ├── index.js           # Entry point of the app
│   └── styles/            # CSS or Tailwind configurations
│
├── .env                  # Environment variables for API URLs
├── package.json          # Project metadata and dependencies
└── README.md             # You're here!
```

---

## 🚀 Features

- 🔐 **Authentication** with registration/login powered by Customer Microservice
- 🛒 **Product Browsing** with dynamic data from Product Microservice
- 💬 **Feedback Submission** handled via Flask Feedback Microservice
- 🌐 Responsive UI with clean and modern design
- 🎨 3D animations for a rich user experience
- 🔄 Fully integrated with backend APIs and CI/CD ready

---

## 🖼️ Screenshots


### 🏠 Home Page

![Home Page](https://github.com/user-attachments/assets/c45fd053-7e6f-4b8e-ad43-5c1d233d9f40)


### 👥 Customer Sign Up

![Customer SignUp](https://github.com/user-attachments/assets/8cf83398-1efd-429b-bbf8-3f792c097f6e)


### 🔓 Customer Login

![Customer Lgin](https://github.com/user-attachments/assets/2c437d15-68ef-44c4-b062-36685e4e18be)


### 📦 Product List

![Product List](https://github.com/user-attachments/assets/f22943a1-fecc-4add-bc5d-70b5b9df87af)


### ✍️ Feedback and Review

![Feedback Form](https://github.com/user-attachments/assets/3ae7eba7-93fd-4e9d-834d-3249c2921962)

---

## 🔧 Setup Instructions

### Prerequisites

- Node.js (v18 or above)
- NPM or Yarn

### 1. Clone the Repository

```bash
git clone https://github.com/AnantSagar01/Capstone-Project.git
cd Capstone-Project/react-frontend
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Setup

Create a `.env` file in the `react-frontend` directory:

```env
REACT_APP_CUSTOMER_SERVICE_URL=http://localhost:8081
REACT_APP_PRODUCT_SERVICE_URL=http://localhost:8082
REACT_APP_FEEDBACK_SERVICE_URL=http://localhost:5000
```

### 4. Run the App

```bash
npm start
# or
yarn start
```

The app will be available at `http://localhost:3000`.

---

## 🔗 API Integration

| Service         | Stack         | Port  | Description                        |
|----------------|---------------|-------|------------------------------------|
| Customer       | Spring Boot   | 8081  | Handles login/signup functionality |
| Product        | Spring Boot   | 8082  | Manages products & inventory       |
| Feedback       | Python Flask  | 5000  | Collects and stores user feedback  |

---

## 🛠️ Technologies Used

- **React.js** + Hooks
- **Tailwind CSS** / custom styling
- **Axios** for HTTP requests
- **Framer Motion** for animations
- **React Router DOM** for routing
- **Spring Boot** (backend services)
- **Flask** (feedback service)

---

## 📦 Deployment

> CI/CD setup coming soon. You can deploy using:

- **Vercel** or **Netlify** for frontend
- Ensure `.env` points to deployed backend services

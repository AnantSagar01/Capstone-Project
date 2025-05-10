
# 🚀 Capstone Project

![GitHub Repo Size](https://img.shields.io/github/repo-size/AnantSagar01/Capstone-Project)
![GitHub License](https://img.shields.io/github/license/AnantSagar01/Capstone-Project)
![GitHub Last Commit](https://img.shields.io/github/last-commit/AnantSagar01/Capstone-Project)

A multi-service, full-stack capstone project developed using **Spring Boot**, **Node.js**, **Flask**, and **React**. This application demonstrates **product management**, **customer registration**, and **feedback collection** in a microservices architecture.

---

## 📁 Project Structure

```
Capstone-Project/
├── service-registry/       # Node.js service registry
├── product-service/        # Spring Boot microservice for product operations
├── customer-service/       # Node.js/Express customer microservice with MongoDB
├── feedback-service/       # Python Flask microservice for handling feedback
├── frontend/               # React.js frontend for UI/UX
├── screenshots/            # Folder for UI screenshots
└── README.md               # Project documentation
```

---

## 🌟 Key Features

- 🛒 **Product Service** – Create, update, and view product listings.
- 👤 **Customer Service** – Register and manage customer profiles.
- 💬 **Feedback Service** – Submit and display customer feedback.
- 🌐 **Service Registry** – Handle dynamic microservice discovery.
- 💻 **Modern UI** – Built with React for responsiveness and interactivity.
- 🔗 **REST APIs** – Clean API structure for inter-service communication.

---

## 🧰 Tech Stack

| Layer       | Technology                        |
|-------------|------------------------------------|
| Frontend    | React.js, HTML, CSS               |
| Backend     | Spring Boot (Java), Node.js, Flask |
| Database    | MongoDB                            |
| Communication | REST API                         |
| Tools       | Git, GitHub, Postman              |
| Optional    | Docker (for containerization)     |

---

## ⚙️ Getting Started

### ✅ Prerequisites

Make sure you have installed:
- Node.js
- Java (JDK 11+)
- Python 3.x
- MongoDB
- Maven
- npm / yarn

---

### 🏗️ Installation

Clone the project:

```bash
git clone https://github.com/AnantSagar01/Capstone-Project.git
cd Capstone-Project
```

Set up each service:

1. **Install dependencies**:
   ```bash
   cd service-directory
   npm install / pip install / mvn install
   ```

2. **Run each service**:
   - **Service Registry**:  
     `cd service-registry && npm start`

   - **Product Service**:  
     `cd product-service && mvn spring-boot:run`

   - **Customer Service**:  
     `cd customer-service && npm start`

   - **Feedback Service**:  
     `cd feedback-service && python app.py`

   - **Frontend**:  
     `cd frontend && npm start`

3. Configure `.env` files as needed for services.

---

## 💻 Usage

- Visit: `http://localhost:3000`
- Test REST APIs via Postman or browser:
  - `/api/products`
  - `/api/customers`
  - `/api/feedback`

---

## 🖼️ Screenshots

> Add screenshots to the `screenshots/` folder and reference them below.

### 🏠 Home Page

![Home Page](screenshots/home_page.png)

### 📦 Product List

![Product List](screenshots/product_list.png)

### 👥 Customer Dashboard

![Customer Dashboard](screenshots/customer_dashboard.png)

### ✍️ Feedback Form

![Feedback Form](screenshots/feedback_form.png)

---

## 🤝 Contributing

Pull requests are welcome! To contribute:

1. Fork the repo
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes and commit: `git commit -m "Add your feature"`
4. Push: `git push origin feature/your-feature`
5. Submit a pull request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- [Spring Boot Documentation](https://spring.io/projects/spring-boot)
- [Node.js](https://nodejs.org)
- [React.js](https://reactjs.org)
- [MongoDB](https://www.mongodb.com)
- [Flask](https://flask.palletsprojects.com)

---

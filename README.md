
# 🚀 Capstone Project _ E Commerce-Website (EasyShop)

![GitHub Repo Size](https://img.shields.io/github/repo-size/AnantSagar01/Capstone-Project)
![GitHub Last Commit](https://img.shields.io/github/last-commit/AnantSagar01/Capstone-Project)

A multi-service, full-stack capstone project developed using **Spring Boot**, **Node.js**, **Flask**, and **React**. This application demonstrates **product management**, **customer registration**, and **feedback collection** in a microservices architecture.

---

## 📁 Project Structure

```
Capstone-Project/
├── Eureka-Server/          # Spring Boot microservice for register and discover services dynamically.
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
- 🌐 **Eureka Server** – Handle, register and discover microservice services dynamic.
- 💻 **Modern UI** – Built with React for responsiveness and interactivity.
- 🔗 **REST APIs** – Clean API structure for inter-service communication.

---

## 🧪 API Documentation

✅ **Swagger UI** – Integrated with services to visualize and test REST APIs.

To access Swagger UI (after running services):

  |To access Swagger UI (after running services):|
  | Product Service: `http://localhost:8080/swagger-ui/index.html`    | ![POST Screenshot](https://github.com/user-attachments/assets/f0696359-6d81-4127-b1a4-26747cdab8a1)  |
  | Customer Service: `http://localhost:5000/api-docs`     | ![POST Screenshot](https://github.com/user-attachments/assets/f0696359-6d81-4127-b1a4-26747cdab8a1) |
  | Feedback Service: `http://localhost:8000/apidocs`    | ![POST Screenshot](https://github.com/user-attachments/assets/e5ad8448-e869-4acc-9f4a-da682af7e2f7) |
---

## 🛰️ Service Discovery

This project uses **Eureka Server** to register and discover services dynamically.

- Eureka Dashboard: `http://localhost:8761`

  ![image](https://github.com/user-attachments/assets/84969858-d850-4d0d-9c2d-e9f7d86b5da8)


Ensure Eureka is running and all services are registered correctly.

---

## 🧰 Tech Stack

| Layer       | Technology                         |
|-------------|------------------------------------|
| Frontend    | React.js, HTML, CSS                |
| Backend     | Spring Boot (Java), Node.js, Flask |
| Database    | MongoDB, Sqlite                    |
| Communication | REST API                         |
| Tools       | Git, GitHub, Postman, Bruno        |
| Others       | Swagger, eureka                    |

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
   - **eureka**:  
     `cd eureka-server && mvn spring-boot:run`
   
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

4. Configure `.env` files as needed for services.

---

## 💻 Usage

- Visit: `http://localhost:3000`
- Test REST APIs via Postman or browser:
  - `/api/products`
  - `/api/customers`
  - `/api/feedback`
  
---

## 👥 Contributors

Thanks to the following people who have contributed to this project:

| Name         | GitHub Profile                          |
|--------------|------------------------------------------|
| Anant Sagar  | [@AnantSagar01](https://github.com/AnantSagar01) |
| Sakshi Singh  | [@sakshisingh9222](https://github.com/sakshisingh9222) |
| Shreeshta Reddy  | [@shreeshtareddy](https://github.com/shreeshtareddy) |

#### 🤝 Want to Contributing

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

# 📦 Product Service - Spring Boot

This is the **Product Microservice** of the [ShopEasy Capstone Project](https://github.com/AnantSagar01/Capstone-Project), responsible for managing product-related data in the e-commerce application. Built with **Java Spring Boot**, it provides a REST API to handle product catalog operations like add, update, delete, and view.

---

## 📸 Screenshots

> Place your screenshots in the `screenshots/` folder and link them below for better visualization.

| Product List | Add Product |
|--------------|-------------|
| ![Product List](screenshots/get-products.png) | ![Add Product](screenshots/post-product.png) |

---

## 🚀 Features

- Add new products to the catalog
- Retrieve all products or specific product by ID
- Update product information
- Delete products
- RESTful API using Spring Boot
- CORS enabled for frontend integration

---

## 🛠 Tech Stack

- **Backend Framework:** Spring Boot
- **Language:** Java
- **Database:** H2 (in-memory) or MySQL (for production)
- **Build Tool:** Maven
- **Testing:** JUnit, Postman
- **Deployment Ready:** Docker (planned)

---

## 📁 Project Structure

product-service-spring_boot/
├── src/
│ ├── main/
│ │ ├── java/com/shopEasy/product/
│ │ │ ├── controller/ # REST controllers
│ │ │ ├── model/ # Entity classes
│ │ │ ├── repository/ # JPA repositories
│ │ │ └── service/ # Business logic
│ │ └── resources/
│ │ ├── application.properties
│ │ └── data.sql (optional for seeding)
│ └── test/ # Unit tests
├── pom.xml # Maven configuration
└── README.md

---

## 🌐 API Endpoints

| Method | Endpoint                | Description                  |
|--------|-------------------------|------------------------------|
| `GET`  | `/products`             | Get list of all products     |
| `GET`  | `/products/{id}`        | Get a product by ID          |
| `POST` | `/products`             | Add a new product            |
| `PUT`  | `/products/{id}`        | Update product details       |
| `DELETE`| `/products/{id}`       | Delete product by ID         |

Sample Product JSON:
```json
{
  "name": "Wireless Mouse",
  "description": "Ergonomic Bluetooth Mouse",
  "price": 799.99,
  "category": "Electronics"
}
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/AnantSagar01/Capstone-Project.git
cd Capstone-Project/product-service-spring_boot
```

### 2. Build the Project
Make sure Maven and Java 17+ are installed.
```bash
./mvnw clean install
```

### 3. Run the Application
```bash
./mvnw spring-boot:run
```

The service will be available at: `http://localhost:8080`

---

## 🧪 API Testing

You can test the API using:

- **Postman**: Import the API collection and start making requests.
- **Browser / cURL**:
```bash
curl http://localhost:8080/products
```

---

## 📌 Future Enhancements

- Swagger UI documentation
- Docker deployment
- Product image upload
- Integration with Inventory service

---


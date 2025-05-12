# 📦 Product Service - Spring Boot

This is the **Product Microservice** of the [ShopEasy Capstone Project](https://github.com/AnantSagar01/Capstone-Project), responsible for managing product-related data in the e-commerce application. Built with **Java Spring Boot**, it provides a REST API to handle product catalog operations like add, update, delete, and view.

---

## 📌 Future Enhancements

- Swagger UI documentation
- Docker deployment
- Product image upload
- Integration with Inventory service
  
---

## 📸 Screenshots

Include relevant screenshots to showcase the application's functionality. Place your images in the `src/main/resources/images` directory and reference them as follows:

### Swagger UI

![Swagger UI](https://github.com/user-attachments/assets/cc691a63-2af1-46ff-86d3-60d0e6133e4c)


| Product List | Add Product |
|--------------|-------------|
| ![Product List](https://github.com/user-attachments/assets/c0963721-69c1-4746-beaa-32618966ab7b) | ![Product Details](https://github.com/user-attachments/assets/b18d22ab-79f0-4fc7-9ab9-9fe22dbb191b) |

---

## 📄 API Documentation

Once the application is running, access the Swagger UI for interactive API documentation at:

```
http://localhost:8080/swagger-ui.html
```

This interface provides detailed information about available endpoints, request/response models, and allows for testing API calls directly from the browser.

---

## 📁 Project Structure
```
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
```

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

## 🛠 Tech Stack

- **Backend Framework:** Spring Boot
- **Language:** Java
- **Database:** H2 (in-memory) or MySQL (for production)
- **Build Tool:** Maven
- **Testing:** JUnit, Postman
- **Deployment Ready:** Docker (planned)

---


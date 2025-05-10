
# 🧭 Eureka Server - Capstone Project Microservices Registry

This module is the **Eureka Server** for the Capstone Project: **ShopEasy**, a microservices-based e-commerce platform. The Eureka Server acts as a service registry where all microservices (like Product, Customer, Feedback services) register themselves, enabling dynamic discovery and load-balanced communication among them.

## 📁 Folder Structure

```
eureka-server/
│
├── src/
│   └── main/
│       ├── java/
│       │   └── com/anantsagar/eurekaserver/
│       │       └── EurekaServerApplication.java
│       └── resources/
│           ├── application.yml
│           └── static/
│
├── pom.xml
├── README.md
└── screenshots/
    └── eureka-dashboard.png (Add your screenshot here)
```

---


## 🔍 About

This Eureka Server is built using **Spring Boot** and **Spring Cloud Netflix Eureka**. It forms the backbone of the microservices architecture by providing service discovery capabilities.

Each microservice in ShopEasy (like the product service, authentication service, etc.) registers itself with this Eureka Server, making inter-service communication easier and scalable.

## 🏗️ Architecture

The Eureka Server sits at the core of the microservice network:

```
          +------------------+
          |  Eureka Server   |
          +------------------+
           ↑        ↑       ↑
           |        |       |
+----------------+ +---------------+ +------------------+
| Product Service| |Customer Service| | Feedback Service |
+----------------+ +---------------+ +------------------+
```

Services discover and communicate with each other via this registry.

## ✨ Features

- ✅ Registers microservices automatically
- ✅ Provides service health check and dashboard
- ✅ Central registry for all microservices
- ✅ Built using Spring Boot and Spring Cloud

---

## ⚙️ Prerequisites

Before you begin, ensure you have met the following requirements:

- Java 17+
- Maven 3.6+
- IDE (IntelliJ / VS Code recommended)
- Git installed

---

## 🛠️ Installation & Running Locally

Follow these steps to clone and run the Eureka Server locally.

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/AnantSagar01/Capstone-Project.git
cd Capstone-Project/eureka-server
```

### 2️⃣ Build the Project

```bash
mvn clean install
```

### 3️⃣ Run the Server

```bash
mvn spring-boot:run
```

By default, the Eureka Dashboard will be available at:

```
http://localhost:8761/
```

---

## 🚀 Usage

Once the Eureka Server is up and running:

- Other microservices can register themselves using `@EnableEurekaClient`.
- They will appear on the Eureka Dashboard under the **Instances currently registered with Eureka** section.

Use the dashboard to monitor active services, their health status, and metadata.

---

## 🖼️ Screenshots

> 📌 You can place screenshots of the Eureka Dashboard here once the server is running.

### 🧩 Eureka Dashboard UI

![Eureka Dashboard](https://github.com/user-attachments/assets/84969858-d850-4d0d-9c2d-e9f7d86b5da8)

---


# 🗣️ Feedback Service - Python Flask

This is the **Feedback Microservice** component of the broader Capstone E-Commerce project [ShopEasy](https://github.com/AnantSagar01/Capstone-Project). It allows customers to submit, view, and manage product feedback via RESTful APIs. Built using **Python Flask**, this service communicates with other microservices in the project ecosystem.

---

## 📸 Screenshots

> Add relevant screenshots of your API responses, Postman usage, or frontend integration here.

| Feedback API (GET) Example | Feedback Submission (POST) Example |
|----------------------------|------------------------------------|
| ![GET Screenshot](screenshots/get-feedback.png) | ![POST Screenshot](screenshots/post-feedback.png) |

---

## 🚀 Features

- Add customer feedback with product and rating
- Fetch all or specific feedback entries
- Delete feedback by ID
- JSON REST API built using Flask
- Lightweight, fast, and scalable

---

## 🛠️ Tech Stack

- **Backend:** Python, Flask, Flask-RESTful
- **Database:** SQLite (can be switched to MySQL/PostgreSQL)
- **Tools:** Postman (for testing), Git, Docker (optional for deployment)

---

## 🧩 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/feedbacks` | Fetch all feedback |
| `GET` | `/feedbacks/<id>` | Fetch specific feedback by ID |
| `POST` | `/feedbacks` | Submit new feedback |
| `DELETE` | `/feedbacks/<id>` | Delete feedback by ID |

Sample JSON Payload for POST:
```json
{
  "product": "Laptop",
  "customer": "John Doe",
  "rating": 5,
  "comment": "Amazing product!"
}

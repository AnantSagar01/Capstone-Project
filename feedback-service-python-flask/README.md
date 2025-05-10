# 🗣️ Feedback Service - Python Flask

This is the **Feedback Microservice** component of the broader Capstone E-Commerce project [ShopEasy](https://github.com/AnantSagar01/Capstone-Project). It allows customers to submit, view, and manage product feedback via RESTful APIs. Built using **Python Flask**, this service communicates with other microservices in the project ecosystem.

---

## 📸 Screenshots

### Swagger UI

![Swagger UI](https://github.com/user-attachments/assets/e5ad8448-e869-4acc-9f4a-da682af7e2f7)


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

### Sample JSON Payload for POST

```json
{
  "product": "Laptop",
  "customer": "John Doe",
  "rating": 5,
  "comment": "Amazing product!"
}
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/AnantSagar01/Capstone-Project.git
cd Capstone-Project/feedback-service-python-flask
```

### 2. Create Virtual Environment (Optional but Recommended)
```bash
python3 -m venv venv
source venv/bin/activate  # For Windows use: venv\Scripts\activate
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Run the Flask App
```bash
python app.py
```

The app should now be running at: `http://127.0.0.1:5000/`

---

## 🧪 Testing

### GET All Feedback
```bash
curl http://127.0.0.1:5000/feedbacks
```

### POST Feedback
```bash
curl -X POST http://127.0.0.1:5000/feedbacks \
  -H "Content-Type: application/json" \
  -d '{"product":"Laptop","customer":"John","rating":5,"comment":"Great!"}'
```

---

## 📁 Project Structure

```
feedback-service-python-flask/
│
├── app.py                    # Main Flask application
├── feedback_model.py         # Feedback ORM model
├── requirements.txt          # Project dependencies
├── static/                   # (Optional) Static files
├── templates/                # (Optional) HTML templates
└── README.md                 # Project documentation
```

---

## 📌 To-Do / Future Enhancements

- [ ] Add Swagger/OpenAPI documentation
- [ ] Migrate to a production-grade DB (PostgreSQL)
- [ ] Add JWT authentication for secure access
- [ ] Integrate feedback analytics dashboard

---

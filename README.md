# Backend API (Node.js + TypeScript)

A simple backend REST API built using Node.js, TypeScript, and Express.
This project helps understand servers, routes, HTTP methods, and in-memory data handling.

---

## 🚀 Features

- Health check endpoint
- Create users
- Fetch all users
- Fetch user by ID
- In-memory storage (no database yet)

---

## 🛠 Tech Stack

- Node.js
- TypeScript
- Express
- ts-node

---

## 📦 Installation & Run

### 1. Install dependencies
npm install

### 2. Start the server
npx ts-node src/server.ts

Server runs at:
http://localhost:3000

---

## 📡 API Endpoints

### 🔹 Health Check
GET /health

Response:
{
  "status": "OK"
}

---

### 🔹 Create User
POST /users

Request Body:
{
  "name": "Adiii"
}

Response (201):
{
  "id": 1,
  "name": "Adiii"
}

---

### 🔹 Get All Users
GET /users

Response:
[
  {
    "id": 1,
    "name": "Adiii"
  }
]

---

### 🔹 Get User by ID
GET /users/:id

Example:
GET /users/1

Response:
{
  "id": 1,
  "name": "Adiii"
}

If not found:
{
  "error": "User not found"
}

---

## ⚠ Notes

- Data is stored in memory
- Restarting the server resets data
- No database used yet

---

## 📌 Future Improvements

- DELETE /users/:id
- PUT /users/:id
- Database integration
- Validation middleware

---

## 👨‍💻 Author

Built for learning backend fundamentals using Express + TypeScript.

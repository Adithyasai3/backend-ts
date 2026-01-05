# Backend REST API (Node.js + TypeScript)

A simple backend REST API built using **Node.js**, **TypeScript**, and **Express**.  
This project focuses on understanding **HTTP methods**, **routing**, **CRUD operations**, and **basic validation** using in-memory data.

---

## 🚀 Features

- Health check endpoint
- Create user (POST)
- Get all users (GET)
- Get user by ID (GET)
- Update user by ID (PUT)
- Delete user by ID (DELETE)
- Proper HTTP status codes
- Basic input validation
- In-memory data storage (no database)

---

## 🛠 Tech Stack

- Node.js
- TypeScript
- Express
- ts-node

---

## 📦 Installation & Run

### Install dependencies
```bash
npm install
```

### Start the server
```bash
npx ts-node src/server.ts
```

Server runs at:
```
http://localhost:3000
```

---

## 📡 API Endpoints

### Health Check
```
GET /health
```

Response:
```json
{
  "status": "OK"
}
```

---

### Create User
```
POST /users
```

Request Body:
```json
{
  "name": "Adiii"
}
```

Response (201):
```json
{
  "id": 1,
  "name": "Adiii"
}
```

---

### Get All Users
```
GET /users
```

Response:
```json
[
  {
    "id": 1,
    "name": "Adiii"
  }
]
```

---

### Get User by ID
```
GET /users/:id
```

Response:
```json
{
  "id": 1,
  "name": "Adiii"
}
```

If not found:
```json
{
  "error": "User not found"
}
```

---

### Update User (PUT)
```
PUT /users/:id
```

Request Body:
```json
{
  "name": "Adithya"
}
```

Response:
```json
{
  "id": 1,
  "name": "Adithya"
}
```

---

### Delete User
```
DELETE /users/:id
```

Response:
```
204 No Content
```

---

## ⚠ Notes

- Data is stored in memory
- Restarting the server resets all data
- No database used

---

## 📌 Future Improvements

- PATCH endpoint
- Zod validation
- Database integration
- Authentication

---

## 👨‍💻 Author

Built for learning backend fundamentals using Express + TypeScript.

# 🐞 BugTracker API

A RESTful backend-only Bug Tracking API built with Node.js and Express.js

This project demonstrates backend API development concepts including CRUD operations, request handling, input validation, HTTP status codes, and server-side application logic.

---

## 📌 Project Overview

BugTracker API is a simple issue management system that allows users to:

- ➕ Create new bug reports
- 📄 Retrieve all reported bugs
- 🔍 Retrieve a specific bug by ID
- ✏️ Update existing bug details
- ❌ Delete bug reports

## 📝 Note

The project uses in-memory data storage with a JavaScript array to simulate database behavior.

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- Postman (API Testing)

---

## ✨ Features

### 🔄 CRUD Operations

- **Create** a new bug
- **Read** all bugs
- **Read** a specific bug
- **Update** bug details
- **Delete** a bug

### ✅ Input Validation

Validates:

- Required fields
- Bug severity values
- Bug status values

### 📡 Proper HTTP Status Codes

- `200 OK`
- `201 Created`
- `400 Bad Request`
- `404 Not Found`

---

## 🔗 API Endpoints

### 📥 Get All Bugs

```http
GET /bugs
```

Returns all bug reports.

---

### 🔎 Get Bug By ID

```http
GET /bugs/:id
```

Returns a specific bug by its ID.

---

### ➕ Create New Bug

```http
POST /bugs
```

Request Body:

```json
{
  "title": "Login button not working",
  "description": "The login button does not respond when clicked",
  "severity": "high",
  "status": "open"
}
```

---

### ✏️ Update Bug

```http
PUT /bugs/:id
```

Updates one or more fields of an existing bug.

Example:

```json
{
  "status": "resolved"
}
```

---

### 🗑️ Delete Bug

```http
DELETE /bugs/:id
```

Deletes a bug by ID.

---

## 🔒 Validation Rules

### Severity

Must be one of:

- low
- medium
- high

### Status

Must be one of:

- open
- in-progress
- resolved

---

## 🚀 Installation & Setup

### Clone the Repository

```bash
git clone https://github.com/PaulEmmanuel8888/BugTracker-API.git
```

### Navigate into Project Folder

```bash
cd bugtracker-api
```

### Install Dependencies

```bash
npm install
```

### Start the Server

```bash
node index.js
```

Server will run on:

```txt
http://localhost:3000
```

---

## 🧪 Testing

The API was tested using Postman.

Test cases included:

- ✅ Successful CRUD operations
- ⚠️ Invalid bug ID handling
- 🚫 Validation errors
- ❓ Not found responses

---

## 📚 Learning Outcomes

This project helped demonstrate:

- REST API development
- Express routing
- Handling request parameters
- Processing JSON request bodies
- Data validation
- Proper HTTP response handling
- CRUD implementation

---

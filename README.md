# React.js & Node.js Login/Logout Flow with SQLite

A simple yet secure authentication system built with **React.js** (frontend), **Node.js + Express** (backend), and **SQLite** (database). Implements user registration, login, session persistence via cookies, and logout functionality with password hashing using `bcrypt`.

🔐 **Session-based authentication** ensures users stay logged in across page reloads and browser sessions until they explicitly log out.

---

## ✅ Features

- **User Registration**: Create an account with email and password.
- **Secure Login**: Authenticate using stored credentials.
- **Session Management**: Stay logged in using `express-session` and cookies.
- **Password Hashing**: Passwords are securely hashed using `bcrypt`.
- **No Duplicate Emails**: Backend checks for existing users during registration.
- **Logout**: Clear session and redirect to login page.
- **(Optional) Protected Dashboard**: Accessible only when authenticated.
- **SQLite Database**: Lightweight, file-based storage (`users.db`).

---

## 🛠 Tech Stack

| Layer       | Technology               |
|-----------|--------------------------|
| Frontend  | React.js                 |
| Backend   | Node.js + Express.js     |
| Database  | SQLite (file-based)      |
| Auth      | `bcrypt`, `express-session`, `cookie-parser` |
| API Calls | `axios`                  |
| CORS      | `cors` middleware        |

---

## 📁 Project Structure
Klickks_Project_Root/
├── backend/
│ ├── server.js
│ ├── db.js
│ ├── routes/
│ │ └── auth.js
│ └── package.json
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── App.js
│ │ └── components/
│ │ ├── Register.js
│ │ ├── Login.js
│ │ ├── Dashboard.js
│ │ └── Auth.css
│ └── package.json
└── README.md



---
🧪 Test the Flow
Go to: http://localhost:3000/register
Register a new user (e.g., test@example.com, password 123456)
Log in with the same credentials
You’ll be redirected to the Dashboard
Close the browser → reopen → you're still logged in ✅
Click Logout → session is cleared


💾 Database
Database: SQLite (users.db)
Table: users with columns: id, email, password (hashed)
Created automatically when the first user registers.
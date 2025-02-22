# 🛡️ Login System

This project is a modern, secure, and scalable user registration and login system built using **Node.js** and **MongoDB**. Its simple structure and strong security measures make it easy to use.

## 🚀 Features
- User registration and login processes
- Secure password hashing (using **bcryptjs**)
- Secure storage of user data in the **MongoDB** database (using **mongoose**)
- **CORS** support for flexible connections
- Modern and stylish user interface

## 🔧 Technologies Used
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB

### 📝 Registration
- Users can register by entering their username, email, phone number, and password.
- Passwords are **hashed** and stored securely in the database.
- The same email or username cannot be registered twice.

### 🔑 Login
- Users can log in with their username and password.
- After a successful login, the message **"Welcome [username]"** is displayed.
- Error messages are returned for incorrect login attempts.

## 📁 File Structure
```
├── package.json       # Project dependencies
├── package-lock.json  # Dependency versions
├── server.js         # Express.js server
├── user.js           # Mongoose user model
├── process.js        # Frontend operations
├── style.css         # Stylesheet
├── main.html         # Main login/registration screen
```

## 📜 License
This project is distributed under the **MIT license** and is open for everyone to use.

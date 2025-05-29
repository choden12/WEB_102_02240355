#  Token-based Authentication (Email & Password)
- This practical demonstrates how to implement a secure authentication and authorization system in a web application using email/password login and JWT tokens. The system uses hashed passwords for secure storage and JWT tokens for protecting routes requiring authenticated access.

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Conclusion](#conclusion)
- [Acknowledgment](#acknowledgment)

---

## Installation
1. **Clone the repository**
- git clone <https://github.com/choden12/WEB_102_02240355.git>

2. Install dependencies
- bun install

3. Configure Prisma schema
model User {
  id           String    @id @default(uuid())
  email        String    @unique
  hashedPassword String
  Account      Account[]
}

## Usage
### Registration
- Endpoint: POST /register
### Login
- Endpoint: POST /login
### Accessing Protected Routes
- Endpoint: GET /protected/account/balance

## Features
- Secure password hashing using bcrypt
- Unique email validation with error handling
- JWT-based authentication for secure access
- Middleware for token validation and route protection
- Account creation with default balance
- Clear error messaging using Hono's HTTP exceptions

## Technologies Used
- Hono - Ultra-fast web framework for Bun
- Bun - JavaScript runtime
- Prisma ORM - Type-safe database access
- JWT (JSON Web Tokens) - Token-based authentication
- bcrypt - Password hashing algorithm

## Conclusion
This project showcases the fundamental concepts of authentication and authorization using modern web development tools. With hashed passwords and token-based access control, it provides a solid foundation for securing APIs and user data.

## Acknowledgments
I would like to thank my instructor and peers who helped me understand authentication and authorization concepts, guided me through Prisma ORM usage, and provided valuable feedback during development. Their support made this project possible.
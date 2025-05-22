#  Designing and Implementing RESTful API Endpoints

This project implements a fully functional RESTful API for a social media platform similar to Instagram using Node.js and Express. It covers endpoint design, HTTP methods, content negotiation, error handling, and basic documentation.

---

## Table of Contents

- [Installation](#installation)
- [Usages](#usages)
- [Features](#features)
- [Technologies](#technologies)
- [Conclusion](#conclusion)
- [Acknowledgments](#acknowledgments)

---

## Installation

1. **Clone the Repository**
   git clone <https://github.com/choden12/WEB_102_02240355.git>
   cd social-media-api

2. **Install Dependencies**
npm install

3. **Environment Setup**
PORT=3000

## Usages
Sample Endpoints
- GET /users – List all users
- POST /users – Create a new user
- GET /posts – Retrieve all posts
- PUT /posts/:id – Update a post
- DELETE /comments/:id – Delete a comment

## Features
- RESTful API structure with standard HTTP methods (GET, POST, PUT, DELETE)
- Modular folder structure (controllers, routes, middleware, utils)
- Header-based token auth example (Authorization: Bearer {token})
- Content negotiation using middleware for different MIME types
- Secure setup with Helmet and CORS
- HTTP request logging using Morgan
- Mock data for testing without a database
- Centralized error handling and async wrapper utility
- API documentation served from a static HTML file

## Technologies
- Node.js – Runtime
- Express.js – Backend framework
- Morgan – Logging middleware
- Helmet – Secures HTTP headers
- CORS – Cross-Origin Resource Sharing
- nodemon – Development server reload
- dotenv – Environment variable management

## Conclusion
- This project is a foundational exercise in creating scalable and maintainable RESTful APIs using best practices. It demonstrates practical skills such as proper endpoint design, HTTP method usage, response formatting, and error management — essential for real-world API development.

## Acknowledgments
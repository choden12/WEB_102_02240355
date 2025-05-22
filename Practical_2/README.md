# TikTok - REST API Design and Implementation

This project implements a RESTful API backend for a TikTok-style application using Node.js and Express. The API handles users, videos, comments, likes, and followers, designed to work seamlessly with a Next.js frontend.

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

1. **Clone the repository**
   git clone <your-repo-url>
   cd server
2. **Install dependencies**
npm install

## Usages
- Test the API endpoints using tools like Postman or curl.
### sample API Endpoints
Videos
- GET /api/videos – Get all videos
- POST /api/videos – Create new video
- GET /api/videos/:id – Get video by ID
- PUT /api/videos/:id – Update video
- DELETE /api/videos/:id – Delete video
- GET /api/videos/:id/comments – Get comments for a video
- GET /api/videos/:id/likes – Get video likes
- POST /api/videos/:id/likes – Like video
- DELETE /api/videos/:id/likes – Unlike video

### Users
- GET /api/users – Get all users
- POST /api/users – Create user
- GET /api/users/:id – Get user by ID
- PUT /api/users/:id – Update user
- DELETE /api/users/:id – Delete user
- GET /api/users/:id/videos – Get user's videos
- GET /api/users/:id/followers – Get followers
- POST /api/users/:id/followers – Follow user
- DELETE /api/users/:id/followers – Unfollow user
- GET /api/users/:id/following – Get following users

### Comments
- GET /api/comments – Get all comments
- POST /api/comments – Create comment
- GET /api/comments/:id – Get comment by ID
- PUT /api/comments/:id – Update comment
- DELETE /api/comments/:id – Delete comment
- GET /api/comments/:id/likes – Get comment likes
- POST /api/comments/:id/likes – Like comment
- DELETE /api/comments/:id/likes – Unlike comment

## Features
- Full REST API structure using Express
- Modular architecture with controllers, routes, and models
- In-memory mock data for prototyping
- Like, comment, follow features similar to TikTok
- Follows REST best practices with proper HTTP methods and status codes
- Simple .env configuration
- Ready for integration with a frontend like Next.js

## Technologies
- Node.js – JavaScript runtime
- Express.js – Web framework
- CORS – Cross-origin resource sharing
- Morgan – HTTP request logging
- dotenv – Environment variables
- body-parser – Parses request bodies
- Nodemon – Dev-time live reloading

## Conclusion
- This TikTok-style backend REST API is a great starting point for building scalable, modular APIs with proper design practices. It is designed for quick prototyping and can be extended with a database and authentication as next steps.

## Acknowledgments
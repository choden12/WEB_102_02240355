# Connecting TikTok to PostgreSQL with Prisma ORM
- This practical focuses on integrating a PostgreSQL database into a TikTok clone backend using Prisma ORM. It involves setting up persistent storage, implementing authentication, and migrating in-memory data models to structured relational data with Prisma. You will also build relationships between users, videos, comments, likes, and follows, and apply secure authentication using JWT and bcrypt.

## Table of Contents

- [Installation](#installation)
- [Usages](#usages)
- [Features](#features)
- [Technologies](#technologies)
- [Conclusion](#conclusion)
- [Acknowledgments](#acknowledgments)

## Installation
### 1. Clone the repository
git clone <https://github.com/choden12/WEB_102_02240355.git>

### 2. Install dependencies
- npm install

### 3. Configure PostgreSQL
#### Access PostgreSQL:
- sudo -u postgres psql
#### Create a new database and user:
- CREATE DATABASE tiktok_db;
- CREATE USER tiktok_user WITH PASSWORD 'your_password';
- GRANT ALL PRIVILEGES ON DATABASE tiktok_db TO tiktok_user;
\q

##  Usage
### Authentication
- Register: POST /api/register
- Login: POST /api/login
## Video APIs
- POST /api/videos – Upload a video (requires auth)
- GET /api/videos – Get all videos
## Comment APIs
- POST /api/comments – Comment on a video
- GET /api/comments/:videoId – Get comments for a video
## Like & Follow APIs
- POST /api/videos/:id/like – Like a video
- POST /api/users/:id/follow – Follow a user

## Features
- PostgreSQL database integration via Prisma ORM
- JWT-based authentication system
- Password hashing with bcrypt
- Role-based protected routes
- Relational database schema with users, videos, comments, likes, follows
- Database seeding with realistic test data
- Secure route access with middleware
- Structured backend API built using MVC pattern

## Technologies
- Node.js – Server runtime
- Express.js – Web framework
- PostgreSQL – Relational database
- Prisma ORM – Type-safe database ORM
- JWT – Token-based authentication
- bcrypt – Password hashing
- dotenv – Environment configuration
- Postman – API testing tool 

## Conclusion
- This project demonstrates a complete backend implementation of a TikTok-like application with real database support, secure authentication, and a scalable architecture using Prisma and PostgreSQL. It lays the groundwork for robust full-stack development with real-world data persistence and security practices.

## Acknowledgments
I would like to express my sincere gratitude to Mr. Sonam Yangchen for his continuous guidance and for providing the reference repository that greatly supported the development of this practical and to my classmates for hekping me throughout the project.
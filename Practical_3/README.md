# File Upload on the Server Application
- A complete backend file upload system using Node.js and Express that integrates with a React/Next.js frontend. This project teaches you how to securely handle multipart form data, validate and store files using Multer, and properly connect the upload flow from client to server with full error handling and progress tracking.

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

Follow these steps to get the backend server up and running:

### 1. Clone the Repository
git clone <https://github.com/choden12/WEB_102_02240355.git>

### 2.Install Dependencies
- npm install

## Usages
### File Upload Flow
- Run the Express backend (node server.js)
- Run the React/Next.js frontend (npm run dev)
- Open the file upload form in your browser
- Select or drag a PDF file
**Observe:**
- Progress bar update
- File type and size validation
- Uploaded files saved to /uploads directory
- Error messages on invalid files

### Upload Endpoint
- POST /api/upload
- Accepts multipart/form-data
- Field: file
**Validates:**
- File type (application/pdf)
- Size limit (configurable via Multer)

## Features
- Drag-and-drop PDF upload support
- File validation (type & size)
- Files saved to local /uploads directory
- Secure handling of user uploads
- CORS support for frontend-backend interaction
- Real-time progress tracking with Axios
- Clear error messages for invalid files

## Technologies
- Node.js – JavaScript runtime for building scalable server-side applications
- Express.js – Lightweight web framework for creating APIs
- Multer – Middleware for handling multipart/form-data for file uploads
- CORS – Middleware to enable Cross-Origin Resource Sharing
- Morgan – HTTP request logger middleware
- dotenv – Loads environment variables from a .env file
- React + Next.js – Frontend framework with support for server-side rendering
- Axios – HTTP client for making requests and tracking upload progress

## Conclusion
- This project offers a complete walkthrough of building a modern file upload solution using Node.js and React. It covers backend setup, frontend integration, validation, progress tracking, and security considerations—providing a robust foundation for handling file uploads in production-grade web applications.

## Acknowledgments
- I would like to express my sincere gratitude to the following individuals and resources for their support and guidance throughout this project Mr. Sonam Yangchen For providing the base repository Backend_Practicals, which served as a strong foundation and reference for implementing the file upload backend and guiding me in backend development and helping me understand important concepts like Express.js, file handling, and middleware usage.